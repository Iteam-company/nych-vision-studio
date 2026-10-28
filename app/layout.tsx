import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

// Brandbook: Inter Display Light (headlines), Inter Regular/Medium (body),
// Roboto Light (micro labels, codes, captions).
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NYCH VISION STUDIO — Visuals for what comes next.",
  description:
    "AI creative production studio crafting cinematic campaigns, social visuals and digital brand experiences for modern businesses.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "NYCH VISION STUDIO",
    description: "Cinematic ideas. Future production.",
    images: ["/media/hero-ring.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
