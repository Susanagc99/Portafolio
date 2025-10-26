import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mt-8">
        <h1>
          Hi, my name is Susana
        </h1>
        <p>
          a Full-stack developer in progress | Building digital experiences with passion
        </p>
        <div>
          <Link href="/projects">
            View Projects
          </Link>
          <Link href="/contact">
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 className="mt-8">About Me</h2>
        <p>
          I am a creative mind passionate about technology, music, and turning ideas into meaningful projects.
          I am currently learning TypeScript and Next.js, exploring how logic and design can come together to build something beautiful and functional.
          I believe that patience, curiosity, and consistency are the keys to growing in the tech world and I try to keep them present in everything I do.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-8 mb-8">
        <h2>Technologies & Tools</h2>
        <div className="">
          <p>
            <img src="https://skillicons.dev/icons?i=py" alt="python logo" width={32} height={32} />
            Python
          </p>

          <p>
            <img src="https://skillicons.dev/icons?i=css" alt="css3 logo" width={32} height={32} />
            CSS
          </p>

          <p>
            <img src="https://skillicons.dev/icons?i=html" alt="html5 logo" width={32} height={32} />
            HTML
          </p>

          <p>
            <img src="https://skillicons.dev/icons?i=js" alt="javascript logo" width={32} height={32} />
            JavaScript
          </p>

          <p>
            <img src="https://skillicons.dev/icons?i=mysql" alt="mysql logo" width={32} height={32} />
            MySQL
          </p>

          <p>
            <img src="https://skillicons.dev/icons?i=ts" alt="typescript logo" width={32} height={32} />
            TypeScript
          </p>
        </div>

      </section>
    </div>
  );
}