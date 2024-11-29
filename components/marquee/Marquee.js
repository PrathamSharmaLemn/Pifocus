import React, { useRef, useState } from "react";
import { Assets } from "../../public/Assests";
import Image from "next/image";

const DraggableCarousel = () => {
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
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier for scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier for scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    // <div
    //   ref={carouselRef}
    //   className="w-full overflow-x-scroll scroll-smooth flex space-x-4 snap-x snap-mandatory scrollbar-hide"
    //   onMouseDown={handleMouseDown}
    //   onMouseMove={handleMouseMove}
    //   onMouseUp={handleMouseUp}
    //   onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the container
    //   onTouchStart={handleTouchStart}
    //   onTouchMove={handleTouchMove}
    //   onTouchEnd={handleTouchEnd}
    //   style={{ cursor: isDragging ? "grabbing" : "grab" }} // Change cursor style
    // >
    //   {[...Array(10)].map((_, i) => (
    //     <div
    //       key={i}
    //       className="w-64 h-40 flex-shrink-0 bg-blue-500 text-white flex items-center justify-center snap-center rounded-lg"
    //     >
    //       Item {i + 1}
    //     </div>
    //   ))}
    // </div>
    <div className="w-full inline-flex py-6 rounded-xl overflow-hidden">
    <div className="flex items-center animate-infinite-scroll justify-center">
        {data.map((partner, i) => (
            <div key={i} className="flex h-auto w-44 justify-center items-center mx-2.5">
                <Image className="rounded-xl brightness-50" src={partner.img} alt={partner.name} />
            </div>
        ))}
    </div>
    <div className="flex items-center animate-infinite-scroll whitespace-nowrap justify-center" aria-hidden="true">
        {data.map((partner, i) => (
            <div key={i} className="flex h-auto w-44 justify-center items-center mx-2.5">
                <Image className="rounded-xl brightness-50" src={partner.img} alt={partner.name} />
            </div>
        ))}
        
    </div>  
       </div>
  );
};

export default DraggableCarousel;
