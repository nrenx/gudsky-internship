
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Research Scientist",
      institution: "IIT Delhi",
      content: "The research programs at Gudsky Foundation have been instrumental in advancing my career. The quality of mentorship and resources provided is exceptional.",
      rating: 5,
      image: "/lovable-uploads/2c5b1076-a885-4e22-8e90-ff0faef3a4b6.png"
    },
    {
      name: "Priya Sharma",
      role: "Graduate Student",
      institution: "Manipal University",
      content: "The comprehensive courses and practical approach to learning have given me the skills and confidence to excel in my field.",
      rating: 5,
      image: "/lovable-uploads/2c5b1076-a885-4e22-8e90-ff0faef3a4b6.png"
    },
    {
      name: "Prof. Michael Johnson",
      role: "Visiting Faculty",
      institution: "MIT",
      content: "Collaborating with Gudsky Foundation has been a rewarding experience. Their commitment to excellence is evident in every project.",
      rating: 5,
      image: "/lovable-uploads/2c5b1076-a885-4e22-8e90-ff0faef3a4b6.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students, researchers, and faculty about their experience with Gudsky Research Foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600">{testimonial.institution}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
