
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, TrendingUp, Heart, Star, Lightbulb } from 'lucide-react';

const Vision = () => {
  const visionComponents = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Universal Knowledge Access",
      description: "Create a world where every individual has access to quality financial education and market knowledge"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Simplified Wealth Creation",
      description: "Make wealth building through share markets simple, understandable, and achievable for everyone"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Accessible Markets",
      description: "Break down barriers and make financial markets accessible to people from all walks of life"
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Financial Independence as a Right",
      description: "Transform financial independence from a luxury into a fundamental right for every individual"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Confident Investors",
      description: "Build a generation of confident, knowledgeable investors who can navigate markets successfully"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      title: "Practical Application",
      description: "Spread practical, actionable knowledge that can be immediately applied in real market scenarios"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="finance-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Vision
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building a world where financial independence is accessible to all through knowledge, confidence, and practical market education.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision for the Future
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Our vision is to create a world where every individual has the knowledge and confidence to grow their wealth through the share market. We aim to make wealth creation simple and achievable for all by spreading awareness, sharing practical knowledge, and making the market accessible to everyone. By doing this, we hope to build a society where financial independence is not a luxury, but a basic right.
              </p>
            </div>
          </div>

          {/* Vision Components */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Building Our Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visionComponents.map((component, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {component.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">
                      {component.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {component.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Short-term Goals (1-3 Years)
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Train 10,000+ individuals in effective market strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Develop online learning platforms for broader accessibility</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Create regional centers across major cities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Launch free financial literacy workshops for communities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Establish partnerships with educational institutions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Long-term Vision (5-10 Years)
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Become the leading financial education provider nationally</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Create a society where 50%+ population is financially literate</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Establish international presence and programs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Develop AI-powered personalized learning systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Make financial independence a reality for millions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Join Us in Building This Vision
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              Every student we train brings us closer to our vision of universal financial literacy and independence.
            </p>
            <div className="text-sm text-blue-100">
              Together, we can create a world where everyone has the tools and knowledge to build wealth and secure their financial future.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
