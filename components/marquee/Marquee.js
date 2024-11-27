import TestimonialCard from "../testimonialCard/TestimonialCard";

export default function Marquee({data}) {
    return (
        <div className="w-full inline-flex py-6 rounded-xl overflow-hidden">
                    <div className="flex items-center animate-infinite-scroll justify-center">
                        {data.map((partner, i) => (
                            // <div key={i} className="flex h-auto w-44 justify-center items-center mx-2.5">
                            //     <Image className="rounded-xl brightness-50" src={partner.src} alt={partner.name} />
                            // </div>
                            <TestimonialCard item={partner} />
                        ))}
                    </div>
                    <div className="flex items-center animate-infinite-scroll whitespace-nowrap justify-center" aria-hidden="true">
                        {data.map((partner, i) => (
                            // <div key={i} className="flex h-auto w-44 justify-center items-center mx-2.5">
                            //     <Image className="rounded-xl brightness-50" src={partner.src} alt={partner.name} />
                            // </div>
                            <TestimonialCard item={partner} />
                        ))}
                    </div>
                </div>
    )
}