import { sitePath } from '@/lib/site-path';

type SiteHeaderProps = {
  detail?: boolean;
};

export function SiteHeader({ detail = false }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="wordmark" href={sitePath('/')} aria-label="YLAND 首页">
        YLAND
      </a>
      <nav aria-label="主要导航">
        {detail ? (
          <>
            <a href={sitePath('/#directions')}>其他方向</a>
            <a href={sitePath('/')}>返回首页</a>
          </>
        ) : (
          <>
            <a href={sitePath('/#about')}>关于</a>
            <a href={sitePath('/#directions')}>建设方向</a>
            <a href={sitePath('/#trust')}>信任原则</a>
          </>
        )}
      </nav>
    </header>
  );
}
