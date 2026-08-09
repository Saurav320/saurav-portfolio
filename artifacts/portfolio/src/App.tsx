import { useEffect, useState } from "react";
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
      <Navbar />

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

  const [cursor, setCursor] = useState({
    x: -100,
    y: -100,
    visible: true,
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement;

      // Hide custom cursor over images
      const isImage = target.closest("img");

      setCursor({
        x: event.clientX,
        y: event.clientY,
        visible: !isImage,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${
          cursor.visible ? "visible" : "hidden"
        }`}
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
        aria-hidden="true"
      />

      {/* Loading Screen */}
      <LoadingScreen />

      {/* Scroll Progress */}
      <ScrollProgress />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Projects Page */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Certificates Page */}
          <Route
            path="/certificates"
            element={<CertificatesPage />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster
        theme="dark"
        toastOptions={{
          className:
            "glass-panel border-border !bg-card !text-foreground",
        }}
      />
    </BrowserRouter>
  );
}

export default App;