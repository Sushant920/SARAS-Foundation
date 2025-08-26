import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SARAS Foundation - Serving Humanity with Love",
  description: "SARAS Foundation is a registered NGO committed to the care & development of underprivileged children, blind children, and providing emergency ambulance services in Pune, Mumbai, and surrounding areas.",
  keywords: "SARAS Foundation, NGO, child welfare, ambulance services, Pune, Mumbai, donations, volunteers, street children, education",
  authors: [{ name: "SARAS Foundation" }],
  openGraph: {
    title: "SARAS Foundation - Serving Humanity with Love",
    description: "Committed to the care & development of underprivileged children and providing emergency ambulance services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
