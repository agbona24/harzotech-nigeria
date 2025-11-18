import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Services - Harzotech Technology Services',
  description: 'Comprehensive technology services including software development, web design, marketing automation, digital ads, and managed IT support for businesses.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'development',
      title: 'Software Development',
      description: 'Expert software development services to bring your vision to life with modern, scalable solutions.',
      icon: '💻',
      color: 'from-blue-500 to-indigo-600',
      offerings: [
        {
          name: 'Custom Web Applications',
          description: 'Full-stack web applications built with modern frameworks and technologies.',
        },
        {
          name: 'API Integrations',
          description: 'Seamless integration with third-party services and internal systems.',
        },
        {
          name: 'Multi-tenant SaaS Engineering',
          description: 'Scalable SaaS platforms designed to serve multiple clients efficiently.',
        },
        {
          name: 'Database Architecture & DevOps',
          description: 'Robust database design, optimization, and DevOps implementation.',
        },
      ],
    },
    {
      id: 'web',
      title: 'Website Design & Development',
      description: 'Beautiful, functional websites that convert visitors into customers.',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
      offerings: [
        {
          name: 'Corporate Websites',
          description: 'Professional websites that establish your brand presence online.',
        },
        {
          name: 'E-commerce Sites',
          description: 'Full-featured online stores with payment integration and inventory management.',
        },
        {
          name: 'Landing Pages & Sales Funnels',
          description: 'High-converting landing pages optimized for lead generation and sales.',
        },
      ],
    },
    {
      id: 'automation',
      title: 'Marketing Automation',
      description: 'Automate your marketing workflows and nurture leads on autopilot.',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      offerings: [
        {
          name: 'CRM & Email Automation',
          description: 'Automated email campaigns and customer relationship management.',
        },
        {
          name: 'WhatsApp Funnels',
          description: 'Automated WhatsApp messaging sequences for customer engagement.',
        },
        {
          name: 'Appointment Systems',
          description: 'Automated booking and scheduling systems for your business.',
        },
        {
          name: 'Lead Magnet Integration',
          description: 'Capture and nurture leads with automated marketing funnels.',
        },
      ],
    },
    {
      id: 'ads',
      title: 'Digital Ads & Growth',
      description: 'Data-driven digital advertising campaigns that deliver measurable results.',
      icon: '📱',
      color: 'from-green-500 to-teal-500',
      offerings: [
        {
          name: 'Meta & Google Ads',
          description: 'Strategic ad campaigns on Facebook, Instagram, and Google platforms.',
        },
        {
          name: 'Conversion Funnels',
          description: 'Optimized funnels that turn ad clicks into paying customers.',
        },
        {
          name: 'Lead Generation Systems',
          description: 'Complete systems to capture and qualify leads from paid advertising.',
        },
      ],
    },
    {
      id: 'support',
      title: 'Managed IT & Support',
      description: 'Comprehensive IT management and support to keep your systems running smoothly.',
      icon: '🛠️',
      color: 'from-cyan-500 to-blue-500',
      offerings: [
        {
          name: 'SLA Maintenance',
          description: 'Security updates, backups, and regular maintenance with SLA guarantees.',
        },
        {
          name: 'Performance Monitoring',
          description: '24/7 monitoring and optimization of your applications and infrastructure.',
        },
        {
          name: 'Hosting & Email Management',
          description: 'Reliable hosting solutions and professional email management.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary-orange)] to-[var(--primary-orange-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100">
              Comprehensive technology services to power your digital transformation and business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  {/* Service Header */}
                  <div
                    className={`md:w-2/5 bg-gradient-to-br ${service.color} p-12 flex flex-col justify-center items-center text-white`}
                  >
                    <div className="text-8xl mb-6">{service.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                      {service.title}
                    </h2>
                    <p className="text-lg text-center opacity-90">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="md:w-3/5 p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">What We Offer:</h3>
                    <div className="space-y-6">
                      {service.offerings.map((offering, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-blue)] flex items-center justify-center text-white font-bold">
                              {idx + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                              {offering.name}
                            </h4>
                            <p className="text-gray-600">{offering.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Button href="/contact" variant="primary">
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--primary-blue)] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, goals, and challenges
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--primary-blue)] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Strategy</h3>
              <p className="text-gray-600">
                We create a tailored plan to achieve your objectives
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--primary-blue)] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Execution</h3>
              <p className="text-gray-600">
                We implement solutions with precision and quality
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--primary-blue)] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Support</h3>
              <p className="text-gray-600">
                We provide ongoing support and optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button href="/products" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-[var(--primary-blue)]">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
