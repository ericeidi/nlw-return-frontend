import { Popover } from "@headlessui/react";
import { Moon, Sun } from "phosphor-react";
import { darkModeToggle } from "../hook/darkModeToggle";

export function ThemeSwitcher() {
    const [colorTheme, setTheme] = darkModeToggle();
    return (
        <Popover className="top-4 right-4 md:top-8 md:right-8 absolute flex flex-col items-end ">
            <Popover.Button
                onClick={() => setTheme(colorTheme)}
                className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-zinc-2 focus:ring-brand-500 transition-colors"
            >
                {colorTheme === "light" ? (
                    <Sun className="w-6 h-6" />
                ) : (
                    <Moon className="w-6 h-6" />
                )}
            </Popover.Button>
        </Popover>
    )
}