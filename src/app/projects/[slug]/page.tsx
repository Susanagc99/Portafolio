'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectBySlug } from '@/data/projects';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundProject = getProjectBySlug(params.slug);
        if (foundProject) {
            setProject(foundProject);
        } else {
            router.push('/projects');
        }
        setLoading(false);
    }, [params.slug, router]);

    if (loading) {
        return <div className={styles.loading}>Loading project...</div>;
    }

    if (!project) {
        return <div className={styles.error}>Project not found</div>;
    }

    return (
        <div className={styles.container}>
            {/* Back Button */}
            <Link href="/projects" className={styles.backButton}>
                ← Back to Projects
            </Link>

            {/* Project Header */}
            <header className={styles.projectHeader}>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.date}>Created: {new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </header>

            {/* Project Image */}
            <div className={styles.imageSection}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            {/* Content Grid */}
            <div className={styles.contentGrid}>
                {/* Main Content */}
                <div className={styles.mainContent}>
                    <h2 className={styles.sectionTitle}>About this project</h2>
                    <p className={styles.description}>
                        {project.longDescription}
                    </p>
                </div>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    {/* Technologies */}
                    <div className={styles.techCard}>
                        <h3 className={styles.techTitle}>Technologies</h3>
                        <div className={styles.techList}>
                            {project.technologies.map((tech: string) => (
                                <span key={tech} className={styles.techBadge}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className={styles.linksCard}>
                        <h3 className={styles.linksTitle}>Links</h3>
                        <div className={styles.linksList}>
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.linkButton}
                                >
                                    <span>View on GitHub</span>
                                    <span>→</span>
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.linkButtonOutline}
                                >
                                    <span>Live Demo</span>
                                    <span>↗</span>
                                </a>
                            )}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}