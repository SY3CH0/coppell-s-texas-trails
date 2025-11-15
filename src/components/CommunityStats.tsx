import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

    const duration = 2000;
    const steps = 60;
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
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-charcoal/20 to-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-foreground">Community </span>
            <span className="text-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we're building a stronger Coppell through collaboration and community support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className={`group relative overflow-hidden border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-700 hover:transform hover:scale-105 hover:glow-effect ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="pt-6 text-center relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counts[index].toLocaleString()}{stat.suffix}
                  </div>
                  
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>

                {/* Corner Accent */}
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 -ml-10 -mb-10 rotate-45 group-hover:bg-primary/20 transition-colors duration-500" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
