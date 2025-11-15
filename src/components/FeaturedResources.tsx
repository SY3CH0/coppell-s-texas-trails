import { resources } from "@/data/resources";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturedResources = () => {
  const featuredResources = resources.filter(r => r.featured);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-float" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-6 bg-primary/15 text-primary border-2 border-primary/30 px-6 py-3 text-base font-serif rounded-full">
            Featured Partners
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
            <span className="text-foreground">Community </span>
            <span className="text-primary">Champions</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Meet the organizations leading the way in community support and service
          </p>
        </div>

        <div className="space-y-12">
          {featuredResources.map((resource, index) => (
            <div 
              key={resource.id}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Organic Card Design */}
              <div className="relative bg-card/60 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border-2 border-border hover:border-primary/40 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:glow-warm">
                {/* Animated Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'radial-gradient(circle at 30% 50%, hsl(27 95% 38% / 0.1), transparent 60%)',
                  }}
                />
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                  {/* Left: Main Info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <Badge 
                        variant="outline" 
                        className="border-primary/40 text-primary bg-primary/10 px-4 py-2 rounded-full font-medium"
                      >
                        {resource.category}
                      </Badge>
                      <span className="text-3xl" role="img" aria-label="featured">⭐</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-serif">
                      {resource.name}
                    </h3>

                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                      {resource.description}
                    </p>

                    {/* Contact Info */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                      <div className="flex items-start gap-3 text-sm">
                        <div className="p-2 rounded-full bg-primary/10">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground mb-1">Location</div>
                          <div className="text-muted-foreground">{resource.address}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 text-sm">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground mb-1">Contact</div>
                          <div className="text-muted-foreground">{resource.phone}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 text-sm sm:col-span-2">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Clock className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground mb-1">Hours</div>
                          <div className="text-muted-foreground">{resource.hours}</div>
                        </div>
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {resource.services.map((service) => (
                        <Badge 
                          key={service} 
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-secondary text-foreground border border-border/50 rounded-full px-4 py-1"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex flex-col items-center justify-center space-y-4 md:border-l md:border-border/50 md:pl-8">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg font-semibold glow-soft hover:glow-effect transition-all duration-300 group/btn"
                    >
                      <a 
                        href={resource.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Visit Website
                        <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-2 border-primary/40 hover:bg-primary/10 rounded-2xl py-6 text-lg font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
