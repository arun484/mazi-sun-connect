import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Leaf, Droplets, TreePine, Wind } from 'lucide-react';

export function EnvironmentalImpact() {
  const impactStats = [
    {
      icon: Leaf,
      title: 'CO₂ Emissions Reduced',
      value: '2,800',
      unit: 'tons annually',
      description: 'Equivalent to removing 600 cars from the road',
      progress: 85,
      color: 'text-green-600'
    },
    {
      icon: Droplets,
      title: 'Water Saved',
      value: '1.2M',
      unit: 'gallons annually',
      description: 'Compared to traditional power generation',
      progress: 78,
      color: 'text-blue-600'
    },
    {
      icon: TreePine,
      title: 'Trees Equivalent',
      value: '46,000',
      unit: 'tree seedlings',
      description: 'Carbon absorption equivalent over 10 years',
      progress: 92,
      color: 'text-green-700'
    },
    {
      icon: Wind,
      title: 'Clean Energy',
      value: '4,380',
      unit: 'MWh annually',
      description: 'Renewable energy generated per year',
      progress: 88,
      color: 'text-sky-600'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Our Environmental Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Making a measurable difference in the fight against climate change through clean, renewable solar energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <Progress value={stat.progress} className="w-16 h-2" />
                </div>
                <CardTitle className="text-lg">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground ml-1">{stat.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Sustainable Development Goals</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-card rounded-lg border border-primary/20">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Affordable and Clean Energy</h4>
                  <p className="text-sm text-muted-foreground">SDG 7: Ensuring access to sustainable energy</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-card rounded-lg border border-primary/20">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Climate Action</h4>
                  <p className="text-sm text-muted-foreground">SDG 13: Taking urgent action on climate change</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-card rounded-lg border border-primary/20">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sustainable Communities</h4>
                  <p className="text-sm text-muted-foreground">SDG 11: Making cities inclusive and sustainable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Annual Impact Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Households Powered</span>
                <span className="font-semibold text-lg">~4,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Carbon Footprint Reduction</span>
                <span className="font-semibold text-lg text-green-600">-70%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Energy Efficiency</span>
                <span className="font-semibold text-lg">94.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Local Jobs Created</span>
                <span className="font-semibold text-lg">150+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}