
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Career = () => {
  const programs = [
    {
      id: "college-representative",
      title: "College Representative Program",
      description: "Become a Leader in Tech Innovation and Research Excellence!",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-blue-600 to-indigo-600",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Career Opportunities</Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Join Our Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career and make an impact in research and innovation.
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card 
                  key={program.id} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${program.gradient} rounded-lg flex items-center justify-center mb-4`}>
                      {program.icon}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      {program.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black">
                          🌟 Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/career/${program.id}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        Explore <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Career;
