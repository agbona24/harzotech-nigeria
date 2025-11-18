import Link from 'next/link';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

export default function Home() {
  const products = [
    {
      title: 'Restaurant SaaS',
      description: 'Complete restaurant operating system with POS, inventory, and delivery management.',
      features: ['POS for Dine-in & Delivery', 'Inventory Management', 'Staff & Role Management', 'Kitchen Display System'],
      icon: '🍽️',
      href: '/products#restaurant',
    },
    {
      title: 'Real Estate SaaS',
      description: 'Built for agencies and developers with plot tracking and estate allocation.',
      features: ['Land/Plot Inventory', 'Estate Allocation System', 'Payment Tracking', 'Document Generation'],
      icon: '🏘️',
      href: '/products#realestate',
    },
    {
      title: 'Fintech Systems',
      description: 'Modular fintech engine with wallets, transfers, and digital savings.',
      features: ['User Wallets & Transfers', 'KYC Verification', 'Digital Thrift Automation', 'Treasury Dashboard'],
      icon: '💳',
      href: '/products#fintech',
    },
    {
      title: 'Hotel Management',
      description: 'Smart hotel system for reservations, bookings, and guest management.',
      features: ['Reservation Engine', 'Room Management', 'Billing & Payments', 'Housekeeping'],
      icon: '🏨',
      href: '/products#hotel',
    },
    {
      title: 'CRM Platform',
      description: 'All-in-one CRM with lead tracking and automation.',
      features: ['Lead Pipeline Tracking', 'Email & WhatsApp Automation', 'Client Segmentation', 'Sales Forecasting'],
      icon: '📊',
      href: '/products#crm',
    },
    {
      title: 'POS System',
      description: 'Lightweight or enterprise POS with inventory and multi-store support.',
      features: ['Sales & Checkout', 'Barcode Scanning', 'Multi-store Support', 'Offline Mode'],
      icon: '💰',
      href: '/products#pos',
    },
  ];

  const services = [
    {
      title: 'Software Development',
      description: 'Custom web applications, API integrations, and multi-tenant SaaS engineering.',
      icon: '💻',
    },
    {
      title: 'Website Design',
      description: 'Corporate websites, e-commerce sites, and high-converting landing pages.',
      icon: '🎨',
    },
    {
      title: 'Marketing Automation',
      description: 'CRM, email automation, WhatsApp funnels, and appointment systems.',
      icon: '🚀',
    },
    {
      title: 'Digital Ads',
      description: 'Meta & Google ads, conversion funnels, and lead generation.',
      icon: '📱',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-dark)] to-[var(--primary-blue)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              🚀 Advanced Systems + Business Automation + Scalable SaaS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building Powerful
              <span className="block mt-2 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-orange-light)] bg-clip-text text-transparent">
                SaaS Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Enterprise-grade software, digital infrastructure, and automation tools for businesses across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" variant="secondary" size="lg">
                Explore Products
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-[var(--primary-blue)]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-2">8+</div>
              <div className="text-gray-600">SaaS Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-2">500+</div>
              <div className="text-gray-600">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-[var(--primary-blue)]">Harzotech</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading technology company that builds powerful SaaS solutions and automation systems for businesses across Africa and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with enterprise-grade software solutions that drive efficiency, scalability, and growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Approach</h3>
              <p className="text-gray-600">
                We combine cutting-edge technology with deep business understanding to deliver solutions that work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Reach</h3>
              <p className="text-gray-600">
                Serving businesses across Africa and beyond with scalable, reliable, and secure technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[var(--primary-blue)]">Product Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade SaaS platforms designed to transform your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center">
            <Button href="/products" variant="primary" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[var(--primary-orange)]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology services to power your digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Harzotech today and experience the power of enterprise-grade technology solutions.
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
