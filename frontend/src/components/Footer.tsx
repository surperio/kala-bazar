import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-accent-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-noto mb-4">
              Stay Connected with Indian Heritage
            </h3>
            <p className="text-accent-foreground/80 mb-6">
              Get weekly stories from artisans, new product launches, and cultural insights 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-accent-foreground/10 border-accent-foreground/20 placeholder:text-accent-foreground/60"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <span className="text-primary-foreground font-bold text-xl font-noto">कम</span>
              </div>
              <div>
                <h1 className="text-xl font-bold font-noto">KalaMitra</h1>
                <p className="text-sm text-accent-foreground/70">Har Haath Ko Pehchaan</p>
              </div>
            </div>
            <p className="text-accent-foreground/80 mb-6">
              Connecting India's traditional artisans directly with customers worldwide. 
              Preserving cultural heritage through fair trade.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-accent-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent-foreground/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-noto mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                'Browse Artisans',
                'Product Categories', 
                'Regional Crafts',
                'Video Stories',
                'Cultural Blog',
                'Gift Cards'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Artisans */}
          <div>
            <h4 className="text-lg font-semibold font-noto mb-6">For Artisans</h4>
            <ul className="space-y-3">
              {[
                'Join KalaMitra',
                'Seller Resources',
                'Training Programs',
                'Success Stories',
                'Community Forum',
                'Support Center'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold font-noto mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-accent-foreground/80">support@kalamitra.in</p>
                  <p className="text-accent-foreground/60 text-sm">General inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-accent-foreground/80">+91 1800-KALA-MITRA</p>
                  <p className="text-accent-foreground/60 text-sm">Customer support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-accent-foreground/80">New Delhi, India</p>
                  <p className="text-accent-foreground/60 text-sm">Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-accent-foreground/60">
              <p>© 2024 KalaMitra. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-accent-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for Indian artisans</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;