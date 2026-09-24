import { SiteHeader } from '@/components/site-header';
import { sitePath } from '@/lib/site-path';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found">
        <p className="eyebrow">404 / NOT FOUND</p>
        <h1>这个页面还没有被记录。</h1>
        <p>返回 YLAND 首页，查看公司介绍与四个建设方向。</p>
        <a href={sitePath('/')}>返回首页</a>
      </main>
    </>
  );
}
