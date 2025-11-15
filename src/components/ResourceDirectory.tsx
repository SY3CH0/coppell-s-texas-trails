import { useState, useEffect, useRef } from "react";
import { resources, categories } from "@/data/resources";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourceDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Resources");
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

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All Resources" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="resources" ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Organic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-6 bg-primary/15 text-primary border-2 border-primary/30 px-6 py-3 text-base font-serif rounded-full">
            Resource Directory
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
            <span className="text-foreground">Find Your </span>
            <span className="text-primary">Community Resources</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Search our comprehensive directory of local services and support
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`mb-16 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Search Bar */}
          <div className="relative max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
              <Input
                type="text"
                placeholder="Search by name, service, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-16 h-16 text-lg bg-card/60 backdrop-blur-md border-2 border-border focus:border-primary rounded-3xl transition-all duration-300 font-light"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-soft"
                    : "border-2 border-border hover:border-primary hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground text-lg font-light">
            Showing <span className="text-primary font-semibold text-xl">{filteredResources.length}</span> {filteredResources.length === 1 ? 'resource' : 'resources'}
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <div 
              key={resource.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + (index * 50)}ms` }}
            >
              {/* Organic Card */}
              <div className="relative h-full bg-card/60 backdrop-blur-md rounded-[2rem] p-6 border-2 border-border hover:border-primary/40 transition-all duration-500 overflow-hidden group-hover:glow-warm">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative Element */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant="outline" 
                      className="border-primary/40 text-primary bg-primary/10 px-3 py-1 rounded-full text-sm"
                    >
                      {resource.category}
                    </Badge>
                    <a 
                      href={resource.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors group-hover:rotate-12 duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 font-serif">
                    {resource.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow font-light">
                    {resource.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground line-clamp-2 flex-1">{resource.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <div className="p-1.5 rounded-full bg-primary/10">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{resource.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <div className="p-1.5 rounded-full bg-primary/10">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{resource.hours}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2">
                    {resource.services.slice(0, 3).map((service) => (
                      <Badge 
                        key={service} 
                        variant="secondary"
                        className="text-xs bg-secondary/50 border border-border/50 rounded-full px-3 py-1"
                      >
                        {service}
                      </Badge>
                    ))}
                    {resource.services.length > 3 && (
                      <Badge 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 border border-border/50 rounded-full px-3 py-1"
                      >
                        +{resource.services.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Bottom Decoration */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground font-light">
              No resources found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceDirectory;
