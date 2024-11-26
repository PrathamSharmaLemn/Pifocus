import Marquee from "react-fast-marquee";
import { Assets } from "../../public/Assests"
import TestimonialCard from "../testimonialCard/TestimonialCard"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Banner8() {
    const data = [
        { review: "The Pi Book is the perfect companion for students,offering a seamless blend of portability and performance.Its excellent battery life and impressive camera quality make it ideal for online classes and video conferences The Pi Book is the perfect companion for students,offering a seamless blend of portability and performance.Its excellent battery life and impressive camera quality make it ideal for online classes and video conferences", rating: 4, img: Assets.testimonialProfile, name: "Anand Singh", batch: "Arjuna JEE Class 11th" },
        { review: "The Pi Book is the perfect companion for students,offering a seamless blend of portability and performance.Its excellent battery life and impressive camera quality make it ideal for online classes and video conferences", rating: 4, img: Assets.testimonialProfile, name: "Anand Singh", batch: "Arjuna JEE Class 11th" },
        { review: "The Pi Book is the perfect companion for students,offering a seamless blend of portability and performance.Its excellent battery life and impressive camera quality make it ideal for online classes and video conferences", rating: 4, img: Assets.testimonialProfile, name: "Anand Singh", batch: "Arjuna JEE Class 11th" },
        { review: "The Pi Book is the perfect companion for students,offering a seamless blend of portability and performance.Its excellent battery life and impressive camera quality make it ideal for online classes and video conferences", rating: 4, img: Assets.testimonialProfile, name: "Anand Singh", batch: "Arjuna JEE Class 11th" },
        { review: "The Pi Book is the perfect companion for students,offering a seamless blend of portability and performance.Its excellent battery life and impressive camera quality make it ideal for online classes and video conferences", rating: 4, img: Assets.testimonialProfile, name: "Anand Singh", batch: "Arjuna JEE Class 11th" },
        { review: "The Pi Book is the perfect companion for students,offering a seamless blend of portability and performance.Its excellent battery life and impressive camera quality make it ideal for online classes and video conferences", rating: 4, img: Assets.testimonialProfile, name: "Anand Singh", batch: "Arjuna JEE Class 11th" },

    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="">
            <div className="pb-20 z-10 pt-8  relative bg-customRadialBanner8 ">
                <div className="-z-100 absolute bg-customRadialBanner8-1 w-full h-full"></div>

                <div className="my-12">
                    <p className="text-3xl sm:text-5xl md:text-6xl text-center w-full font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Student Testimonials</p>
                    <p className="text-lg text-white text-center md:text-2xl py-4">Straight from the Student's Mouth</p>
                </div>
                <div className="w-full my-12">

                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {
                            data.map((item, index) => {
                                return <TestimonialCard item={item} key={index} />
                            })
                        }
                    </Marquee>
                </div>


            </div>
        </div>
    )
}