import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Target, Eye, Award, Users, Globe, BookOpen, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main className="pt-16">
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
                <div className="w-16 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  Fostering partnerships and teamwork to achieve breakthrough discoveries.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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

        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Gudsky Research Foundation is committed to providing top-quality AI & ML education, hands-on research opportunities, and expert mentorship to help you excel in your career. Our industry-focused approach ensures practical learning, skill development, and real-world application of AI concepts.
              </p>
            </div>
          </div>
        </section>

        {/* Our Prestigious Partners */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Network</Badge>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Prestigious Partners
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We collaborate with leading institutions and organizations to advance research and education globally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <OptimizedImage
                    src="/lovable-uploads/645152d5-83e5-423e-a102-d18822ac5b1b.png"
                    alt="Academic Collaborations and Partnerships"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Academic Collaborations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building strong partnerships with universities and research institutions worldwide to foster 
                    collaborative research initiatives and knowledge exchange programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <OptimizedImage
                    src="/lovable-uploads/828ffc02-6e62-4bc9-9482-dd2abcc6f6e9.png"
                    alt="Industry Partnerships and Corporate Collaborations"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Industry Partnerships</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Collaborating with leading corporations and technology companies to bridge the gap between 
                    academic research and real-world applications, creating innovative solutions for industry challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Have questions about our programs or research? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-blue-100">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" className="bg-white/20 border-white/30 text-white placeholder:text-blue-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" className="bg-white/20 border-white/30 text-white placeholder:text-blue-200" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" className="bg-white/20 border-white/30 text-white placeholder:text-blue-200" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" className="bg-white/20 border-white/30 text-white placeholder:text-blue-200" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" className="bg-white/20 border-white/30 text-white placeholder:text-blue-200" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..." 
                        className="min-h-[120px] bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                      />
                    </div>
                    
                    <Button className="w-full bg-white text-blue-900 hover:bg-blue-50">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-0 bg-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                    <CardDescription className="text-blue-100">
                      Multiple ways to reach us for your convenience.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Address</h4>
                        <p className="text-blue-100">
                          1/11 Anandnagar Vidyasagar<br />
                          Dhanbad, Jharkhand<br />
                          India - 826001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Phone</h4>
                        <p className="text-blue-100">
                          +91 98765 43210<br />
                          +91 98765 43211 (Research Dept.)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Email</h4>
                        <p className="text-blue-100">
                          contact@gudsky.org<br />
                          admissions@gudsky.org
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Office Hours</h4>
                        <p className="text-blue-100">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
