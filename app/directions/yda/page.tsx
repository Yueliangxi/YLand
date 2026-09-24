import type { Metadata } from 'next';
import { DirectionPage } from '@/components/direction-page';
import { getDirection } from '@/lib/site-content';

const direction = getDirection('yda')!;

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: `${direction.title}｜YLAND`,
  description: direction.summary,
  alternates: {
    canonical: 'https://yueliangxi.github.io/YLand/directions/yda/',
  },
  openGraph: {
    type: 'website',
    title: `${direction.title}｜YLAND`,
    description: direction.summary,
    url: 'https://yueliangxi.github.io/YLand/directions/yda/',
  },
  twitter: {
    card: 'summary',
    title: `${direction.title}｜YLAND`,
    description: direction.summary,
  },
};

export default function Page() {
  return <DirectionPage slug="yda" />;
}
