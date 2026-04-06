import "./App.css";

function App() {
  return (
    <>
      
      <nav className="nav">
        <h2 className="brand">JRFB</h2>
        <div className="links">
          <a href="#intro">Intro</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="intro" className="intro">
        <div className="intro-left">
          <h1>Ferdinand Bajada Jr</h1>
          <h4>Frontend Developer | Student | Designer</h4>

          <p>
            BSIT student with an interest in frontend development and UI/UX design. 
            I build simple, responsive, and meaningful web projects.
          </p>
        </div>

        <div className="intro-right">
          <img src="/picture.png" alt="profile" />
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am currently pursuing a degree in Information Technology and focusing on 
          frontend development. I enjoy designing clean interfaces and building 
          responsive websites using modern web technologies. I am eager to continue 
          learning and improving my skills through real-world projects.
        </p>
      </section>

      <section id="work" className="work">
  <h2>My Projects</h2>

  <div className="work-grid">
    <div className="work-card">
      <img src="/Frame 1.png" alt="Project One" />
      <h3>Project One</h3>
      <p>We designed a quality design for nike shoes</p>
    </div>

    <div className="work-card">
      <img src="/Frame 2.png" alt="Project Two" />
      <h3>Project Two</h3>
      <p>I designed a spotify music.</p>
    </div>

    <div className="work-card">
      <img src="/picture1.png" alt="Project Three" />
      
      <h3>Project Three</h3>
      <p>We created our first prototype app</p>
    </div>
  </div>
</section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: ferdinandbajadajr19@gmail.com</p>
        <p>GitHub: ferdinandbajada</p>
      </section>

      <footer className="footer">
        <p>© 2026 Ferdinand Bajada Jr</p>
      </footer>

    </>
  );
}

export default App;