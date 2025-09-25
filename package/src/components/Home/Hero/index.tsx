import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 pt-32 sm:pt-40 md:pt-60 pb-8 sm:pb-12 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-base sm:text-xm font-medium mb-2'>London</p>
            <h1 className='text-inherit text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 sm:mt-6 mb-6 sm:mb-8 leading-tight'>
              Property Management by&nbsp;Developers, for Investors
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4 sm:gap-5 max-w-lg mx-auto md:mx-0'>
              <Link href="/contact" className='px-6 sm:px-8 py-3 sm:py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer text-center'>
                Get in touch
              </Link>
              <Link href="/services" className='px-6 sm:px-8 py-3 sm:py-4 border border-white dark:border-dark bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer text-center'>
                Our Services
              </Link>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-20'>
            <Image
              src={'/images/hero/heroBanner2.png'}
              alt='heroImg'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-10 sm:py-14 md:py-12 px-6 sm:px-10 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-20 sm:mt-28 md:mt-24 mx-4 sm:mx-0'>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-8 sm:gap-10 md:gap-16 lg:gap-24 text-center sm:text-center dark:text-white text-black'>
            <div className='flex flex-col items-center gap-3 sm:gap-4'>
              <div className='flex items-center justify-center min-h-[2rem]'>
                <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>20</span>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-normal text-inherit leading-tight text-center'>
                Years Experience
              </p>
            </div>
            <div className='flex flex-col items-center gap-3 sm:gap-4'>
              <div className='flex items-center justify-center min-h-[2rem]'>
                <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>6</span>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-normal text-inherit leading-tight text-center'>
                Core Services
              </p>
            </div>
            <div className='flex flex-col items-center gap-3 sm:gap-4'>
              <div className='flex items-center justify-center min-h-[2rem]'>
                <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>100+</span>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-normal text-inherit leading-tight text-center'>
                Properties Managed
              </p>
            </div>
            <div className='flex flex-col items-center gap-3 sm:gap-4'>
              <div className='flex items-center justify-center min-h-[2rem]'>
                <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>24/7</span>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-normal text-inherit leading-tight text-center'>
                Support Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
