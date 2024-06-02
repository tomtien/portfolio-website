import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex py-4 justify-end gap-2 px-10 fixed top-0 w-full z-10 font-semibold backdrop-blur-md">
            <div>
                <Link
                    className="px-4 py-2 duration-200 hover:text-foreground text-muted-foreground"
                    href="#about"
                >
                    About
                </Link>
            </div>
            <div>
                <Link
                    className="px-4 py-2 duration-200 hover:text-foreground text-muted-foreground"
                    href="#projects"
                >
                    Projects
                </Link>
            </div>

            <div>
                <Link
                    className="px-4 py-2 duration-200 hover:text-foreground text-muted-foreground"
                    href="#contact"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
