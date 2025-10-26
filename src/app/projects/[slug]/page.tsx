'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug } from '@/data/projects';
import { useEffect, useState } from 'react'
import Image from "next/image";

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
            // Si no encuentra el proyecto, redirigir a la página de proyectos
            router.push('/projects');
        }
        setLoading(false);
    }, [params.slug, router]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }

    return (
        <div>
            {/* Botón de regreso */}
            <Link href="/projects">
                ← Volver a Proyectos
            </Link>

            {/* Imagen del proyecto */}
            <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
            />

            {/* Información del proyecto */}
            <h1>{project.title}</h1>
            <p>{project.longDescription}</p>

            {/* Tecnologías */}
            <div>
                <h2>Tecnologías utilizadas:</h2>
                <div>
                    {project.technologies.map((tech: string) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </div>

            {/* Enlaces */}
            <div>
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver en GitHub
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver Demo
                    </a>
                )}
            </div>

            {/* Fecha de creación */}
            <p>Fecha de creación: {project.createdAt}</p>
        </div>
    );
}