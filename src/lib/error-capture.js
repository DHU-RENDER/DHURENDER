import { isNotFound, isRedirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";

// No-op error capture middleware — Base44 error reporting removed.
// Errors are still thrown so TanStack handles them normally.

const isControlFlow = (error) => error instanceof Response || isRedirect(error) || isNotFound(error);

export const errorCaptureFunctionMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next, serverFnMeta }) => {
    try {
      return await next();
    } catch (error) {
      if (!isControlFlow(error)) {
        // Log to console in development; replace with your own error reporter if needed.
        console.error("[server-fn error]", serverFnMeta?.functionId, error);
      }
      throw error;
    }
  },
);

export const errorCaptureRequestMiddleware = createMiddleware({ type: "request" }).server(
  async ({ next, request, handlerType }) => {
    let result;
    try {
      result = await next();
    } catch (error) {
      if (handlerType !== "serverFn" && !isControlFlow(error)) {
        console.error("[request error]", request.method, request.url, error);
      }
      throw error;
    }
    return result;
  },
);
