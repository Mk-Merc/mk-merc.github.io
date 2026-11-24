interface SocialCardProps {
    icon: string;
    url: string;
    name: string;
    username: string;
    action: string;
}

export const SocialCard = ({ icon, url, name, username, action }: SocialCardProps) => {
    return (
        <div className="flex flex-col items-center">

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-steam-panel/40 flex items-center justify-center border border-steam-text/30 hover:bg-steam-panel transition-colors mb-2"
            >
                <span className="text-xl font-bold text-steam-blue">
                    <img
                        src={icon}
                        alt="Profile"
                        className="w-full h-full object-contain"
                    />
                </span>
            </a>

            <span className="text-steam-text text-xs font-semibold mb-0.5">
                {name}
            </span>

            <span className="text-steam-text/60 text-[10px] mb-2">
                {username}
            </span>

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-steam-blue bg-steam-dark border border-steam-text/30 px-3 py-1 hover:text-steam-text transition-colors"
            >
                {action}
            </a>
        </div>
    );
};