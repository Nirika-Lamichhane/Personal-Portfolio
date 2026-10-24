import { useEffect, useState } from "react";
import "./App.css";

const sections = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

function getSectionFromUrl() {
  const section = window.location.hash.slice(1);
  return sections.includes(section) ? section : "Home";
}

export default function App() {
  const [activeSection, setActiveSection] = useState(getSectionFromUrl);

  useEffect(() => {
    function handleHistoryChange() {
      setActiveSection(getSectionFromUrl());
    }

    window.addEventListener("popstate", handleHistoryChange);
    window.addEventListener("hashchange", handleHistoryChange);

    return () => {
      window.removeEventListener("popstate", handleHistoryChange);
      window.removeEventListener("hashchange", handleHistoryChange);
    };
  }, []);

  function navigateTo(section) {
    if (!sections.includes(section)) return;

    window.history.pushState(null, "", `#${section}`);
    setActiveSection(section);
  }

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${event.clientX - bounds.left}px`
    );

    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${event.clientY - bounds.top}px`
    );
  }

  return (
    <main className="home" onPointerMove={handlePointerMove}>
      <header className="topbar">
        <button
          className="wordmark"
          onClick={() => navigateTo("Home")}
          aria-label="Go to home"
        >
          PORTFOLIO<span>.</span>
        </button>

        <div aria-hidden='true'> </div>

        <nav className="navigation" aria-label="Main navigation">
          {sections.map((section) => (
            <button
              key={section}
              className={`nav-link ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => navigateTo(section)}
              aria-current={
                activeSection === section ? "page" : undefined
              }
            >
              {section}
            </button>
          ))}
        </nav>
      </header>

      <section
        key={activeSection}
        className="hero view-transition"
        aria-labelledby="hero-title"
      >
        {activeSection === "Home" && (
          <>
            <p className="eyebrow">
              <span className="status-dot" />
              BUILDING THINGS WITH PURPOSE
            </p>

            <div className="portrait-frame">
              <img 
                src="/portrait.png" 
                alt="Nirika Lamichhane" 
                className="portrait-image" 
              />
            </div>

            <h1 id="hero-title">
              Nirika Lamichhane
            </h1>

            <p className="hero-description">
              Machine Learning · NLP · Full-Stack Development
            </p>
            
            <div className="hero-actions" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <button 
                className="contact-button" 
                onClick={() => navigateTo("Projects")}
                style={{ cursor: 'pointer' }}
              >
                See My Work
                <span aria-hidden="true" style={{ marginLeft: '8px' }}>↗</span>
              </button>
            </div>

           <div className="floating-tech-stack" aria-hidden="true">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="tech-icon py" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="tech-icon pt" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="tech-icon re" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="tech-icon tf" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" alt="Keras" className="tech-icon ke" />
            </div>

          </>
        )}

        {activeSection === "About" && (
          <div className="about-layout">
            <div className="about-heading">
              <p className="eyebrow">
                <span className="status-dot" />
                A LITTLE INTRODUCTION
              </p>

              <h1 id="hero-title" className="about-title">
                Curious mind.
                <br />
                <span>Technical roots.</span>
                <br />
                AI-driven ideas.
              </h1>

              <p className="about-subtitle">
                Computer Engineering student exploring the possibilities
                of artificial intelligence.
              </p>
            </div>

            <div className="about-details">
              <p>
                I'm studying Computer Engineering at IOE Thapathali Campus,
                with a strong interest in artificial intelligence and its
                potential to solve real-world problems.
              </p>

              <p>
                I enjoy exploring new technologies, experimenting with ideas,
                and learning by building. For me, the most exciting part of
                technology is turning curiosity into something useful.
              </p>

              <p>
                I'm open to opportunities where I can learn, contribute,
                collaborate, and grow — from internships and full-time roles
                to freelance projects and building products of my own.
              </p>

              <div className="about-tags" aria-label="Areas of interest">
                <span>Computer Engineering</span>
                <span>Artificial Intelligence</span>
                <span>Building &amp; Experimenting</span>
              </div>
            </div>
          </div>
        )}

        {activeSection === "Projects" && (
          <div className="projects-layout">
            <div className="projects-heading">
              <div>
                <p className="eyebrow">
                  <span className="status-dot" />
                  SELECTED WORK
                </p>

                <h1 id="hero-title" className="projects-title">
                  Things I've
                  <br />
                  <span>been building.</span>
                </h1>
              </div>

              <p className="projects-intro">
                A selection of projects, experiments, and ideas
                brought to life through code.
              </p>
            </div>

            <div className="featured-grid">
              <article className="project-card">
                <div className="project-visual project-visual-one">
                  <span className="project-number">PROJECT 01</span>

                  <div className="project-art project-art-one">
                    <span>01</span>
                  </div>

                  <span className="project-visual-label">
                    FEATURED PROJECT
                  </span>
                </div>

                <div className="project-info">
                  <div className="project-title-row">
                    <div>
                      <p className="project-category">AI / PLACEHOLDER</p>
                      <h2>Project One</h2>
                    </div>

                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <p className="project-description">
                    A short introduction to your first featured project will
                    go here. We'll add the problem, your solution, and what
                    makes the project interesting.
                  </p>

                  <div className="project-tags">
                    <span>Technology</span>
                    <span>Research</span>
                    <span>Development</span>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-visual project-visual-two">
                  <span className="project-number">PROJECT 02</span>

                  <div className="project-art project-art-two">
                    <span>02</span>
                  </div>

                  <span className="project-visual-label">
                    FEATURED PROJECT
                  </span>
                </div>

                <div className="project-info">
                  <div className="project-title-row">
                    <div>
                      <p className="project-category">
                        EXPERIMENT / PLACEHOLDER
                      </p>
                      <h2>Project Two</h2>
                    </div>

                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <p className="project-description">
                    Your second project will be introduced here, with room
                    to explain its purpose, the tools you used, and the
                    outcome you achieved.
                  </p>

                  <div className="project-tags">
                    <span>Design</span>
                    <span>Engineering</span>
                    <span>Experiment</span>
                  </div>
                </div>
              </article>
            </div>

            <p className="projects-note">
              TWO PROJECTS · MORE DETAILS COMING SOON
            </p>
          </div>
        )}

        {activeSection === "Experience" && (
          <div className="experience-layout">
            <div className="experience-heading">
              <p className="eyebrow">
                <span className="status-dot" />
                MY PROFESSIONAL JOURNEY
              </p>

              <h1 id="hero-title" className="experience-title">
                Experience &
                <br />
                <span>growth.</span>
              </h1>

              <p className="experience-intro">
                A record of the roles, collaborations, and opportunities
                that have shaped my journey in technology.
              </p>
            </div>

            <div className="experience-list">
              <article className="experience-item">
                <div className="experience-marker">
                  <span />
                </div>

                <div className="experience-meta">
                  <span>EXPERIENCE 01</span>
                  <span>DATE TBD</span>
                </div>

                <div className="experience-content">
                  <p className="experience-type">ROLE / PLACEHOLDER</p>
                  <h2>Your First Role</h2>
                  <p className="experience-company">
                    Organization or Company Name
                  </p>
                  <p className="experience-description">
                    Add a brief summary of your responsibilities,
                    the work you contributed to, and what you learned.
                  </p>
                  <div className="experience-tags">
                    <span>Collaboration</span>
                    <span>Problem-solving</span>
                  </div>
                </div>
              </article>

              <article className="experience-item">
                <div className="experience-marker">
                  <span />
                </div>

                <div className="experience-meta">
                  <span>EXPERIENCE 02</span>
                  <span>DATE TBD</span>
                </div>

                <div className="experience-content">
                  <p className="experience-type">ROLE / PLACEHOLDER</p>
                  <h2>Your Second Role</h2>
                  <p className="experience-company">
                    Organization, Internship, or Team
                  </p>
                  <p className="experience-description">
                    Describe another relevant role, internship, team
                    contribution, or professional experience here.
                  </p>
                  <div className="experience-tags">
                    <span>Technology</span>
                    <span>Learning</span>
                  </div>
                </div>
              </article>
            </div>

            <p className="experience-footer">
              EVERY EXPERIENCE IS AN OPPORTUNITY TO GROW.
            </p>
          </div>
        )}

        {activeSection === "Skills" && (
          <div className="skills-layout">
            <div className="skills-heading">
              <p className="eyebrow">
                <span className="status-dot" />
                MY TOOLKIT
              </p>

              <h1 id="hero-title" className="skills-title">
                Skills &
                <br />
                <span>curiosity.</span>
              </h1>

              <p className="skills-intro">
                The tools, concepts, and technical areas I’m exploring
                as I grow as an engineer and developer.
              </p>
            </div>

            <div className="skills-grid">
              <article className="skill-card">
                <span className="skill-number">01</span>
                <h2>Programming</h2>
                <p>Languages and foundations</p>
                <div className="skill-tags">
                  <span>Language 01</span>
                  <span>Language 02</span>
                  <span>Language 03</span>
                </div>
              </article>

              <article className="skill-card">
                <span className="skill-number">02</span>
                <h2>AI & Machine Learning</h2>
                <p>Intelligent systems and experimentation</p>
                <div className="skill-tags">
                  <span>Topic 01</span>
                  <span>Topic 02</span>
                  <span>Topic 03</span>
                </div>
              </article>

              <article className="skill-card">
                <span className="skill-number">03</span>
                <h2>Web Development</h2>
                <p>Building interactive digital experiences</p>
                <div className="skill-tags">
                  <span>Technology 01</span>
                  <span>Technology 02</span>
                  <span>Technology 03</span>
                </div>
              </article>

              <article className="skill-card">
                <span className="skill-number">04</span>
                <h2>Tools & Workflow</h2>
                <p>Tools for building and collaboration</p>
                <div className="skill-tags">
                  <span>Tool 01</span>
                  <span>Tool 02</span>
                  <span>Tool 03</span>
                </div>
              </article>
            </div>

            <p className="skills-note">
              ALWAYS LEARNING. ALWAYS EXPERIMENTING.
            </p>
          </div>
        )}

        {activeSection === "Contact" && (
          <div className="contact-layout">
            <div className="contact-main">
              <p className="eyebrow">
                <span className="status-dot" />
                LET’S CONNECT
              </p>

              <h1 id="hero-title" className="contact-title">
                Have an idea?
                <br />
                <span>Let’s talk.</span>
              </h1>

              <p className="contact-description">
                Whether you have an interesting project, an opportunity,
                or simply want to exchange ideas about technology and AI,
                I’d love to hear from you.
              </p>

              <a
                className="contact-button"
                href="mailto:your.email@example.com"
              >
                Get in touch
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">
                  nirikalamichhane12@gmail.com
                </span>
              </div>

              <div className="contact-detail">
                <span className="contact-label">BASED IN</span>
                <span className="contact-value">
                  Kathmandu, Nepal
                </span>
              </div>

              <div className="contact-detail">
                <span className="contact-label">OPEN TO</span>
                <span className="contact-value">
                  Internships · Projects · Collaboration
                </span>
              </div>

              <div className="contact-detail">
                <span className="contact-label">SOCIAL LINKS</span>
                <div className="contact-socials">
                  <a href="https://www.linkedin.com/in/nirika-lamichhane/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                  <a href="https://github.com/Nirika-Lamichhane" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                  <a href="https://medium.com/@nirikalamichhane12" target="_blank" rel="noopener noreferrer">Medium ↗</a>
                </div>
              </div>
            </div>

            <p className="contact-footer">
              GOOD THINGS START WITH A CONVERSATION.
            </p>
          </div>
        )}
      </section>

      {activeSection !== "Home" ? (
        <footer className="bottom-bar">
          <span>{activeSection.toUpperCase()}</span>

          <button
            className="back-home"
            onClick={() => navigateTo("Home")}
          >
            ← Back home
          </button>
        </footer>
     ) : (
        <footer className="bottom-bar center-footer">
          <div className="footer-links">
            <a href="https://github.com/Nirika-Lamichhane" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/nirika-lamichhane/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            
            <a href="https://medium.com/@nirikalamichhane12" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Medium">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.91 17.58c-2.9 0-5.25-2.45-5.25-5.46s2.35-5.46 5.25-5.46 5.25 2.45 5.25 5.46-2.35 5.46-5.25 5.46zm10.74 0c-1.48 0-2.68-2.45-2.68-5.46s1.2-5.46 2.68-5.46 2.68 2.45 2.68 5.46-1.2 5.46-2.68 5.46zm4.68 0c-.41 0-.75-2.45-.75-5.46s.34-5.46.75-5.46 .75 2.45 .75 5.46-.34 5.46-.75 5.46z" />
              </svg>
            </a>
          </div>
        </footer>
      )}
    </main>
  );
}