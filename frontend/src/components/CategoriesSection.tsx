import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Madhubani Paintings",
    region: "Bihar",
    artisans: 324,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Traditional Mithila art with intricate patterns",
    featured: true
  },
  {
    id: 2,
    name: "Banarasi Sarees",
    region: "Uttar Pradesh",
    artisans: 156,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
    description: "Luxurious silk sarees with golden zari work"
  },
  {
    id: 3,
    name: "Channapatna Toys",
    region: "Karnataka",
    artisans: 89,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    description: "Eco-friendly wooden toys with natural colors"
  },
  {
    id: 4,
    name: "Kashmiri Carpets",
    region: "Jammu & Kashmir",
    artisans: 67,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    description: "Hand-knotted carpets with Persian influences"
  },
  {
    id: 5,
    name: "Blue Pottery",
    region: "Rajasthan",
    artisans: 142,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68dc2?w=400",
    description: "Vibrant blue ceramic art from Jaipur"
  },
  {
    id: 6,
    name: "Kantha Embroidery",
    region: "West Bengal",
    artisans: 203,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
    description: "Traditional running stitch embroidery"
  }
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            Craft Categories
          </Badge>
          <h2 className="text-4xl font-bold font-noto mb-4">
            Discover India's Rich
            <span className="gradient-text"> Artistic Heritage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intricate Madhubani paintings to luxurious Banarasi sarees, explore authentic crafts 
            that have been passed down through generations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`product-card group cursor-pointer ${category.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    category.featured ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Featured Badge */}
                {category.featured && (
                  <Badge className="absolute top-4 left-4 bg-gold text-gold-foreground">
                    Featured
                  </Badge>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <Star className="h-3 w-3 text-gold fill-current mr-1" />
                  <span className="text-sm font-medium">{category.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold font-noto group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    {category.region}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {category.artisans} artisans
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-heritage">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;