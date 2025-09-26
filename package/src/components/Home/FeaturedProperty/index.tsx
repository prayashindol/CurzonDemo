"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProprty } from "@/app/api/featuredproperty";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const CurrentProject: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
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
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {featuredProprty.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-540"
                      unoptimized={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                <Icon icon="ph:hammer-fill" className="text-2xl text-primary " />
                Current Project
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
                Belgravia Luxury Refurbishment
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon icon="ph:map-pin" width={28} height={26} className="text-dark/50 dark:text-white/50" />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  Eaton Square, Belgravia, London SW1
                </p>
              </div>
            </div>
            <p className="text-base text-dark/50 dark:text-white/50">
              Our current flagship development project: a complete luxury refurbishment of a Grade II listed Georgian townhouse in prestigious Eaton Square. This £2.8M project showcases our expertise in high-end residential development, combining period features with modern luxury amenities.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="ph:bed-fill" width={24} height={24} className="text-dark dark:text-white" />
                </div>
                <h6 className="">5 Bedrooms</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="ph:bathtub-fill" width={24} height={24} className="text-dark dark:text-white" />
                </div>
                <h6 className="">4 Bathrooms</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="ph:stairs-fill" width={24} height={24} className="text-dark dark:text-white" />
                </div>
                <h6 className="">4 Floors</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="ph:crown-fill" width={24} height={24} className="text-dark dark:text-white" />
                </div>
                <h6 className="">Grade II Listed</h6>
              </div>
            </div>
            <div className="flex gap-10">
              <Link href="/contact" className="py-4 px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white">
                Discuss Your Project
              </Link>
              <div>
                <h4 className="text-3xl text-dark dark:text-white font-medium">
                  £2.8M
                </h4>
                <p className="text-base text-dark/70 dark:text-white/80">
                  Investment Value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
