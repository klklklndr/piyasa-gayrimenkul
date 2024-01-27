import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
const GTM_ID = 'GTM-PTCQ9VNK';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyasa Gayrimenkul",
  description: "Piyasa Gayrimenkul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
          <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
    </Script>
    <Head>
			<link rel='icon' href='/public/image/subicon.png' />
		</Head>
      <body 
      className={inter.className}>{children}
      <noscript
        dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }} 
    />
      </body>
    </html>
  );
}

