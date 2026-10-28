import { Header } from "./components/Header";
import { Reveal } from "./components/Reveal";
import { Timecode } from "./components/Timecode";
import { Monogram, Wordmark } from "./components/Logo";
import { ContactForm, STUDIO_EMAIL } from "./components/ContactForm";
import { industries, principles, process, services, work } from "./content";

function SectionHead({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return (
    <div className="section-head">
      <Reveal className="section-head__meta">
        <span className="micro">{index}</span>
        <span className="micro">{label}</span>
      </Reveal>
      <Reveal as="h2" className="display display--md" delay={80}>
        {title}
      </Reveal>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* 01 — Hero / value proposition */}
        <section className="hero">
          <div className="hero__media" aria-hidden="true">
            <img src="/media/hero-ring.webp" alt="" />
            <div className="hero__haze" />
          </div>
          <div className="frame-markers" aria-hidden="true">
            <i /><i /><i /><i />
          </div>
          <div className="container hero__inner">
            <p className="micro hero__eyebrow reveal-load">AI creative production studio</p>
            <h1 className="display display--xl hero__title">
              <span className="line reveal-load" style={{ animationDelay: "120ms" }}>
                <span className="thin">Visuals for</span>
              </span>
              <span className="line reveal-load" style={{ animationDelay: "260ms" }}>
                what comes next.
              </span>
            </h1>
            <p className="lead hero__lead reveal-load" style={{ animationDelay: "420ms" }}>
              AI-powered creative production for ambitious brands. Cinematic campaigns, social visuals and
              digital worlds — with editorial taste.
            </p>
            <div className="hero__actions reveal-load" style={{ animationDelay: "560ms" }}>
              <a href="#work" className="btn btn--primary">View work</a>
              <a href="#contact" className="btn btn--ghost">Start a project</a>
            </div>
          </div>
          <div className="container hero__foot">
            <span className="micro">
              REC <span className="rec-dot" /> <Timecode />
            </span>
            <span className="micro hide-sm">40.7128° N / 74.0060° W</span>
            <a href="#services" className="micro hero__scroll">Scroll</a>
          </div>
        </section>

        {/* Positioning */}
        <section className="statement container">
          <Reveal as="p" className="display display--lg statement__text">
            <span className="thin">One vision.</span> Many worlds.
          </Reveal>
          <div className="statement__cols">
            <Reveal delay={60}>
              <span className="label">Positioning</span>
              <p>AI creative production with taste — for brands that want high-end output without generic AI aesthetics.</p>
            </Reveal>
            <Reveal delay={140}>
              <span className="label">Mission</span>
              <p>Make ideas visible. Transform bold concepts into high-quality visual experiences.</p>
            </Reveal>
            <Reveal delay={220}>
              <span className="label">Vision</span>
              <p>Set a new visual standard — premium, flexible and clearly art-directed at every touchpoint.</p>
            </Reveal>
          </div>
        </section>

        {/* 02 — Services grid */}
        <section id="services" className="section container">
          <SectionHead
            index="02"
            label="Services"
            title={<><span className="thin">What</span> we make.</>}
          />
          <div className="services">
            {services.map((s, i) => (
              <Reveal key={s.code} className="service card" delay={i * 80}>
                <div className="service__top">
                  <span className="micro">{s.code}</span>
                  <span className="micro">{s.format}</span>
                </div>
                <h3 className="service__title">{s.title}</h3>
                <p className="muted">{s.text}</p>
                <span className="service__line" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </section>

        {/* 03 — Selected work */}
        <section id="work" className="section container">
          <SectionHead
            index="03"
            label="Selected work"
            title={<><span className="thin">Beyond</span> the frame.</>}
          />
          <div className="work">
            {work.map((w, i) => (
              <Reveal key={w.id} as="article" className={`case case--${w.size}`} delay={(i % 2) * 120}>
                <div className="case__media">
                  <img src={w.image} alt={`${w.title} — ${w.category}`} loading="lazy" />
                  <div className="frame-markers frame-markers--sm" aria-hidden="true">
                    <i /><i /><i /><i />
                  </div>
                  <span className="micro case__tc">{w.tc}</span>
                </div>
                <div className="case__meta">
                  <span className="micro">{w.id} / {w.category}</span>
                  <h3 className="case__title">{w.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="principles">
          <div className="principles__bg" aria-hidden="true">
            <img src="/media/waveform-wide.webp" alt="" loading="lazy" />
          </div>
          <div className="container principles__inner">
            <Reveal as="p" className="micro">Confident. Clear. Visually literate.</Reveal>
            <div className="principles__list">
              {principles.map((p, i) => (
                <Reveal key={p.n} className="principle" delay={i * 100}>
                  <span className="micro">{p.n}</span>
                  <h3 className="display display--sm">{p.title}</h3>
                  <p className="muted">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — Process */}
        <section id="process" className="section container">
          <SectionHead
            index="04"
            label="Process"
            title={<><span className="thin">Directed,</span> not random.</>}
          />
          <ol className="process">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} className="process__item" delay={i * 90}>
                <span className="process__step">{p.step}</span>
                <div>
                  <h3 className="process__title">{p.title}</h3>
                  <p className="muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* 05 — Industries */}
        <section id="industries" className="section container">
          <SectionHead
            index="05"
            label="Who we serve"
            title={<><span className="thin">Built for</span> ambitious brands.</>}
          />
          <div className="industries">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} className="industry" delay={i * 70}>
                <span className="micro">0{i + 1}</span>
                <h3 className="industry__title">{ind.title}</h3>
                <p className="muted">{ind.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 06 — Final CTA + contact */}
        <section id="contact" className="cta">
          <div className="cta__media" aria-hidden="true">
            <img src="/media/ring-wide.webp" alt="" loading="lazy" />
          </div>
          <div className="container cta__inner">
            <div className="cta__copy">
              <Reveal as="span" className="micro">06 / Contact</Reveal>
              <Reveal as="h2" className="display display--lg" delay={80}>
                <span className="thin">The idea</span>
                <br />
                starts here.
              </Reveal>
              <Reveal as="p" className="lead" delay={160}>
                Tell us what you are launching. We reply with a direction, a format and a timeline.
              </Reveal>
              <Reveal className="cta__mail" delay={220}>
                <span className="micro">Direct</span>
                <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>
              </Reveal>
            </div>
            <Reveal className="card cta__form" delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* Motion rule 03: end on a mark */}
      <footer className="footer">
        <div className="container">
          <div className="footer__sign">
            <Monogram className="footer__mono" />
            <p className="display display--md footer__line">
              <span className="thin">We create</span> what comes next.
            </p>
          </div>
          <div className="footer__bar">
            <Wordmark />
            <nav className="footer__links" aria-label="Social">
              <a href="#" className="micro">Instagram</a>
              <a href="#" className="micro">Vimeo</a>
              <a href="#" className="micro">LinkedIn</a>
            </nav>
            <span className="micro">© {new Date().getFullYear()} NYCH VISION STUDIO</span>
          </div>
        </div>
      </footer>
    </>
  );
}
