import { careers, profile, projects, skills } from "@/data/profile";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo">{profile.nameEn}</a>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">{profile.role} · {profile.years}</p>
          <h1>
            {profile.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="lead">{profile.name}입니다. 구축부터 운영까지, 서비스가 멈추지 않도록 끝까지 책임집니다.</p>
        </section>

        <section id="about" className="section container">
          <h2 className="section-title">About</h2>
          <div className="about-grid">
            <div className="about-text">
              {profile.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="career-list">
              {careers.map((c) => (
                <li key={c.company}>
                  <div className="career-head">
                    <strong>{c.company}</strong>
                    <span className="muted">{c.period}</span>
                  </div>
                  <p className="muted">{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-row">
                <span className="skill-group">{s.group}</span>
                <div className="tags">
                  {s.items.map((i) => (
                    <span key={i} className="tag">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="projects">
            {projects.map((p, idx) => (
              <article key={p.title} className="project">
                <div className="project-meta">
                  <span className="index">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="muted">{p.period}</span>
                  <span className="muted">{p.client}</span>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p className="summary">{p.summary}</p>
                  <div className="cols">
                    <div>
                      <h4>담당 업무</h4>
                      <ul>{p.tasks.map((t) => <li key={t}>{t}</li>)}</ul>
                    </div>
                    <div>
                      <h4>주요 성과</h4>
                      <ul>{p.results.map((r) => <li key={r}>{r}</li>)}</ul>
                    </div>
                  </div>
                  <div className="tags">
                    {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section container contact">
          <h2 className="section-title">Contact</h2>
          <p className="contact-lead">함께 일할 기회를 기다리고 있습니다.</p>
          <ul className="links">
            <li><span className="muted">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span className="muted">GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">github.com/RATSENO</a></li>
            <li><span className="muted">Blog</span><a href={profile.blog} target="_blank" rel="noreferrer">ratseno.tistory.com</a></li>
          </ul>
        </section>
      </main>

      <footer className="container footer muted">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
