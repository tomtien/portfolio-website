import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <div className="flex gap-4">
            <Link href={"mailto:gamingbox156@gmail.com"}>
                <Button variant={"outline"}>
                    <Mail></Mail>
                    <p className="ml-4">Mail</p>
                </Button>
            </Link>

            <Link href={"https://github.com/tomtien"}>
                <Button variant={"outline"}>
                    <SiGithub></SiGithub>
                    <p className="ml-4">Github</p>
                </Button>
            </Link>
        </div>
    );
}
