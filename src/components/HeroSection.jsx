import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section  id="hero" className="min-h-screen" >
            <div className="relative left-88 container max-w-4xl mx-auto z-10 flex flex-col items-baseline-last justify-center min-h-screen text-left px-4">
                <div> 
                    <h1 className=" text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        <span className="opacity-0 animate-fade-in">DEVELOPER</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}&</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in" >{" "}DESIGNER</span>
                    </h1>
                
                <div className="mb-4 text-lg md:text-xl text-foreground/80 max-2-2xl mx-auto ">
                    <p > 
                    <span className="opacity-0 animate-fade-in-delay-4 ">Hi, </span> 
                    <span className="text-primary opacity-0 animate-fade-in-delay-2">{" "}I'm Mariel,</span>                
                    <span className="opacity-0 animate-fade-in-delay-4">{" "}a Computer Systems Engineering student based in Dominican Republic. </span>          
                    </p>
                </div>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href=" " className="cosmic-button rounded-2xl ">
                            Curriculum Vitae
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 trasnform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2 "> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}
