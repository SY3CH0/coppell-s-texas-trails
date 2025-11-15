import { Heart, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border bg-gradient-to-b from-background to-charcoal/20">
      {/* Decorative Stars */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-primary fill-primary" />
            <h3 className="text-2xl font-bold">
              <span className="text-foreground">Coppell </span>
              <span className="text-primary">Community Hub</span>
            </h3>
            <Star className="w-6 h-6 text-primary fill-primary" />
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connecting our community through accessible resources, services, and programs that strengthen Coppell, Texas.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#resources" className="text-muted-foreground hover:text-primary transition-colors">
              Browse Resources
            </a>
            <span className="text-border">•</span>
            <a href="#submit" className="text-muted-foreground hover:text-primary transition-colors">
              Submit Resource
            </a>
            <span className="text-border">•</span>
            <a href="https://coppelltx.gov" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              City of Coppell
            </a>
            <span className="text-border">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-border max-w-md mx-auto" />

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>for Coppell, Texas</span>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coppell Community Resource Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
