Server proxy for Gemini (local example)

This project includes a tiny Express server that exposes a single endpoint used by the frontend:

- `POST /api/gemini` — accepts JSON `{ prompt: string }` and returns `{ text: string }`

Setup

1. Copy `.env.example` to `.env` and set your key (do NOT commit `.env`):

```powershell
cp .env.example .env
# then edit .env and set GEMINI_API_KEY
```

2. Install server dependencies (from repo root):

```powershell
npm install
```

3. Run the server:

```powershell
npm run start:server
```

Notes and security

- Do NOT paste your API key in public places (chat, issues, commits). If you already shared a key publicly, revoke it and create a new one.
- This example uses the `@google/genai` client. If you use Vertex/Google infrastructure, follow Google authentication best practices (service account, workload identity, or secure env vars).
- Adjust `model` and request shape in `server/index.mjs` if you use a different model or require streaming.
