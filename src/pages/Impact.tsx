import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Users, TrendingUp, Home, Factory, Zap } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Our Environmental Impact
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Creating a sustainable future through clean solar energy
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <Leaf className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">2,800</h3>
                  <p className="text-lg text-muted-foreground mb-2">Tons of CO₂</p>
                  <p className="text-sm text-muted-foreground">Offset annually</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <Home className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">4,000</h3>
                  <p className="text-lg text-muted-foreground mb-2">Homes Powered</p>
                  <p className="text-sm text-muted-foreground">Clean energy access</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <Zap className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">3,200</h3>
                  <p className="text-lg text-muted-foreground mb-2">MWh Generated</p>
                  <p className="text-sm text-muted-foreground">Per year</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Environmental Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our solar plant contributes significantly to environmental conservation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-6 w-6 text-primary" />
                    Carbon Footprint Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Annual CO₂ offset</span>
                      <span className="font-bold text-primary">2,800 tons</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Equivalent to planting</span>
                      <span className="font-bold text-primary">67,200 trees</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cars off the road</span>
                      <span className="font-bold text-primary">600 vehicles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fuel saved annually</span>
                      <span className="font-bold text-primary">1.2M liters</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Local jobs created</span>
                      <span className="font-bold text-primary">150 positions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Skills training provided</span>
                      <span className="font-bold text-primary">300 people</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rural electrification</span>
                      <span className="font-bold text-primary">12 villages</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Economic impact</span>
                      <span className="font-bold text-primary">₹50 Cr/year</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sustainability Goals */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Sustainability Goals</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to environmental stewardship and sustainable development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">2030 Goals</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Expand to 10 MW capacity</li>
                    <li>• Offset 14,000 tons CO₂ annually</li>
                    <li>• Power 20,000 homes</li>
                    <li>• Create 500 green jobs</li>
                    <li>• Zero waste to landfill</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Factory className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Green Manufacturing</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 100% recyclable components</li>
                    <li>• Minimal water usage</li>
                    <li>• Local supply chain</li>
                    <li>• Reduced transportation emissions</li>
                    <li>• Circular economy principles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Social Responsibility</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Educational programs</li>
                    <li>• Healthcare initiatives</li>
                    <li>• Women empowerment</li>
                    <li>• Youth skill development</li>
                    <li>• Community infrastructure</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Awards & Recognition</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Recognized for excellence in renewable energy and sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Green Energy Award</h3>
                  <p className="text-sm text-muted-foreground">Ministry of New & Renewable Energy</p>
                  <p className="text-sm text-muted-foreground">2024</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Innovation Excellence</h3>
                  <p className="text-sm text-muted-foreground">CII Green Business Awards</p>
                  <p className="text-sm text-muted-foreground">2023</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Community Impact</h3>
                  <p className="text-sm text-muted-foreground">National CSR Awards</p>
                  <p className="text-sm text-muted-foreground">2023</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Factory className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Best Solar Plant</h3>
                  <p className="text-sm text-muted-foreground">Solar Power International</p>
                  <p className="text-sm text-muted-foreground">2022</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Impact;