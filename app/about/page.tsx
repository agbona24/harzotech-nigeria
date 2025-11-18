import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us - Harzotech',
  description: 'Learn about Harzotech, a leading technology company building powerful SaaS solutions and automation systems for businesses across Africa and beyond.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that solve real business problems.',
      icon: '💡',
    },
    {
      title: 'Quality',
      description: 'Excellence is our standard. We deliver robust, scalable, and reliable solutions every time.',
      icon: '⭐',
    },
    {
      title: 'Customer-First',
      description: 'Your success is our success. We build long-term partnerships with our clients.',
      icon: '🤝',
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in everything we do.',
      icon: '🎯',
    },
  ];

  const team = [
    {
      role: 'Technology',
      description: 'Our engineering team builds world-class software using modern technologies and best practices.',
      icon: '👨‍💻',
    },
    {
      role: 'Design',
      description: 'Our designers create beautiful, intuitive interfaces that users love.',
      icon: '🎨',
    },
    {
      role: 'Support',
      description: 'Our support team is available 24/7 to ensure your success.',
      icon: '💬',
    },
    {
      role: 'Sales',
      description: 'Our sales team helps you find the perfect solution for your business needs.',
      icon: '📊',
    },
  ];

  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Harzotech was established with a vision to transform African businesses' },
    { year: '2019', event: 'First SaaS Product', description: 'Launched our first multi-tenant SaaS platform' },
    { year: '2020', event: '100+ Clients', description: 'Reached milestone of serving 100+ businesses' },
    { year: '2022', event: 'Product Expansion', description: 'Expanded to 8+ comprehensive SaaS products' },
    { year: '2024', event: 'Regional Leader', description: 'Became a leading SaaS provider across Africa' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Harzotech
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Building the future of business technology across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white rounded-2xl p-12 shadow-xl">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-blue-100">
                To empower businesses across Africa and beyond with enterprise-grade software solutions that drive efficiency, scalability, and sustainable growth. We believe technology should be accessible, powerful, and transformative.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--primary-orange)] to-[var(--primary-orange-dark)] text-white rounded-2xl p-12 shadow-xl">
              <div className="text-5xl mb-6">🌟</div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-orange-100">
                To become Africa&apos;s most trusted technology partner, known for delivering innovative SaaS solutions that solve complex business challenges and enable organizations to compete on a global scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Harzotech was born from a simple observation: businesses across Africa needed better technology solutions, but existing options were either too expensive, too complex, or not tailored to local needs.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We started with a mission to bridge this gap by building powerful, affordable, and user-friendly SaaS platforms. What began as a small team of passionate developers has grown into a comprehensive technology company serving hundreds of businesses across multiple industries.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Today, we offer a complete suite of enterprise-grade solutions - from restaurant and hotel management systems to fintech platforms and CRM tools. But our core mission remains the same: to help businesses operate more efficiently, scale faster, and achieve their full potential through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--primary-blue)]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-[var(--primary-blue)] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-8 h-8 rounded-full bg-[var(--primary-orange)] border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Whether you&apos;re looking for a SaaS solution or want to partner with us, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
            <Button href="/products" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-[var(--primary-blue)]">
              Explore Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
