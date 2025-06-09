import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HeroSection = () => {
  // Preload hero background image
  useEffect(() => {
    const heroImg = new Image();
    heroImg.src = "/lovable-uploads/56ca0dc0-f42f-4475-9dd1-4829d659b45e.png";
  }, []);

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/lovable-uploads/56ca0dc0-f42f-4475-9dd1-4829d659b45e.png')",
            willChange: 'transform'
          }}
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-sm font-medium">🎓 Excellence in Research & Education</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Gudsky Research
          </span>
          <span className="block text-blue-200">Foundation</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Advancing knowledge through innovative research programs, comprehensive educational initiatives, 
          and community engagement for a better tomorrow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/courses">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full">
              Explore Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" className="border-white/30 font-semibold px-8 py-4 bg-zinc-950 hover:bg-zinc-800 rounded-full text-zinc-50">
            <Play className="w-5 h-5 mr-2" />
            Watch Introduction
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200 text-sm">Students Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-200 text-sm">Research Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-blue-200 text-sm">Expert Faculty</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-blue-200 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};

export default HeroSection;
