
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import DrSitaRani from "./pages/DrSitaRani";
import Research from "./pages/Research";
import StudentRegistration from "./pages/StudentRegistration";
import TeacherRegistration from "./pages/TeacherRegistration";
import Career from "./pages/Career";
import CollegeRepresentative from "./pages/CollegeRepresentative";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/all-courses" element={<Courses />} />
          <Route path="/dr-sita-rani" element={<DrSitaRani />} />
          <Route path="/research" element={<Research />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/college-representative" element={<CollegeRepresentative />} />
          <Route path="/register/student" element={<StudentRegistration />} />
          <Route path="/register/teacher" element={<TeacherRegistration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
