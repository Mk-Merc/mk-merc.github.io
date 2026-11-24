interface SkillCardProps {
    name: string;
}

export const SkillCard = ({ name }: SkillCardProps) => {
    return (
        <span className="text-xs bg-steam-dark px-2 py-1 text-steam-text border border-steam-text/30">
            {name}
        </span>
    );
};