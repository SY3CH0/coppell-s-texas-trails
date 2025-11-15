import { useState, useEffect, useRef } from "react";
import { resources, categories } from "@/data/resources";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="resources" ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-background to-charcoal/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30 px-4 py-2">
            Resource Directory
          </Badge>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-foreground">Discover </span>
            <span className="text-primary">Community Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Search and filter through our comprehensive directory of local services
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search resources, services, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-2 border-border focus:border-primary transition-all duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 glow-effect"
                    : "border-2 border-border hover:border-primary hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground">
            Showing <span className="text-primary font-semibold">{filteredResources.length}</span> resources
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card 
              key={resource.id}
              className={`group border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105 hover:glow-effect ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + (index * 50)}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              
              <CardHeader className="relative">
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
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {resource.name}
                </CardTitle>
                <CardDescription className="mt-2">
                  {resource.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="line-clamp-2">{resource.address}</span>
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
                      className="text-xs bg-secondary/50"
                    >
                      {service}
                    </Badge>
                  ))}
                  {resource.services.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-secondary/50">
                      +{resource.services.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No resources found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceDirectory;
