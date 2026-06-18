import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const evolventa = localFont({
  src: [
    {
      path: '../../public/fonts/Evolventa-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Evolventa-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Evolventa-Oblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Evolventa-BoldOblique.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: "--font-evolventa",
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://bronly.uz'),
  title: {
    default: "Bronly — Онлайн-запись и CRM через Telegram",
    template: "%s | Bronly"
  },
  description: "Автоматизируйте запись клиентов с Bronly. Онлайн-запись, CRM и рассылки в одном Telegram mini app для салонов красоты, барбершопов, клиник и студий.",
  keywords: [
    "онлайн-запись", "CRM", "Telegram бот", "запись клиентов", 
    "crm для салона", "crm для барбершопа", "альтернатива yclients", 
    "альтернатива altegio", "bronly", "телеграм бот для записи"
  ],
  authors: [{ name: "Bronly Team" }],
  creator: "Bronly",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://bronly.uz",
    title: "Bronly — Онлайн-запись и CRM через Telegram",
    description: "Автоматизируйте запись клиентов с Bronly. Онлайн-запись, CRM и рассылки в одном Telegram mini app.",
    siteName: "Bronly",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bronly - CRM в Telegram",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bronly — Онлайн-запись и CRM через Telegram",
    description: "Автоматизируйте запись клиентов с Bronly. Онлайн-запись, CRM и рассылки в одном Telegram mini app.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/b-orange.svg',
    shortcut: '/b-orange.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={evolventa.variable}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
