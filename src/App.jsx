
import { useEffect, useState } from "react";
import "./App.css";

const sections = ["Home", "About", "Projects","Experience", "Skills", "Contact"];

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
              <div className="portrait-placeholder">
                <span>
                  YOUR
                  <br />
                  PORTRAIT
                </span>
              </div>
            </div>

            <h1 id="hero-title">
              Your Name<span>.</span>
            </h1>

            <p className="hero-description">
              Tech student · Developer · Creative thinker
            </p>

            <p className="hero-hint">
              CURIOUS BY NATURE. ALWAYS BUILDING.
            </p>
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
      </section>

      
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
          your.email@example.com
        </span>
      </div>

      <div className="contact-detail">
        <span className="contact-label">BASED IN</span>
        <span className="contact-value">
          Nepal
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
          <span>LinkedIn — add your link</span>
          <span>GitHub — add your link</span>
        </div>
      </div>
    </div>

    <p className="contact-footer">
      GOOD THINGS START WITH A CONVERSATION.
    </p>
  </div>
)}


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
        <footer className="bottom-bar">
          <span>PERSONAL PORTFOLIO</span>
          <span>DESIGNED WITH INTENTION ↗</span>
        </footer>
      )}
    </main>
  );
}
