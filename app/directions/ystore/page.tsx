import type { Metadata } from 'next';
import { DirectionPage } from '@/components/direction-page';
import { getDirection } from '@/lib/site-content';

const direction = getDirection('ystore')!;

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: `${direction.title}｜YLAND`,
  description: direction.summary,
  alternates: {
    canonical: 'https://yueliangxi.github.io/YLand/directions/ystore/',
  },
  openGraph: {
    type: 'website',
    title: `${direction.title}｜YLAND`,
    description: direction.summary,
    url: 'https://yueliangxi.github.io/YLand/directions/ystore/',
  },
  twitter: {
    card: 'summary',
    title: `${direction.title}｜YLAND`,
    description: direction.summary,
  },
};

export default function Page() {
  return <DirectionPage slug="ystore" />;
}
