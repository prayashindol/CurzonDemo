import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                    <div className='lg:mx-0 mx-auto order-2 lg:order-1'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='w-full max-w-md lg:max-w-full mx-auto'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-8 xl:px-12 order-1 lg:order-2'>
                        <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center">
                            <Icon icon="ph:house-simple-fill" className="text-xl sm:text-2xl text-primary" />
                            FAQs
                        </p>
                        <h2 className='text-2xl sm:text-3xl md:text-40 lg:text-52 leading-tight font-medium text-dark dark:text-white mt-2 mb-3'>
                            Curzon London Property Management
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 text-sm sm:text-base lg:pr-8 xl:pr-20 mb-6 sm:mb-8'>
                            Get answers to the most common questions about our property management services in Central London
                        </p>
                        <div>
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-4 sm:gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. What property management services do you offer?</AccordionTrigger>
                                    <AccordionContent>
                                        We offer comprehensive property management services including BTL (Buy-to-Let) management, owner occupier management, vacant property management, managed sale service, security solutions, and maintenance services. Our team handles everything from tenant sourcing to property maintenance across Central London.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Why should I choose developers to manage my property?</AccordionTrigger>
                                    <AccordionContent>
                                        As developers ourselves, we understand properties from the ground up. We know the construction quality, potential issues, and optimal maintenance approaches. This insider knowledge means we can prevent problems before they occur and ensure your property maintains its value and appeal to tenants or buyers.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Do you only manage properties in Central London?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, we focus exclusively on Central London properties. This specialization allows us to provide expert local knowledge, understand the unique challenges of the Central London market, and maintain high service standards through our concentrated geographic focus.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. What makes your BTL management different?</AccordionTrigger>
                                    <AccordionContent>
                                        Our BTL management combines developer expertise with investor understanding. We optimize rental yields through strategic improvements, source quality tenants using our network, and provide transparent financial reporting. As developers and investors ourselves, we treat your property as we would our own investment.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. How quickly can you respond to maintenance issues?</AccordionTrigger>
                                    <AccordionContent>
                                        We offer 24/7 support with emergency response times within 2 hours for urgent issues. For routine maintenance, we typically respond within 24 hours. Our in-house maintenance team and trusted contractor network ensures quick, quality repairs that protect both tenant satisfaction and property value.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>6. What are your management fees?</AccordionTrigger>
                                    <AccordionContent>
                                        Our management fees are competitive and transparent, typically ranging from 8-12% depending on the service level required. We provide detailed fee structures upfront with no hidden costs. Contact us for a personalized quote based on your specific property and requirements.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
