import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
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
    <Head>
      <GoogleTagManager gtmId="GTM-PTCQ9VNK" />
			<link rel='icon' href='/public/image/subicon.png' />
		</Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

