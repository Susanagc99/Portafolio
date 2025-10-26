export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    createdAt: string;
}


export const projects: Project[] = [
    {
        id: "1",
        slug: "store-products-inventory",
        title: "Store's Products Inventory",
        description: "Sistema de inventario en Python con funcionalidades CRUD completas",
        longDescription: "Sistema simple de gestión de inventario en Python construido sin frameworks externos. Implementa funcionalidades CRUD (Create, Read, Update, Delete) para gestionar productos, precios, cantidades y calcular automáticamente el valor total del inventario. Permite agregar productos con su precio y unidades disponibles, actualizarlos o eliminarlos, manteniendo un registro claro y estructurado de productos, cantidades y precios.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        technologies: ["Python"],
        githubUrl: "https://github.com/Susanagc99/Performance-test.-PYTHON",
        createdAt: "2025-04-18"
    },
    {
        id: "2",
        slug: "cafe-la-loma",
        title: "Café La Loma",
        description: "Landing page estática con diseño responsive y soporte para tema claro/oscuro",
        longDescription: "Café La Loma es una landing page estática construida como un challenge de diseño web. El proyecto presenta un sitio web promocional para una cafetería ficticia, enfocado en visuales elegantes, estructura semántica y diseño responsive. Incluye imágenes de productos y del lugar, un toggle de tema claro/oscuro, y detalles estilísticos como animaciones y fuentes personalizadas.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/Susanagc99/HTML-CSS/tree/main/RETOEXTREMO",
        createdAt: "2025-06-20"
    },
    {
        id: "3",
        slug: "library-web-app",
        title: "Library Web App",
        description: "Aplicación web de biblioteca construida con Next.js + TypeScript para gestionar autores y libros",
        longDescription: "Aplicación web responsive para explorar y gestionar datos de biblioteca (autores y libros). Incluye un dashboard administrativo, API routes para operaciones de datos, y persistencia opcional en MongoDB mediante Mongoose. Utiliza HeroUI para componentes primitivos y Tailwind/PostCSS para estilos consistentes.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
        technologies: ["TypeScript", "JavaScript", "CSS", "Mongoose", "React", "Next.js", "HeroUI", "Tailwind"],
        githubUrl: "https://github.com/Susanagc99/library-next-ts/tree/develop",
        createdAt: "2025-10-15"
    }
];

// Función helper para buscar un proyecto por slug
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug);
};

// Función helper para obtener todos los proyectos
export const getAllProjects = (): Project[] => {
    return projects;
};