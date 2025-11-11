import { Flower, Moon, Star, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme} 
        className={cn("fixed max-sm:hidden top-5 right-5 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}>
            {" "}
            {isDarkMode ? (<Star className="h-6 w-6 text-primary" /> 
            ): (
            <Moon className="h-6 w-6 text-blue-900"/> 
            )}
        </button>
    );
};