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
  description: "İsa Kalender ve Kudret Çöçü'nün sunduğu Piyasa Gayrimenkul programı her pazar saat 20.00'de Lider Haber Kanalı'nda izleyicileriyle buluşuyor. Gayrimenkul piyasasındaki son gelişmeler, trendler ve ipuçlarına dair en güncel bilgileri bu programda bulabilirsiniz. İnşaat projelerinden emlak yatırımlarına, konut kredilerinden gayrimenkul vergilerine kadar geniş bir yelpazede gayrimenkul sektörüne dair her şeyi keşfedin. Kaçırmayın, Piyasa Gayrimenkul her pazar günü sizleri bekliyor",
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

