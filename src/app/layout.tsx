import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
const GTM_ID = 'GTM-PTCQ9VNK';
import { GoogleTagManager } from '@next/third-parties/google'

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
    <GoogleTagManager gtmId="GTM-PTCQ9VNK" />
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

