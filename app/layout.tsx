import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "IChO 2026",
  description: "IChO 2026 - Uzbekistan",
  generator: "IChO 2026 - Uzbekistan",
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
