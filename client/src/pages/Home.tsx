/* Electric Editorial design: warm paper, ink typography, violet signal color, asymmetric recruiter-friendly storytelling. */
import { useState } from "react";
import { ArrowUpRight, Menu, X, Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Check } from "lucide-react";

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ponmanikavel Murugan home">
          <img src="/manus-storage/pm-monogram_69633626.png" alt="" />
          <span><strong>PONMANIKAVEL</strong><small>MURUGAN / DEVELOPER</small></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#skills" onClick={closeMenu}>Skills <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <a className="header-contact" href="mailto:ponmanikavelmuruganai.ds@gmail.com">Let's talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><i /> B.Tech AI & Data Science · Class of 2027</p>
            <h1>I build <em>clearer</em><br />digital experiences.</h1>
            <p className="hero-intro">I’m Ponmanikavel, a software developer in Villupuram. I like turning thoughtful ideas into responsive interfaces and practical software.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="mailto:ponmanikavelmuruganai.ds@gmail.com">Start a conversation <span>↗</span></a>
            </div>
            <div className="hero-facts"><span><b>01</b> Frontend-minded</span><span><b>02</b> Always learning</span><span><b>03</b> Detail-aware</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract editorial portrait artwork">
            <div className="art-caption">Based in<br /><strong>Tamil Nadu, IN</strong></div>
            <img src="/manus-storage/ponmanikavel-hero_b42e2a74.png" alt="Abstract monochrome portrait artwork" />
            <div className="art-stamp">PM<br /><span>2026</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of interest"><div><span>FRONTEND DEVELOPMENT</span><b>✦</b><span>DATA SCIENCE</span><b>✦</b><span>PRODUCT THINKING</span><b>✦</b><span>FRONTEND DEVELOPMENT</span></div></section>

        <section className="section-wrap work-section" id="work">
          <div className="section-heading"><div><p className="eyebrow"><i /> Selected work</p><h2>Projects<span>.</span></h2></div><p className="heading-note">A small collection of work built to practice clarity, responsiveness, and useful interaction.</p></div>
          <div className="project-grid">
            {projects.map((project) => <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-visual"><span className="project-number">{project.number}</span><span className="visual-label">{project.type}</span><div className="visual-window"><div className="window-top"><i /><i /><i /></div><div className={`window-content ${project.kind}`}><div className="mini-side" />{project.kind === "workflow" ? <div className="mini-main"><b>Leave request</b><div className="mini-row"><span /> <small>Pending</small></div><div className="mini-row"><span /> <small>Approved</small></div><div className="mini-row"><span /> <small>History</small></div></div> : <div className="mini-main portfolio-preview"><b>Selected work</b><div className="mini-cards"><span /><span /><span /></div><div className="mini-footer" /></div>}</div></div><div className={`visual-orbit ${project.kind}`} /></div>
              <div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><ArrowUpRight className="project-arrow" size={23} /><p>{project.description}</p><div className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div>
            </article>)}
          </div>
        </section>

        <section className="about-band" id="about"><div className="section-wrap about-grid"><div className="about-lead"><p className="eyebrow"><i /> A little context</p><h2>Curious by<br /><em>default.</em></h2></div><div className="about-copy"><p className="big-copy">I’m currently building my foundation across frontend development, software engineering, and data. I care about how things work—and how they feel to use.</p><p>My goal is simple: join a team where I can keep learning, contribute with consistency, and ship digital experiences that make someone’s day a little easier.</p><a className="text-link" href="mailto:ponmanikavelmuruganai.ds@gmail.com">Let’s build something useful <span>↗</span></a></div></div></section>

        <section className="section-wrap skills-section" id="skills"><div className="section-heading"><div><p className="eyebrow"><i /> What I bring</p><h2>Skills<span>.</span></h2></div><p className="heading-note">A practical toolkit in progress, shaped by coursework, projects, and a habit of learning by building.</p></div><div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.label}><div className="skill-index">0{index + 1}</div><h3>{group.label}</h3>{group.items.map(item => <div className="skill-item" key={item}><Check size={15} /> {item}</div>)}</div>)}</div></section>

        <section className="education-section"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow"><i /> The foundation</p><h2>Education<span>.</span></h2></div></div><div className="education-card"><div className="edu-date">2023—27</div><div><p className="project-type">Bachelor of Technology</p><h3>Artificial Intelligence<br />& Data Science</h3><p>Study World College of Engineering</p></div><div className="edu-result"><span>Current CGPA</span><strong>7.6</strong></div></div><div className="cert-row"><span>Certifications</span><p>Oracle Data Science — Foundation Level</p><p>Google Data Analytics Certificate</p><p>Certified in Data Analytics — Novitech Pvt. Ltd.</p></div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div><p className="eyebrow"><i /> Open to opportunities</p><h2>Let’s make<br /><em>something real.</em></h2></div><div className="contact-details"><p className="big-copy">Looking for an entry-level role in software engineering, data science, or web development.</p><a className="email-link" href="mailto:ponmanikavelmuruganai.ds@gmail.com">ponmanikavelmuruganai@gmail.com <ArrowUpRight size={20} /></a><div className="contact-meta"><span><MapPin size={15} /> Villupuram, Tamil Nadu</span><span><Phone size={15} /> +91 63740 49486</span></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><a className="brand" href="#top"><img src="/manus-storage/pm-monogram_69633626.png" alt="" /><span><strong>PONMANIKAVEL</strong><small>MURUGAN / DEVELOPER</small></span></a><div className="footer-links"><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div><div className="socials"><a href="https://www.linkedin.com/in/ponmanikavel-murugan-29a4592a4/" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/" aria-label="GitHub"><Github size={17} /></a><a href="mailto:ponmanikavelmuruganai.ds@gmail.com" aria-label="Email"><Mail size={17} /></a></div></div><div className="footer-bottom"><span>© 2026 Ponmanikavel Murugan</span><span>Built with curiosity <b>✦</b></span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
