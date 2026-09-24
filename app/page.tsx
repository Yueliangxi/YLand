import { SiteHeader } from '@/components/site-header';
import { directions } from '@/lib/site-content';
import { sitePath } from '@/lib/site-path';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>

      <SiteHeader />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">YLAND · 可信商业基础设施</p>
            <h1 id="hero-title">
              让真实经营成为
              <span>可验证的信用</span>
            </h1>
            <p className="hero-intro">
              YLAND 连接企业、开发者、创作者、用户与生态参与者。我们从真实商业需求出发，建设数字产品与服务入口，并逐步把订单、支付、履约、退款和长期经营表现转化为可追踪、可验证的事实。
            </p>
          </div>

          <div className="trust-path" aria-label="从产品到信用的验证路径">
            <div className="trust-path-head">
              <span>VERIFY / 01</span>
              <span>持续验证</span>
            </div>
            <ol>
              <li>
                <span>01</span>
                <strong>优秀产品与服务</strong>
              </li>
              <li>
                <span>02</span>
                <strong>真实使用与经营</strong>
              </li>
              <li>
                <span>03</span>
                <strong>可信记录与核验</strong>
              </li>
              <li>
                <span>04</span>
                <strong>长期积累的信用</strong>
              </li>
            </ol>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <p className="section-number">01 / 关于 YLAND</p>
          <div>
            <h2 id="about-title">为认真经营的企业，建立另一条被理解的路径。</h2>
            <p>
              许多企业长期提供优秀产品和服务，却缺少成本可控、能够持续积累并允许外部独立验证的信用建立方式。YLAND
              以真实商业需求为起点，让产品、使用、付费、履约和经营结果形成可以被核验的事实基础。
            </p>
          </div>
        </section>

        <section className="logic-section" aria-labelledby="logic-title">
          <div>
            <p className="section-number">02 / 基本逻辑</p>
            <h2 id="logic-title">从真实使用，到长期可验证的信用。</h2>
          </div>
          <p>
            产品是否优秀、服务是否可靠，最终要回到真实使用、付费、履约、退款和持续经营的事实。随着相关能力分阶段建设，YLAND
            希望把这些事实转化为结构化记录，使关键数据的来源、处理过程、时间顺序和最终结果能够被验证。
          </p>
          <ol className="logic-flow" aria-label="YLAND 信用建立路径">
            <li>优秀产品与服务</li>
            <li>真实使用与付费</li>
            <li>可信经营记录</li>
            <li>公开独立验证</li>
            <li>长期积累的信用</li>
          </ol>
        </section>

        <section className="layers-section" aria-labelledby="layers-title">
          <div className="section-heading">
            <p className="section-number">03 / 我们正在建设什么</p>
            <h2 id="layers-title">三层能力，一套完整的可信商业路径。</h2>
            <p>
              从产品被发现，到经营事实被记录，再到合规前提下的数字价值协作。
            </p>
          </div>
          <div className="layer-list">
            <article>
              <span>01</span>
              <h3>产品与服务平台</h3>
              <p>逐步承载软件、游戏、数字内容和相关服务的展示、购买、订阅与交付。</p>
            </article>
            <article>
              <span>02</span>
              <h3>可信经营数据层</h3>
              <p>把订单、支付、履约、退款和经营指标转化为结构化、可验证的记录。</p>
            </article>
            <article>
              <span>03</span>
              <h3>数字价值协作层</h3>
              <p>支持平台内的计价、记录、分配与价值协作，并依据适用法律、牌照与运营条件分阶段推进。</p>
            </article>
          </div>
        </section>

        <section className="directions-section" id="directions" aria-labelledby="directions-title">
          <div className="section-heading">
            <p className="section-number">04 / 建设方向</p>
            <h2 id="directions-title">四个方向，共同组成 YLAND。</h2>
            <p>
              工程上，数字价值协作进一步拆为 YDA 钱包结算与交易、项目资产系统。选择一个方向，了解它的当前范围、工程挑战和可以承担的工作。
            </p>
          </div>

          <div className="direction-grid">
            {directions.map((direction) => (
              <a
                className={`direction-card direction-${direction.slug}`}
                href={sitePath(`/directions/${direction.slug}/`)}
                key={direction.slug}
              >
                <div className="direction-meta">
                  <span>{direction.index}</span>
                  <span>{direction.status}</span>
                </div>
                <p className="direction-eyebrow">{direction.eyebrow}</p>
                <h3>{direction.title}</h3>
                <p className="direction-summary">{direction.summary}</p>
                <ul aria-label={`${direction.title}包含内容`}>
                  {direction.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
          <p className="compliance-note">
            以上内容说明待建设的系统范围，不代表相关能力已经上线。涉及 YDA、交易、权益及资产流通的功能，以适用法律、牌照条件、产品条款和阶段性开放安排为准。
          </p>
        </section>

        <section className="trust-section" id="trust" aria-labelledby="trust-title">
          <div className="trust-copy">
            <p className="section-number">05 / 如何建立信任</p>
            <h2 id="trust-title">不是把所有内容简单“上链”。</h2>
            <p>
              区块链可以保护已经形成的记录，却不能自动判断现实世界的输入是否真实。YLAND
              的可信体系由可靠的数据来源、密码学证据、公开验证、权限治理、独立审计和隐私保护共同构成。
            </p>
          </div>
          <ol className="trust-pillars">
            <li><span>01</span>可信数据来源</li>
            <li><span>02</span>密码学证据</li>
            <li><span>03</span>链上存证（后续）</li>
            <li><span>04</span>开放验证</li>
            <li><span>05</span>治理与审计</li>
            <li><span>06</span>隐私保护</li>
          </ol>
        </section>

        <section className="principle-strip">
          <p>技术负责使事实可验证</p>
          <span aria-hidden="true" />
          <p>制度负责让组织值得信赖</p>
        </section>

        <section className="engineering-section" aria-labelledby="engineering-title">
          <div>
            <p className="section-number">06 / 工程工作</p>
            <h2 id="engineering-title">让系统经得起验证，也经得起长期运行。</h2>
          </div>
          <ul>
            <li>数据来源可以说明</li>
            <li>关键结果可以复核</li>
            <li>修改与变更可以追溯</li>
            <li>权限与异常可以审计</li>
            <li>商业数据与隐私受到保护</li>
          </ul>
        </section>

        <section className="mission-section" aria-labelledby="mission-title">
          <p className="section-number">07 / 使命</p>
          <h2 id="mission-title">
            让每一家认真创造产品和服务的企业，都有机会通过真实经营建立可验证的信用。
          </h2>
          <p>
            企业用产品与服务创造价值，开发者和创作者用技术与内容丰富平台，用户以真实使用、付费、反馈和选择形成市场信号，验证者、审计者与生态伙伴通过监督和基础设施维护提高系统可靠性。
          </p>
        </section>
      </main>

      <footer>
        <span>YLAND</span>
        <p>让优秀的产品被发现，让真实的经营被记录，让长期的价值被验证。</p>
      </footer>
    </>
  );
}
