import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Battery, Cpu, Zap, Sun, Shield, Gauge } from 'lucide-react';

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Advanced Solar Technology
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Cutting-edge photovoltaic systems designed for maximum efficiency
              </p>
            </div>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <Tabs defaultValue="panels" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="panels">Solar Panels</TabsTrigger>
                <TabsTrigger value="inverters">Inverters</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              </TabsList>
              
              <TabsContent value="panels" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="h-6 w-6 text-primary" />
                      High-Efficiency Photovoltaic Panels
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Monocrystalline Silicon Technology</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Efficiency rating: 22.5% module efficiency</li>
                          <li>• Premium anti-reflective coating</li>
                          <li>• Excellent low-light performance</li>
                          <li>• 25-year performance warranty</li>
                          <li>• Temperature coefficient: -0.35%/°C</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Durability Features</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• IP68 rated junction boxes</li>
                          <li>• Corrosion-resistant aluminum frames</li>
                          <li>• Wind load: up to 2400 Pa</li>
                          <li>• Snow load: up to 5400 Pa</li>
                          <li>• Hail impact resistant up to 25mm</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="inverters" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-primary" />
                      String Inverter Technology
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Advanced Power Conversion</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Maximum efficiency: 98.4%</li>
                          <li>• Wide MPPT voltage range</li>
                          <li>• Integrated arc fault protection</li>
                          <li>• Built-in rapid shutdown</li>
                          <li>• 12-year standard warranty</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Smart Grid Integration</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Grid-tie functionality</li>
                          <li>• Power factor correction</li>
                          <li>• Voltage and frequency regulation</li>
                          <li>• Remote monitoring capability</li>
                          <li>• Reactive power control</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="monitoring" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gauge className="h-6 w-6 text-primary" />
                      Real-Time Monitoring System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Performance Tracking</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Real-time power generation data</li>
                          <li>• Historical performance analytics</li>
                          <li>• Weather condition correlation</li>
                          <li>• Predictive maintenance alerts</li>
                          <li>• Mobile app integration</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">System Health Monitoring</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Individual panel monitoring</li>
                          <li>• Inverter performance tracking</li>
                          <li>• Fault detection and diagnostics</li>
                          <li>• Automated reporting system</li>
                          <li>• 24/7 technical support</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Technical Specifications</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Detailed technical specifications of our 2 MW solar plant
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Battery className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Power Output</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Capacity:</span>
                      <span className="font-semibold">2 MW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual Generation:</span>
                      <span className="font-semibold">3,200 MWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily Average:</span>
                      <span className="font-semibold">8,767 kWh</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">System Components</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Solar Panels:</span>
                      <span className="font-semibold">6,667 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Inverters:</span>
                      <span className="font-semibold">40 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Land Area:</span>
                      <span className="font-semibold">8 acres</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Safety & Compliance</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IEC Standards:</span>
                      <span className="font-semibold">Certified</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Grid Code:</span>
                      <span className="font-semibold">Compliant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Safety Rating:</span>
                      <span className="font-semibold">Class I</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;