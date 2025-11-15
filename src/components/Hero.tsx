import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToResources = () => {
    document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background Layers */}
      <div 
        className="absolute inset-0 parallax-layer"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img 
          src={heroImage} 
          alt="Coppell Texas" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateY(${scrollY * (0.2 + Math.random() * 0.3)}px)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div 
          className="text-center space-y-6 max-w-5xl animate-fadeIn"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase border border-primary/30 px-4 py-2 rounded-full bg-primary/5 backdrop-blur-sm">
              Coppell, Texas
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="block text-foreground">Community</span>
            <span className="block text-primary animate-pulse-glow">Resource Hub</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover local non-profits, support services, community programs, and resources 
            that strengthen our Texas community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToResources}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl glow-effect hover:glow-strong transition-all duration-300 transform hover:scale-105"
            >
              Explore Resources
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("submit")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Submit Resource
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
          onClick={scrollToResources}
        >
          <ChevronDown className="w-8 h-8 text-primary animate-pulse" />
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
