import React from 'react';
import { Icon } from "@iconify/react";
import Image from 'next/image';

interface SuccessStory {
    title: string;
    client: string;
    location: string;
    result: string;
    description: string;
    image: string;
    roi: string;
}

const ClientSuccessStories: React.FC = () => {
    const successStories: SuccessStory[] = [
        {
            title: "Portfolio Optimization Success",
            client: "James Wellington",
            location: "Mayfair, London W1",
            result: "35% Increase in Rental Yield",
            description: "We transformed James's underperforming 3-bedroom flat into a premium rental property through strategic refurbishment and tenant management, achieving 35% increase in rental yield within 6 months.",
            image: "/images/blog/blog-1.jpg",
            roi: "35%"
        },
        {
            title: "Vacant Property Turnaround",
            client: "Sarah Mitchell",
            location: "Knightsbridge, London SW1",
            result: "£180k Value Increase",
            description: "A vacant Victorian townhouse was professionally renovated and positioned in the luxury market. Our development expertise and agency connections secured a premium sale price.",
            image: "/images/blog/blog-2.jpg",
            roi: "£180k"
        },
        {
            title: "BTL Investment Success",
            client: "David Chen",
            location: "Chelsea, London SW3",
            result: "8.5% Annual Yield",
            description: "Complete BTL management service including tenant sourcing, property optimization, and ongoing maintenance through our in-house team achieved exceptional returns for this overseas investor.",
            image: "/images/blog/blog-3.jpg",
            roi: "8.5%"
        }
    ];

    return (
        <section>
            <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
                <div className='flex justify-between md:items-end items-start mb-8 sm:mb-10 md:flex-row flex-col gap-4'>
                    <div>
                        <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center">
                            <Icon icon="ph:trophy-fill" className="text-xl sm:text-2xl text-primary" aria-label="Success icon" />
                            Success Stories
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-40 lg:text-52 font-medium dark:text-white mt-2">
                            Client Success Stories
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 text-base sm:text-xm mt-2 max-w-2xl'>
                            Real results from real clients - discover how we maximize property investments
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {successStories.map((story, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="relative">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-44 sm:h-48 object-cover"
                                    unoptimized={true}
                                />
                                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                    {story.roi}
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-dark dark:text-white mb-2">
                                    {story.title}
                                </h3>
                                <div className="mb-3 space-y-1">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-dark/70 dark:text-white/70">
                                        <Icon icon="ph:user-fill" width={14} height={14} className="text-primary sm:w-4 sm:h-4" />
                                        <span>{story.client}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-dark/70 dark:text-white/70 mb-2">
                                        <Icon icon="ph:map-pin-fill" width={14} height={14} className="text-primary sm:w-4 sm:h-4" />
                                        <span>{story.location}</span>
                                    </div>
                                    <div className="bg-primary/10 dark:bg-primary/20 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium inline-block">
                                        {story.result}
                                    </div>
                                </div>
                                <p className="text-dark/70 dark:text-white/70 text-xs sm:text-sm leading-relaxed">
                                    {story.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientSuccessStories;
