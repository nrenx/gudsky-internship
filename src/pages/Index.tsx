
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Award, Microscope, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        
        {/* Programs Section */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Programs</Badge>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Research & Educational Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive range of research programs and educational initiatives designed to advance knowledge and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Research Programs</CardTitle>
                  <CardDescription>
                    Advanced research initiatives in technology and innovation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:bg-blue-50 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Educational Courses</CardTitle>
                  <CardDescription>
                    Comprehensive learning programs for students and professionals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/courses">
                    <Button variant="ghost" className="group-hover:bg-green-50 transition-colors">
                      View Courses <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Community Outreach</CardTitle>
                  <CardDescription>
                    Engaging with communities to promote education and research
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:bg-purple-50 transition-colors">
                    Get Involved <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
