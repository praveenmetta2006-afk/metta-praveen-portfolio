import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Metta Praveen Kumar",
  role: "Full Stack + AI Developer",
  college: "Lendi Institute of Engineering and Technology",
  branch: "Computer Science Engineering",
  year: "3rd Year",
  cgpa: "9.19",
  graduation: "2028",
  location: "Vizag, Andhra Pradesh",
  email: "praveenmetta2006@gmail.com",
  phone: "8374131583",
  github: "https://github.com/praveenmetta2006-afk",
  linkedin: "https://www.linkedin.com/in/metta-praveen-kumar-a0955834a/"
};

const skills = {
  "Programming": ["C", "C++", "Java", "Python"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React"],
  "Database": ["MySQL", "MongoDB"],
  "Tools": ["Git", "GitHub", "VS Code"]
};

const projects = [
  {
    number: "01",
    title: "AgentGuard",
    subtitle: "AI Agent Verification & Error Detection",
    tags: ["React", "Ollama", "LLM", "Node.js"],
    text:
      "A web dashboard for monitoring multi-step AI agent workflows and identifying errors in tool usage and execution. Worked on the frontend dashboard and Ollama/local LLM integration to connect the application with the AI workflow."
  },
  {
    number: "02",
    title: "Fake Interview Detection System",
    subtitle: "AI + Computer Vision",
    tags: ["Python", "AI", "Computer Vision"],
    text:
      "An AI-based interview monitoring system integrating face detection, multiple-face detection, face recognition, continuous identity verification, eye tracking, head pose estimation, gaze analysis, and voice detection. The system flags suspicious behavior such as extra faces, off-screen gaze, and unexpected voices."
  },
  {
    number: "03",
    title: "Quiz Application",
    subtitle: "Java Application",
    tags: ["Java", "Quiz", "Scoring"],
    text:
      "A Java-based quiz application with question handling, answer validation, user interaction, and automated scoring, designed to reduce manual evaluation and provide a simple user-friendly experience."
  },
  {
    number: "04",
    title: "Agri Talk Application",
    subtitle: "Agriculture Software Project",
    tags: ["Agriculture", "Software", "Team Project"],
    text:
      "An agriculture-focused application designed to provide useful farming information and support for a real-world community need. Contributed to planning, development, testing, and feature improvement."
  }
];

const education = [
  {
    period: "2028 — Expected",
    title: "B.Tech — Computer Science Engineering",
    place: "Lendi Institute of Engineering and Technology",
    detail: "Currently in 3rd year • CGPA: 9.19"
  },
  {
    period: "Higher Secondary",
    title: "Intermediate",
    place: "Narayana Junior College",
    detail: "93%"
  },
  {
    period: "Secondary School",
    title: "10th Standard",
    place: "Sri Shanti Niketan High School",
    detail: "91%"
  }
];

const certifications = [
  {
    title: "Neural Networks for Computer Vision and Natural Language Processing",
    provider: "NPTEL",
    period: "Jan–Apr 2026",
    score: "79/100",
    meta: "12-week course"
  },
  {
    title: "Introduction to Industry 4.0 and Industrial Internet of Things",
    provider: "NPTEL",
    period: "Jul–Oct 2025",
    score: "76/100",
    meta: "12-week course"
  },
  {
    title: "Yoga and Positive Psychology for Managing Career and Life",
    provider: "NPTEL",
    period: "Aug–Oct 2024",
    score: "48/100",
    meta: "8-week course"
  },
  {
    title: "EduSkills Virtual Internships",
    provider: "EduSkills",
    period: "Completed",
    score: "",
    meta: "Virtual internship experience"
  }
];

function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          MPK<span>.</span>
        </button>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "education", "contact"].map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <a className="nav-contact" href={`mailto:${profile.email}`}>Let's Talk ↗</a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">FULL STACK + AI DEVELOPER</p>
            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span>code & intelligence.</span>
            </h1>
            <p className="hero-text">
              Computer Science Engineering student focused on full-stack development,
              AI applications, and practical software solutions.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => goTo("projects")}>View My Work ↗</button>
              <button className="secondary-btn" onClick={() => goTo("contact")}>Contact Me</button>
            </div>
            <div className="hero-meta">
              <span>📍 {profile.location}</span>
              <span>🎓 {profile.graduation}</span>
              <span>CGPA {profile.cgpa}</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-card">
              <div className="portrait">
                <div className="portrait-glow"></div>
                <div className="avatar">MPK</div>
                <div className="portrait-label">
                  <span>METTA</span>
                  <strong>PRAVEEN KUMAR</strong>
                </div>
              </div>
              <div className="vertical-text">CREATIVE • DEVELOPER • BUILDER</div>
            </div>
            <div className="floating-code">&lt;/&gt;</div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle number="01" title="About Me" />
          <div className="about-grid">
            <div className="about-lead">
              <p>
                I’m <strong>Metta Praveen Kumar</strong>, a Computer Science Engineering
                student at <strong>Lendi Institute of Engineering and Technology</strong>,
                currently pursuing my B.Tech with a <strong>9.19 CGPA</strong>.
              </p>
            </div>
            <div className="about-body">
              <p>
                I’m passionate about Full Stack Development and Artificial Intelligence,
                with hands-on experience building web applications and AI-based projects.
                I enjoy turning ideas into practical applications and solving real-world
                problems through technology.
              </p>
              <p>
                My current career direction is <strong>Full Stack + AI Development</strong>.
                I’m especially interested in modern web applications, AI/LLM integration,
                and building practical software products.
              </p>
              <div className="about-facts">
                <div><small>EDUCATION</small><span>B.Tech CSE</span></div>
                <div><small>COLLEGE</small><span>Lendi Institute of Engineering and Technology</span></div>
                <div><small>STATUS</small><span>3rd Year Student</span></div>
                <div><small>GRADUATION</small><span>2028</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-dark">
          <SectionTitle number="02" title="Skills" light />
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items], i) => (
              <div className="skill-group" key={group}>
                <span className="skill-index">0{i + 1}</span>
                <h3>{group}</h3>
                <div className="skill-list">
                  {items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle number="03" title="Selected Projects" />
          <div className="projects">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>↗</span>
                </div>
                <div className="project-content">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section section-soft">
          <SectionTitle number="04" title="Education & Credentials" />
          <div className="education-grid">
            <div className="timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-dot"></div>
                  <span className="period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <small>{item.detail}</small>
                </div>
              ))}
            </div>

            <div className="credentials">
              <div className="credential-heading">
                <span>01</span>
                <h3>Certifications</h3>
              </div>
              {certifications.map((cert) => (
                <div className="credential" key={cert.title}>
                  <div>
                    <small>{cert.provider} • {cert.period}</small>
                    <h4>{cert.title}</h4>
                    <p>{cert.meta}{cert.score ? ` • Score ${cert.score}` : ""}</p>
                  </div>
                  <span className="arrow">↗</span>
                </div>
              ))}
              <div className="credential achievement">
                <div>
                  <small>ACHIEVEMENT</small>
                  <h4>LNIT Hackathon</h4>
                  <p>Participant</p>
                </div>
                <span className="arrow">★</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-wrap">
            <p className="eyebrow">05 — GET IN TOUCH</p>
            <h2>Have an idea?<br /><span>Let’s build it.</span></h2>
            <p className="contact-intro">
              I’m open to learning opportunities, collaborations, internships,
              and interesting software projects.
            </p>

            <div className="contact-grid">
              <a href={`mailto:${profile.email}`} className="contact-card">
                <small>EMAIL</small>
                <strong>{profile.email}</strong>
                <span>↗</span>
              </a>
              <a href={`tel:+91${profile.phone}`} className="contact-card">
                <small>PHONE</small>
                <strong>+91 {profile.phone}</strong>
                <span>↗</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-card">
                <small>GITHUB</small>
                <strong>praveenmetta2006-afk</strong>
                <span>↗</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card">
                <small>LINKEDIN</small>
                <strong>Metta Praveen Kumar</strong>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>© {new Date().getFullYear()} Metta Praveen Kumar</div>
        <div>FULL STACK + AI DEVELOPER</div>
        <button onClick={() => goTo("home")}>Back to top ↑</button>
      </footer>
    </div>
  );
}

function SectionTitle({ number, title, light = false }) {
  return (
    <div className={light ? "section-title light" : "section-title"}>
      <span>{number}</span>
      <h2>{title}</h2>
      <div></div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
