import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Providers } from "./(components)/Providers";
import "./globals.css";

export const metadata: Metadata = {
    title: "Gamingbox",
    description: "A fullstack developer from Belgium",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    GeistSans.variable,
                    GeistMono.variable,
                    "min-h-screen bg-background font-sans antialiased"
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
