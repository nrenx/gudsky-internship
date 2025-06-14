
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Users, Target, Award, Clock, Crown, Briefcase, Calendar, BookOpen, Network, TrendingUp, CheckCircle, Download, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CollegeRepresentative = () => {
  const positions = [
    {
      title: "Chairman",
      seats: "1 seat",
      description: "Strategic leadership and campus-wide initiatives",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Vice-Chairman",
      seats: "1 seat", 
      description: "Operations management and team coordination",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Program Organizer",
      seats: "1 seat",
      description: "Event planning and workshop execution",
      icon: <Calendar className="w-6 h-6" />,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Research Advisor",
      seats: "1 seat",
      description: "Technical guidance and project mentorship",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Community Associate",
      seats: "2 seats",
      description: "Student engagement and outreach activities",
      icon: <Network className="w-6 h-6" />,
      gradient: "from-teal-600 to-cyan-600"
    }
  ];

  const benefits = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Industry Network Access",
      description: "Direct connections, priority internships, networking events",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Mentorship",
      description: "One-on-one guidance, career roadmaps, recommendation letters",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Research Exposure",
      description: "R&D access, conference participation, co-authorship opportunities",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Skill Development",
      description: "AI/ML training, certifications, premium learning resources",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Research Collaboration",
      description: "Project participation, funding support, innovation challenges",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Recognition",
      description: "Official certificates, LinkedIn endorsements, portfolio documentation",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const applicationSteps = [
    { step: "Week 1-2", title: "Online Application", description: "Submit your application with required documents" },
    { step: "Week 3", title: "Technical Assessment", description: "Complete technical evaluation and skills test" },
    { step: "Week 4", title: "Interview Process", description: "Face-to-face interview with selection panel" },
    { step: "Week 5-6", title: "Final Selection & Onboarding", description: "Results announcement and program kickoff" }
  ];

  const faqs = [
    {
      question: "Can students from any branch apply?",
      answer: "Yes! The program is open to B.Tech students from all specializations who meet the eligibility criteria."
    },
    {
      question: "What happens after completing the program?",
      answer: "Outstanding performers receive Research/Project Offer Letters and access to advanced career opportunities in research and industry."
    },
    {
      question: "How is performance evaluated?",
      answer: "Performance is assessed through continuous evaluation with formal reviews at 6 months and 12 months, focusing on leadership, project contribution, and research involvement."
    },
    {
      question: "What's the time commitment?",
      answer: "The program requires 10-15 hours per week commitment for the full 1-year duration, designed to balance with academic responsibilities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main className="pt-16">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 pt-4">
          <Link to="/career">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Career Programs
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-lg px-6 py-3">
              🌟 Exclusive Leadership Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              College Representative Program
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Become a Leader in Tech Innovation and Research Excellence! 
              <br />
              <span className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                "Transforming Curious Students into Research Leaders"
              </span>
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border shadow-lg">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">6</div>
                <div className="text-gray-600">Exclusive Positions per College</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border shadow-lg">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">1 Year</div>
                <div className="text-gray-600">Program Duration</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border shadow-lg">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-600">Research/Project Offer for Top Performers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                Explore Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Exclusive Positions Section */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">🎯 Exclusive Leadership Positions Available</h2>
              <p className="text-xl text-muted-foreground">Choose your path to research excellence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {positions.map((position, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-r ${position.gradient} rounded-lg flex items-center justify-center mb-4 text-white`}>
                      {position.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit mb-3">{position.seats}</Badge>
                    <CardDescription className="text-base">
                      {position.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">🚀 Why This Program is a Game-Changer for Your Career</h2>
              <p className="text-xl text-muted-foreground">Unlock exclusive opportunities that will transform your future</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-lg flex items-center justify-center mb-4 text-white`}>
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Performance-Based Advancement */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">🏆 Exclusive Career Advancement Opportunities</h2>
            <p className="text-xl mb-8 text-purple-100">
              Outstanding performers receive Research/Project Offer Letters after program completion
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">6 Months</div>
                <div className="text-purple-100">Performance Review</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">12 Months</div>
                <div className="text-purple-100">Final Assessment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">Offer Letter</div>
                <div className="text-purple-100">Top Performers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Requirements */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">✅ Eligibility & Selection Criteria</h2>
              <p className="text-xl text-muted-foreground">Meet the standards of excellence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Academic Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• B.Tech student (any year, any specialization)</li>
                    <li>• Minimum 7.0+ CGPA</li>
                    <li>• Good academic standing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-blue-600" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Interest in AI/ML/IoT technologies</li>
                    <li>• Programming knowledge</li>
                    <li>• Research aptitude</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-purple-600" />
                    Leadership Qualities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Proven leadership experience</li>
                    <li>• Strong communication skills</li>
                    <li>• Team collaboration abilities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-orange-600" />
                    Commitment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• 1-year program commitment</li>
                    <li>• 10-15 hours per week availability</li>
                    <li>• Regular participation in activities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">📋 Application Process & Timeline</h2>
              <p className="text-xl text-muted-foreground">Your journey to leadership starts here</p>
            </div>
            
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold text-sm mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">❓ Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Get answers to common questions</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call-to-Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Lead the Innovation Revolution?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join an exclusive community of student leaders shaping the future of technology and research in India. Limited seats available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contact@gudsky.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollegeRepresentative;
