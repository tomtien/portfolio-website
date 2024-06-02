import ElectronAC from "@/public/projects/electron-ac.png";
import ElectronServices from "@/public/projects/electron-services.png";
import Vanboost from "@/public/projects/vanboost.png";
import WoenselCombat from "@/public/projects/woensel-combat.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Project = {
    image: StaticImageData;
    href: string;
    name: string;
};

const projects = [
    {
        image: ElectronServices,
        href: "https://electron-services.com",
        name: "ElectronAC",
    },
    {
        image: ElectronAC,
        href: "https://electron-ac.com",
        name: "ElectronAC",
    },
    {
        image: WoenselCombat,
        href: "https://woenselcombat.nl",
        name: "Woensel Combat",
    },
    {
        image: Vanboost,
        href: "https://www.vanboost.be/",
        name: "Vanboost",
    },
] satisfies Project[];

export function Projects() {
    return (
        <div className="grid grid-cols-2 gap-8">
            {projects.map((project, i) => (
                <Link
                    target="_blank"
                    href={project.href}
                    key={i}
                    className="w-full bg-card border border-border rounded-md overflow-hidden relative"
                >
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                            src={project.image}
                            fill={true}
                            alt={project.name}
                            className="object-cover hover:scale-[1.05] duration-500"
                        />
                    </div>
                    {/* <div className="absolute w-full h-full top-0 left-0 z-10 opacity-0 hover:opacity-100 duration-500 bg-black/70">
                        <div className="p-4 flex flex-col h-full">
                            <Button
                                variant={"outline"}
                                className=" w-full z-20 mt-auto"
                            >
                                Visit
                            </Button>
                        </div>
                    </div> */}
                </Link>
            ))}
        </div>
    );
}
