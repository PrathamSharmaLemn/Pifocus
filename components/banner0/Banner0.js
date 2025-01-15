import Link from "next/link"
import { useEffect, useRef, useState } from "react";

export default function Banner0() {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [fadeIn, setFadeIn] = useState(true);
    const carouselRef = useRef(null);
    const slideCount = 4;
    const [visitorCount, setVisitorCount] = useState(2.4);

    const slides = [
        {
            id: 1,
            title: "Calling + 4G Enabled",
            description: "Stay connected with 4G-enabled mobile data and seamless calling - even while working on your laptop.",
            image: "/specs1.png",
        },
        {
            id: 2,
            title: "Pi App Store",
            description: "Access a world of apps tailored for you on the exclusive Pi App Store.",
            image: "/specs2.png",
        },
        {
            id: 3,
            title: "Battery Power That Lasts",
            description: "4000 mAh Battery power that keeps you going all day long.",
            image: "/specs3.png",
        },
        {
            id: 4,
            title: "Focused with Tapasya Mode",
            description: "Focused mode for students, allowing only selected apps and calls.",
            image: "/specs4.png",
        },
    ]

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Set initial position
        carousel.style.transform = `translateX(-${100 * currentSlide}%)`;

        // Auto scroll function
        const autoScroll = () => {
            setCurrentSlide(prev => {
                const next = prev + 1;
                if (next >= slideCount + 1) {
                    // Reset to first slide after a brief delay
                    setTimeout(() => {
                        carousel.style.transition = 'none';
                        setCurrentSlide(1);
                        setTimeout(() => {
                            carousel.style.transition = 'transform 500ms ease-in-out';
                        }, 10);
                    }, 500);
                }
                return next;
            });
        };

        // Start auto scroll
        const interval = setInterval(autoScroll, 3000);

        // Cleanup
        return () => clearInterval(interval);
    }, []);

    // Update transform whenever currentSlide changes
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${100 * currentSlide}%)`;
        }
    }, [currentSlide]);

    // Add text fade effect
    useEffect(() => {
        if (currentSlide <= slideCount) {
            setFadeIn(false);
            setTimeout(() => setFadeIn(true), 100);
        }
    }, [currentSlide]);

    // Add new useEffect for visitor count
    useEffect(() => {
        const generateRandomCount = () => {
            // Generate random number between 1.0 and 9.9
            const randomNum = (Math.random() * 8.9 + 1).toFixed(1);
            setVisitorCount(parseFloat(randomNum));
        };

        const countInterval = setInterval(generateRandomCount, 10000);
        return () => clearInterval(countInterval);
    }, []);

    const handleSlideClick = (index) => {
        setCurrentSlide(index + 1);
    };
    
    return (
        <div className="w-full">
            {/* Mobile View */}
            <div className="flex flex-col items-center p-4 sm:hidden pb-20">
                <h1 
                    className={`text-3xl font-bold text-center bg-gradient-to-r from-textGradientLeft to-textGradientRight bg-clip-text text-transparent mb-4 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                >
                    {slides[(currentSlide - 1 + slideCount) % slideCount].title}
                </h1>

                <div className="w-full max-w-[400px] h-[300px] flex flex-col justify-center items-center relative mb-4">
                    <div className="relative w-full h-full overflow-hidden">
                        <div 
                            ref={carouselRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${100 * currentSlide}%)` }}
                        >
                            <img src="/specs4.png" className="w-full h-full object-cover flex-shrink-0" alt="Slide 4 (Clone)" />
                            {slides.map(slide => (
                                <img 
                                    key={slide.id}
                                    src={slide.image} 
                                    className="w-full h-full object-cover flex-shrink-0" 
                                    alt={`Slide ${slide.id}`} 
                                />
                            ))}
                            <img src="/specs1.png" className="w-full h-full object-cover flex-shrink-0" alt="Slide 1 (Clone)" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 bg-black/80 border-white/50 border-[1px] p-1.5 rounded-full">
                    {[...Array(slideCount)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleSlideClick(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                (currentSlide - 1 + slideCount) % slideCount === index 
                                    ? 'bg-white' 
                                    : 'bg-white/30 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                <p 
                    className={`text-sm my-5 text-white text-center mb-4 transition-opacity duration-500 w-[90%] ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                >
                    {slides[(currentSlide - 1 + slideCount) % slideCount].description}
                    
                    
                </p>

                <div className="flex flex-col items-center justify-center mt-10">
                        <div className=" border-[1px] border-blue-600 text-white rounded-lg pl-0 pr-6 py-1 flex flex-row gap-2">
                            <div className="h-10 overflow-hidden flex items-center justify-center">
                                <img src="/live.gif" alt="Live Animation" className="w-20" />
                            <h3>
                            {visitorCount}k+ Live Visitors</h3>
                            </div>
                            
                        </div>
                        <div>
                                <h3 className="text-white my-3">
                                    Made with <span className="text-red-500">♥</span> at PW
                                </h3>
                            </div>
                    </div>

                
            </div>

            {/* Desktop View */}
            <div className="hidden sm:flex flex-row justify-evenly items-center py-12 px-8 bg-customRadialBanner1">
                <div className="absolute w-full h-500 z-0 bg-customRadialBanner1-2"></div>
                
                <div className="w-[650px] h-500 flex flex-col justify-center items-center relative">
            <div className="relative w-full h-[400px] overflow-hidden">
                <div 
                    ref={carouselRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${100 * currentSlide}%)` }}
                >
                    <img src="/specs4.png" className="w-full h-full object-cover flex-shrink-0" alt="Slide 4 (Clone)" />
                    <img src="/specs1.png" className="w-full h-full object-cover flex-shrink-0" alt="Slide 1" />
                    <img src="/specs2.png" className="w-full h-full object-cover flex-shrink-0" alt="Slide 2" />
                    <img src="/specs3.png" className="w-full h-full object-cover flex-shrink-0" alt="Slide 3" />
                    <img src="/specs4.png" className="w-full h-full object-cover flex-shrink-0" alt="Slide 4" />
                    <img src="/specs1.png" className="w-full h-full object-cover flex-shrink-0" alt="Slide 1 (Clone)" />
                </div>
            </div>
            
            <div className="flex gap-2 mt-4 bg-black/80 border-white/50 border-[1px] p-1.5 rounded-full w-fit">
                {[...Array(slideCount)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideClick(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            (currentSlide - 1 + slideCount) % slideCount === index 
                                ? 'bg-white' 
                                : 'bg-white/30 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>

                <div className="flex flex-col z-10 sm:w-[45%] items-center justify-between">
                    <p 
                        className={`sm:text-3xl text-nowrap text-center md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight bg-clip-text text-transparent transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {slides[(currentSlide - 1 + slideCount) % slideCount].title}
                    </p>
                    <p 
                        className={`sm:text-lg text-center md:text-xl text-white my-4 md:w-72 lg:w-[90%] transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {slides[(currentSlide - 1 + slideCount) % slideCount].description}
                    </p>

                    <div className="flex flex-col items-center justify-center">
                        <div className=" border-[1px] border-blue-600 text-white rounded-lg pl-0 pr-6 py-1 flex flex-row gap-2">
                            <div className="h-10 overflow-hidden flex items-center justify-center">
                                <img src="/live.gif" alt="Live Animation" className="w-20" />
                            <h3>
                            {visitorCount}k+ Live Visitors</h3>
                            </div>
                            
                        </div>
                        <div>
                                <h3 className="text-white my-3">
                                    Made with <span className="text-red-500">♥</span> at PW
                                </h3>
                            </div>
                    </div>
                </div>

            </div>




        </div>
    )
}