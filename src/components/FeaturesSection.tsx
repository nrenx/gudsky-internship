
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Microscope, Globe, Target } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Wide range of educational programs designed for different skill levels and career paths.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Microscope,
      title: "Advanced Research",
      description: "Cutting-edge research facilities and programs led by experienced faculty members.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals and renowned researchers with years of experience.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with students and professionals from around the world through our programs.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Award,
      title: "Recognized Certifications",
      description: "Earn certificates and credentials that are valued by employers worldwide.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Target,
      title: "Career Support",
      description: "Comprehensive career guidance and placement assistance for all our graduates.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23000000" fill-opacity="1"><circle cx="30" cy="30" r="1"/></g></svg>')] bg-repeat" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Excellence in Every Aspect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Gudsky Research Foundation the premier choice for research and education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
