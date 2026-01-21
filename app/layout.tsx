import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "IChO 2026 | 58th International Chemistry Olympiad - Tashkent, Uzbekistan",
    template: "%s | IChO 2026",
  },
  description:
    "The 58th International Chemistry Olympiad (IChO 2026) will be held in Tashkent, Uzbekistan from July 10-19, 2026. Join delegations from over 90 countries celebrating scientific excellence.",
  keywords: [
    "IChO 2026",
    "International Chemistry Olympiad",
    "Chemistry Olympiad",
    "Tashkent",
    "Uzbekistan",
    "Science Competition",
    "Chemistry Competition",
    "58th IChO",
  ],
  authors: [{ name: "IChO 2026 Organizing Committee" }],
  creator: "IChO 2026 Organizing Committee",
  metadataBase: new URL("https://icho2026.uz"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icho2026.uz",
    siteName: "IChO 2026",
    title: "IChO 2026 | 58th International Chemistry Olympiad",
    description:
      "The 58th International Chemistry Olympiad will be held in Tashkent, Uzbekistan from July 10-19, 2026. Transforming Elements, Connecting the World.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IChO 2026 - 58th International Chemistry Olympiad in Tashkent, Uzbekistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IChO 2026 | 58th International Chemistry Olympiad",
    description:
      "Join us in Tashkent, Uzbekistan for the 58th International Chemistry Olympiad, July 10-19, 2026.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden m-0 p-0">
      <head>
        {/* Yandex.Metrika */}
        <Script
          id="yandex-metrica"
          strategy="afterInteractive"
        >
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106225653','ym');

            ym(106225653, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
      </head>

      <body className="overflow-x-hidden w-full max-w-full m-0 p-0 leading-none">
        {/* Noscript fallback */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106225653"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
