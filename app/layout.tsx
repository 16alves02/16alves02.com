import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://16alves02.com"),
  title: {
    default: "16alves02 | Websites & Software Projects",
    template: "%s | 16alves02",
  },
  description:
    "Portfolio of Leonardo Alves, a Software Development student from Portugal building websites, software projects and digital experiences.",
  keywords: [
    "16alves02",
    "Leonardo Alves",
    "software development student",
    "website developer",
    "web developer",
    "freelance website developer",
    "software projects",
    "Portugal",
  ],
  authors: [{ name: "Leonardo Alves", url: "https://github.com/16alves02" }],
  creator: "Leonardo Alves",
  openGraph: {
    title: "16alves02 | Websites & Software Projects",
    description:
      "Portfolio of Leonardo Alves from Portugal, featuring websites, software projects and selected freelance work.",
    type: "website",
    locale: "en_PT",
    siteName: "16alves02",
    url: "https://16alves02.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "16alves02 | Software Developer",
    description:
      "Web, mobile, backend and practical software projects by Leonardo Alves.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
