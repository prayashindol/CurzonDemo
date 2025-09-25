import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Metadata } from "next";
import HeroSub from '@/components/shared/HeroSub';

export const metadata: Metadata = {
    title: "Our Team | Curzon London",
    description: "Meet the experienced team behind Curzon London&apos;s property management success. Developers, estate agents, and property experts.",
};

export default function Team() {
  const teamMembers = [
    {
      name: "David Curzon",
      position: "Founder & Managing Director",
      image: "/images/testimonial/johns.jpg",
      bio: "With 20 years in Central London property development and estate agency, David founded Curzon London to bridge the gap between development expertise and property management.",
      specialties: ["Property Development", "Investment Strategy", "Market Analysis"],
      contact: {
        email: "david@curzonlondon.com",
        phone: "+44 7877 227073"
      }
    },
    {
      name: "Sarah Mitchell",
      position: "Head of Property Management",
      image: "/images/testimonial/smiths.jpg", 
      bio: "Sarah oversees all day-to-day property management operations, ensuring our high standards are maintained across every property in our portfolio.",
      specialties: ["BTL Management", "Tenant Relations", "Property Inspections"],
      contact: {
        email: "sarah@curzonlondon.com",
        phone: "+44 7877 227074"
      }
    },
    {
      name: "Michael Thompson",
      position: "Head of Maintenance",
      image: "/images/testimonial/johns.jpg",
      bio: "Leading our in-house maintenance team, Michael ensures rapid response times and quality workmanship on all property maintenance and renovations.",
      specialties: ["Property Maintenance", "Renovation Projects", "Emergency Repairs"],
      contact: {
        email: "michael@curzonlondon.com",
        phone: "+44 7877 227075"
      }
    },
    {
      name: "Emma Richardson",
      position: "Client Relations Manager", 
      image: "/images/testimonial/emily.jpg",
      bio: "Emma is the primary point of contact for our clients, ensuring clear communication and exceptional service throughout the property management process.",
      specialties: ["Client Communication", "Service Coordination", "Account Management"],
      contact: {
        email: "emma@curzonlondon.com",
        phone: "+44 7877 227076"
      }
    }
  ];

  const expertise = [
    {
      icon: "ph:buildings-fill",
      title: "20+ Years Combined Experience",
      description: "Our team brings over two decades of combined experience in property development, estate agency, and property management."
    },
    {
      icon: "ph:certificate-fill",
      title: "Professional Qualifications",
      description: "All team members hold relevant professional qualifications and continue their professional development regularly."
    },
    {
      icon: "ph:map-pin-fill", 
      title: "Central London Specialists",
      description: "Deep local knowledge of Central London&apos;s property market, regulations, and opportunities."
    },
    {
      icon: "ph:clock-fill",
      title: "24/7 Support Available",
      description: "Our team provides round-the-clock support for emergency situations and urgent property matters."
    }
  ];

  return (
    <div className="pt-24">
      <HeroSub 
        badge="Our Team"
        title="Meet the Experts Behind Your Success"
        description="Our experienced team combines property development expertise with exceptional customer service to deliver outstanding results."
      />

      {/* Team Members */}
      <section className="py-16 md:py-24">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-dark/70 dark:text-white/70 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-dark dark:text-white mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-dark/60 dark:text-white/60">
                        <Icon icon="ph:envelope-fill" className="text-primary" />
                        <a href={`mailto:${member.contact.email}`} className="hover:text-primary transition-colors">
                          {member.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark/60 dark:text-white/60">
                        <Icon icon="ph:phone-fill" className="text-primary" />
                        <a href={`tel:${member.contact.phone}`} className="hover:text-primary transition-colors">
                          {member.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="text-center mb-16">
            <div className="flex gap-2.5 items-center justify-center mb-4">
              <Icon icon="ph:star-fill" className="text-xl text-primary" />
              <p className="text-base font-semibold text-dark/75 dark:text-white/75">Team Expertise</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark dark:text-white mb-4">
              Why Our Team Delivers Results
            </h2>
            <p className="text-lg text-dark/50 dark:text-white/50 max-w-3xl mx-auto">
              Our team&apos;s unique combination of skills and experience ensures your property receives expert attention at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon icon={item.icon} className="text-3xl text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-dark/70 dark:text-white/70 leading-relaxed">
                  {item.description}
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
              Ready to Work With Our Expert Team?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to discuss your property management needs with our experienced professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Contact Our Team
              </a>
              <a href="/services" className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}