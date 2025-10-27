import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="relative">
      {/* Theme toggle in top right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
    </main>
  );
};

export default Index;
