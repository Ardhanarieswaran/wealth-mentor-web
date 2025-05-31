
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, TrendingUp, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, value: "5000+", label: "Students Trained" },
    { icon: <Award className="h-8 w-8 text-green-600" />, value: "10+", label: "Years Experience" },
    { icon: <TrendingUp className="h-8 w-8 text-blue-600" />, value: "95%", label: "Success Rate" },
    { icon: <Target className="h-8 w-8 text-green-600" />, value: "15+", label: "Trading Strategies" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="finance-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About MR APT HARMONIC PRO
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in achieving financial independence through expert share market coaching and proven investment strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MR APT HARMONIC PRO is a leading share market coaching institute dedicated to empowering individuals with the knowledge and skills needed to succeed in the financial markets. We specialize in teaching practical, proven strategies that help our students build wealth and achieve financial freedom.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive approach combines technical analysis, fundamental understanding, and risk management principles to create well-rounded traders and investors. We believe that anyone can learn to trade successfully with the right guidance and dedication.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the financial markets and a passion for teaching, we have developed a curriculum that takes students from complete beginners to confident, profitable traders.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/69933a32-8e6d-4ddb-a16b-2ed90f0348c6.png" 
                alt="MR APT HARMONIC PRO" 
                className="h-80 w-auto filter drop-shadow-xl"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Technical Analysis</h3>
                  <p className="text-gray-600">
                    Master chart patterns, indicators, and technical tools for precise market timing and entry/exit strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                  <p className="text-gray-600">
                    Learn to protect your capital with proven risk management techniques and position sizing strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Practical Training</h3>
                  <p className="text-gray-600">
                    Get hands-on experience with live market sessions and real-world trading scenarios.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Credentials Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Credentials & Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Market Experience</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Over 10 years of active trading experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Specialized in multiple trading strategies and market conditions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Proven track record of consistent profitability</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Teaching Excellence</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Trained over 5000 successful students</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Developed comprehensive curriculum for all skill levels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Continuous support and mentorship approach</span>
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

export default About;
