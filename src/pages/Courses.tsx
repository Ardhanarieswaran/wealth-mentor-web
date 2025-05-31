
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, BarChart, Zap, Shield } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Buy High Sell High - ABCD",
      description: "Master the advanced ABCD pattern trading strategy for consistent profits in trending markets.",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      duration: "6 Weeks",
      level: "Advanced",
      price: "₹15,000",
      features: [
        "ABCD Pattern Recognition",
        "High Probability Setups",
        "Risk Management Techniques",
        "Live Trading Sessions"
      ]
    },
    {
      id: 2,
      title: "Buy Low Sell High - TFB",
      description: "Learn the Time Frame Based strategy for identifying optimal entry and exit points.",
      icon: <Target className="h-8 w-8 text-green-600" />,
      duration: "4 Weeks",
      level: "Intermediate",
      price: "₹12,000",
      features: [
        "Multi-Timeframe Analysis",
        "Support & Resistance",
        "Entry & Exit Strategies",
        "Practical Assignments"
      ]
    },
    {
      id: 3,
      title: "MYB Strategy & ATH",
      description: "Discover the Make Your Best strategy combined with All-Time High analysis for maximum returns.",
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      duration: "5 Weeks",
      level: "Intermediate",
      price: "₹13,500",
      features: [
        "ATH Breakout Strategies",
        "MYB Implementation",
        "Market Psychology",
        "Portfolio Management"
      ]
    },
    {
      id: 4,
      title: "Trend is Our Friend (B to D)",
      description: "Master breakout strategies and trend following techniques for consistent profits.",
      icon: <Zap className="h-8 w-8 text-green-600" />,
      duration: "4 Weeks",
      level: "Beginner",
      price: "₹10,000",
      features: [
        "Trend Identification",
        "Breakout Patterns",
        "Volume Analysis",
        "Stop Loss Strategies"
      ]
    },
    {
      id: 5,
      title: "50MA & SMC Basics",
      description: "Learn fundamental moving average strategies and Smart Money Concepts for reliable trading.",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      duration: "3 Weeks",
      level: "Beginner",
      price: "₹8,000",
      features: [
        "Moving Average Strategies",
        "Smart Money Concepts",
        "Market Structure",
        "Basic Technical Analysis"
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="finance-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Comprehensive Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our expertly designed courses to master different aspects of share market trading and investment strategies.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {course.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge variant="outline">
                      {course.duration}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-sm text-gray-500">One-time payment</span>
                    </div>
                    <Button className="w-full finance-gradient-light text-white hover:opacity-90">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What's Included in Every Course
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Live Sessions</h3>
              <p className="text-gray-600 text-sm">Interactive live trading sessions with expert guidance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Practical Training</h3>
              <p className="text-gray-600 text-sm">Hands-on experience with real market scenarios</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Study Materials</h3>
              <p className="text-gray-600 text-sm">Comprehensive resources and reference materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Lifetime Support</h3>
              <p className="text-gray-600 text-sm">Ongoing support and community access</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
