// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeroHeader from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.ryzax.com"),
  title: {
    default: "Ryzax Technologies | Web, Cloud & Digital Solutions",
    template: "%s | Ryzax Technologies",
  },
  description:
    "Ryzax Technologies empowers businesses with modern web solutions, cloud infrastructure, DevOps automation, and custom software development. Based in Islamabad, Pakistan — delivering globally.",
  keywords: [
    "Ryzax Technologies",
    "web development Islamabad",
    "cloud consulting Pakistan",
    "DevOps automation",
    "Next.js development",
    "digital transformation",
    "IT consulting Pakistan",
    "software development company",
    "branding and UI/UX design",
    "custom web apps"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.ryzax.com/",
    siteName: "Ryzax Technologies",
    title: "Ryzax Technologies — Building the Future of Digital",
    description:
      "Ryzax delivers high-performance web, cloud, and DevOps solutions. Trusted by startups and enterprises worldwide.",
    images: [
      {
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Ryzax Technologies",
      },
    ],
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryzax Technologies — Web, Cloud & DevOps Experts",
    description:
      "Ryzax Technologies builds modern, scalable solutions for web, cloud, and digital transformation.",
    images: ["/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100`}
      >
        <HeroHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
