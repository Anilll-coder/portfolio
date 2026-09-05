import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";
import { profile } from "@/data/profile";
import { MotionProvider } from "@/components/MotionProvider";

const siteUrl = "https://anilkumarpasupuleti.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Software Developer`,
  description: profile.statement,
  keywords: [
    "Anil Kumar Pasupuleti",
    "Software Developer",
    "AI/ML",
    "Full-Stack Developer",
    "CodeOrbit",
    "Developer Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Software Developer`,
    description: profile.statement,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Developer`,
    description: profile.statement,
  },
};

const THEME_BOOTSTRAP_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink selection:bg-accent">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
