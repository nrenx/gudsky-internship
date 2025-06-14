
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Users, Target, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CollegeRepresentative = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 pt-8">
          <Link to="/career">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Career Programs
            </Button>
          </Link>
        </div>

        {/* Program Header */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-lg px-4 py-2">
                  🌟 Featured Program
                </Badge>
              </div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                College Representative Program
              </h1>
              <p className="text-2xl text-muted-foreground">
                Become a Leader in Tech Innovation and Research Excellence!
              </p>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Program Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join our exclusive College Representative Program and become a bridge between Gudsky Research Foundation and your academic institution. This program is designed for ambitious students who want to make a real impact in the world of technology and research.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  As a College Representative, you'll gain valuable leadership experience, expand your network, and contribute to advancing research and innovation in your community.
                </p>
                
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Apply Now
                </Button>
              </div>

              {/* Program Benefits */}
              <div className="space-y-6">
                <Card className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <CardTitle>Leadership Development</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Develop essential leadership skills through hands-on experience and mentorship opportunities.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-green-600" />
                      <CardTitle>Networking Opportunities</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Connect with industry professionals, researchers, and fellow student leaders across the globe.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-purple-600" />
                      <CardTitle>Recognition & Certificates</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Receive official recognition and certificates for your contributions and achievements.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-orange-600" />
                      <CardTitle>Flexible Commitment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Balance your academic responsibilities with program activities through flexible scheduling.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Program Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Currently enrolled in an accredited college or university</li>
                    <li>• Minimum GPA of 3.0 or equivalent</li>
                    <li>• Strong communication and leadership skills</li>
                    <li>• Passionate about technology and research</li>
                    <li>• Available for 5-10 hours per week</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Key Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Promote foundation programs on campus</li>
                    <li>• Organize educational events and workshops</li>
                    <li>• Connect students with research opportunities</li>
                    <li>• Provide feedback and insights from student perspective</li>
                    <li>• Collaborate with other representatives globally</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of student leaders who are already making a difference in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollegeRepresentative;
