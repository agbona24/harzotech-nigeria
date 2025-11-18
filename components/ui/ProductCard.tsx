import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  href: string;
}

export default function ProductCard({ title, description, features, icon, href }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--primary-blue)] hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[var(--primary-blue)] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.slice(0, 4).map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <svg className="w-5 h-5 mr-2 text-[var(--primary-blue)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center text-[var(--primary-blue)] font-semibold hover:text-[var(--primary-orange)] transition-colors"
      >
        Learn more
        <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
