import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "soulz.lol - The Next Generation Creator Platform",
  description: "High-performance creator profiles built for speed, aesthetics, and conversions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col font-sans dark text-foreground">
        <div className="fixed inset-0 min-h-screen z-[-1] bg-[#0c0a09] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,30,250,0.15),rgba(255,255,255,0))]"></div>
          <AuthProvider>
            {children}
          </AuthProvider>
      </body>
    </html>
  );
}
