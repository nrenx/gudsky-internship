
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, Globe, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">About Us</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Pioneering Excellence in Research & Education
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              For over 15 years, Gudsky Research Foundation has been at the forefront of innovative research 
              and comprehensive education, shaping the future through knowledge and discovery.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To advance human knowledge through cutting-edge research, provide world-class education, 
                    and foster innovation that addresses global challenges. We are committed to creating 
                    an environment where brilliant minds can flourish and contribute to society's progress.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To be recognized globally as a premier research and educational institution that 
                    bridges the gap between academic excellence and practical innovation, creating 
                    leaders who will shape the future of science, technology, and society.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Striving for the highest standards in all our research and educational endeavors.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  Fostering partnerships and teamwork to achieve breakthrough discoveries.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-600">
                  Creating solutions that benefit communities and societies worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Our Prestigious Partners
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Collaborating with leading institutions and organizations worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/lovable-uploads/828ffc02-6e62-4bc9-9482-dd2abcc6f6e9.png" 
                  alt="IEEE" 
                  className="h-16 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/lovable-uploads/a2cff32e-0e1c-44ef-a7d7-425f35f3cac6.png" 
                  alt="Manipal University" 
                  className="h-16 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/lovable-uploads/a0f5e31e-f844-4c24-80e6-7b8a435801c4.png" 
                  alt="NIT Jalandhar" 
                  className="h-16 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/lovable-uploads/645152d5-83e5-423e-a102-d18822ac5b1b.png" 
                  alt="Dhanbad Institute of Technology" 
                  className="h-16 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
