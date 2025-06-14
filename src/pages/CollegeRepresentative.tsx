import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Users, Target, Award, Clock, Crown, Briefcase, Calendar, BookOpen, Network, TrendingUp, CheckCircle, Download, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React from "react";

const heroGradientStyle: React.CSSProperties = {
  background: "linear-gradient(120deg, #b1c6fd 0%, #e5e9fd 30%, #d1c2ff 85%, #eef2fc 100%)",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "410px",
  zIndex: 0,
  animation: "gradientMove 7s ease-in-out infinite alternate"
};

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
      {/* Animated Gradient BG for Hero */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
      <Navigation />
      <main className="pt-16">
        {/* Animated Hero Visual Layer */}
        {/* ---- INCREASED TOP PADDING BELOW ---- */}
        <section className="relative flex flex-col items-center justify-center h-[360px] md:h-[390px] px-4 pt-20 md:pt-28 pb-2 md:pb-8 overflow-hidden">
          <div style={heroGradientStyle} className="pointer-events-none blur-2xl opacity-75"></div>
          <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-0">
            <div className="hidden md:block absolute left-24 top-16 animate-pulse">
              <div className="w-14 h-14 rounded-xl bg-blue-200 opacity-60 blur-2xl"></div>
            </div>
            <div className="hidden md:block absolute right-10 top-2/3 animate-pulse animation-delay-700">
              <div className="w-20 h-20 rounded-full bg-indigo-200 opacity-70 blur-xl"></div>
            </div>
            <div className="hidden md:block absolute right-1/3 top-2 animate-spin-slow">
              <div className="w-10 h-10 rounded-lg bg-violet-300 opacity-30 blur"></div>
            </div>
          </div>
          <div className="z-10 flex flex-col items-center w-full animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-lg px-6 py-3 shadow-lg animate-scale-in">
              🌟 Exclusive Leadership Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in animation-delay-200">
              College Representative Program
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in animation-delay-350">
              Become a Leader in Tech Innovation and Research Excellence! 
              <br />
              <span className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                "Transforming Curious Students into Research Leaders"
              </span>
            </p>
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl animate-scale-in animation-delay-400">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border shadow-lg animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">6</div>
                <div className="text-gray-600">Exclusive Positions per College</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border shadow-lg animate-fade-in animation-delay-200">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">1 Year</div>
                <div className="text-gray-600">Program Duration</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border shadow-lg animate-fade-in animation-delay-400">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-600">Research/Project Offer for Top Performers</div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in animation-delay-600">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                Explore Positions
              </Button>
            </div>
          </div>
        </section>
        {/* Back Button (remains as is) */}
        <div className="max-w-6xl mx-auto px-4 pt-4">
          <Link to="/career">
            <Button variant="ghost" className="mb-4 animate-fade-in">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Career Programs
            </Button>
          </Link>
        </div>
        {/* Exclusive Positions Section */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">🎯 Exclusive Leadership Positions Available</h2>
              <p className="text-xl text-muted-foreground animate-fade-in animation-delay-100">Choose your path to research excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {positions.map((position, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 120}ms` }}>
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
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">🚀 Why This Program is a Game-Changer for Your Career</h2>
              <p className="text-xl text-muted-foreground animate-fade-in animation-delay-100">Unlock exclusive opportunities that will transform your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 120}ms` }}>
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
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">🏆 Exclusive Career Advancement Opportunities</h2>
            <p className="text-xl mb-8 text-purple-100 animate-fade-in animation-delay-100">
              Outstanding performers receive Research/Project Offer Letters after program completion
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-scale-in">
                <div className="text-3xl font-bold mb-2">6 Months</div>
                <div className="text-purple-100">Performance Review</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-scale-in animation-delay-150">
                <div className="text-3xl font-bold mb-2">12 Months</div>
                <div className="text-purple-100">Final Assessment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-scale-in animation-delay-300">
                <div className="text-3xl font-bold mb-2">Offer Letter</div>
                <div className="text-purple-100">Top Performers</div>
              </div>
            </div>
          </div>
        </section>
        {/* Animate main section titles and card group containers in the rest of the page for consistency */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">✅ Eligibility & Selection Criteria</h2>
              <p className="text-xl text-muted-foreground animate-fade-in animation-delay-100">Meet the standards of excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/70 backdrop-blur-sm animate-scale-in">
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
              <Card className="border-0 bg-white/70 backdrop-blur-sm animate-scale-in animation-delay-150">
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
              <Card className="border-0 bg-white/70 backdrop-blur-sm animate-scale-in animation-delay-300">
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
              <Card className="border-0 bg-white/70 backdrop-blur-sm animate-scale-in animation-delay-450">
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
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">📋 Application Process & Timeline</h2>
              <p className="text-xl text-muted-foreground animate-fade-in animation-delay-100">Your journey to leadership starts here</p>
            </div>
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 120}ms` }}>
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
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">❓ Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground animate-fade-in animation-delay-100">Get answers to common questions</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm animate-scale-in" style={{ animationDelay: `${index * 120}ms` }}>
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
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Lead the Innovation Revolution?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in animation-delay-100">
              Join an exclusive community of student leaders shaping the future of technology and research in India. Limited seats available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in animation-delay-250">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animation-delay-400">
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
