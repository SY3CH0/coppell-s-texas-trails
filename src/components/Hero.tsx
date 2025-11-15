import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToResources = () => {
    document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Multi-layer Parallax Background */}
      <div 
        className="absolute inset-0 parallax-layer opacity-20"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      >
        <img 
          src={heroImage} 
          alt="Coppell Texas" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Gradient Overlays - Multiple Layers */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(27 95% 38% / 0.2), transparent 40%)`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, hsl(27 95% 38% / 0.15), transparent 50%)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 70%, hsl(27 80% 45% / 0.1), transparent 50%)',
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite`,
              opacity: 0.1 + Math.random() * 0.2,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.4)}px)`,
            }}
          />
        ))}
      </div>

      {/* Organic Wave Shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,90 1200,80 L1200,120 L0,120 Z"
            fill="hsl(27 95% 38% / 0.2)"
            className="animate-wave"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative h-screen flex flex-col items-center justify-center px-4 z-10">
        <div 
          className="text-center space-y-8 max-w-6xl animate-fadeIn"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          {/* Community Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase border-2 border-primary/40 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-md glow-soft">
              <Users className="w-4 h-4 animate-pulse" />
              <span className="font-serif">Coppell, Texas</span>
              <Sparkles className="w-4 h-4 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
            <span className="block text-foreground font-serif mb-2">Together We</span>
            <span className="block relative">
              <span 
                className="text-primary font-serif relative z-10"
                style={{
                  textShadow: '0 0 40px hsl(27 95% 38% / 0.5)',
                }}
              >
                Build Community
              </span>
              <div 
                className="absolute inset-0 blur-2xl bg-primary/30 -z-10 animate-pulse-glow"
                style={{ transform: 'scale(1.2)' }}
              />
            </span>
          </h1>
          
          {/* Subtitle with Icons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
              <Heart className="w-5 h-5 text-primary fill-primary/50" />
              <span className="font-light">Supporting</span>
            </div>
            <span className="text-primary">•</span>
            <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-light">Connecting</span>
            </div>
            <span className="text-primary">•</span>
            <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-light">Growing</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-light">
            Your comprehensive guide to <span className="text-primary font-semibold">local resources</span>, support services, 
            and community programs that make Coppell stronger
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <Button 
              size="lg" 
              onClick={scrollToResources}
              className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-8 text-xl font-semibold rounded-3xl glow-soft hover:glow-effect transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Resources
                <Users className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer bg-[length:200%_100%]" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("submit")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary/40 hover:border-primary hover:bg-primary/15 text-foreground px-10 py-8 text-xl font-semibold rounded-3xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105"
            >
              Share a Resource
            </Button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div 
          className="absolute bottom-16 left-1/2 -translate-x-1/2 cursor-pointer group"
          onClick={scrollToResources}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-muted-foreground text-sm font-light tracking-wider">Scroll to explore</span>
            <div className="relative">
              <ChevronDown className="w-8 h-8 text-primary animate-float" />
              <ChevronDown className="w-8 h-8 text-primary absolute top-0 opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
