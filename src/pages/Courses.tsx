
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, Award, TrendingUp } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Advanced Research Methodology",
      description: "Comprehensive course covering quantitative and qualitative research methods, data collection techniques, and statistical analysis.",
      duration: "12 weeks",
      students: "150+",
      rating: 4.8,
      level: "Advanced",
      price: "₹25,000",
      category: "Research",
      features: ["Live Sessions", "Practical Projects", "Certificate", "Mentorship"]
    },
    {
      title: "Data Analytics & Visualization",
      description: "Learn modern data analytics tools, statistical methods, and visualization techniques for research and business applications.",
      duration: "10 weeks",
      students: "200+",
      rating: 4.9,
      level: "Intermediate",
      price: "₹20,000",
      category: "Analytics",
      features: ["Hands-on Projects", "Industry Tools", "Portfolio Building", "Job Support"]
    },
    {
      title: "Academic Writing Excellence",
      description: "Master the art of academic writing, paper publication, thesis writing, and research communication skills.",
      duration: "8 weeks",
      students: "300+",
      rating: 4.7,
      level: "Beginner",
      price: "₹15,000",
      category: "Writing",
      features: ["Writing Templates", "Peer Review", "Publication Guide", "Editor Feedback"]
    },
    {
      title: "Machine Learning for Researchers",
      description: "Apply machine learning techniques to research problems with practical implementations and case studies.",
      duration: "14 weeks",
      students: "120+",
      rating: 4.9,
      level: "Advanced",
      price: "₹30,000",
      category: "Technology",
      features: ["Python Programming", "Real Projects", "Research Papers", "Expert Mentoring"]
    },
    {
      title: "Grant Writing & Funding",
      description: "Learn to write successful research proposals, grant applications, and secure funding for your research projects.",
      duration: "6 weeks",
      students: "180+",
      rating: 4.6,
      level: "Intermediate",
      price: "₹18,000",
      category: "Funding",
      features: ["Proposal Templates", "Review Process", "Success Stories", "Network Access"]
    },
    {
      title: "Digital Research Tools",
      description: "Master digital tools and platforms for modern research including reference management, collaboration tools, and data management.",
      duration: "8 weeks",
      students: "250+",
      rating: 4.8,
      level: "Beginner",
      price: "₹12,000",
      category: "Tools",
      features: ["Software Training", "Cloud Storage", "Collaboration", "Best Practices"]
    }
  ];

  const categories = ["All", "Research", "Analytics", "Writing", "Technology", "Funding", "Tools"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">All Courses</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Career with Expert-Led Courses
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Comprehensive learning programs designed by industry experts and research professionals 
              to advance your skills and career prospects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                <span>1000+ Students</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-5 h-5 mr-2" />
                <span>Certified Programs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 bg-white/50 backdrop-blur-sm border-b">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Course Stats */}
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {course.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Price and Action */}
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Courses */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Why Choose Our Courses?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our programs are designed with industry insights and academic excellence to provide you with practical skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert-Led Content</h3>
                <p className="text-gray-600">
                  Learn from industry professionals and academic experts with years of practical experience.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-gray-600">
                  Our courses are designed to accelerate your career growth with practical skills and certifications.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recognized Certificates</h3>
                <p className="text-gray-600">
                  Earn certificates that are valued by employers and recognized in the academic community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
