import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export function Vision() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision: A Sustainable Future, Powered by the Sun</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Mazi Green Energy is a 2 MW solar power plant located in India. We are a testament to the power of renewable energy 
            and a significant step towards India's ambitious clean energy goals. Our journey began with a simple belief: 
            that a sustainable future is not just a possibility, but a necessity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg mb-6">
              Our state-of-the-art facility uses cutting-edge photovoltaic technology to convert sunlight directly into electricity. 
              We are proud to be a part of India's vibrant renewable energy sector, contributing to the country's energy security 
              and environmental sustainability.
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-primary">Our Mission:</p>
              <p className="text-muted-foreground">
                To generate reliable, clean power while fostering a deeper understanding and adoption of renewable energy technologies.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be a leading force in India's renewable energy transition, creating a cleaner, 
                  healthier planet for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To harness solar energy efficiently and sustainably while educating communities 
                  about the benefits of renewable energy adoption.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Values</h3>
                </div>
                <p className="text-muted-foreground">
                  Sustainability, innovation, community engagement, and environmental stewardship 
                  guide everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}