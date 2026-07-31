import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Providers from "@/providers/providers";
import GlassDebugToggle from "@/components/GlassDebugToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-display",
});

export const metadata: Metadata = {
  title: "Kabir | AI Engineer",
  description: "Building Intelligence into Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`} suppressHydrationWarning>
        {/* Must set the flag BEFORE liquid-glass.js runs — plain script tags,
            not next/script, so execution order is guaranteed */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__DISABLE_GLASS = localStorage.getItem('disableGlass') === 'true';`,
          }}
        />
        <script src="/liquid-glass.js" />

        <Providers>
          <Navbar />
          {children}
        </Providers>

        {process.env.NEXT_PUBLIC_ENABLE_GLASS_DEBUG === 'true' && <GlassDebugToggle />}
      </body>
    </html>
  );
}