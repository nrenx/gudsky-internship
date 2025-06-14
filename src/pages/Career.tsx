
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React from "react";

// Subtle keyframes for animated gradient bg
const gradientBgStyles: React.CSSProperties = {
  background: "linear-gradient(120deg, #b1c6fd 0%, #e5e9fd 30%, #d1c2ff 85%, #eef2fc 100%)",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "400px",
  zIndex: 0,
  animation: "gradientMove 6s ease-in-out infinite alternate"
};

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

const Career = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-x-hidden">
      {/* Animated Gradient BG in Hero */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center h-[330px] md:h-[340px] px-4 pt-6 pb-2 md:pt-12">
          <div style={gradientBgStyles} className="pointer-events-none blur-2xl opacity-70"></div>
          <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
            {/* Floating geometric shapes for premium look */}
            <div className="hidden md:block absolute left-20 top-8 animate-pulse">
              <div className="w-12 h-12 rounded-xl bg-blue-200 opacity-60 blur-xl"></div>
            </div>
            <div className="hidden md:block absolute right-8 bottom-8 animate-pulse animation-delay-700">
              <div className="w-16 h-16 rounded-full bg-indigo-200 opacity-70 blur-lg"></div>
            </div>
            <div className="hidden md:block absolute right-1/3 top-0 animate-spin-slow">
              <div className="w-9 h-9 rounded-lg bg-emerald-200 opacity-30 blur"></div>
            </div>
          </div>
          <div className="z-10 flex flex-col items-center w-full animate-fade-in">
            <Badge variant="outline" className="mb-3 px-3 py-1.5 text-xs md:text-base font-medium tracking-wide bg-white/90 border-none shadow-md animate-scale-in">
              Career Opportunities
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in animation-delay-200">
              Join Our Programs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-350">
              Discover exciting opportunities to grow your career and make an impact in research and innovation.
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, idx) => (
                <Card
                  key={program.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 animate-scale-in animation-delay-400"
                  style={{
                    animationDelay: `${200 * (idx + 1)}ms`
                  }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${program.gradient} rounded-lg flex items-center justify-center mb-4`}>
                      {program.icon}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      {program.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black animate-fade-in">
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
