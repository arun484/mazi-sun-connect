import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sun, Zap, Home, Database, Cog, ArrowRight } from 'lucide-react';

export function SolarDiagram() {
  const components = [
    {
      id: 'solar-panels',
      title: 'Solar Panels',
      icon: Sun,
      description: 'High-efficiency monocrystalline silicon panels convert sunlight into DC electricity',
      specs: ['Efficiency: 22%+', 'Lifespan: 25+ years', 'Warranty: 20 years']
    },
    {
      id: 'inverters',
      title: 'Inverters',
      icon: Zap,
      description: 'Convert DC electricity from panels into AC electricity for grid connection',
      specs: ['Type: String Inverters', 'Efficiency: 98%+', 'MPPT Technology']
    },
    {
      id: 'monitoring',
      title: 'Monitoring System',
      icon: Database,
      description: 'Real-time performance monitoring and data analytics',
      specs: ['24/7 Monitoring', 'Remote Access', 'Predictive Maintenance']
    },
    {
      id: 'grid',
      title: 'Grid Connection',
      icon: Cog,
      description: 'Seamless integration with local electricity grid for distribution',
      specs: ['Grid Synchronization', 'Power Quality Control', 'Safety Shutoff']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Science of Sunshine: How We Generate Clean Power
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our 2 MW plant is built with the highest quality components and advanced technology 
            to ensure maximum efficiency and reliability.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {components.map((component, index) => (
              <div key={component.id} className="flex flex-col items-center">
                <Card className="w-full max-w-xs hover:shadow-lg transition-all duration-300 border-primary/20">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                      <component.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      {component.description}
                    </p>
                    <div className="space-y-1">
                      {component.specs.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs mr-1 mb-1">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {index < components.length - 1 && (
                  <div className="hidden lg:flex items-center mt-8">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Sun className="h-6 w-6 text-primary mr-2" />
                Solar Panels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Technology:</strong> Monocrystalline Silicon</p>
                <p><strong>Total Capacity:</strong> 2 MW DC</p>
                <p><strong>Panel Count:</strong> ~5,000 panels</p>
                <p><strong>Efficiency:</strong> 22%+ under STC</p>
                <p><strong>Degradation:</strong> &lt;0.5% annually</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Zap className="h-6 w-6 text-primary mr-2" />
                Power Conversion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Inverter Type:</strong> String Inverters</p>
                <p><strong>AC Output:</strong> 2 MW AC</p>
                <p><strong>Efficiency:</strong> 98.5%</p>
                <p><strong>Grid Voltage:</strong> 33 kV</p>
                <p><strong>Power Factor:</strong> 0.95 leading/lagging</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Home className="h-6 w-6 text-primary mr-2" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Annual Generation:</strong> 4,380 MWh</p>
                <p><strong>Capacity Factor:</strong> 25%</p>
                <p><strong>Homes Powered:</strong> ~4,000</p>
                <p><strong>Uptime:</strong> 99.5%+</p>
                <p><strong>O&M:</strong> Predictive Maintenance</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}