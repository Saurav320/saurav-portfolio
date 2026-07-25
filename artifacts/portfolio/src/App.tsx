import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import CertificatesPage from "./pages/CertificatesPage";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { useTheme } from "@/hooks/useTheme";

import ProjectsPage from "@/pages/ProjectsPage";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
    </>
  );
}

function App() {
  useTheme();

  return (
    <BrowserRouter>
      <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary">
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>

        <Footer />

        <Toaster
          theme="dark"
          toastOptions={{
            className: "glass-panel border-border !bg-card !text-foreground",
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;