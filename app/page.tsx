import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Spotlight } from "@/components/ui/spotlight";
import { Contact } from "./(components)/Contact";
import { Navbar } from "./(components)/Navbar";
import { Projects } from "./(components)/Projects";
import { Skills } from "./(components)/Skills";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar></Navbar>
            <div
                style={{
                    scrollPaddingTop: "48px",
                }}
                className="scroll-smooth overflow-auto max-h-full"
            >
                <main className="overflow-hidden min-h-screen px-8" id="about">
                    <div className=" py-20 md:py-40 max-w-7xl mx-auto ">
                        <div className="w-full rounded-md flex items-center justify-center  relative">
                            <Spotlight
                                className="-top-40 left-0 md:left-1/4 md:-top-80"
                                fill="white"
                            />
                            <div className="max-w-7xl  mx-auto relative  w-full ">
                                <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                    GamingBox
                                </h1>
                                <h2 className="text-2xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-400 bg-opacity-50">
                                    Full Stack Developer
                                </h2>
                                <div className="flex justify-center my-8">
                                    <Avatar className="w-1/4 h-full aspect-square">
                                        <AvatarFallback className="text-6xl">
                                            Je
                                        </AvatarFallback>
                                        <AvatarImage
                                            src="/avatar.jpg"
                                            className="object-cover"
                                            alt="@jeroen"
                                        ></AvatarImage>
                                    </Avatar>
                                </div>

                                <p className=" font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                                    I&apos;m a web developer from Belgium. I
                                    build websites and web apps for clients and
                                    for myself. Currently I&apos;m also a big
                                    fan of open source and contributing to the
                                    community.
                                </p>
                            </div>
                        </div>
                        <div className=" flex justify-center pt-8">
                            <Skills></Skills>
                        </div>
                    </div>
                    <div className="h-8"></div>
                </main>
                <div
                    className="max-w-7xl mx-auto min-h-[calc(100vh-48px)] px-8 "
                    id="projects"
                >
                    <div className=" pb-8">
                        <div className="text-6xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-300 bg-opacity-50">
                            Projects
                        </div>
                        <div className="text-muted-foreground text-center">
                            The things I&apos;m currently working on
                        </div>
                    </div>

                    <Projects></Projects>
                    <div className="h-8"></div>
                </div>

                <div
                    className="max-w-7xl mx-auto min-h-[calc(100vh-48px)] px-8"
                    id="contact"
                >
                    <div className="pb-8">
                        <div className="text-6xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-300 bg-opacity-50">
                            Contact
                        </div>
                        <div className="text-muted-foreground text-center">
                            Get in touch with me
                        </div>
                    </div>

                    <div className=" flex justify-center">
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </div>
    );
}
