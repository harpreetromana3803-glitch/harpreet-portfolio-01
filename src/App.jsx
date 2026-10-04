import "./App.css";

function App() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
  ];

  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A modern and responsive personal portfolio website built with React.js to showcase my skills, projects and experience.",
      tech: ["React.js", "JavaScript", "CSS3"],
      github: "https://github.com/harpreetromana3803-glitch",
      demo: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce website with modern UI, product sections and user-friendly navigation.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/harpreetromana3803-glitch",
      demo: "#",
    },
    {
      title: "Cafe Website",
      description:
        "A modern cafe website with menu, services, about and contact sections.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/harpreetromana3803-glitch",
      demo: "#",
    },
  ];

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container nav-container">

          <a href="#home" className="logo">
            Harpreet<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-btn">
            Let's Talk
          </a>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <main>

        <section id="home" className="hero">

          <div className="container hero-container">

            <div className="hero-content">

              <p className="hero-small">
                WELCOME TO MY PORTFOLIO
              </p>

              <h1>
                Hi, I'm <span>Harpreet Singh</span>
                <br />
                Full Stack Developer
              </h1>

              <p className="hero-description">
                I build modern, responsive and user-friendly web
                applications using modern frontend and backend
                technologies.
              </p>

              <div className="hero-buttons">

                <a href="#projects" className="primary-btn">
                  View My Work →
                </a>

                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>

              </div>

              <div className="social-links">

                <a
                  href="https://github.com/harpreetromana3803-glitch"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/harpreet-ramana-25a1a9296/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a href="mailto:harpreetromana3803@gmail.com">
                  Email
                </a>

              </div>

            </div>

            {/* Code Card */}

            <div className="hero-card">

              <div className="code-card">

                <div className="code-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code-content">

                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="blue">developer</span> = {"{"}
                  </p>

                  <p>
                    &nbsp;&nbsp;name:{" "}
                    <span className="green">
                      "Harpreet Singh"
                    </span>,
                  </p>

                  <p>
                    &nbsp;&nbsp;role:{" "}
                    <span className="green">
                      "Full Stack Developer"
                    </span>,
                  </p>

                  <p>
                    &nbsp;&nbsp;skills: [
                  </p>

                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="green">
                      "React.js"
                    </span>,
                  </p>

                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="green">
                      "Node.js"
                    </span>,
                  </p>

                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="green">
                      "MongoDB"
                    </span>
                  </p>

                  <p>
                    &nbsp;&nbsp;]
                  </p>

                  <p>
                    {"}"}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section">

          <div className="container">

            <div className="section-heading">

              <p>ABOUT ME</p>

              <h2>
                Who I Am
              </h2>

            </div>

            <div className="about-grid">

              <div className="about-image">

                <div className="profile-placeholder">
                  <span>👨‍💻</span>
                </div>

              </div>

              <div className="about-content">

                <h3>
                  I'm a passionate{" "}
                  <span>Full Stack Developer</span>
                </h3>

                <p>
                  Hi, I'm Harpreet Singh, a passionate Full Stack
                  Developer who enjoys building modern, responsive
                  and user-friendly web applications.
                </p>

                <p>
                  I work with frontend and backend technologies to
                  create complete web solutions. I am continuously
                  learning new technologies and improving my
                  development skills.
                </p>

                <div className="about-info">

                  <div>
                    <strong>Name</strong>
                    <span>Harpreet Singh</span>
                  </div>

                  <div>
                    <strong>Email</strong>
                    <span>
                      harpreetromana3803@gmail.com
                    </span>
                  </div>

                  <div>
                    <strong>Role</strong>
                    <span>
                      Full Stack Developer
                    </span>
                  </div>

                  <div>
                    <strong>Location</strong>
                    <span>India</span>
                  </div>

                </div>

                <a
                  href="#contact"
                  className="primary-btn"
                >
                  Hire Me
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="container">

            <div className="section-heading">

              <p>MY SKILLS</p>

              <h2>
                Technologies I Use
              </h2>

            </div>

            <div className="skills-grid">

              {skills.map((skill, index) => (

                <div
                  className="skill-card"
                  key={index}
                >

                  <div className="skill-icon">
                    ◆
                  </div>

                  <h3>
                    {skill}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section">

          <div className="container">

            <div className="section-heading">

              <p>MY WORK</p>

              <h2>
                Featured Projects
              </h2>

            </div>

            <div className="projects-grid">

              {projects.map((project, index) => (

                <div
                  className="project-card"
                  key={index}
                >

                  <div className="project-image">

                    <span>
                      &lt;/&gt;
                    </span>

                  </div>

                  <div className="project-content">

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="tech-list">

                      {project.tech.map(
                        (tech, techIndex) => (

                          <span key={techIndex}>
                            {tech}
                          </span>

                        )
                      )}

                    </div>

                    <div className="project-buttons">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        GitHub →
                      </a>

                      <a
                        href={project.demo}
                        className="project-link"
                      >
                        Live Demo →
                      </a>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="section education-section"
        >

          <div className="container">

            <div className="section-heading">

              <p>MY JOURNEY</p>

              <h2>
                Education & Learning
              </h2>

            </div>

            <div className="timeline">

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <span>
                    BCA
                  </span>

                  <h3>
                    Bachelor of Computer Applications
                  </h3>

                  <p>
                    Studying computer applications with
                    focus on programming, databases,
                    software development and web
                    technologies.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <span>
                    Full Stack Development
                  </span>

                  <h3>
                    Web Development
                  </h3>

                  <p>
                    Learning and working with HTML, CSS,
                    JavaScript, React.js, Node.js,
                    Express.js, MongoDB and MySQL.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="container">

            <div className="section-heading">

              <p>GET IN TOUCH</p>

              <h2>
                Let's Work Together
              </h2>

            </div>

            <div className="contact-grid">

              <div className="contact-info">

                <h3>
                  Have a project in mind?
                </h3>

                <p>
                  I'm always interested in hearing about
                  new projects and opportunities. Feel free
                  to contact me.
                </p>

                <div className="contact-item">

                  <span>📧</span>

                  <div>

                    <strong>Email</strong>

                    <p>
                      harpreetromana3803@gmail.com
                    </p>

                  </div>

                </div>

                <div className="contact-item">

                  <span>💻</span>

                  <div>

                    <strong>GitHub</strong>

                    <p>
                      harpreetromana3803-glitch
                    </p>

                  </div>

                </div>

                <div className="contact-item">

                  <span>🔗</span>

                  <div>

                    <strong>LinkedIn</strong>

                    <p>
                      Harpreet Singh
                    </p>

                  </div>

                </div>

              </div>

              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();

                  window.location.href =
                    "mailto:harpreetromana3803@gmail.com";
                }}
              >

                <div className="form-row">

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                  />

                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  required
                />

                <textarea
                  rows="7"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-content">

          <p>
            © 2026 Harpreet Singh. All Rights Reserved.
          </p>

          <p>
            Built with <span>React.js</span>
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;