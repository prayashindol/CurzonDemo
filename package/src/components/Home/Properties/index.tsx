import { Icon } from '@iconify/react'

const WhyChooseCurzon: React.FC = () => {
  const advantages = [
    {
      icon: 'ph:buildings-fill',
      title: 'Developers Ourselves',
      description: 'As active property developers with live projects, we understand the investment landscape from the ground up and provide insider expertise.'
    },
    {
      icon: 'ph:clock-fill',
      title: '20 Years Experience',
      description: 'Two decades of estate agency experience across Central London, giving us unmatched market knowledge and professional networks.'
    },
    {
      icon: 'ph:wrench-fill',
      title: 'In-House Maintenance Team',
      description: 'Our own builders and maintenance team offer competitive daily rates, ensuring quick response times and cost-effective solutions.'
    },
    {
      icon: 'ph:target-fill',
      title: 'Investor Focused',
      description: 'We specialize in maximizing returns for property investors, not just managing properties - we understand your investment goals.'
    },
    {
      icon: 'ph:handshake-fill',
      title: 'Agent Network Expertise',
      description: 'With extensive agency experience, we negotiate the best deals with local agents to achieve optimal yields for your properties.'
    },
    {
      icon: 'ph:map-pin-fill',
      title: 'Central London Specialists',
      description: 'Exclusive focus on prime Central London properties, ensuring deep local knowledge and premium service standards.'
    }
  ]

  return (
    <section>
      <div className='container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0'>
        <div className='mb-12 sm:mb-16 flex flex-col gap-3 px-4'>
          <div className='flex gap-2.5 items-center justify-center'>
            <span>
              <Icon
                icon={'ph:crown-fill'}
                width={18}
                height={18}
                className='text-primary sm:w-5 sm:h-5'
              />
            </span>
            <p className='text-sm sm:text-base font-semibold text-dark/75 dark:text-white/75'>
              Why Choose Us
            </p>
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-tight mb-2'>
            The Curzon Advantage
          </h2>
          <p className='text-base sm:text-xm font-normal text-black/50 dark:text-white/50 text-center max-w-2xl mx-auto'>
            Combining development expertise with property management excellence to deliver superior investor returns.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
          {advantages.map((advantage, index) => (
            <div key={index} className='bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300'>
                <Icon
                  icon={advantage.icon}
                  className='text-xl sm:text-2xl md:text-3xl text-primary group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <h3 className='text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4 leading-tight'>
                {advantage.title}
              </h3>
              <p className='text-sm sm:text-base text-black/70 dark:text-white/70 leading-relaxed'>
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseCurzon
