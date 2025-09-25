import Link from 'next/link';

const GetInTouch: React.FC = () => {
    return (
        <section>
            <div className='container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0'>
                <div className="relative rounded-t-2xl overflow-hidden">
                    <video
                        className="w-full h-full absolute top-0 left-0 object-cover -z-10"
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-label="Video background showing luxurious real estate"
                    >
                        <source src="https://videos.pexels.com/video-files/7233782/7233782-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    </video>

                    <div className="bg-black/40 py-16 sm:py-20 md:py-28 lg:py-64 px-4">
                        <div className="flex flex-col items-center gap-6 sm:gap-8">
                            <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-40 xl:text-52 max-w-5xl text-center font-medium leading-tight px-4'>
                                Experience property management by developers who understand your investment.
                            </h2>
                            <Link href="/contact" className='bg-white py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base text-dark hover:bg-dark hover:text-white duration-300 font-semibold'>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 sm:py-5 bg-primary rounded-b-2xl overflow-hidden">
                    <div className="flex items-center gap-20 sm:gap-40 animate-slide">
                        <p className='text-white text-sm sm:text-base whitespace-nowrap relative after:absolute after:w-16 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-24 sm:after:-right-32'>
                            EXPERT BTL MANAGEMENT IN CENTRAL LONDON—MAXIMIZE YOUR RENTAL YIELDS!
                        </p>
                        <p className='text-white text-sm sm:text-base whitespace-nowrap relative after:absolute after:w-16 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-24 sm:after:-right-32'>
                            24/7 PROPERTY SUPPORT—DEVELOPERS WHO UNDERSTAND YOUR INVESTMENT!
                        </p>
                        <p className='text-white text-sm sm:text-base whitespace-nowrap relative after:absolute after:w-16 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-24 sm:after:-right-32'>
                            VACANT PROPERTY MANAGEMENT—SECURE & MAINTAIN YOUR ASSETS!
                        </p>
                        <p className='text-white text-sm sm:text-base whitespace-nowrap relative after:absolute after:w-16 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-24 sm:after:-right-32'>
                            MANAGED SALE SERVICE—FROM REFURBISHMENT TO COMPLETION!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;