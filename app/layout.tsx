import "@/styles/globals.css";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { DiscordIcon } from "@/components/icons";

export const metadata = {
  title: "Mythic Studios",
  description:
    "Mythic Studios - Home",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-1 flex-grow pt-16">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-3 gap-2">
              <div className="flex items-center gap-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://github.com/MythicIsland">
                  <span className="text-default-600">GitHub</span>
                </Link>
                <span className="text-default-400">|</span>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://discord.gg/xJHQpyYg">
                  <DiscordIcon className="h-4 w-4" />
                  <span className="text-default-600">Join our Discord</span>
                </Link>
              </div>
              <div className="text-default-500 text-sm">
                © 2025 Mythic Studios
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
