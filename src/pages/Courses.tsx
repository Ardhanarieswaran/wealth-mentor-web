import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, BarChart, Zap, Shield } from 'lucide-react';
import { useCourses } from '@/hooks/useCourses';

const Courses = () => {
  const { courses, isLoading, error } = useCourses();

  const getIconComponent = (iconName: string | null) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="h-8 w-8 text-blue-600" />;
      case 'Target':
        return <Target className="h-8 w-8 text-green-600" />;
      case 'BarChart':
        return <BarChart className="h-8 w-8 text-blue-600" />;
      case 'Zap':
        return <Zap className="h-8 w-8 text-green-600" />;
      case 'Shield':
        return <Shield className="h-8 w-8 text-blue-600" />;
      default:
        return <TrendingUp className="h-8 w-8 text-blue-600" />;
    }
  };

  const getLevelColor = (level: string | null) => {
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading courses. Please try again later.</p>
        </div>
      </div>
    );
  }

  const activeCourses = courses.filter(course => course.is_active);

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
            {activeCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {getIconComponent(course.icon_name)}
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level || 'N/A'}
                    </Badge>
                    <Badge variant="outline">
                      {course.duration || 'N/A'}
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
                      {course.features?.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      )) || (
                        <li className="text-sm text-gray-600">No features listed</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">{course.price || 'Contact for price'}</span>
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
