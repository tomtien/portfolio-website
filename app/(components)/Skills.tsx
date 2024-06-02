import {
    IconType,
    SiNodedotjs,
    SiNodedotjsHex,
    SiReact,
    SiReactHex,
    SiTailwindcss,
    SiTailwindcssHex,
    SiTypescript,
    SiTypescriptHex,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

type Skill = {
    name: string;
    href: string;
    icon: IconType;
    color?: string;
};

const skills = [
    {
        name: "Node.js",
        href: "https://nodejs.org/",
        icon: SiNodedotjs,
        color: SiNodedotjsHex,
    },
    {
        name: "TypeScript",
        href: "https://typescriptlang.org/",
        icon: SiTypescript,
        color: SiTypescriptHex,
    },
    {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: SiTailwindcss,
        color: SiTailwindcssHex,
    },
    {
        name: "React",
        href: "https://reactjs.org/",
        icon: SiReact,
        color: SiReactHex,
    },
] satisfies Skill[];
export function Skills() {
    return (
        <div className="flex gap-4">
            {skills.map((skill, i) => (
                <Link
                    href={skill.href}
                    key={i}
                    target="_blank"
                    className="bg-card hover:bg-muted duration-200 flex items-center justify-center rounded-sm gap-2 pr-2 overflow-hidden border border-border"
                >
                    <skill.icon
                        color={skill.color}
                        className="size-8 rounded-sm p-[0.3rem]"
                    />
                    <p className=" text-muted-foreground">{skill.name}</p>
                </Link>
            ))}
        </div>
    );
}
