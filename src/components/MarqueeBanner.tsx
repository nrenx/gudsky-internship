
import { Award, Users, Globe, BookOpen, Microscope, Star } from "lucide-react";
import { Link } from "react-router-dom";

const MarqueeBanner = () => {
  const achievements = [
    { icon: Award, text: "15+ Years of Excellence" },
    { icon: Users, text: "500+ Students Graduated" },
    { icon: Globe, text: "Global Research Network" },
    { icon: BookOpen, text: "50+ Published Papers" },
    { icon: Microscope, text: "Cutting-edge Research" },
    { icon: Star, text: "Industry Recognition" },
    { 
      icon: Users, 
      text: "College Representative Program", 
      link: "/career/college-representative",
      isClickable: true 
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of achievements */}
        {achievements.map((item, index) => (
          <div key={`first-${index}`} className="flex items-center mx-8 text-white">
            {item.isClickable ? (
              <Link 
                to={item.link} 
                className="flex items-center hover:text-yellow-300 transition-colors cursor-pointer"
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium underline">{item.text}</span>
              </Link>
            ) : (
              <>
                <item.icon className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{item.text}</span>
              </>
            )}
            <div className="w-2 h-2 bg-white/50 rounded-full ml-8" />
          </div>
        ))}
        {/* Second set of achievements for seamless loop */}
        {achievements.map((item, index) => (
          <div key={`second-${index}`} className="flex items-center mx-8 text-white">
            {item.isClickable ? (
              <Link 
                to={item.link} 
                className="flex items-center hover:text-yellow-300 transition-colors cursor-pointer"
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium underline">{item.text}</span>
              </Link>
            ) : (
              <>
                <item.icon className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{item.text}</span>
              </>
            )}
            <div className="w-2 h-2 bg-white/50 rounded-full ml-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
