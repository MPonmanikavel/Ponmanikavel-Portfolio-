/* Enhanced Portfolio — Professional UI/UX with scroll animations */
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, Mail, MapPin, Phone, Github, Linkedin, Check, Download, Calendar, Building2, Briefcase, Copy } from "lucide-react";

const EMAIL_ADDRESS = "ponmanikavelmuruganai.ds@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;

const experiences = [
  {
    role: "AI & ML Intern",
    company: "Vaazhi Software Solutions",
    location: "Villupuram",
    duration: "3 Months",
    type: "Internship",
    description: "Hands-on experience in Artificial Intelligence & Machine Learning fundamentals, data preprocessing, and model implementation workflows.",
    skills: ["AI & ML", "Python", "Data Processing", "Model Basics"],
  },
  {
    role: "DevOps with Cloud Computing Intern",
    company: "Besant Technologies",
    location: "Velachery, Chennai",
    duration: "3 Months",
    type: "Internship",
    description: "Practical exposure to Cloud computing architecture, DevOps methodologies, CI/CD pipeline automation principles, and infrastructure workflows.",
    skills: ["DevOps", "Cloud Computing", "CI/CD", "Linux Basics"],
  },
];

const projects = [
  {
    number: "01",
    title: "Hostel Leave Request",
    type: "Academic workflow / Frontend",
    description: "A responsive leave-request experience that turns a familiar campus process into a clearer, calmer digital flow.",
    stack: ["HTML", "CSS", "JavaScript"],
    tone: "violet",
    kind: "workflow",
  },
  {
    number: "02",
    title: "Student Portfolio Website",
    type: "Personal brand / Frontend",
    description: "A focused portfolio system designed to make projects, skills, and achievements easy to discover on every screen.",
    stack: ["HTML", "CSS", "JavaScript"],
    tone: "ink",
    kind: "portfolio",
  },
];

const skillGroups = [
  { label: "Build", items: ["Python", "C", "Java", "JavaScript"] },
  { label: "Shape", items: ["HTML", "CSS", "Responsive UI", "UI/UX basics"] },
  { label: "Think", items: ["SQL / MySQL", "OOP", "Data Structures", "Software Engineering"] },
];

const educationList = [
  {
    period: "2023—27",
    type: "Bachelor of Technology",
    title: "Artificial Intelligence & Data Science",
    institution: "Study World College of Engineering",
    location: "Coimbatore",
    scoreLabel: "Current CGPA",
    score: "7.6",
  },
  {
    period: "2021—23",
    type: "Higher Secondary (12th)",
    title: "HSC (12th)",
    institution: "Saraswathi Matric Higher Secondary School",
    location: "Villupuram",
    scoreLabel: "Score",
    score: "63.2",
  },
  {
    period: "2020—21",
    type: "Secondary School (10th)",
    title: "SSLC (10th)",
    institution: "Saraswathi Matric Higher Secondary School",
    location: "Villupuram",
    scoreLabel: "Score",
    score: "60",
  },
];

const certificates = [
  {
    name: "SQL Hiring Secrets – NoviTech R&D",
    image: "/certificates/sql-hiring-secrets.png",
  },
  {
    name: "Data Analytics MasterClass – NoviTech R&D",
    image: "/certificates/data-analytics.png",
  },
  {
    name: "Oracle Certified Foundations Associate",
    image: "/certificates/oracle-certified.png",
  },
];

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Cursor glow ── */
function CursorGlow() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={dot} className="cursor-glow" aria-hidden />;
}

