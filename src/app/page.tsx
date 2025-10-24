

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <p>
          <span>👋</span> Hi, my name is
        </p>
        <h1>
          <span>Susana</span>
        </h1>
        <p> 
          a Full-stack developer in progress | Building digital experiences with passion
        </p>
        <div>
          <a href="/projects">
            View Projects
          </a>
          <a href="/contact">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2>About Me</h2>
        <p>
          I am passionate about technology, music, and exploring how ideas can turn into real projects. Currently I learning TypeScript and Next.js while building projects that blend logic, design, and creativity.<br /><br />
          I believe in the power of patience, curiosity, and consistency to grow in the tech world<br /><br />
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Technologies & Tools</h2>
        <div className="flex-col">
          <p>
          <img src="https://skillicons.dev/icons?i=py" height="32" alt="python logo"></img>
          Python
          </p>

          <p>
          <img src="https://skillicons.dev/icons?i=css" height="32" alt="css3 logo" />
          CSS
          </p>

          <p>
          <img src="https://skillicons.dev/icons?i=html" height="32" alt="html5 logo" />
          HTML
          </p>

          <p>
          <img src="https://skillicons.dev/icons?i=js" height="32" alt="javascript logo" />
          Javascript
          </p>

          <p>
          <img src="https://skillicons.dev/icons?i=mysql" height="32" alt="mysql logo" />
          MySql
          </p>

          
          <img src="https://skillicons.dev/icons?i=ts" height="32" alt="typescript logo" />
          

        </div>
      </section>
    </div>
  );
}