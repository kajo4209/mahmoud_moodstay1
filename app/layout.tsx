import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moodstay | احجز شاليه أحلامك في الساحل الشمالي",
  description:
    "أفضل شاليهات قرية غزالة الوادي في الساحل الشمالي. حجز فوري، أسعار مميزة، ودعم واتساب مباشر. استمتع بإجازة فاخرة لا تُنسى!",
  keywords: [
    "شاليهات الساحل الشمالي",
    "قرية غزالة الوادي",
    "حجز شاليه",
    "إجازة صيفية",
    "شاليه فاخر",
    "Moodstay",
  ],
  openGraph: {
    title: "Moodstay | احجز شاليه أحلامك في الساحل الشمالي",
    description:
      "أفضل شاليهات قرية غزالة الوادي في الساحل الشمالي. حجز فوري، أسعار مميزة، ودعم واتساب مباشر.",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moodstay | احجز شاليه أحلامك في الساحل الشمالي",
    description:
      "أفضل شاليهات قرية غزالة الوادي في الساحل الشمالي. حجز فوري، أسعار مميزة.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://moodstay.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${notoSansArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="font-arabic antialiased bg-white dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
