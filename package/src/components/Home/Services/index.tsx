import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "BTL Property Management",
      description: "Comprehensive buy-to-let management services ensuring maximum rental yield and hassle-free property ownership for investors.",
      icon: "ph:house-simple-fill"
    },
    {
      title: "Owner Occupier Management",
      description: "Professional property management services for owner-occupiers, handling maintenance, renovations, and property improvements.",
      icon: "ph:user-fill"
    },
    {
      title: "Vacant Property Management",
      description: "Secure and maintain vacant properties with regular inspections, security measures, and preparation for sale or rental.",
      icon: "ph:shield-fill"
    },
    {
      title: "Managed Sale Service",
      description: "End-to-end property sale management with market expertise, negotiation skills, and strategic pricing to maximize returns.",
      icon: "ph:chart-line-up-fill"
    },
    {
      title: "Security",
      description: "Professional security services including monitoring, access control, and 24/7 surveillance for your Central London properties.",
      icon: "ph:lock-fill"
    },
    {
      title: "Maintenance",
      description: "Expert maintenance services by our in-house team of developers and builders, offering competitive rates and high-quality workmanship.",
      icon: "ph:wrench-fill"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 justify-center items-center">
            <Icon icon="ph:gear-fill" className="text-xl sm:text-2xl text-primary" />
            Our Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-40 lg:text-52 mt-3 sm:mt-4 mb-3 sm:mb-2 font-medium leading-tight text-dark dark:text-white px-4">
            Professional Property Management
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>by Developers, for Investors
          </h2>
          <p className="text-dark/50 dark:text-white/50 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-4">
            Comprehensive property management services in Central London, backed by 20 years of experience and our own development expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                  <Icon icon={service.icon} className="text-xl sm:text-2xl md:text-3xl text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark dark:text-white mb-3 sm:mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-dark/70 dark:text-white/70 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="py-4 px-8 bg-primary text-base leading-4 text-white rounded-full font-semibold hover:bg-dark duration-300">
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
