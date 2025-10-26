'use client'

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { SparklesIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section con 2 columnas */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        
        {/* Contenido izquierdo */}
        <div className={styles.heroContent}>
          <p className={styles.greeting}>
            👋 Welcome to my portfolio
          </p>
          <h1 className={styles.title}>
            Hi, I&apos;m <span className={styles.gradientName}>Susana Gutiérrez</span>
          </h1>
          <p className={styles.subtitle}>
            A Full-stack developer in progress, passionate about creating digital experiences that blend logic, design, and creativity.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/projects" className="btn-gradient">
              View Projects
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Imagen derecha - Placeholder para tu foto */}
        <div className={styles.heroImage}>
          <div className={styles.imageContainer}>
            {/* IMPORTANTE: Reemplaza esto con tu foto real */}
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/me2.jpg"
                alt="Susana Gutiérrez" 
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: '85% 50%'
                }}
              />
            </div>
          </div>
          <div className={styles.decorCircle1}></div>
          <div className={styles.decorCircle2}></div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.aboutText}>
          <div className={styles.aboutLine}>
            <SparklesIcon className="w-6 h-6 text-purple-400 inline-block mr-3 shrink-0" />
            <p className="inline-block">
              I&apos;m a creative mind passionate about technology, music, and turning ideas into meaningful projects.
            </p>
          </div>
          <div className={styles.aboutLine}>
            <CodeBracketIcon className="w-6 h-6 text-purple-400 inline-block mr-3 shrink-0" />
            <p className="inline-block">
              I&apos;m currently learning TypeScript and Next.js, exploring how logic and design can come together to build something beautiful and functional.
            </p>
          </div>
          <div className={styles.aboutLine}>
            <RocketLaunchIcon className="w-6 h-6 text-purple-400 inline-block mr-3 shrink-0" />
            <p className="inline-block">
          I believe that patience, curiosity, and consistency are the keys to growing in the tech world and I try to keep them present in everything I do.
        </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <h2 className={styles.skillsTitle}>Technologies & Tools</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python logo"
              width={56}
              height={56} />
            <span className={styles.skillName}>Python</span>
          </div>

          <div className={styles.skillCard}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3 logo"
              width={56}
              height={56} />
            <span className={styles.skillName}>CSS</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
            alt="HTML5 logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>HTML</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            alt="JavaScript logo"
            width={56} 
            height={56} />
            <span className={styles.skillName}>JavaScript</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
            alt="TypeScript logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>TypeScript</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            alt="React logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>React</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
            alt="Next.js logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>Next.js</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
            alt="Node.js logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>Node.js</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
            alt="MySQL logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>MySQL</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
            alt="MongoDB logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>MongoDB</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
            alt="Git logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>Git</span>
          </div>

          <div className={styles.skillCard}>
            <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
            alt="VS Code logo" 
            width={56} 
            height={56} />
            <span className={styles.skillName}>VS Code</span>
          </div>
        </div>
      </section>
    </div>
  );
}