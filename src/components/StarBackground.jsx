import { useEffect, useState } from "react";


export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [starrys, setStarrys] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateStarrys();

        const handleResize = () => {   
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => 
            window.removeEventListener("resize", handleResize);
    }, []); 

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000 );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() + 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        };

        setStars(newStars);
    };


    const generateMeteors = () => {
        const numberOfMeteors = 3;

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                opacity: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        };

        setMeteors(newMeteors);
    };

    const generateStarrys= () => {
        const numberOfStarry = 7;

        const newStarrys = [];

        for (let i = 0; i < numberOfStarry; i++) {
            newStarrys.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                opacity: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        };

        setStarrys(newStarrys);
    };
    
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id}
                    className="star animate-pulse-subtle" style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }
                    }/> 
            ))}

            {meteors.map((meteor) => (
                <div key={meteor.id}
                    className="meteor animate-meteor" style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size * 2}px`,
                        top: `${meteor.y}%`,
                        left: `${meteor.x}%`,
                        animationDelay: meteor.delay,
                        animationDuration: `${meteor.animationDuration}s`,
                    }
                    }/> 
            ))}
            {starrys.map((starrys) => (
                <div key={starrys.id}
                    className="meteor animate-meteor" style={{
                        width: `${starrys.size  }px`,
                        height: `${starrys.size }px`,
                        top: `${starrys.y}%`,
                        left: `${starrys.x}%`,
                        animationDelay: starrys.delay,
                        animationDuration: `${starrys.animationDuration}s`,
                    }
                    }/> 
            ))}
        </div>
    );
};