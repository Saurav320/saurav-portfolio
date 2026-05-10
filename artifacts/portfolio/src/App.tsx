import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { useTheme } from "@/hooks/useTheme";

function App() {
  // Initialize theme
  useTheme();

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
      
      <Toaster 
        theme="dark" 
        toastOptions={{
          className: 'glass-panel border-border !bg-card !text-foreground',
        }}
      />
    </div>
  );
}

export default App;
