
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, BookOpen, Award, Settings, LogIn, UserPlus } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">My Account</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Welcome to Your Learning Journey
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Access your courses, track your progress, and manage your account settings all in one place.
            </p>
          </div>
        </section>

        {/* Account Tabs */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </TabsTrigger>
                <TabsTrigger value="register" className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  Register
                </TabsTrigger>
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="courses" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  My Courses
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Sign In to Your Account</CardTitle>
                    <CardDescription>
                      Access your courses and track your learning progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Remember me</span>
                      </label>
                      <Button variant="link" className="text-sm">
                        Forgot password?
                      </Button>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                      Sign In
                    </Button>
                    <p className="text-center text-sm text-gray-600">
                      Don't have an account?{" "}
                      <Button variant="link" className="p-0">
                        Sign up here
                      </Button>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Create Your Account</CardTitle>
                    <CardDescription>
                      Join our community of learners and researchers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="regEmail">Email Address</Label>
                      <Input id="regEmail" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="regPassword">Password</Label>
                      <Input id="regPassword" type="password" placeholder="Create a password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">
                        I agree to the{" "}
                        <Button variant="link" className="p-0 h-auto">
                          Terms of Service
                        </Button>{" "}
                        and{" "}
                        <Button variant="link" className="p-0 h-auto">
                          Privacy Policy
                        </Button>
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">
                      Create Account
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                        JD
                      </div>
                      John Doe
                    </CardTitle>
                    <CardDescription>
                      Student ID: GRF2024001 | Member since January 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="profileEmail">Email Address</Label>
                          <Input id="profileEmail" value="john.doe@example.com" readOnly />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution</Label>
                          <Input id="institution" placeholder="Your institution" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="field">Field of Study</Label>
                          <Input id="field" placeholder="Computer Science" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience Level</Label>
                          <Input id="experience" placeholder="Intermediate" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="interests">Research Interests</Label>
                          <Input id="interests" placeholder="AI, Machine Learning" />
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                      <Settings className="w-4 h-4 mr-2" />
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* My Courses Tab */}
              <TabsContent value="courses">
                <div className="space-y-6">
                  <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">My Enrolled Courses</CardTitle>
                      <CardDescription>
                        Track your progress and access course materials
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border border-gray-200">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">Advanced Research Methodology</CardTitle>
                              <Badge variant="default">Active</Badge>
                            </div>
                            <CardDescription>Progress: 65%</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>8 of 12 modules completed</span>
                                <span>4 weeks remaining</span>
                              </div>
                              <Button variant="outline" className="w-full">
                                Continue Learning
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border border-gray-200">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">Data Analytics & Visualization</CardTitle>
                              <Badge variant="secondary">Completed</Badge>
                            </div>
                            <CardDescription>Completed on March 15, 2024</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center justify-center">
                                <Award className="w-16 h-16 text-yellow-500" />
                              </div>
                              <div className="text-center">
                                <p className="font-semibold">Certificate Earned!</p>
                                <p className="text-sm text-gray-600">Grade: A+</p>
                              </div>
                              <Button variant="outline" className="w-full">
                                <Award className="w-4 h-4 mr-2" />
                                View Certificate
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">Recommended Courses</CardTitle>
                      <CardDescription>
                        Based on your interests and completed courses
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-2">Machine Learning for Researchers</h4>
                            <p className="text-sm text-gray-600 mb-3">Advanced ML techniques for research applications</p>
                            <Button size="sm" className="w-full">
                              Enroll Now
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-2">Academic Writing Excellence</h4>
                            <p className="text-sm text-gray-600 mb-3">Master academic writing and publication</p>
                            <Button size="sm" variant="outline" className="w-full">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-2">Grant Writing & Funding</h4>
                            <p className="text-sm text-gray-600 mb-3">Secure funding for your research projects</p>
                            <Button size="sm" variant="outline" className="w-full">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
