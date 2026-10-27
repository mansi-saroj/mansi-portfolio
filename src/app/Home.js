
"use client";

import { useEffect, useState } from "react";
import "./Home.css";


const EMAIL = "ms8357234@gmail.com";
const INSTAGRAM = "https://www.instagram.com/mansisaroj.__/";
const WHATSAPP = "https://wa.me/919867635420";
const LINKEDIN = "https://www.linkedin.com/in/mansi-saroj-253490358/";
const DJOBZY = "https://www.djobzy.com/";


const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

const skills = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "PHP", category: "Backend" },
  { name: "CodeIgniter 4", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "REST APIs", category: "Backend" },
  { name: "jQuery", category: "Frontend" },
  { name: "DataTables", category: "Tools" },
];

const experiences = [
  {
    role: "Software Developer",
    company: "S2Tech",
    period: "May 2026 — Present",
    description:
      "Working with CodeIgniter 4, PHP, MySQL, reports, database-driven modules, and responsive interfaces.",
    tags: ["PHP", "CodeIgniter 4", "MySQL", "JavaScript"],
  },
  {
    role: "Full Stack Developer",
    company: "Enats LLP",
    period: "Previous Experience",
    description:
      "Worked with MERN-related technologies and application development.",
    tags: ["React", "JavaScript", "MERN"],
  },
];

const education = [
  {
    course: "Bachelor of Commerce (B.Com)",
    institute: "Prahladrai Dalmia Lions College",
    year: "2024",
  },
  {
    course: "Higher Secondary Certificate (HSC)",
    institute: "P. D. Turakhia Junior College",
    year: "2021",
  },
  {
    course: "Secondary School Certificate (SSC)",
    institute: "Shivaji Vidya Mandir",
    year: "2019",
  },
];

const projects = [
  {
    title: "Djobzy",
    type: "External Website",
    description:
      "Explore the Djobzy platform through its live website.",
    stack: ["Website", "Platform"],
    link: DJOBZY,
    label: "Visit website ↗",
  },
  {
    title: "Expense Tracker",
    type: "Personal Project",
    description:
      "A project concept for recording expenses, viewing transactions, and tracking spending.",
    stack: ["React", "Node.js", "MongoDB"],
    link: "",
    label: "Project details",
  },
  {
    title: "Task Manager",
    type: "Personal Project",
    description:
      "A task management concept for organising tasks, deadlines, and progress.",
    stack: ["React", "Express", "MongoDB"],
    link: "",
    label: "Project details",
  },
  {
    title: "Online Store",
    type: "Personal Project",
    description:
      "An e-commerce concept with product browsing, cart functionality, and an admin area.",
    stack: ["MERN", "REST API"],
    link: "",
    label: "Project details",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {diagonal ? (
        <path
          d="M7 17 17 7M7 7h10v10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M12 19V5m-6 6 6-6 6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("mansi-portfolio-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
      }
    } catch {
      // The default theme still works if browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("mansi-portfolio-theme", theme);
    } catch {
      // Theme switching still works for the current page.
    }
  }, [theme]);

  useEffect(() => {
    const phrases = [
      "Full Stack Developer",
      "Software Developer",
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const phrase = phrases[phraseIndex];

      if (!deleting) {
        characterIndex += 1;
        setTypedText(phrase.slice(0, characterIndex));

        if (characterIndex >= phrase.length) {
          deleting = true;
          timeout = setTimeout(type, 1400);
          return;
        }

        timeout = setTimeout(type, 75);
      } else {
        characterIndex -= 1;
        setTypedText(phrase.slice(0, characterIndex));

        if (characterIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeout = setTimeout(type, 350);
          return;
        }

        timeout = setTimeout(type, 35);
      }
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      const amount =
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, amount)));
      setShowTop(window.scrollY > 250);

      const sectionElements = navigation
        .map(([id]) => document.getElementById(id))
        .filter(Boolean);

      let current = "home";

      for (const section of sectionElements) {
        if (section.getBoundingClientRect().top <= 160) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const goTo = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const circumference = 2 * Math.PI * 21;
  const ringOffset = circumference * (1 - progress / 100);

  return (
    <main className="portfolio" data-theme={theme}>
      <div className="background-grid" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div
        className="top-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      <header className="site-header">
        <button
          className="brand"
          onClick={() => goTo("home")}
          aria-label="Go to homepage"
        >
          <span className="brand-mark">M.</span>
          <span className="brand-name">Mansi Saroj<span>.</span></span>
        </button>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="theme-icon" aria-hidden="true">
              {theme === "dark" ? "☼" : "☾"}
            </span>
            <span className="theme-label">
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </span>
          </button>

          <button className="header-contact" onClick={() => goTo("contact")}>
            Let&apos;s talk <ArrowIcon diagonal />
          </button>

          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          <button
            className="menu-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          />
          <nav
            className="navigation-panel"
            id="site-navigation"
            aria-label="Main navigation"
          >
            <div className="nav-panel-top">
              <span className="eyebrow">NAVIGATION</span>
              <button
                className="nav-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {navigation.map(([id, label]) => (
              <button
                key={id}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
                onClick={() => goTo(id)}
              >
                <span>{label}</span>
                <ArrowIcon diagonal />
              </button>
            ))}

            <div className="nav-panel-bottom">
              <span>AVAILABLE FOR OPPORTUNITIES</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </nav>
        </>
      )}

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="availability-pill reveal">
            <span className="availability-dot" />
            DEVELOPER · MUMBAI, INDIA
          </div>

          <p className="hero-intro reveal">Hello, I&apos;m Mansi</p>

          <h1 className="hero-title reveal">
            Building digital
            <br />
            experiences with
            <br />
            <span className="accent-text">purpose.</span>
          </h1>

          <div className="typing-line reveal">
            <span className="typing-prefix">I&apos;m a </span>
            <span className="typed-text">{typedText}</span>
            <span className="typing-cursor" />
          </div>

          <p className="hero-description reveal">
            I build web applications and user-focused digital experiences,
            bringing together clean interfaces, useful functionality, and
            thoughtful development.
          </p>

          <div className="hero-actions reveal">
            <button className="button-primary" onClick={() => goTo("projects")}>
              Explore my work <ArrowIcon diagonal />
            </button>
            <button className="button-secondary" onClick={() => goTo("contact")}>
              Get in touch
            </button>
          </div>

         
