import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  CreditCard, 
  Truck, 
  Play, 
  Globe, 
  Users, 
  Award, 
  Heart,
  CheckCircle,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Every product is verified and comes with authenticity guarantee from the artisan",
    color: "text-green-600"
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with bank-level security and instant transaction processing",
    color: "text-blue-600"
  },
  {
    icon: Truck,
    title: "Order Tracking",
    description: "Real-time tracking from artisan's workshop to your doorstep with regular updates",
    color: "text-purple-600"
  },
  {
    icon: Play,
    title: "Video Stories",
    description: "Watch artisans create your products and learn about their craft traditions",
    color: "text-red-600"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Platform available in Hindi, English, and 10+ regional languages",
    color: "text-indigo-600"
  },
  {
    icon: Users,
    title: "Direct to Customer",
    description: "No middlemen - connect directly with artisans for fair pricing and relationships",
    color: "text-orange-600"
  }
];

const benefits = [
  {
    title: "Zero Commission",
    description: "100% of your purchase goes to artisans",
    icon: "₹0"
  },
  {
    title: "Fair Trade Certified",
    description: "Ethical sourcing and fair wages guaranteed",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Cultural Preservation",
    description: "Supporting traditional crafts for future generations",
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: "Quality Assured",
    description: "Every product meets our high standards",
    icon: <Star className="h-6 w-6" />
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold text-gold-foreground">
            Why Choose KalaMitra
          </Badge>
          <h2 className="text-4xl font-bold font-noto mb-4">
            Built for Artisans,
            <span className="gradient-text"> Designed for You</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've created the most comprehensive platform to connect you with India's 
            finest artisans while ensuring transparency, authenticity, and fair trade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="heritage-card group hover:shadow-heritage transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold font-noto group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-noto mb-4">
              The KalaMitra Promise
            </h3>
            <p className="text-lg text-muted-foreground">
              More than a marketplace - we're building a movement for cultural preservation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  {typeof benefit.icon === 'string' ? (
                    <span className="text-2xl font-bold text-primary">{benefit.icon}</span>
                  ) : (
                    <div className="text-primary">{benefit.icon}</div>
                  )}
                </div>
                <h4 className="text-lg font-semibold font-noto mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Verified Artisans</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15,000+</div>
              <div className="text-sm text-muted-foreground">Authentic Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;