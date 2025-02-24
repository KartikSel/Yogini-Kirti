import React from 'react';
import { Award, BookOpen, Users, Medal, Building, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Yogini Kirti</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              Dedicated to spreading the ancient wisdom of yoga and Ayurveda through modern teaching methods
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80"
              alt="Yogini Kirti teaching"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Journey in Yoga & Wellness
            </h3>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in yoga and Ayurvedic practices, I've dedicated my life to helping
              others achieve physical, mental, and spiritual well-being. My approach combines traditional
              yoga philosophy with modern wellness techniques.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Building className="h-6 w-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Major Project</h4>
                  <p className="mt-1 text-gray-600">
                    CM DI YOGSHALA Punjab - Leading wellness initiatives and yoga programs
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Medal className="h-6 w-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Special Recognition</h4>
                  <p className="mt-1 text-gray-600">
                    Certificate of Appreciation for "Distance Therapy Workshop on Covid-19 and Other Diseases Through Cosmic Healing" - Joint initiative by Niramaya Yogam Research Foundation, COER School of Management, and Shri Bhagwan Das Adarsh Sanskrit P.G. College (June 2020)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Expert Certification</h4>
                  <p className="mt-1 text-gray-600">
                    Yogic Science and Alternative Therapy from D.S.V.V Uttarakhand
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Continuous Learning</h4>
                  <p className="mt-1 text-gray-600">
                    Continuous exploration of yogic sciences, Ayurveda, and wellness ensures I bring authentic and impactful experiences to every session. At DVK Yoga & Wellness Haven, I believe the journey of learning never ends. With a Master of Arts in Yoga (April 2021) from Uttarakhand Sanskrit University, Haridwar, I have deepened my understanding of yoga’s ancient principles and holistic practices. Let’s grow together on the path to well-being.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Community Focus</h4>
                  <p className="mt-1 text-gray-600">
                    Our goal is to continuously grow and build a supportive community through group classes and workshops, empowering everyone to embrace a healthier and more mindful lifestyle. Let’s grow together on the path to well-being.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-600 mr-3" />
                    <a href="tel:+916397315720" className="text-gray-600 hover:text-teal-600">
                      +91 6397315720
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-600 mr-3" />
                    <a href="mailto:dvkyogawellness@gmail.com" className="text-gray-600 hover:text-teal-600">
                      dvkyogawellness@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-600 mr-3" />
                    <a href="mailto:kirtisehalkirtisehal@gmail.com" className="text-gray-600 hover:text-teal-600">
                      kirtisehalkirtisehal@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;