<div className="hero-socials reveal">
  <a
    href={LINKEDIN}
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn <ArrowIcon diagonal />
  </a>

  <a href={`mailto:${EMAIL}`}>
    Email me <ArrowIcon diagonal />
  </a>

  <a
    href={INSTAGRAM}
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram <ArrowIcon diagonal />
  </a>

  <a
    href={WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp <ArrowIcon diagonal />
  </a>
</div>

        </div>

        <div className="hero-visual reveal">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />

          <div className="portrait-card">
            <div className="portrait-topline">
              <span>PORTFOLIO / 2026</span>
              <span className="portrait-live"><span /> ONLINE</span>
            </div>

            <div className="portrait-image-wrap">
              <img
                src="/images/mansi.jpeg"
                alt="Mansi Saroj"
                className="portrait-image"
              />
              <div className="portrait-image-overlay" />
              <div className="portrait-caption">
                <span>DEVELOPER</span>
                <strong>Mansi Saroj</strong>
              </div>
            </div>

            <div className="portrait-bottomline">
              <span>DESIGN · CODE · CREATE</span>
              <span>INDIA</span>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">✳</span>
            <div>
              <strong>Creative thinking</strong>
              <span>From idea to interface</span>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-code">&lt;/&gt;</span>
            <div>
              <strong>Full Stack</strong>
              <span>Frontend + Backend</span>
            </div>
          </div>

          <div className="hero-orbit-label">CRAFTING THE WEB</div>
        </div>

        <div className="hero-bottom-note">
          <span>SCROLL TO EXPLORE</span>
          <span className="note-line" />
        </div>
      </section>

      <section className="about section-shell section-space" id="about">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title={<>Curious mind.<br /><span className="accent-text">Thoughtful builder.</span></>}
          description="A developer who enjoys learning, solving problems, and turning ideas into practical digital products."
        />

        <div className="about-grid">
          <div className="about-main-card reveal">
            <span className="card-kicker">MY APPROACH</span>
            <h3>
              Good technology should feel <span>simple.</span>
            </h3>
            <p>
              I enjoy working across the frontend and backend, understanding
              how the pieces connect, and building interfaces that are clear,
              responsive, and useful.
            </p>
            <p>
              I&apos;m continuing to strengthen my JavaScript and MERN stack
              skills while bringing hands-on experience with PHP, CodeIgniter,
              and MySQL.
            </p>
            <div className="about-signature">Mansi<span>.</span></div>
          </div>

          <div className="about-side">
            <div className="info-card reveal">
              <span className="info-icon">⌘</span>
              <div>
                <span className="info-label">FOCUS</span>
                <strong>Full Stack Development</strong>
                <p>Web applications · APIs · Responsive UI</p>
              </div>
            </div>
            <div className="info-card reveal">
              <span className="info-icon">⌖</span>
              <div>
                <span className="info-label">LOCATION</span>
                <strong>Mumbai, Maharashtra</strong>
                <p>Open to suitable opportunities</p>
              </div>
            </div>
            <div className="info-card reveal">
              <span className="info-icon">↗</span>
              <div>
                <span className="info-label">CURRENT GOAL</span>
                <strong>Build better products</strong>
                <p>Learn, create, and improve every day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-shell section-space" id="skills">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title={<>Technologies I <span className="accent-text">work with.</span></>}
          description="Tools and technologies I've worked with or am continuing to develop."
        />

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card reveal"
              key={skill.name}
              style={{ "--delay": `${(index % 8) * 55}ms` }}
            >
              <span className="skill-symbol">{skill.name.slice(0, 1)}</span>
              <div className="skill-copy">
                <strong>{skill.name}</strong>
                <span>{skill.category}</span>
              </div>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section section-shell section-space" id="experience">
        <SectionHeading
          eyebrow="THE JOURNEY"
          title={<>Where I&apos;ve <span className="accent-text">worked.</span></>}
          description="My professional experience and the technologies used along the way."
        />

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item reveal" key={experience.company}>
              <div className="timeline-marker">
                <span />
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <span className="card-kicker">{experience.period}</span>
                    <h3>{experience.role}</h3>
                    <p className="timeline-company">{experience.company}</p>
                  </div>
                  <span className="timeline-index">0{index + 1}</span>
                </div>
                <p className="timeline-description">{experience.description}</p>
                <div className="tag-list">
                  {experience.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section section-shell section-space" id="education">
        <SectionHeading
          eyebrow="EDUCATION"
          title={<>Learning is a <span className="accent-text">journey.</span></>}
          description="My academic background."
        />

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card reveal" key={item.course}>
              <span className="education-icon">✳</span>
              <span className="card-kicker">{item.year}</span>
              <h3>{item.course}</h3>
              <p>{item.institute}</p>
              <span className="education-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section-shell section-space" id="projects">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title={<>Ideas into <span className="accent-text">experiences.</span></>}
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1} reveal`} key={project.title}>
              <div className="project-art">
                <div className="project-art-grid" />
                <span className="project-art-symbol">
                  {index === 0 ? "↗" : index === 1 ? "₹" : index === 2 ? "✓" : "◈"}
                </span>
                <span className="project-art-type">{project.type}</span>
                <span className="project-art-orbit" />
              </div>

              <div className="project-content">
                <div className="project-heading">
                  <h3>{project.title}</h3>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                      <ArrowIcon diagonal />
                    </a>
                  ) : (
                    <span className="project-coming-soon">CONCEPT</span>
                  )}
                </div>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                {project.link && (
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    {project.label} <ArrowIcon diagonal />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="certificates-section section-shell section-space" id="certificates">
        <SectionHeading
          eyebrow="CERTIFICATES"
          title={<>Always keep <span className="accent-text">growing.</span></>}
          description="Add your certificate files and verified links here."
        />

        <div className="certificate-card reveal">
          <div className="certificate-icon">✧</div>
          <div className="certificate-copy">
            <span className="card-kicker">CERTIFICATION</span>
            <h3>Full Stack Development</h3>
            <p>SDAC Infotech</p>
          </div>
          <a
            className="certificate-link"
            href="/certificates/certificate.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View certificate <ArrowIcon diagonal />
          </a>
        </div>

        <div className="resume-card reveal">
          <div>
            <span className="card-kicker">WANT THE DETAILS?</span>
            <h3>Take a look at my resume.</h3>
          </div>
          <a className="button-primary" href="/resume.pdf" target="_blank" rel="noreferrer">
            View resume <ArrowIcon diagonal />
          </a>
        </div>
      </section>

      <section className="contact-section section-shell section-space" id="contact">
        <div className="contact-card reveal">
          <div className="contact-glow" />
          <span className="eyebrow"><span className="eyebrow-dot" /> GET IN TOUCH</span>
          <h2>
            Have a good idea?
            <br />
            <span className="accent-text">Let&apos;s build it.</span>
          </h2>
          <p>
            Interested in working together or discussing an opportunity?
            Feel free to reach out.
          </p>

         
<div className="contact-actions">
  <a className="button-primary" href={`mailto:${EMAIL}`}>
    Email me <ArrowIcon diagonal />
  </a>

  <a
    className="button-secondary"
    href={WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp <ArrowIcon diagonal />
  </a>

  <a
    className="button-secondary"
    href={INSTAGRAM}
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram <ArrowIcon diagonal />
  </a>

  <a
    className="button-secondary"
    href={LINKEDIN}
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn <ArrowIcon diagonal />
  </a>
</div>


          <button className="contact-email" onClick={copyEmail}>
            {copied ? "Copied to clipboard ✓" : EMAIL}
            <span>{copied ? "✓" : "↗"}</span>
          </button>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <button className="footer-brand" onClick={() => goTo("home")}>
          M<span>.</span>
        </button>
        <p>Designed and built by Mansi Saroj.</p>
        <button className="footer-top-link" onClick={() => goTo("home")}>
          Back to top ↑
        </button>
      </footer>

      <button
        className={`scroll-top ${showTop ? "scroll-top-visible" : ""}`}
        onClick={() => goTo("home")}
        aria-label={`Back to top. Page scroll progress ${Math.round(progress)} percent`}
        title="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg className="scroll-ring" viewBox="0 0 48 48" aria-hidden="true">
          <circle className="scroll-ring-track" cx="24" cy="24" r="21" />
          <circle
            className="scroll-ring-progress"
            cx="24"
            cy="24"
            r="21"
            strokeDasharray={circumference}
            strokeDashoffset={ringOffset}
          />
        </svg>
        <span className="scroll-top-arrow"><ArrowIcon /></span>
      </button>
    </main>
  );
}
