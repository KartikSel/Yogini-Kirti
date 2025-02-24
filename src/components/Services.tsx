import React from 'react';
import { Users, User, BookOpen, Compass } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Group Yoga Sessions',
      description: 'Join our energizing group sessions focusing on asanas, pranayama, and meditation.',
      price: '₹250 per session',
      package: '₹6,000 for 26 sessions',
      link: 'https://yoginikirti.simplybook.me/v2/#book/service/2/count/1/',
    },
    {
      icon: <User className="h-8 w-8 text-teal-600" />,
      title: 'Private Sessions',
      description: 'Personalized one-on-one sessions tailored to your specific needs and goals.',
      price: '₹450 per session',
      package: '₹2,200 for 5 sessions',
      link: 'https://yoginikirti.simplybook.me/v2/#book/service/5/count/1/',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-teal-600" />,
      title: 'Wellness Workshops',
      description: 'Intensive workshops covering yoga philosophy, meditation, and Ayurvedic practices.',
      price: '₹2,500 per workshop',
      package: '₹10,000 for 5 workshops',
      link: 'https://yoginikirti.simplybook.me/v2/#contact-widget',
    },
    {
      icon: <Compass className="h-8 w-8 text-teal-600" />,
      title: 'Corporate Wellness Programs',
      description: 'Customized programs for workplace wellness and stress management.',
      price: 'Starting from ₹15,000',
      package: 'Custom packages available',
      link: 'https://yoginikirti.simplybook.me/v2/#contact-widget',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Transform your life with our comprehensive yoga and wellness offerings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                <p className="text-teal-600 font-semibold">{service.price}</p>
                <p className="text-sm text-gray-500">{service.package}</p>
              </div>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            * All packages are valid for 2 months from the date of purchase
          </p>
          <p className="text-gray-600 mt-2">
            * Custom packages available for special requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;