import { SiteHeader } from '@/components/site-header';
import {
  directions,
  getDirection,
  sharedCapabilities,
} from '@/lib/site-content';
import { sitePath } from '@/lib/site-path';

type DirectionPageProps = {
  slug: string;
};

export function DirectionPage({ slug }: DirectionPageProps) {
  const direction = getDirection(slug);

  if (!direction) {
    return null;
  }

  const otherDirections = directions.filter((item) => item.slug !== slug);

  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <SiteHeader detail />

      <main id="main" className="detail-main">
        <section className="detail-hero">
          <div className="detail-index" aria-hidden="true">
            {direction.index}
          </div>
          <div className="detail-hero-copy">
            <p className="eyebrow">{direction.eyebrow}</p>
            <h1>{direction.title}</h1>
            <p className="detail-summary">{direction.summary}</p>
            <div className="detail-status">
              <span>阶段</span>
              <strong>{direction.status}</strong>
            </div>
          </div>
        </section>

        <section className="detail-intro">
          <p className="section-number">方向说明</p>
          <p>{direction.purpose}</p>
        </section>

        <section className="scope-section" aria-labelledby={`${slug}-scope-title`}>
          <div className="detail-section-heading">
            <p className="section-number">01 / 系统范围</p>
            <h2 id={`${slug}-scope-title`}>当前建设与后续边界</h2>
          </div>
          <div className="scope-columns">
            <article>
              <p className="scope-label">CURRENT</p>
              <h3>当前范围</h3>
              <ol>
                {direction.current.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
            <article className="future-scope">
              <p className="scope-label">NEXT</p>
              <h3>后续方向</h3>
              <ol>
                {direction.future.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>
          <p className="boundary-note">
            <strong>边界：</strong>
            {direction.boundary}
          </p>
        </section>

        <section className="work-section" aria-labelledby={`${slug}-work-title`}>
          <div className="detail-section-heading">
            <p className="section-number">02 / 可以参与什么</p>
            <h2 id={`${slug}-work-title`}>把问题变成可验证的交付</h2>
          </div>
          <div className="work-grid">
            {direction.work.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fit-section" aria-labelledby={`${slug}-fit-title`}>
          <div>
            <p className="section-number">03 / 适合的工程背景</p>
            <h2 id={`${slug}-fit-title`}>不限定职位名称，更关注你能解决的问题。</h2>
          </div>
          <ul>
            {direction.suitable.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="shared-section" aria-labelledby={`${slug}-shared-title`}>
          <div className="detail-section-heading">
            <p className="section-number">04 / 共用基础能力</p>
            <h2 id={`${slug}-shared-title`}>四个方向共同依赖的底层工作</h2>
          </div>
          <ul>
            {sharedCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <nav className="other-directions" aria-label="其他建设方向">
          <p>继续查看其他方向</p>
          <div>
            {otherDirections.map((item) => (
              <a href={sitePath(`/directions/${item.slug}/`)} key={item.slug}>
                <span>{item.index}</span>
                {item.shortTitle}
              </a>
            ))}
          </div>
        </nav>
      </main>

      <footer>
        <span>YLAND</span>
        <p>本页基于 YLand 项目需求与发展路线 v0.91 整理。</p>
      </footer>
    </>
  );
}
