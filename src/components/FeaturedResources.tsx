import { resources } from "@/data/resources";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Phone, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30 px-4 py-2">
            Featured Resources
          </Badge>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-foreground">Spotlight on </span>
            <span className="text-primary">Community Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Highlighting exceptional organizations making a difference in Coppell
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map((resource, index) => (
            <Card 
              key={resource.id}
              className={`group relative overflow-hidden border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105 hover:glow-effect ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {resource.category}
                  </Badge>
                  <a 
                    href={resource.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {resource.name}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {resource.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{resource.address}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{resource.phone}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{resource.hours}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {resource.services.slice(0, 3).map((service) => (
                    <Badge 
                      key={service} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 -mr-10 -mt-10 rotate-45 group-hover:bg-primary/20 transition-colors duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
