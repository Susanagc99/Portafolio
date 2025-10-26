import Link from 'next/link';
import { getAllProjects } from '@/data/projects';
import Image from "next/image";

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div>
            <h1>Mis Proyectos</h1>
            <p>Aquí puedes ver algunos de los proyectos en los que he trabajado</p>

            <div>
                {projects.map((project) => (
                    <div key={project.id}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={200}
                        />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div>
                            {project.technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                        <Link href={`/projects/${project.slug}`}>
                            Ver Detalles
                        </Link>
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                Ver en GitHub
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}