import type { Metadata } from 'next';
import { sitePath } from '@/lib/site-path';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yueliangxi.github.io'),
  title: 'YLAND｜让真实经营成为可验证的信用',
  description:
    '了解 YLAND 的愿景、可信经营体系，以及 YStore、YLand Ledger、YDA 与交易系统四个建设方向。',
  alternates: {
    canonical: 'https://yueliangxi.github.io/YLand/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'YLAND',
    title: 'YLAND｜让真实经营成为可验证的信用',
    description:
      '了解 YLAND 的愿景、可信经营体系，以及 YStore、YLand Ledger、YDA 与交易系统四个建设方向。',
    url: 'https://yueliangxi.github.io/YLand/',
  },
  twitter: {
    card: 'summary',
    title: 'YLAND｜让真实经营成为可验证的信用',
    description:
      '了解 YLAND 的愿景、可信经营体系，以及 YStore、YLand Ledger、YDA 与交易系统四个建设方向。',
  },
  icons: {
    icon: sitePath('/favicon.svg'),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
