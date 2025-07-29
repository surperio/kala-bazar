import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Palette, ArrowRight } from 'lucide-react';

const regions = [
  {
    id: 1,
    name: "Rajasthan",
    specialties: ["Blue Pottery", "Block Printing", "Miniature Paintings", "Bandhej"],
    artisans: 1200,
    crafts: 450,
    image: "https://images.unsplash.com/photo-1477650112969-d31d2b42d4c9?w=600",
    color: "from-orange-500 to-red-500",
    description: "Land of vibrant colors and royal craftsmanship"
  },
  {
    id: 2,
    name: "West Bengal",
    specialties: ["Kantha Embroidery", "Dokra Art", "Terracotta", "Baluchari Sarees"],
    artisans: 980,
    crafts: 380,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
    color: "from-green-500 to-teal-500",
    description: "Cultural heart of Bengal's artistic heritage"
  },
  {
    id: 3,
    name: "Kashmir",
    specialties: ["Carpet Weaving", "Pashmina Shawls", "Paper Mache", "Walnut Wood Carving"],
    artisans: 450,
    crafts: 200,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    color: "from-blue-500 to-purple-500",
    description: "Paradise of intricate handwoven crafts"
  },
  {
    id: 4,
    name: "Tamil Nadu",
    specialties: ["Tanjore Paintings", "Bronze Sculptures", "Silk Weaving", "Chettinad Tiles"],
    artisans: 1100,
    crafts: 420,
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=600",
    color: "from-yellow-500 to-orange-500",
    description: "Temple art and classical craft traditions"
  },
  {
    id: 5,
    name: "Gujarat",
    specialties: ["Patola Silk", "Ajrakh Printing", "Embroidery", "Tie & Dye"],
    artisans: 890,
    crafts: 350,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68dc2?w=600",
    color: "from-pink-500 to-purple-500",
    description: "Hub of textile arts and mirror work"
  },
  {
    id: 6,
    name: "Karnataka",
    specialties: ["Channapatna Toys", "Mysore Silk", "Sandalwood Carving", "Bidriware"],
    artisans: 720,
    crafts: 290,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    color: "from-emerald-500 to-green-500",
    description: "Eco-friendly crafts and royal traditions"
  }
];

const RegionsSection = () => {
  return (
    <section id="regions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            Regional Crafts
          </Badge>
          <h2 className="text-4xl font-bold font-noto mb-4">
            Explore India's
            <span className="gradient-text"> Diverse Craft Regions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the royal crafts of Rajasthan to the delicate textiles of Bengal, 
            discover the unique artistic traditions of each Indian state.
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16 relative">
          <Card className="heritage-card p-8 text-center bg-gradient-warm">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-noto">Interactive Craft Map</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Click on any state to discover its unique crafts and meet local artisans
              </p>
              <Button className="btn-heritage">
                Explore Map
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <Card 
              key={region.id} 
              className="artisan-card group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={region.image} 
                  alt={`${region.name} crafts`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${region.color} opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Region Name Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold font-noto">{region.name}</h3>
                  <p className="text-sm opacity-90">{region.description}</p>
                </div>

                {/* Stats Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">{region.artisans}</div>
                    <div className="text-xs text-muted-foreground">Artisans</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Palette className="h-4 w-4 mr-2 text-primary" />
                      Craft Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {region.specialties.slice(0, 3).map((specialty, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                      {region.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{region.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1 text-primary" />
                      {region.artisans} artisans
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Palette className="h-4 w-4 mr-1 text-primary" />
                      {region.crafts} products
                    </div>
                  </div>

                  {/* Explore Button */}
                  <Button 
                    variant="outline" 
                    className="w-full btn-outline-heritage group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Explore {region.name}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="heritage-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-noto mb-4">
                Can't Find Your Region?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                We're constantly expanding our network of artisans. 
                Join our growing community and showcase your region's crafts.
              </p>
              <Button className="btn-heritage">
                Submit Your Region
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;