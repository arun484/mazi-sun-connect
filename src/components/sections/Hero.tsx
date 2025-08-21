import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Leaf, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powering a Brighter Tomorrow: 
            <span className="block text-primary">Mazi Green Energy</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            A 2 MW Solar Initiative in India
          </p>
          
          <p className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto">
            Harnessing the sun's energy to provide clean, sustainable power and drive India's renewable energy revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/impact">
                Learn More About Our Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-black hover:bg-white hover:text-foreground">
              <Link to="/contact">Connect with Us</Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Zap className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2 MW Capacity</h3>
              <p className="text-slate-400">Generating enough electricity to power ~4,000 homes.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Leaf className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Clean Energy</h3>
              <p className="text-slate-400">Offsetting ~2,800 tons of carbon emissions annually.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Globe className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Made in India</h3>
              <p className="text-slate-400">Supporting local manufacturing and the "Make in India" initiative.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sustainable Future</h3>
              <p className="text-slate-400">Contributing to a cleaner, greener India for generations to come.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}