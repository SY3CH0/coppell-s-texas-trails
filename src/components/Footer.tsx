import { Heart, Star, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t-2 border-border/50 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Organic Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Logo/Title */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-primary fill-primary animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-bold font-serif">
                <span className="text-foreground">Coppell </span>
                <span className="text-primary">Community Hub</span>
              </h3>
              <Star className="w-8 h-8 text-primary fill-primary animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-light">Coppell, Texas</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Connecting our community through accessible resources, services, and programs that strengthen the heart of Coppell
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-base pt-4">
            <a 
              href="#resources" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light hover:font-medium"
            >
              Browse Resources
            </a>
            <span className="text-border">•</span>
            <a 
              href="#submit" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light hover:font-medium"
            >
              Submit Resource
            </a>
            <span className="text-border">•</span>
            <a 
              href="https://coppelltx.gov" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light hover:font-medium"
            >
              City of Coppell
            </a>
            <span className="text-border">•</span>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light hover:font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-md" />
          </div>

          {/* Made with Love */}
          <div className="flex items-center justify-center gap-3 text-base">
            <span className="text-muted-foreground font-light">Made with</span>
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
            <span className="text-muted-foreground font-light">for the people of</span>
            <span className="text-primary font-semibold">Coppell</span>
          </div>

          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Coppell Community Resource Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
