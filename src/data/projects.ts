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
        description: "Python inventory system with full CRUD functionality",
        longDescription: "Simple inventory management system in Python built without external frameworks. Implements CRUD (Create, Read, Update, Delete) operations to manage products, prices, quantities, and automatically calculates total inventory value. Allows adding products with their price and available units, updating or deleting them, maintaining a clear and structured record of products, quantities, and prices.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        technologies: ["Python"],
        githubUrl: "https://github.com/Susanagc99/Performance-test.-PYTHON",
        createdAt: "2025-04-18"
    },
    {
        id: "2",
        slug: "cafe-la-loma",
        title: "Café La Loma",
        description: "Static landing page with responsive design and light/dark theme support",
        longDescription: "Café La Loma is a static landing page built as a web design challenge. The project showcases a promotional website for a fictional coffee shop, focused on elegant visuals, semantic structure, and responsive design. It includes product and location images, a light/dark theme toggle, and stylistic details like animations and custom fonts.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/Susanagc99/HTML-CSS/tree/main/RETOEXTREMO",
        createdAt: "2025-06-20"
    },
    {
        id: "3",
        slug: "library-web-app",
        title: "Library Web App",
        description: "Library web application built with Next.js + TypeScript to manage authors and books",
        longDescription: "A Next.js + TypeScript library management app with CRUD for authors and books. Includes a protected admin dashboard with basic auth via localStorage and REST API routes. Backend uses MongoDB with Mongoose for persistence and auto-generates consecutive IDs. Axios services handle API calls with TypeScript types and error handling. Supports filtering and displaying images from external URLs. UI built with HeroUI components and Tailwind CSS. Responsive layout with tabs, forms, cards, and buttons, following modern design patterns.",
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