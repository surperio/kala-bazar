import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, MapPin, Star, Heart, ArrowRight, Users } from 'lucide-react';
import artisanStoryImage from '@/assets/artisan-story.jpg';

const featuredArtisans = [
  {
    id: 1,
    name: "Sunita Devi",
    craft: "Madhubani Painting",
    location: "Madhubani, Bihar",
    experience: "25 years",
    rating: 4.9,
    orders: 1200,
    story: "Carrying forward 5 generations of Madhubani artistry",
    videoThumbnail: artisanStoryImage,
    featured: true
  },
  {
    id: 2,
    name: "Mohammad Yusuf",
    craft: "Carpet Weaving",
    location: "Srinagar, Kashmir",
    experience: "30 years",
    rating: 4.8,
    orders: 890,
    story: "Master of traditional Kashmiri carpet weaving techniques",
    videoThumbnail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400"
  },
  {
    id: 3,
    name: "Lakshmi Amma",
    craft: "Kantha Embroidery",
    location: "Shantiniketan, West Bengal",
    experience: "40 years",
    rating: 4.9,
    orders: 650,
    story: "Preserving the ancient art of Kantha stitch",
    videoThumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba19c88?w=400"
  }
];

const ArtisanStoriesSection = () => {
  return (
    <section id="stories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            Artisan Stories
          </Badge>
          <h2 className="text-4xl font-bold font-noto mb-4">
            Meet the Masters Behind
            <span className="gradient-text"> Every Masterpiece</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece tells a story. Discover the passionate artisans who pour their heart,
            soul, and generations of wisdom into every creation.
          </p>
        </div>

        {/* Featured Artisan */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-heritage">
            <div className="grid lg:grid-cols-2">
              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer">
                <img
                  src={featuredArtisans[0].videoThumbnail}
                  alt={featuredArtisans[0].name}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary-foreground fill-current" />
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-gold text-gold-foreground">
                  Featured Story
                </Badge>
              </div>

              {/* Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold font-noto mb-2">{featuredArtisans[0].name}</h3>
                    <p className="text-primary font-medium mb-1">{featuredArtisans[0].craft}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {featuredArtisans[0].location}
                    </div>
                  </div>

                  <p className="text-lg text-foreground/80 leading-relaxed">
                    "{featuredArtisans[0].story}. My grandmother taught me the sacred patterns
                    that connect us to our ancestors and the divine."
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">{featuredArtisans[0].experience}</div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="h-4 w-4 text-gold fill-current mr-1" />
                        <span className="text-xl font-bold text-primary">{featuredArtisans[0].rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">{featuredArtisans[0].orders}+</div>
                      <div className="text-sm text-muted-foreground">Happy Customers</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="btn-heritage">
                      Watch Story
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="btn-outline-heritage">
                      <Heart className="mr-2 h-4 w-4" />
                      Follow Artisan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Other Artisan Stories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredArtisans.slice(1).map((artisan) => (
            <Card key={artisan.id} className="artisan-card group cursor-pointer">
              <div className="relative">
                <img
                  src={artisan.videoThumbnail}
                  alt={artisan.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3">
                    <Play className="h-6 w-6 text-primary-foreground fill-current" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold font-noto group-hover:text-primary transition-colors">
                      {artisan.name}
                    </h4>
                    <p className="text-primary text-sm font-medium">{artisan.craft}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {artisan.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {artisan.story}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-gold fill-current mr-1" />
                        {artisan.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 text-muted-foreground mr-1" />
                        {artisan.orders}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="btn-heritage">
            Discover More Stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtisanStoriesSection;
