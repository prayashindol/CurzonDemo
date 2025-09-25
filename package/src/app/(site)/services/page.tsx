import { Icon } from '@iconify/react'
import { Metadata } from "next";
import HeroSub from '@/components/shared/HeroSub';

export const metadata: Metadata = {
    title: "Our Services | Curzon London",
    description: "Comprehensive property management services in Central London. BTL management, vacant property care, maintenance, and managed sales.",
};

export default function Services() {
  const services = [
    {
      title: "BTL Property Management",
      description: "Complete buy-to-let management including tenant sourcing, rent collection, property maintenance, and financial reporting. We handle everything so you can focus on growing your portfolio.",
      icon: "ph:house-simple-fill",
      features: [
        "Tenant sourcing and screening",
        "Monthly rent collection", 
        "Property inspections",
        "Maintenance coordination",
        "Financial reporting"
      ]
    },
    {
      title: "Owner Occupier Management", 
      description: "Professional property management for owner-occupiers, handling maintenance, renovations, and property improvements while you focus on your busy life.",
      icon: "ph:user-fill",
      features: [
        "Maintenance management",
        "Renovation projects",
        "Property improvements",
        "Contractor coordination",
        "Quality assurance"
      ]
    },
    {
      title: "Vacant Property Management",
      description: "Secure and maintain vacant properties with regular inspections, security measures, and preparation for sale or rental to protect your investment.",
      icon: "ph:shield-fill", 
      features: [
        "Regular security inspections",
        "Maintenance and repairs",
        "Utility management",
        "Insurance liaison",
        "Market preparation"
      ]
    },
    {
      title: "Managed Sale Service",
      description: "End-to-end property sale management with market expertise, negotiation skills, and strategic pricing to maximize your returns.",
      icon: "ph:chart-line-up-fill",
      features: [
        "Market valuation",
        "Strategic pricing",
        "Agent coordination", 
        "Negotiation support",
        "Sale completion"
      ]
    },
    {
      title: "Security Services",
      description: "Professional security services including monitoring, access control, and 24/7 surveillance for your Central London properties.",
      icon: "ph:lock-fill",
      features: [
        "24/7 monitoring",
        "Access control systems",
        "Emergency response",
        "Security inspections",
        "Incident reporting"
      ]
    },
    {
      title: "Maintenance & Repairs",
      description: "Expert maintenance services by our in-house team of developers and builders, offering competitive rates and high-quality workmanship.",
      icon: "ph:wrench-fill",
      features: [
        "Emergency repairs",
        "Preventive maintenance",
        "Renovation projects",
        "Quality materials",
        "Competitive pricing"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We assess your property and discuss your specific requirements and investment goals."
    },
    {
      step: "02", 
      title: "Custom Strategy",
      description: "We develop a tailored management strategy to maximize your property's potential and returns."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team implements the strategy with regular updates and transparent communication."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring and optimization to ensure your property delivers optimal performance."
    }
  ];

  return (
    <div className="pt-24">
      <HeroSub 
        badge="Our Services"
        title="Comprehensive Property Management Solutions"
        description="Professional property management services backed by 20 years of experience and our own development expertise in Central London."
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon icon={service.icon} className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-dark/70 dark:text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-dark/60 dark:text-white/60">
                      <Icon icon="ph:check-circle-fill" className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="text-center mb-16">
            <div className="flex gap-2.5 items-center justify-center mb-4">
              <Icon icon="ph:gear-fill" className="text-xl text-primary" />
              <p className="text-base font-semibold text-dark/75 dark:text-white/75">Our Process</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark dark:text-white mb-4">
              How We Work With You
            </h2>
            <p className="text-lg text-dark/50 dark:text-white/50 max-w-3xl mx-auto">
              Our proven 4-step process ensures your property receives the expert attention it deserves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
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
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our developer expertise can maximize your property investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </a>
              <a href="tel:+447877227073" className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Call Now: +44 7877 227073
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}