
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, TrendingUp, Users, Shield } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Proven Strategies",
      description: "Learn time-tested market strategies that deliver consistent results"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Expert Guidance",
      description: "Get mentored by experienced professionals with years of market experience"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Risk Management",
      description: "Master the art of protecting your investments while maximizing returns"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Successful Trader",
      content: "The strategies taught here completely transformed my trading approach. I've seen consistent profits since joining.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "New Investor",
      content: "As a beginner, I was overwhelmed by the market. This coaching made everything clear and simple to understand.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Working Professional",
      content: "Perfect for someone like me who wants to invest while working full-time. The strategies are practical and effective.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative finance-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master the Share Market with
                <span className="block text-yellow-300">Professional Coaching</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Transform your financial future with our comprehensive share market coaching programs. 
                Learn proven strategies from industry experts and achieve financial independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/69933a32-8e6d-4ddb-a16b-2ed90f0348c6.png" 
                alt="MR APT HARMONIC PRO" 
                className="h-64 w-auto filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Coaching?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive training that empowers you to make informed investment decisions and build lasting wealth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real success stories from real people who transformed their financial lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 finance-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey to Financial Freedom?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful investors who have transformed their lives with our proven strategies.
          </p>
          <Link to="/courses">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              View Our Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
