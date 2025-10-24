import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <p className={styles.greeting}>
          <span>👋</span> Hi, I'm
        </p>
        <h1 className={styles.title}>
          <span className={styles.gradientName}>Susana Gutiérrez</span>
        </h1>
        <p className={styles.subtitle}>
          Full-Stack Developer | Building digital experiences with passion
        </p>
        <div className={styles.ctaButtons}>
          <a href="/projects" className={styles.btnPrimary}>
            View Projects
          </a>
          <a href="/contact" className={styles.btnSecondary}>
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.aboutText}>
          💻 I'm passionate about technology, music, and exploring how ideas can turn into real projects.<br /><br />
          🚀 Currently learning TypeScript and Next.js while building projects that blend logic, design, and creativity.<br /><br />
          💡 I believe in the power of patience, curiosity, and consistency to grow in the tech world ❤️<br /><br />
          ✨ I'd love to connect with people who share the same passion for tech, creativity, and learning.
        </p>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <h2 className={styles.skillsTitle}>Technologies & Tools</h2>
        <div className={styles.skillsGrid}>
          {[
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Node.js',
            'CSS3',
            'HTML5',
            'Git',
            'GitHub',
            'Visual Studio Code',
            'Postman',
            'REST APIs'
          ].map((skill) => (
            <div key={skill} className={styles.skillCard}>
              <span className={styles.skillName}>{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}