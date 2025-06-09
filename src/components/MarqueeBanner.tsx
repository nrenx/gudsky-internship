
import { Award, Users, Globe, BookOpen, Microscope, Star } from "lucide-react";

const MarqueeBanner = () => {
  const achievements = [
    { icon: Award, text: "15+ Years of Excellence" },
    { icon: Users, text: "500+ Students Graduated" },
    { icon: Globe, text: "Global Research Network" },
    { icon: BookOpen, text: "50+ Published Papers" },
    { icon: Microscope, text: "Cutting-edge Research" },
    { icon: Star, text: "Industry Recognition" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...achievements, ...achievements].map((item, index) => (
          <div key={index} className="flex items-center mx-8 text-white">
            <item.icon className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">{item.text}</span>
            <div className="w-2 h-2 bg-white/50 rounded-full ml-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
