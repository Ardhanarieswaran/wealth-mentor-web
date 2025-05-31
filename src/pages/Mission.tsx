
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, TrendingUp, Heart, BookOpen, Shield } from 'lucide-react';

const Mission = () => {
  const missionPoints = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Guide Financial Freedom",
      description: "Provide clear pathways for individuals to achieve financial independence through smart investing"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Easy-to-Understand Learning",
      description: "Make complex market concepts simple and accessible for people from all backgrounds"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Inclusive Education",
      description: "Ensure our coaching programs are available to individuals regardless of their financial background"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Wise Investment Practices",
      description: "Teach proven strategies that focus on building sustainable wealth over time"
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Family Support",
      description: "Help individuals build wealth that supports their families and creates generational prosperity"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Financial Literacy",
      description: "Promote financial awareness and literacy throughout society for collective growth"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="finance-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Mission
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering individuals to achieve financial freedom through accessible, effective share market education.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Mission
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Our mission is to guide people on their journey to becoming financially free through our easy-to-understand share market coaching programs. We are committed to helping individuals from all backgrounds learn how to invest wisely, build wealth, and support their families. By offering clear, honest, and effective training, we strive to empower everyone to take control of their financial future while giving back to society by promoting financial literacy and awareness.
              </p>
            </div>
          </div>

          {/* Mission Components */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How We Fulfill Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {missionPoints.map((point, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Our Impact Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Individual Transformation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Enable individuals to achieve financial independence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Build confidence in making investment decisions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Create sustainable wealth-building habits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Provide ongoing support and mentorship</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Societal Impact</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Promote financial literacy across communities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Reduce financial inequality through education</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Create a more financially aware society</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Foster responsible investment practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
