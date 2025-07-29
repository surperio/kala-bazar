import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Users, Palette } from 'lucide-react';
import heroImage from '@/assets/hero-artisan.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-warm">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Support Local Badge */}
            <Badge className="bg-gold text-gold-foreground px-4 py-2 text-sm font-medium animate-gentle-bounce">
              <Heart className="h-4 w-4 mr-2" />
              Support Local Artisans Initiative
            </Badge>

            {/* Tagline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold font-noto mb-4">
                <span className="gradient-text">हर हाथ को</span><br />
                <span className="text-foreground">पहचान</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Every Hand Deserves Recognition
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Connect directly with India's finest traditional artisans. Discover authentic handcrafted treasures from every corner of our incredible nation - no middlemen, just pure artistry.
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground">Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-muted-foreground">Handcrafted Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">28</div>
                <div className="text-sm text-muted-foreground">States</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-heritage">
                Explore Artisans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-outline-heritage">
                <Users className="mr-2 h-5 w-5" />
                Become an Artisan
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Palette className="h-4 w-4 mr-2 text-primary" />
                100% Authentic
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Heart className="h-4 w-4 mr-2 text-primary" />
                Direct Trade
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Community Driven
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-heritage">
              <img 
                src={heroImage} 
                alt="Traditional Indian artisan crafting beautiful Madhubani patterns"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-warm animate-float">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">₹0</div>
                <div className="text-xs text-muted-foreground">Commission</div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-warm animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;