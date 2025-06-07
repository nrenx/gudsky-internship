
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Calendar, Mail, Linkedin } from "lucide-react";

const DrSitaRani = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <Badge variant="outline" className="mb-4 border-white/30 text-white">Faculty Profile</Badge>
                <h1 className="text-5xl font-bold mb-6">Dr. Sita Rani</h1>
                <div className="text-xl text-blue-100 mb-6">
                  <p className="mb-2">Director & Lead Researcher</p>
                  <p>Gudsky Research Foundation</p>
                </div>
                <p className="text-lg text-blue-100 leading-relaxed">
                  A distinguished researcher and educator with over 20 years of experience in advanced 
                  research methodologies, data analytics, and academic excellence. Leading groundbreaking 
                  research initiatives and mentoring the next generation of scholars.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20">
                    <img 
                      src="/lovable-uploads/2c5b1076-a885-4e22-8e90-ff0faef3a4b6.png" 
                      alt="Dr. Sita Rani" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/d704cc82-c8ce-431c-9abc-ad46760cae7e.png" 
                      alt="Excellence Award" 
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications & Experience */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Qualifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Ph.D. in Computer Science</h4>
                      <p className="text-gray-600">Indian Institute of Technology, Delhi</p>
                      <p className="text-sm text-gray-500">Specialization: Data Analytics & AI</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">M.Tech in Information Technology</h4>
                      <p className="text-gray-600">National Institute of Technology, Kurukshetra</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">B.Tech in Computer Engineering</h4>
                      <p className="text-gray-600">Punjab Technical University</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Director, Gudsky Research Foundation</h4>
                      <p className="text-gray-600">2018 - Present</p>
                      <p className="text-sm text-gray-500">Leading research initiatives and institutional development</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Senior Research Fellow</h4>
                      <p className="text-gray-600">DRDO, Ministry of Defence</p>
                      <p className="text-sm text-gray-500">2015 - 2018</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Assistant Professor</h4>
                      <p className="text-gray-600">NIT Jalandhar</p>
                      <p className="text-sm text-gray-500">2012 - 2015</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Research Areas & Achievements */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Research Areas & Achievements
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                  Key Research Areas
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold">Artificial Intelligence & Machine Learning</h4>
                    <p className="text-gray-600 text-sm">Advanced algorithms for predictive analytics and pattern recognition</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold">Data Science & Big Data Analytics</h4>
                    <p className="text-gray-600 text-sm">Large-scale data processing and visualization techniques</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold">Research Methodology</h4>
                    <p className="text-gray-600 text-sm">Innovative approaches to academic and industry research</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold">Educational Technology</h4>
                    <p className="text-gray-600 text-sm">Digital learning platforms and e-learning solutions</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-green-600" />
                  Notable Achievements
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600">Excellence in Research Award</h4>
                    <p className="text-gray-600 text-sm">Ministry of Corporate Affairs, Government of India (2023)</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Outstanding Faculty Award</h4>
                    <p className="text-gray-600 text-sm">IEEE Computer Society (2022)</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600">Best Research Paper</h4>
                    <p className="text-gray-600 text-sm">International Conference on AI & Data Science (2021)</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600">Young Scientist Award</h4>
                    <p className="text-gray-600 text-sm">Indian Science Congress Association (2019)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications & Contact */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                    Recent Publications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-semibold">Machine Learning Approaches for Educational Data Mining</h4>
                      <p className="text-sm text-gray-600">International Journal of Educational Technology, 2023</p>
                    </div>
                    <div className="border-b pb-3">
                      <h4 className="font-semibold">Advanced Analytics in Research Methodology</h4>
                      <p className="text-sm text-gray-600">ACM Computing Surveys, 2023</p>
                    </div>
                    <div className="border-b pb-3">
                      <h4 className="font-semibold">Big Data Processing Techniques for Academic Research</h4>
                      <p className="text-sm text-gray-600">IEEE Transactions on Knowledge and Data Engineering, 2022</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">AI-Driven Learning Management Systems</h4>
                      <p className="text-sm text-gray-600">Computers & Education, 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-green-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600">sita.rani@gudsky.org</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-gray-600">linkedin.com/in/dr-sita-rani</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Office Hours</p>
                        <p className="text-gray-600">Monday - Friday, 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Current Research Focus:</strong> Developing AI-powered educational 
                        platforms and advanced data analytics for research optimization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DrSitaRani;
