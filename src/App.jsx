import { useEffect, useState } from "react";
import "./App.css";

const sections = ["Home", "About", "Projects", "Experience", "Contact"];

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
            
            {/* Action Buttons */}
            <div className="hero-cta-group">
              <button onClick={() => setActiveSection("Projects")} className="hero-btn-outline">
                See My Work ↗
              </button>
              <button onClick={() => setActiveSection("Contact")} className="hero-btn-outline">
                Let's Talk ↗
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
                I'm a final-year Computer Engineering student at IOE Thapathali Campus, 
                deeply interested in machine learning, natural language processing, 
                and building scalable full-stack applications.
              </p>

              <p>
                Whether I'm developing recommendation engines, experimenting with deep 
                learning architectures, or sharing knowledge through my medium blogs, I love turning complex problems into intuitive solutions.
              </p>

              <p>
                I'm always looking for opportunities to collaborate, learn, and engineer 
                purpose-driven technology.
              </p>

              <div className="about-tags" aria-label="Areas of interest">
                <span>Machine Learning</span>
                <span>NLP</span>
                <span>Full-Stack ML Development</span>
                <span>Learning and Sharing</span>
              </div>
            </div>
          </div>
        )}

        {activeSection === "Projects" && (
          <div className="projects-layout">
            <div className="projects-header">
              <div className="projects-title-block">
                <p className="eyebrow">
                  <span className="status-dot" />
                  SELECTED WORK
                </p>
                <h1 className="projects-title">
                  Things I've <br />
                  <span>Built.</span>
                </h1>
                <p className="projects-subtitle" style={{ marginTop: '1rem', fontSize: '1.05rem', color: '#333' }}>
                  These are my two main and most recent projects. You can explore the rest of my work and experiments on my <a href="https://github.com/Nirika-Lamichhane" target="_blank" rel="noopener noreferrer" style={{ color: '#2a5038', fontWeight: '600', textDecoration: 'none' }}>GitHub</a>.
                </p>
          
              </div>
              <div className="projects-header-action">
                <a href="/Nirika Lamichhane.pdf" target="_blank" rel="noopener noreferrer" className="contact-button">
                  View Full Resume 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </a>
              
              </div>
            </div>

            <div className="projects-grid">
              {/* Project 1 */}
              <div className="project-card">
                <div className="project-info">
                  <p className="project-category">NLP / DEEP LEARNING</p>
                  <div className="project-title-row">
                    <h2>Aspect-Based Nepali Sentiment Analysis</h2>
                    <a href="https://github.com/Nirika-Lamichhane" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View on GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                    </a>
                  </div>
                  <p className="project-description">
                    A multi-task hybrid CNN and BiLSTM architecture utilizing FastText embeddings to perform aspect-based sentiment analysis on Nepali YouTube comments over 5 selected aspects.
                  </p>
                  <div className="about-tags project-tags">
                    <span>PyTorch</span>
                    <span>BiLSTM</span>
                    <span>CNN</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <div className="project-info">
                  <p className="project-category">FULL-STACK / ML</p>
                  <div className="project-title-row">
                    <h2>Explainable Wind-Aware Spatio-Temporal GNN For Air Quality Forecasting</h2>
                    <a href="https://github.com/Nirika-Lamichhane" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View on GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                    </a>
                  </div>
                  <p className="project-description">
                    A dynamic Air Quality Forecasting model using Graph Neural Networks using the hourly historical data of 49 stations of Nepal with the prediction horizon of 6 hr.
                  </p>
                  <div className="about-tags project-tags">
                    <span>GNN</span>
                    <span>PyTorch</span>
                    <span>Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>
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
              {/* Experience 1: Internship */}
              <article className="experience-item">
                <div className="experience-marker"><span /></div>
                <div className="experience-meta">
                  <span>EXPERIENCE 01</span>
                  <span>MAY 2026</span>
                </div>
                <div className="experience-content">
                  <p className="experience-type">INTERNSHIP</p>
                  <h2>Backend Developer Intern</h2>
                  <p className="experience-company">Akin Pte Ltd (Remote)</p>
                  <p className="experience-description">
                    Worked remotely as a backend developer, assisting in building and testing microservices and APIs over a one-month intensive period.
                  </p>
                  <div className="experience-tags">
                    <span>Backend Development</span>
                    <span>Remote Work</span>
                  </div>
                  {/* Updated to a PDF button instead of an image */}
                  <div className="experience-evidence" style={{ border: 'none', backgroundColor: 'transparent', padding: 0 }}>
                    <a href="/Akin PTe.pdf" target="_blank" rel="noopener noreferrer" className="contact-button" style={{ display: 'inline-flex', marginTop: '0.5rem' }}>
                      View Certificate 
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>

              {/* Experience 2: Fusemachines */}
              <article className="experience-item">
                <div className="experience-marker"><span /></div>
                <div className="experience-meta">
                  <span>EXPERIENCE 02</span>
                  <span>2026 COHORT</span>
                </div>
                <div className="experience-content">
                  <p className="experience-type">FELLOWSHIP</p>
                  <h2>AI Fellow</h2>
                  <p className="experience-company">Fusemachines</p>
                  <p className="experience-description">
                    Selected for the prestigious AI Fellowship microdegree program, advancing practical skills in machine learning algorithms and AI system design.
                  </p>
                  <div className="experience-tags">
                    <span>Artificial Intelligence</span>
                    <span>Machine Learning</span>
                  </div>
          
                </div>
              </article>

              {/* Experience 3: Leapfrog */}
              <article className="experience-item">
                <div className="experience-marker"><span /></div>
                <div className="experience-meta">
                  <span>EXPERIENCE 03</span>
                  <span>2026</span>
                </div>
                <div className="experience-content">
                  <p className="experience-type">PARTNERSHIP PROGRAM</p>
                  <h2>Student Partner</h2>
                  <p className="experience-company">Leapfrog Technology (LSPP)</p>
                  <p className="experience-description">
                    Participated in the Leapfrog Student Partnership Program and took the initiative to conduct 2-3 technical sessions, mentoring peers and sharing industry knowledge.
                  </p>
                  <div className="experience-tags">
                    <span>Mentorship</span>
                    <span>Tech Community</span>
                  </div>
                  <div className="experience-evidence" style={{ border: 'none', backgroundColor: 'transparent', padding: 0 }}>
                    <a href="/leapfrog.pdf" target="_blank" rel="noopener noreferrer" className="contact-button" style={{ display: 'inline-flex', marginTop: '0.5rem' }}>
                      View Certificate 
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>

              {/* Experience 4: Tensor Club */}
              <article className="experience-item">
                <div className="experience-marker"><span /></div>
                <div className="experience-meta">
                  <span>EXPERIENCE 04</span>
                  <span>2023-2026</span>
                </div>
                <div className="experience-content">
                  <p className="experience-type">CLUB LEADERSHIP</p>
                  <h2>Joint Secretary</h2>
                  <p className="experience-company">Tensor (AI & Data Science Club), IOE Thapathali</p>
                  <p className="experience-description">
                    Led club initiatives to foster AI and data science education among students. Organized and conducted an outreach tech session at Durbar High School. Also conducted various knowledge sharing sessions in the college both online and offline.
                  </p>
                  <div className="experience-tags">
                    <span>Leadership</span>
                    <span>Public Speaking</span>
                    <span>Knowledge Sharing</span>
                  </div>
                 
                </div>
              </article>

              {/* Experience 5: ANAIS */}
              <article className="experience-item">
                <div className="experience-marker"><span /></div>
                <div className="experience-meta">
                  <span>EXPERIENCE 05</span>
                  <span>2026</span>
                </div>
                <div className="experience-content">
                  <p className="experience-type">WORKSHOP</p>
                  <h2>Participant</h2>
                  <p className="experience-company">Annual Nepal AI School (ANAIS)</p>
                  <p className="experience-description">
                    Attended intensive sessions focused on advanced AI research, networking with industry experts and deepening knowledge in modern AI architectures.
                  </p>
                  <div className="experience-tags">
                    <span>AI Research</span>
                    <span>Networking</span>
                  </div>
                  <div className="experience-evidence">
                    <img src="/ANAIS.jpg" alt="ANAIS 2026 Evidence" />
                  </div>
                </div>
              </article>
            </div>

            <p className="experience-footer">
              EVERY EXPERIENCE IS AN OPPORTUNITY TO GROW.
            </p>
          </div>
        )}


       {activeSection === "Contact" && (
          <div className="contact-layout fun-contact">
            <div className="contact-container">
              
              {/* Left Side: Friendly Greeting */}
              <div className="contact-greeting">
                <div className="availability-badge">
                  <span className="pulsing-dot"></span>
                  Open for collaborations
                </div>
                <h1 className="contact-title">
                  Let's grab a <br />
                  <span>virtual coffee.</span>
                </h1>
                <p className="contact-description">
                  I'm always excited to talk about machine learning, new projects, or tech communities. Pick your preferred way to reach out!
                </p>
              </div>

              {/* Right Side: Interactive Contact Cards */}
              <div className="contact-options">
                
                {/* Email Card */}
                <div className="contact-method-card">
                  <div className="method-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="method-details">
                    <h3>Drop me an email</h3>
                    {/* The email is clearly visible so it can be copied if the link fails */}
                    <p>nirikalamichhane12@gmail.com</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nirikalamichhane12@gmail.com" target="_blank" rel="noopener noreferrer" className="method-action">Send Message ↗</a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="contact-method-card">
                  <div className="method-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="method-details">
                    <h3>Give me a ring</h3>
                    <p>+977 9849716399</p>
                    {/* The tel: link allows mobile users to tap and call instantly */}
                    <a href="https://wa.me/9779849716399" target="_blank" rel="noopener noreferrer" className="method-action">Message on WhatsApp ↗</a>
                  </div>
                </div>

              </div>
            </div>
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