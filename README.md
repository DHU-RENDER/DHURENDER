# DHURANDER — India's Fastest Gaming Exchange

A full-stack app built with [TanStack Start](https://tanstack.com/start) (React 19, plain JavaScript) — file-based routes, server functions and SSR. All Base44 platform dependencies have been removed; the project runs standalone on localhost.

## Routes

| Route | File |
| --- | --- |
| `/` | `src/routes/index.jsx` — the marketing landing page |
| `GET /api/time` | `src/routes/api/time.js` — simple server health endpoint |

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # → dist/
npm run preview    # preview the production build locally
```

## How the pieces fit

- **Pages** are files in `src/routes/`. A route's `loader` runs on the server for a document request and in the browser for a client navigation; `Route.useLoaderData()` gives the component the resolved data.
- **Server functions** (`src/lib/server-fns.js`) are RPCs created with `createServerFn`. Errors are caught in `src/lib/error-capture.js` and logged to console (replace with your own error reporter as needed).
- **Auth** stubs live in `src/lib/auth-middleware.js`. `requireUser` and `requireUserRoute` always return 401 until you wire in a real session system (JWT / cookie / OAuth).
- **Server routes** (`src/routes/api/*.js`) are raw HTTP endpoints for webhooks, downloads or feeds.
- **Server-only code** lives in `*.server.js` files (Vite refuses to bundle them for the browser).
- **Styling**: Tailwind CSS v3 + shadcn/ui components in `src/components/ui/`.
