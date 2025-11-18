import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Products - Harzotech SaaS Solutions',
  description: 'Explore our comprehensive suite of enterprise-grade SaaS products including Restaurant, Real Estate, Fintech, Hotel Management, CRM, POS, and Fleet Management systems.',
};

export default function ProductsPage() {
  const products = [
    {
      id: 'restaurant',
      title: 'Restaurant & Food Business SaaS',
      description: 'A complete restaurant operating system with everything you need to run your food business efficiently.',
      icon: '🍽️',
      color: 'from-orange-500 to-red-500',
      features: [
        'POS for Dine-in, Takeaway & Delivery',
        'Order Management System',
        'Inventory & Stock Control',
        'Staff & Role Management',
        'Customer Loyalty System',
        'Branch Management (Multi-location)',
        'Kitchen Display System (KDS)',
        'Sales Reporting & Analytics',
      ],
    },
    {
      id: 'realestate',
      title: 'Real Estate & Property Management SaaS',
      description: 'Built for agencies, developers, and estates to manage properties and clients seamlessly.',
      icon: '🏘️',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Land/Plot Inventory Tracking',
        'Estate Allocation System',
        'Automated Plot Deduction',
        'Client Records & KYC',
        'Payment Tracking & Installments',
        'Document Generation (Receipts, Agreements)',
        'Agent/Team Performance Dashboard',
        'Automated Notifications & Reminders',
      ],
    },
    {
      id: 'fintech',
      title: 'Fintech & Digital Wallet Systems',
      description: 'Modular fintech engine powering digital wallets, transfers, and financial services.',
      icon: '💳',
      color: 'from-green-500 to-emerald-500',
      features: [
        'User Wallets & Transfers',
        'Payouts / Withdrawals',
        'Transaction History',
        'KYC Verification Flow',
        'Contribution & Savings Modules',
        'Digital Thrift (Ajo) Automation',
        'Admin Treasury Dashboard',
        'API Integrations (Banks, Payments, USSD)',
      ],
    },
    {
      id: 'hotel',
      title: 'Hotel Management SaaS',
      description: 'Smart hotel system for small to large hotels with complete booking and operations management.',
      icon: '🏨',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Reservation & Booking Engine',
        'Room Management & Allocation',
        'Guest Profiles & History',
        'Billing & Payments',
        'Housekeeping Management',
        'Maintenance Tracking',
        'Reports & Revenue Dashboard',
        'Staff Roles & Permissions',
      ],
    },
    {
      id: 'crm',
      title: 'CRM & Sales Automation Platform',
      description: 'All-in-one CRM for teams to manage leads, automate follow-ups, and close more deals.',
      icon: '📊',
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Lead Capture & Pipeline Tracking',
        'Follow-Up Automation',
        'Email & WhatsApp Journey Automation',
        'Appointment Booking Flows',
        'Client Segmentation',
        'Ticketing & Support',
        'Team Collaboration Tools',
        'Reports & Sales Forecasting',
      ],
    },
    {
      id: 'pos',
      title: 'Point of Sale (POS) System',
      description: 'Lightweight or enterprise POS solution for retail and service businesses.',
      icon: '💰',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Sales & Checkout',
        'Product/Service Management',
        'Barcode Scanning',
        'Inventory & Stock Alerts',
        'Cashier & Role Control',
        'Branch & Multi-store Support',
        'Daily Reports & Analytics',
        'Offline Mode (optional setup)',
      ],
    },
    {
      id: 'fleet',
      title: 'Fleet & Logistics Management System',
      description: 'For transport companies, deliveries, and corporate fleets with comprehensive tracking.',
      icon: '🚛',
      color: 'from-gray-600 to-gray-800',
      features: [
        'Vehicle Tracking (GPS integration optional)',
        'Fuel Monitoring',
        'Driver Performance',
        'Trip Scheduling',
        'Maintenance Records',
        'Expense Management',
        'Fleet Health Dashboard',
        'Route Optimization (optional)',
      ],
    },
    {
      id: 'custom',
      title: 'Other Custom & SaaS Products',
      description: 'We also build custom enterprise solutions tailored to your specific business needs.',
      icon: '⚙️',
      color: 'from-teal-500 to-cyan-500',
      features: [
        'E-commerce platforms',
        'School management systems',
        'Clinic & spa appointment systems',
        'Subscription management tools',
        'Inventory & warehouse systems',
        'HR & Payroll software',
        'Multi-tenant SaaS frameworks',
        'Custom enterprise solutions',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Product Suite
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Enterprise-grade SaaS platforms designed to transform your business operations across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Product Info */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="text-6xl mb-4">{product.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      {product.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {product.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-3 text-gray-900">Key Features:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <svg
                              className="w-5 h-5 mr-2 text-[var(--primary-blue)] flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button href="/contact" variant="primary">
                      Request Demo
                    </Button>
                  </div>
                </div>

                {/* Product Visual */}
                <div className="flex-1">
                  <div
                    className={`bg-gradient-to-br ${product.color} rounded-2xl p-12 shadow-xl min-h-[400px] flex items-center justify-center`}
                  >
                    <div className="text-white text-center">
                      <div className="text-9xl mb-6">{product.icon}</div>
                      <h3 className="text-2xl font-bold">{product.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect SaaS solution for your business or let us build a custom system tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact Sales
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