function ProjectCardItem({ project, idx }: { project: (typeof projects)[0]; idx: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`project-card ${project.tone} ${isVisible ? "slide-up-revealed" : ""}`}
      style={{ "--slide-delay": `${idx * 160}ms` } as React.CSSProperties}
    >
      <div className="project-visual">
        <span className="project-number">{project.number}</span>
        <span className="visual-label">{project.type}</span>
        <div className="visual-window">
          <div className="window-top">
            <i /><i /><i />
          </div>
          <div className={`window-content ${project.kind}`}>
            <div className="mini-side" />
            {project.kind === "workflow" ? (
              <div className="mini-main">
                <b>Leave request</b>
                <div className="mini-row"><span /> <small>Pending</small></div>
                <div className="mini-row"><span /> <small>Approved</small></div>
                <div className="mini-row"><span /> <small>History</small></div>
              </div>
            ) : (
              <div className="mini-main portfolio-preview">
                <b>Selected work</b>
                <div className="mini-cards"><span /><span /><span /></div>
                <div className="mini-footer" />
              </div>
            )}
          </div>
        </div>
        <div className={`visual-orbit ${project.kind}`} />
      </div>
      <div className="project-info">
        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <ArrowUpRight className="project-arrow" size={23} />
        <p>{project.description}</p>
        <div className="stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null);
  const closeMenu = () => setMenuOpen(false);

  const copyEmail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* sticky header glass effect on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroReveal    = useReveal(0.05);
  const workReveal    = useReveal(0.1);
  const aboutReveal   = useReveal(0.1);
  const skillsReveal  = useReveal(0.1);
  const eduReveal     = useReveal(0.1);
  const contactReveal = useReveal(0.1);

  return (
    <div className="site-shell">
      <CursorGlow />

      {/* ── HEADER ── */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ponmanikavel Murugan home">
          <img src="/logo.png" alt="SMP Logo" />
          <span><strong>PONMANIKAVEL</strong><small>MURUGAN / DEVELOPER</small></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <a href="#work"    onClick={closeMenu}>Work    <span>01</span></a>
          <a href="#about"   onClick={closeMenu}>About   <span>02</span></a>
          <a href="#skills"  onClick={closeMenu}>Skills  <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <a className="header-contact" href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer" title="Open Gmail">
          Let's talk <ArrowUpRight size={16} />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">

        {/* ── HERO ── */}
        <section
          ref={heroReveal.ref as React.RefObject<HTMLElement>}
          className={`hero section-wrap${heroReveal.visible ? " revealed" : ""}`}
        >
          <div className="hero-copy">
            <p className="eyebrow reveal-child" style={{ "--delay": "0ms" } as React.CSSProperties}>
              <i /> B.Tech AI &amp; Data Science · Class of 2027
            </p>
            <h1 className="reveal-child" style={{ "--delay": "120ms" } as React.CSSProperties}>
              I build <em>clearer</em><br />digital experiences
            </h1>
            <p className="hero-intro reveal-child" style={{ "--delay": "240ms" } as React.CSSProperties}>
              I'm <strong className="hero-highlight-name">Ponmanikavel</strong>, Passionate Web Developer skilled in HTML, CSS, JS (JavaScript), Responsive Design, with knowledge in AI &amp; ML and DevOps with Cloud Computing.
            </p>
            <div className="hero-actions reveal-child" style={{ "--delay": "360ms" } as React.CSSProperties}>
              <a className="button button-primary browse-projects-btn" href="#work">
                <span>Browse Projects</span>
                <ArrowUpRight size={18} className="btn-arrow" />
              </a>
              <div className="hero-social-links">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-btn"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ponmanikavel-murugan-29a4592a4/"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-btn"
                  aria-label="Email"
                  title="Send Email (Gmail)"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
            <div className="hero-facts reveal-child" style={{ "--delay": "480ms" } as React.CSSProperties}>
              <span><b>01</b> Frontend-minded</span>
              <span><b>02</b> Always learning</span>
              <span><b>03</b> Detail-aware</span>
            </div>
          </div>

          <div className="hero-art reveal-child" aria-label="Portrait" style={{ "--delay": "200ms" } as React.CSSProperties}>
            <div className="portrait-frame">
              <div className="portrait-ring ring-1" />
              <div className="portrait-ring ring-2" />
              <div className="portrait-glow" />
              <img src="/portrait.png" alt="Ponmanikavel Murugan portrait" />
              <div className="art-caption">Based in<br /><strong>Tamil Nadu, IN</strong></div>
              <div className="portrait-badge">
                <span>Available</span>
                <i className="badge-dot" />
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <section className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="ticker-inner">
                <span>FRONTEND DEVELOPMENT</span><b>✦</b>
                <span>DATA SCIENCE</span><b>✦</b>
                <span>PRODUCT THINKING</span><b>✦</b>
                <span>SOFTWARE ENGINEERING</span><b>✦</b>
              </span>
            ))}
          </div>
        </section>

        {/* ── WORK ── */}
        <section
          ref={workReveal.ref as React.RefObject<HTMLElement>}
          className={`section-wrap work-section${workReveal.visible ? " revealed" : ""}`}
          id="work"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow"><i /> Selected work</p>
              <h2>Projects</h2>
            </div>
            <p className="heading-note">A small collection of work built to practice clarity, responsiveness, and useful interaction.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, idx) => (
              <ProjectCardItem key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </section>

        {/* ── ABOUT & EXPERIENCE ── */}
        <section
          ref={aboutReveal.ref as React.RefObject<HTMLElement>}
          className={`about-band${aboutReveal.visible ? " revealed" : ""}`}
          id="about"
        >
          <div className="section-wrap">
            <div className="about-grid">
              <div className="about-lead reveal-child" style={{ "--delay": "0ms" } as React.CSSProperties}>
                <p className="eyebrow"><i /> A little context</p>
                <h2>Curious by<br /><em>default</em></h2>
              </div>
              <div className="about-copy reveal-child" style={{ "--delay": "180ms" } as React.CSSProperties}>
                <p className="big-copy">I'm currently building my foundation across frontend development, software engineering, and data. I care about how things work—and how they feel to use.</p>
                <p>My goal is simple: join a team where I can keep learning, contribute with consistency, and ship digital experiences that make someone's day a little easier.</p>
                <a className="text-link" href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer">Let's build something useful <span>↗</span></a>
              </div>
            </div>

            {/* ── Experience Subsection ── */}
            <div className="experience-wrapper">
              <div className="experience-header reveal-child" style={{ "--delay": "240ms" } as React.CSSProperties}>
                <div className="exp-heading-left">
                  <p className="eyebrow"><i /> Experience &amp; Internships</p>
                  <h3>Practical <em>Industry Exposure</em></h3>
                </div>
                <p className="exp-note">Real-world internships and applied technical training enhancing practical engineering skills.</p>
              </div>

              <div className="experience-grid">
                {experiences.map((exp, idx) => (
                  <div
                    key={exp.role}
                    className="experience-card reveal-child"
                    style={{ "--delay": `${300 + idx * 120}ms` } as React.CSSProperties}
                  >
                    <div className="exp-top">
                      <div className="exp-badge">
                        <Calendar size={13} /> {exp.duration}
                      </div>
                      <span className="exp-type">{exp.type}</span>
                    </div>
                    <h4>{exp.role}</h4>
                    <div className="exp-company">
                      <Building2 size={15} />
                      <strong>{exp.company}</strong>
                      <span className="exp-dot">·</span>
                      <span className="exp-loc"><MapPin size={13} /> {exp.location}</span>
                    </div>
                    <p>{exp.description}</p>
                    <div className="exp-tags">
                      {exp.skills.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section
          ref={skillsReveal.ref as React.RefObject<HTMLElement>}
          className={`section-wrap skills-section${skillsReveal.visible ? " revealed" : ""}`}
          id="skills"
        >
          <div className="section-heading">
            <div><p className="eyebrow"><i /> What I bring</p><h2>Skills</h2></div>
            <p className="heading-note">A practical toolkit in progress, shaped by coursework, projects, and a habit of learning by building.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, gIdx) => (
              <div
                className={`skill-group reveal-child`}
                key={group.label}
                style={{ "--delay": `${gIdx * 120}ms` } as React.CSSProperties}
              >
                <div className="skill-index">0{gIdx + 1}</div>
                <h3>{group.label}</h3>
                {group.items.map((item, iIdx) => (
                  <div
                    className="skill-item"
                    key={item}
                    style={{ "--delay": `${gIdx * 120 + iIdx * 60}ms` } as React.CSSProperties}
                  >
                    <Check size={15} /> {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section
          ref={eduReveal.ref as React.RefObject<HTMLElement>}
          className={`education-section${eduReveal.visible ? " revealed" : ""}`}
        >
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow"><i /> The foundation</p><h2>Education</h2></div>
            </div>
            <div className="education-list">
              {educationList.map((edu, idx) => (
                <div
                  className="education-card reveal-child"
                  key={edu.type}
                  style={{ "--delay": `${idx * 130}ms` } as React.CSSProperties}
                >
                  <div className="edu-date">{edu.period}</div>
                  <div>
                    <p className="project-type">{edu.type}</p>
                    <h3>{edu.title}</h3>
                    <p>{edu.institution} · {edu.location}</p>
                  </div>
                  <div className="edu-result">
                    <span>{edu.scoreLabel}</span>
                    <strong>{edu.score}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="cert-row reveal-child" style={{ "--delay": "400ms" } as React.CSSProperties}>
              <span>Certifications</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {certificates.map((cert, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCertificate(cert)}
                    title="Click to view certificate"
                    style={{
                      background: "none",
                      border: "none",
                      padding: "0",
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: "inherit",
                      color: "inherit",
                      textDecoration: "underline",
                      textDecorationStyle: "dotted",
                      textUnderlineOffset: "3px",
                      opacity: 0.85,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.85")}
                  >
                    {cert.name} ↗
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          ref={contactReveal.ref as React.RefObject<HTMLElement>}
          className={`contact-section${contactReveal.visible ? " revealed" : ""}`}
          id="contact"
        >
          <div className="section-wrap contact-grid">
            <div className="reveal-child" style={{ "--delay": "0ms" } as React.CSSProperties}>
              <p className="eyebrow"><i /> Open to opportunities</p>
              <h2>Let's make<br /><em>something real.</em></h2>
            </div>
            <div className="contact-details reveal-child" style={{ "--delay": "180ms" } as React.CSSProperties}>
              <p className="big-copy">Looking for an entry-level role in software engineering, data science, or web development.</p>
              <div className="email-link-group">
                <a
                  className="email-link"
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  title="Open Gmail"
                >
                  {EMAIL_ADDRESS} <ArrowUpRight size={20} />
                </a>
                <button
                  type="button"
                  className={`copy-email-btn${copied ? " copied" : ""}`}
                  onClick={copyEmail}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <div className="contact-meta">
                <span><MapPin size={15} /> Villupuram, Tamil Nadu</span>
                <span><Phone size={15} /> +91 63740 49486</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── CERTIFICATE MODAL ── */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
              cursor: "default",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
              }}
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.name}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  const parent = img.parentElement;
                  if (parent) {
                    const fallback = document.createElement("div");
                    fallback.style.cssText = `
                      padding: 60px 40px;
                      textAlign: center;
                      minWidth: 400px;
                      minHeight: 300px;
                      display: flex;
                      flexDirection: column;
                      alignItems: center;
                      justifyContent: center;
                      backgroundColor: #f5f5f5;
                    `;
                    fallback.innerHTML = `
                      <p style="font-size: 16px; color: #333; margin: 0 0 10px 0; font-weight: 600;">
                        ${selectedCertificate.name}
                      </p>
                      <p style="font-size: 14px; color: #666; margin: 0;">
                        Certificate image not yet added
                      </p>
                      <p style="font-size: 13px; color: #999; margin: 15px 0 0 0;">
                        Save your certificate image as:<br/>
                        <code style="background: #e0e0e0; padding: 4px 8px; border-radius: 4px; font-family: monospace;">
                          client/public/certificates/
                        </code>
                      </p>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                }}
              />
            </div>
            <button
              onClick={() => setSelectedCertificate(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Close certificate"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand" href="#top">
            <img src="/logo.png" alt="SMP Logo" />
            <span><strong>PONMANIKAVEL</strong><small>MURUGAN / DEVELOPER</small></span>
          </a>
          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/ponmanikavel-murugan-29a4592a4/" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://github.com/" aria-label="GitHub"><Github size={17} /></a>
            <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer" aria-label="Email" title="Send Email (Gmail)"><Mail size={17} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Ponmanikavel Murugan</span>
          <span>Built with curiosity <b>✦</b></span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
