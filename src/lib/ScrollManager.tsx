import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollManager: when the location changes, handle scrolling behavior:
// - If there's a hash (#id), try to scroll to the element with that id (smooth).
// - Otherwise, scroll to top (smooth).
// This component should be mounted inside a Router (e.g. in App.tsx).
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    const scrollToTop = (behavior: ScrollBehavior = "smooth") => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior });
      } catch (e) {
        // fallback
        window.scrollTo(0, 0);
      }
    };

    if (hash) {
      // Remove leading '#'
      const id = hash.replace(/^#/, "");

      // Try to find the element immediately
      let el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // If element is not present yet, wait a short time for the new route to render
        // and try again a few times. This helps when the element is rendered asynchronously.
        let attempts = 0;
        const maxAttempts = 8;
        const interval = 100; // ms
        const timer = setInterval(() => {
          attempts += 1;
          el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            clearInterval(timer);
          } else if (attempts >= maxAttempts) {
            clearInterval(timer);
            // nothing found — fallback to top
            scrollToTop();
          }
        }, interval);
      }
    } else {
      // No hash — scroll to top on new route
      // small timeout to allow render to settle
      setTimeout(() => scrollToTop(), 50);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  return null;
}
