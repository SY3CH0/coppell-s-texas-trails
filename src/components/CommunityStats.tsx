import { useEffect, useRef, useState } from "react";
import { Users, Building2, Calendar, Heart } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Community Resources",
    description: "Organizations serving Coppell"
  },
  {
    icon: Users,
    value: 45000,
    suffix: "+",
    label: "Residents Served",
    description: "People helped annually"
  },
  {
    icon: Calendar,
    value: 200,
    suffix: "+",
    label: "Community Events",
    description: "Programs each year"
  },
  {
    icon: Heart,
    value: 5000,
    suffix: "+",
    label: "Volunteer Hours",
    description: "Given back monthly"
  }
];

const CommunityStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 80;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.round(increment * currentStep);
            return newCounts;
          });
        } else {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-float-slow opacity-40" />
        <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl animate-float-delayed opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Impact</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Together, we're making a meaningful difference in Coppell
          </p>
        </div>

        {/* Organic Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Organic Card Shape */}
                <div className="relative h-full bg-card/60 backdrop-blur-md rounded-[2.5rem] p-8 border-2 border-border hover:border-primary/40 transition-all duration-500 overflow-hidden group-hover:glow-warm">
                  {/* Animated Background */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  
                  {/* Floating Decoration */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10 text-center space-y-6">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/15 group-hover:bg-primary/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    
                    {/* Counter */}
                    <div className="space-y-2">
                      <div 
                        className="text-5xl md:text-6xl font-bold text-primary font-serif"
                        style={{
                          textShadow: '0 0 30px hsl(27 95% 38% / 0.3)',
                        }}
                      >
                        {counts[index].toLocaleString()}{stat.suffix}
                      </div>
                      
                      <div className="text-xl font-semibold text-foreground">
                        {stat.label}
                      </div>
                      
                      <div className="text-sm text-muted-foreground font-light leading-relaxed">
                        {stat.description}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Decoration */}
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
