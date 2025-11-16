import { ArrowDown } from "lucide-react";
import { Blob } from "./Blob";

export const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen">
            <div className="container max-w-1xl lg:max-w-2xl xl:max-w-4xl mx-auto z-10 flex flex-col justify-center min-h-screen px-4">
                
                
                <div className="flex flex-col lg:flex-row items-center justify-between"> 
                    
                    
                    <div className="relative z-30 mb-8 lg:mb-0 lg:order-1 xl:right-52 lg:right-32 "> 
                        <Blob />
                    </div>

                    
                    <div className="text-center lg:text-left lg:order-2"> 
                        <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold tracking-tight mb-4 lg:whitespace-nowrap">
                            <span className="opacity-0 animate-fade-in">DEVELOPER</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}&</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in" >{" "}DESIGNER</span>
                        </h1>
                    
                        <div className="mb-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
                            <p > 
                            <span className="opacity-0 animate-fade-in-delay-4 ">Hi, </span> 
                            <span className="text-primary opacity-0 animate-fade-in-delay-2">{" "}I'm Mariel,</span>                
                            <span className="opacity-0 animate-fade-in-delay-4">{" "}a Computer Systems Engineering student based in Dominican Republic. </span>          
                            </p>
                        </div>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4 mb-12">
                            <a href=" " className="cosmic-button rounded-2xl ">
                                Curriculum Vitae
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
                <span className="text-sm text-muted-foreground mb-2 "> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}