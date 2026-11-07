import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/lib/theme";
import appCss from "@/index.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DHURANDER — India's Fastest Gaming Exchange" },
      {
        name: "description",
        content:
          "DHURANDER is India's fastest gaming exchange. Live cricket, casino and card games, instant IDs on WhatsApp, 10-minute withdrawals and 24/7 real support.",
      },
      { name: "theme-color", content: "#0a0a0a" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/d76852005_generated_2a3d0a8f.png",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider>
      <Outlet />
      <Toaster />
    </ThemeProvider>
  );
}

// The document. There is no index.html: the server renders <html> from here.
function RootDocument({ children }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      {/* data-react-root: the builder's preview bridge looks for #root and falls back to this. */}
      <body data-react-root="true">
        {children}
        <Scripts />
      </body>
    </html>
  );
}