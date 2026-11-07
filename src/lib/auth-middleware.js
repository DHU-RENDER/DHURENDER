import { createMiddleware } from "@tanstack/react-start";
import { setResponseStatus } from "@tanstack/react-start/server";

// Minimal auth middleware — no Base44 SDK. No session is established.
// A no-op client middleware: passes through without attaching any token.
export const authMiddleware = createMiddleware({ type: "function" })
  .client(async ({ next }) => next())
  .server(({ next }) => next());

// A no-op request middleware: passes through without a Base44 client.
export const base44RequestMiddleware = createMiddleware({ type: "request" }).server(({ next }) => next());

// Guards a server function that requires a signed-in user.
// Without a real auth system this always rejects. Wire in your own session
// logic here (e.g. JWT / cookie validation) when you add authentication.
export const requireUser = createMiddleware({ type: "function" }).server(async ({ next }) => {
  setResponseStatus(401);
  throw Object.assign(new Error("Unauthorized"), { status: 401, code: "UNAUTHORIZED" });
  return next();
});

// The same guard for server routes (src/routes/api/*).
export const requireUserRoute = createMiddleware({ type: "request" }).server(async ({ next }) => {
  return Response.json({ error: "Unauthorized" }, { status: 401 });
  return next();
});
