import { Assets } from "../../public/Assests"
import TestimonialCard from "../testimonialCard/TestimonialCard"
import Marquee from "../marquee/Marquee"
// import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HorizontalCarousel from "../marquee/Marquee";
import DraggableCarousel from "../marquee/Marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Banner8() {
    const width = window.innerWidth
    const data = [
        { review: "The laptop's performance is excellent, and I personally appreciate its premium design. The battery backup is impressive as well.", rating: 5, img: Assets.testimonialProfile, name: "Harshita Kaira", batch: "Arjuna JEE Class 11th" },
        { review: "The laptop is smooth, user-friendly, and ideal for online classes, Zoom meetings, and browsing. Its portability and excellent battery life make it perfect for students.", rating: 5, img: Assets.testimonialProfile, name: "Rahul Ojha", batch: "Arjuna JEE Class 11th" },
        { review: "First of all, I would like to thank Alakh Sir and the whole PW team. The device is functioning very well and meets students' needs. It has helped me a lot in my studies.", rating: 5, img: Assets.testimonialProfile, name: "Tushar Gautam", batch: "Arjuna JEE Class 11th" },
        { review: "The 'Study Mode' feature is excellent for distraction-free learning. The screen and compact design make it comfortable and portable.", rating: 5, img: Assets.testimonialProfile, name: "Aryan Bhatt", batch: "Arjuna JEE Class 11th" },
        { review: "The laptop helped me a lot while studying. I watched my classes, attempted DPPs, and had a great experience using it. The device is quite satisfying and functions very well.", rating: 5, img: Assets.testimonialProfile, name: "Minakshi Sharma", batch: "Arjuna JEE Class 11th" },
        { review: "This laptop is fantastic for its range! It has a big display, decent sound, great battery backup, and the Aurora store offers all necessary apps. It’s an excellent choice for studies.", rating: 5, img: Assets.testimonialProfile, name: "Ayaan Pro", batch: "Arjuna JEE Class 11th" },
        { review: "The laptop is very good, working well, and its battery life is impressive. It's an amazing device for studying..", rating: 5, img: Assets.testimonialProfile, name: "Ayush Jha", batch: "Arjuna JEE Class 11th" },
        { review: "The laptop is good, especially its UI, which is similar to Android, making it easy to use. It works smoothly, and the video quality is great for live lectures.", rating: 5, img: Assets.testimonialProfile, name: "Ujjwal Saini", batch: "Arjuna JEE Class 11th" },
        { review: "The app on the laptop works wonderfully, and it has been a great experience. It helps me focus on my studies effectively.", rating: 5, img: Assets.testimonialProfile, name: "Prachi Chauhan", batch: "Arjuna JEE Class 11th" },
        { review: "The laptop is good and works well for classes. The big screen and good sound quality enhance the study experience.", rating: 5, img: Assets.testimonialProfile, name: "Aman Yadav", batch: "Arjuna JEE Class 11th" },
        { review: "The response time is excellent, and the device is great for online education. Live lectures work seamlessly with no lag.", rating: 5, img: Assets.testimonialProfile, name: "Rahul Pandey", batch: "Arjuna JEE Class 11th" },
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="py-10">
            <div className=" z-10 relative bg-customRadialBanner8 ">
                <div className="-z-100 absolute bg-customRadialBanner8-1 w-full h-full"></div>

                <div className="my-0">
                    <p className="text-3xl sm:text-5xl md:text-6xl text-center w-full font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Student Testimonials</p>
                    <p className="text-lg px-2 text-white text-center md:text-2xl py-4">Straight from the Students: Beta Testers Share Their Reviews of the PI Book</p>
                </div>
                <div className="w-full pl-2 sm:pl-4 rounded-xl my-8 hover:cursor-pointer">
                    {/* <div className="flex flex-row  overflow-x-scroll w-full scrollbar-hide"> */}
                        {/* {
                            data.map((item, index) => {
                                return <TestimonialCard item={item} key={index} />
                            })
                        } */}
                        <Carousel
                        additionalTransfrom={0}
                        arrows={(width>415)}
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover={true}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    // min: 464
                                    min:200
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {
                            data.map((item, index) => {
                                return <TestimonialCard item={item} key={index} />
                            })
                        }
                    </Carousel>

                    {/* </div> */}
                    </div>

                </div>
            </div>
            )
}