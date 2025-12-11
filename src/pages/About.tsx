import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import vietnameseFood from "@/assets/nuinhs.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section
        className="text-primary-foreground py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.35)), url(${vietnameseFood})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Mountain className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.headerTitle}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t.about.headerSubtitle}
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.about.historyTitle}</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                {t.about.historyText1}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {t.about.historyText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Mountains */}
      <section className="py-16 bg-muted" id="five-mountain">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.about.fiveMountainsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.about.mountains.map((mountain, index) => (
              <Card key={index} className="shadow-card hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">
                    <div className="flex items-center gap-2">
                      <Mountain className="h-6 w-6 text-primary" />
                      {mountain.name}
                    </div>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground font-semibold">
                    {mountain.element}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{mountain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Religion */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.about.cultureTitle}</h2>
            
            <Card className="mb-8 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">{t.about.templesTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {t.about.temples.map((temple, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg mb-2">{temple.name}</h3>
                    <p className="text-muted-foreground">
                      {temple.description}
                    </p>
                    {index < t.about.temples.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Non Nuoc Village */}
      <section id="non-nuoc" className="py-16 bg-ocean text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t.about.nonNuocTitle}</h2>
            <p className="text-lg leading-relaxed mb-6">
              {t.about.nonNuocText1}
            </p>
            <p className="text-lg leading-relaxed">
              {t.about.nonNuocText2}
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.about.activitiesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.about.activities.map((activity, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
