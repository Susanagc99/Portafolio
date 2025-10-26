import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/data/projects';
import styles from './page.module.css';

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>My Projects</h1>
                <p className={styles.subtitle}>
                    Here are some of the projects I&apos;ve worked on. Each one represents a learning journey and a step forward in my development skills.
                </p>
            </header>

            {/* Projects Grid */}
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <article key={project.id} className={styles.projectCard}>
                        {/* Project Image */}
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>

                        {/* Card Content */}
                        <div className={styles.cardContent}>
                            <h2 className={styles.projectTitle}>{project.title}</h2>
                            <p className={styles.projectDescription}>
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className={styles.technologies}>
                                {project.technologies.map((tech) => (
                                    <span key={tech} className={styles.techBadge}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className={styles.cardActions}>
                                <Link 
                                    href={`/projects/${project.slug}`}
                                    className={styles.btnDetails}
                                >
                                    View Details →
                                </Link>
                                {project.githubUrl && (
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={styles.btnGithub}
                                    >
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}