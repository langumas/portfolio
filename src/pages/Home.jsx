import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

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

            {/*footer*/}
        </div>
    );
};