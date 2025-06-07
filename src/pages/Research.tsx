
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, FileText, Users, Calendar, Download, ExternalLink } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Advanced research in AI algorithms, deep learning, and their applications in various domains.",
      projects: 8,
      publications: 25,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Science & Analytics",
      description: "Big data processing, statistical modeling, and predictive analytics for research insights.",
      projects: 6,
      publications: 18,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Educational Technology",
      description: "Innovative learning platforms, e-learning solutions, and educational assessment tools.",
      projects: 5,
      publications: 12,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Research Methodology",
      description: "Development of new research frameworks, statistical methods, and validation techniques.",
      projects: 4,
      publications: 15,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const currentProjects = [
    {
      title: "AI-Powered Learning Management System",
      lead: "Dr. Sita Rani",
      duration: "2023-2025",
      funding: "₹15 Lakhs",
      status: "Active",
      description: "Developing an intelligent LMS that adapts to individual learning patterns and provides personalized recommendations."
    },
    {
      title: "Big Data Analytics for Educational Research",
      lead: "Research Team",
      duration: "2023-2024",
      funding: "₹8 Lakhs",
      status: "Active",
      description: "Large-scale analysis of educational data to identify learning patterns and improve teaching methodologies."
    },
    {
      title: "Mobile-Based Research Data Collection Platform",
      lead: "Technology Team",
      duration: "2024-2025",
      funding: "₹12 Lakhs",
      status: "Planning",
      description: "Creating a comprehensive mobile platform for field researchers to collect and manage research data efficiently."
    }
  ];

  const recentPublications = [
    {
      title: "Machine Learning Approaches for Educational Data Mining: A Comprehensive Review",
      authors: "Dr. Sita Rani, et al.",
      journal: "International Journal of Educational Technology",
      year: "2023",
      citations: 45,
      type: "Journal Article"
    },
    {
      title: "Advanced Analytics in Modern Research Methodology",
      authors: "Dr. Sita Rani, Research Team",
      journal: "ACM Computing Surveys",
      year: "2023",
      citations: 32,
      type: "Survey Paper"
    },
    {
      title: "Big Data Processing Techniques for Academic Research Applications",
      authors: "Research Team",
      journal: "IEEE Transactions on Knowledge and Data Engineering",
      year: "2022",
      citations: 67,
      type: "Journal Article"
    },
    {
      title: "AI-Driven Learning Management Systems: Implementation and Evaluation",
      authors: "Dr. Sita Rani, et al.",
      journal: "Computers & Education",
      year: "2022",
      citations: 28,
      type: "Research Article"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">Research Programs</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Advancing Knowledge Through Innovation
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Our research programs focus on cutting-edge technologies and methodologies that address 
              real-world challenges and contribute to the advancement of science and education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Microscope className="w-5 h-5 mr-2" />
                <span>23 Active Projects</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <FileText className="w-5 h-5 mr-2" />
                <span>70+ Publications</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                <span>15 Researchers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Research Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our multidisciplinary research spans across various domains of technology and education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{area.projects}</div>
                        <div className="text-xs text-gray-600">Active Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{area.publications}</div>
                        <div className="text-xs text-gray-600">Publications</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-blue-50 transition-colors">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Current Research Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our ongoing research initiatives that are shaping the future of technology and education.
              </p>
            </div>

            <div className="space-y-8">
              {currentProjects.map((project, index) => (
                <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-600" />
                        <span className="text-sm">
                          <strong>Lead:</strong> {project.lead}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-green-600" />
                        <span className="text-sm">
                          <strong>Duration:</strong> {project.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm">
                          <strong>Funding:</strong> {project.funding}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Project Page
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Publications */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Recent Publications
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with our latest research findings and academic contributions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recentPublications.map((publication, index) => (
                <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
                        {publication.type}
                      </Badge>
                      <span className="text-sm text-gray-600">{publication.year}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {publication.title}
                    </CardTitle>
                    <CardDescription>
                      <strong>Authors:</strong> {publication.authors}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <strong className="text-sm">Journal:</strong>
                        <p className="text-sm text-gray-600">{publication.journal}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <strong>Citations:</strong> {publication.citations}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
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

export default Research;
