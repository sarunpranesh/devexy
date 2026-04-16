import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devexy – We Build Websites & Smart Automation",
  description:
    "Web development, chatbots, and IT solutions tailored for modern businesses. Trusted by 200+ companies worldwide.",
  keywords: [
    "web development",
    "chatbot",
    "IT consulting",
    "automation",
    "Devexy",
  ],
  metadataBase: new URL("https://devexy.com"),
  openGraph: {
    title: "Devexy – We Build Websites & Smart Automation",
    description:
      "Web development, chatbots, and IT solutions tailored for modern businesses.",
    type: "website",
    url: "https://devexy.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devexy – Websites & Smart Automation",
    description:
      "Web development, chatbots, and IT solutions tailored for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">{children}</body>
    </html>
  );
}
