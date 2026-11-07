import { createStart } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth-middleware";
import { errorCaptureFunctionMiddleware, errorCaptureRequestMiddleware } from "@/lib/error-capture";

export const startInstance = createStart(() => ({
  requestMiddleware: [errorCaptureRequestMiddleware],
  functionMiddleware: [errorCaptureFunctionMiddleware, authMiddleware],
}));
