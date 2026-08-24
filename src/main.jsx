import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Menu,
  Server,
  Terminal,
  X,
  Cpu,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

import "./styles.css";

const projects = [
  {
    title: "MTF Analytics Dashboard",
    type: "FINTECH / WEB DEVELOPMENT",
    desc: "A modern dashboard prototype for comparing Margin Trading Facility data, broker details and stock-level insights.",
    tags: ["React", "JavaScript", "REST APIs", "Vercel"],
    github: "https://github.com/Supriyaojhaa/mtf-finals-sub",
    demo: "https://mtfprotype.vercel.app/",
  },
  {
    title: "Vows & Vision",
    type: "FULL-STACK WEB APPLICATION",
    desc: "Wedding planning platform connecting users with vendors for photography, catering, decor, makeup, venues and more.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Data Processing Dashboard",
    type: "DATA ANALYTICS / PYTHON",
    desc: "Full-stack dashboard for CSV/JSON validation, statistical analysis and data visualizations.",
    tags: ["Python", "Flask", "Pandas", "NumPy", "Matplotlib"],
    github: "#",
    demo: "#",
  },
  {
    title: "ModernWoods",
    type: "FRONTEND / E-COMMERCE",
    desc: "Modern furniture shopping experience with product discovery, cart, wishlist and responsive UI.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
];

const skills = [
  ["React / JavaScript", Code2, "FRONTEND"],
  ["Node.js / Express", Server, "BACKEND"],
  ["Python / Flask", Terminal, "DEVELOPMENT"],
  ["SQL / MongoDB", Database, "DATABASE"],
  ["Power BI / Excel", BarChart3, "ANALYTICS"],
  ["Git / GitHub", GitBranch, "TOOLS"],
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "REST APIs",
  "MongoDB",
  "Mongoose",
  "JWT",
  "Python",
  "Flask",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Power BI",
  "Excel",
  "Git",
  "GitHub",
  "Vite",
];

function App() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenu(false);
  };

  return (
    <div className="app">

      {/* Cursor glow */}
      <div className="cursor-glow"></div>

      {/* Background grid */}
      <div className="grid-background">
        <div className="scanline"></div>
      </div>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container nav-inner">

          <button
            className="logo"
            onClick={() => go("home")}
          >
            SO<span>.</span>
          </button>

          <nav className={menu ? "nav-links open" : "nav-links"}>

            {[
              "about",
              "skills",
              "experience",
              "projects",
              "contact",
            ].map((item, index) => (
              <button
                key={item}
                onClick={() => go(item)}
              >
                <small>0{index + 1}</small>
                {item}
              </button>
            ))}

          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero container"
        >

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="availability">
              <span></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <div className="terminal-line">
              <Terminal size={15} />
              developer.exe is running...
            </div>

            <h1>
              HI, I'M
              <br />
              <span>SUPRIYA.</span>
            </h1>

            <div className="hero-slogan">
              <strong>FROM “WHAT IF?”</strong>
              <b>TO “IT WORKS.”</b>
            </div>

            <p className="hero-description">
              Software Engineer crafting web experiences,
              full-stack applications & data-driven products.
            </p>

            <div className="hero-buttons">

              <button
                className="cyber-button pink"
                onClick={() => go("projects")}
              >
                VIEW MY WORK
                <ArrowUpRight size={18} />
              </button>

              <button
                className="cyber-button cyan"
                onClick={() => go("contact")}
              >
                LET'S CONNECT
                <ArrowUpRight size={18} />
              </button>

              <a
                className="cyber-button outline"
                href="/Supriya_Ojha_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                RESUME
                <ArrowUpRight size={18} />
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/Supriyaojhaa"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch size={17} />
                GITHUB
              </a>

              <a
                href="https://www.linkedin.com/in/supriyaojha04"
                target="_blank"
                rel="noreferrer"
              >
                <Link2 size={17} />
                LINKEDIN
              </a>

              <a href="mailto:supriyaojhaa@gmail.com">
                <Mail size={17} />
                EMAIL
              </a>

            </div>

          </motion.div>

          {/* ================= PORTRAIT ================= */}

          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
          >

            <div className="cyber-frame">

              <div className="rotating-ring ring-one"></div>
              <div className="rotating-ring ring-two"></div>
              <div className="rotating-ring ring-three"></div>

              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>

              <div className="portrait-container">

                <img
                  src="/me.jpg"
                  alt="Supriya Ojha"
                  className="profile-image"
                />

                <div className="portrait-scan"></div>

              </div>

              <div className="hud hud-top">
                SYS.STATUS
                <strong>ONLINE</strong>
              </div>

              <div className="hud hud-bottom">
                CORE
                <strong>REACT</strong>
              </div>

              <div className="floating-tag frontend">
                <Code2 size={14} />
                FRONTEND
              </div>

              <div className="floating-tag backend">
                <Cpu size={14} />
                FULL STACK
              </div>

            </div>

          </motion.div>

        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section container"
        >

          <div className="section-heading">
            <span>01 /</span>
            <h2>ABOUT ME</h2>
          </div>

          <div className="about-grid">

            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <p className="big-text">
                Hey, I'm Supriya — I turn
                <span> “what if?” </span>
                into
                <span> “look, I built it.”</span>
                🚀
              </p>

              <p>
                I'm a developer who likes clean interfaces,
                clever ideas and making things that actually work.
                I spend my days writing code, chasing bugs,
                experimenting with new technology and occasionally
                wondering why I touched the code that was already working. 💀
              </p>

              <p className="highlight-text">
                I CODE. I CREATE. I BREAK THINGS.
                I FIX THEM. I REPEAT.
              </p>

            </motion.div>

            <motion.div
              className="stats"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >

              <div className="stat">
                <strong>8.9</strong>
                <span>CGPA</span>
              </div>

              <div className="stat">
                <strong>4+</strong>
                <span>PROJECTS</span>
              </div>

              <div className="stat">
                <strong>10+</strong>
                <span>TECHNOLOGIES</span>
              </div>

              <div className="stat">
                <strong>6M+</strong>
                <span>EXPERIENCE</span>
              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section container"
        >

          <div className="section-heading">
            <span>02 /</span>
            <h2>SKILLS & TOOLKIT</h2>
          </div>

          <div className="skills-grid">

            {skills.map(
              ([name, Icon, category], index) => (

                <motion.div
                  className="skill-card"
                  key={name}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >

                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3>{name}</h3>
                    <p>{category}</p>
                  </div>

                  <span className="skill-arrow">
                    ↗
                  </span>

                </motion.div>

              )
            )}

          </div>

          <div className="technology-cloud">

            {technologies.map((technology) => (

              <span key={technology}>
                {technology}
              </span>

            ))}

          </div>

        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section container"
        >

          <div className="section-heading">
            <span>03 /</span>
            <h2>EXPERIENCE</h2>
          </div>

          <div className="timeline">

            {/* Global AI */}

            <motion.article
              className="experience-card"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="experience-number">
                01
              </div>

              <div className="experience-header">

                <div>

                  <span className="date">
                    JAN 2026 — JUN 2026
                  </span>

                  <h3>
                    Associate Software Engineer
                  </h3>

                  <p>
                    Global AI Technologies · Hybrid
                  </p>

                </div>

                <Rocket className="experience-icon" />

              </div>

              <ul>

                <li>
                  Worked on software development and
                  data-focused solutions.
                </li>

                <li>
                  Built dashboards and processed data using
                  Python, Pandas, NumPy and visualization tools.
                </li>

                <li>
                  Collaborated on application development,
                  debugging and practical engineering workflows.
                </li>

              </ul>

            </motion.article>

            {/* Xebia */}

            <motion.article
              className="experience-card"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
              }}
            >

              <div className="experience-number">
                02
              </div>

              <div className="experience-header">

                <div>

                  <span className="date">
                    JUN 2025 — JUL 2025
                  </span>

                  <h3>
                    Full Stack Development Intern
                  </h3>

                  <p>
                    Xebia Internship · Remote
                  </p>

                </div>

                <Layers3 className="experience-icon" />

              </div>

              <ul>

                <li>
                  Built a full-stack mental wellness platform
                  using the MERN Stack, featuring teletherapy
                  booking, mood tracking, and user/therapist dashboards.
                </li>

                <li>
                  Designed responsive and accessible UI/UX using
                  React.js and Tailwind CSS with cross-browser compatibility.
                </li>

                <li>
                  Developed and integrated RESTful APIs using
                  Node.js, Express.js and MongoDB.
                </li>

                <li>
                  Contributed to end-to-end deployment and
                  scalable system architecture.
                </li>

              </ul>

            </motion.article>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section container"
        >

          <div className="section-heading">
            <span>04 /</span>
            <h2>SELECTED PROJECTS</h2>
          </div>

          <div className="projects-grid">

            {projects.map(
              (project, index) => (

                <motion.article
                  className="project-card"
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                >

                  <div className="project-top">

                    <span>
                      PROJECT 0{index + 1}
                    </span>

                    <ArrowUpRight size={20} />

                  </div>

                  <p className="project-type">
                    {project.type}
                  </p>

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.desc}
                  </p>

                  <div className="tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="project-links">

                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitBranch size={16} />
                        CODE
                      </a>
                    )}

                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink size={16} />
                        LIVE DEMO
                      </a>
                    )}

                  </div>

                </motion.article>

              )
            )}

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="cta container">

          <div className="cta-glow"></div>

          <div>

            <span>
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              LET'S BUILD
              <br />
              <em>SOMETHING COOL.</em>
            </h2>

          </div>

          <button
            className="cyber-button pink"
            onClick={() => go("contact")}
          >
            GET IN TOUCH
            <ArrowUpRight size={18} />
          </button>

        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section container contact"
        >

          <div className="section-heading">
            <span>05 /</span>
            <h2>CONTACT</h2>
          </div>

          <div className="contact-grid">

            <div>

              <p className="big-text">
                Let's talk about your
                <span> next idea.</span>
              </p>

              <p className="contact-description">
                Whether it's a web application, dashboard,
                API or a new opportunity, I'd love to hear from you.
              </p>

              <a
                className="email"
                href="mailto:supriyaojhaa@gmail.com"
              >
                supriyaojhaa@gmail.com
                <ArrowUpRight size={20} />
              </a>

              <p className="location">
                <MapPin size={18} />
                India
              </p>

            </div>

            <div className="contact-card">

              <a href="mailto:supriyaojhaa@gmail.com">
                <Mail />
                <span>EMAIL ME</span>
                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/Supriyaojhaa"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch />
                <span>GITHUB</span>
                <ArrowUpRight />
              </a>

              <a
                href="https://www.linkedin.com/in/supriyaojha04"
                target="_blank"
                rel="noreferrer"
              >
                <Link2 />
                <span>LINKEDIN</span>
                <ArrowUpRight />
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="container footer-inner">

          <span>
            © 2026 SUPRIYA OJHA
          </span>

          <span className="footer-center">
            DESIGNED & BUILT WITH REACT
            <Sparkles size={14} />
          </span>

          <button onClick={() => go("home")}>
            BACK TO TOP ↑
          </button>

        </div>

      </footer>

    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);