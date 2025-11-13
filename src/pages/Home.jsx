import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
    return ( 
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* theme*/}
            <ThemeToggle/>
            {/*bg e*/}
            <StarBackground />
            {/*header navbar*/}
            <Navbar/>
            {/*main content*/}
        <main>
            <HeroSection/>
        </main>
            {/*footer*/}
        </div>
    );
};