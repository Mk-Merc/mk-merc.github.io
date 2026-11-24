interface ProjectCardProps {
    image: string;
    title: string;
    link: string;
    description: string;
    tech: string[];
}

export const ProjectCard = ({ image, title, link, description, tech }: ProjectCardProps) => {
    return (
        <div className="bg-steam-panel p-4 mb-2">
            <div className="flex gap-4 items-center">

                {/* Project Thumbnail */}
                <div className="w-32 h-16 bg-steam-dark flex items-center justify-center border border-steam-text/30 flex-shrink-0">
                    <img
                        src={image}
                        alt="Profile"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Project Details */}
                <div className="flex-1">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-steam-blue font-medium text-lg hover:underline block mb-1"
                    >
                        {title}
                    </a>

                    <p className="text-xs text-steam-text/50 mb-2">
                        Public Repository
                    </p>

                    <p className="text-sm text-steam-text mb-3">
                        {description}
                    </p>

                    {/* Technology Stack */}
                    <div className="flex gap-2">
                        {tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-2 py-1 bg-steam-dark text-steam-text border border-steam-text/20"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
