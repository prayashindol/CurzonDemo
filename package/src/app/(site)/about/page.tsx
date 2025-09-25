import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Metadata } from "next";
import HeroSub from '@/components/shared/HeroSub';

export const metadata: Metadata = {
    title: "About Us | Curzon London",
    description: "Learn about Curzon London's 20 years of property management expertise. We're developers who understand property investment from the ground up.",
};

export default function AboutUs() {
  const teamValues = [
    {
      icon: "ph:buildings-fill",
      title: "Developer Expertise",
      description: "As active property developers, we understand construction, renovation, and property optimization from the ground up."
    },
    {
      icon: "ph:clock-fill", 
      title: "20 Years Experience",
      description: "Two decades of estate agency experience across Central London gives us unmatched market knowledge."
    },
    {
      icon: "ph:handshake-fill",
      title: "Investor Focused",
      description: "We treat every property as our own investment, maximizing returns and protecting your assets."
    },
    {
      icon: "ph:wrench-fill",
      title: "In-House Team",
      description: "Our own maintenance team and contractors ensure quick response times and competitive rates."
    }
  ];

  return (
    <div className="pt-24">
      <HeroSub 
        badge="About Us"
        title="Property Management by Developers, for Investors"
        description="With 20 years of experience and our own development projects, we bring unique expertise to Central London property management."
      />
      
      {/* Company Story Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex gap-2.5 items-center mb-4">
                <Icon icon="ph:star-fill" className="text-xl text-primary" />
                <p className="text-base font-semibold text-dark/75 dark:text-white/75">Our Story</p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark dark:text-white mb-6 leading-tight">
                Built by Developers for Property Investors
              </h2>
              <div className="space-y-4 text-dark/70 dark:text-white/70 leading-relaxed">
                <p>
                  Curzon London was founded with a simple principle: property management should be handled by people who truly understand property development. As active developers ourselves, we know exactly what makes a property profitable, maintainable, and attractive to tenants.
                </p>
                <p>
                  Our 20 years in the Central London market have taught us that successful property investment requires more than just collecting rent. It demands strategic thinking, quality maintenance, and deep local knowledge – exactly what we provide.
                </p>
                <p>
                  Today, we manage over 100 properties across Central London, from luxury BTL investments to owner-occupier homes, always with the same commitment to maximizing value and protecting your investment.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/faqs/faq-image.png"
                alt="Curzon London team"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="text-center mb-16">
            <div className="flex gap-2.5 items-center justify-center mb-4">
              <Icon icon="ph:crown-fill" className="text-xl text-primary" />
              <p className="text-base font-semibold text-dark/75 dark:text-white/75">Our Values</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark dark:text-white mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-dark/50 dark:text-white/50 max-w-3xl mx-auto">
              Our unique position as both developers and property managers gives us insights that traditional agencies simply cannot match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon icon={value.icon} className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-dark/70 dark:text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let our developer expertise work for your property investment. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get In Touch
              </a>
              <a href="/services" className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}