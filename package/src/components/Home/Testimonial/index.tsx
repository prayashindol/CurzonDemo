"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/app/api/testimonial";

const Testimonial = () => {
    const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const handleDotClick = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    return (
        <section className="bg-dark relative overflow-hidden" id="testimonial">
            <div className="absolute right-0 top-0 opacity-20 sm:opacity-50">
                <Image
                    src="/images/testimonial/Vector.png"
                    alt="victor"
                    width={500}
                    height={700}
                    className="sm:w-[700px] sm:h-[1039px]"
                    unoptimized={true}
                />
            </div>
            <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
                <div className="mb-8 sm:mb-12">
                    <p className="text-white text-sm sm:text-base font-semibold flex gap-2 items-center">
                        <Icon icon="ph:house-simple-fill" className="text-xl sm:text-2xl text-primary" />
                        Testimonials
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-40 lg:text-52 font-medium text-white mt-2">
                        What our clients say
                    </h2>
                </div>
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index} className="mt-6 sm:mt-9">
                                <div className="lg:flex items-center gap-8 lg:gap-11">
                                    <div className="flex items-start gap-4 sm:gap-6 lg:gap-11 lg:pr-20">
                                        <div className="flex-shrink-0">
                                            <Icon icon="ph:house-simple" width={24} height={24} className="text-primary sm:w-8 sm:h-8" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 sm:mb-8">{item.review}</h4>
                                            <div className="flex items-center gap-4 sm:gap-6">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={60}
                                                    height={60}
                                                    className="rounded-full lg:hidden block sm:w-20 sm:h-20"
                                                    unoptimized={true}
                                                />
                                                <div>
                                                    <h6 className="text-white text-base sm:text-xm font-medium">{item.name}</h6>
                                                    <p className="text-white/40 text-sm sm:text-base">{item.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-full rounded-2xl overflow-hidden mt-6 lg:mt-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={440}
                                            height={440}
                                            className="lg:block hidden"
                                            unoptimized={true}
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/20 rounded-full">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${current === index + 1 ? "bg-white" : "bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
