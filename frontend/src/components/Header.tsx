import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useCart } from '@/context/CartContext';

const Header = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-heritage border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-saffron p-2 rounded-lg">
              <span className="text-primary-foreground font-bold text-xl font-noto">कम</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-noto text-primary">KalaMitra</h1>
              <p className="text-xs text-muted-foreground">Har Haath Ko Pehchaan</p>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for crafts, artisans, regions..." 
                className="pl-10 bg-background/50"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#artisans" className="nav-link">Artisans</a>
            <a href="#categories" className="nav-link">Categories</a>
            <a href="#regions" className="nav-link">Regions</a>
            <a href="#stories" className="nav-link">Stories</a>
            <a href="/blog" className="nav-link">Blog</a>
            <a href="/login" className="nav-link">Login</a>
            <a href="/signup" className="nav-link">Sign Up</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  <Globe className="h-4 w-4 mr-1" />
                  <span className="text-sm">EN</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिंदी</DropdownMenuItem>
                <DropdownMenuItem>বাংলা</DropdownMenuItem>
                <DropdownMenuItem>తెలుగు</DropdownMenuItem>
                <DropdownMenuItem>தமிழ்</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative" as="a" href="/cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search crafts, artisans..." 
                  className="pl-10"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-3">
              <a href="#artisans" className="block py-2 nav-link">Artisans</a>
              <a href="#categories" className="block py-2 nav-link">Categories</a>
              <a href="#regions" className="block py-2 nav-link">Regions</a>
              <a href="#stories" className="block py-2 nav-link">Stories</a>
              <a href="/blog" className="block py-2 nav-link">Blog</a>
              <a href="/login" className="block py-2 nav-link">Login</a>
              <a href="/signup" className="block py-2 nav-link">Sign Up</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
