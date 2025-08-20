import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Gallery() {
  const galleryImages = [
    {
      id: 1,
      title: "Solar Panel Installation",
      category: "Construction",
      description: "Installation of high-efficiency monocrystalline solar panels"
    },
    {
      id: 2,
      title: "Inverter Station",
      category: "Technology",
      description: "Central inverter station with smart grid integration"
    },
    {
      id: 3,
      title: "Aerial Plant View",
      category: "Overview",
      description: "Complete aerial view of the 2 MW solar facility"
    },
    {
      id: 4,
      title: "Control Room",
      category: "Operations",
      description: "24/7 monitoring and control center"
    },
    {
      id: 5,
      title: "Maintenance Team",
      category: "Operations",
      description: "Expert technicians performing routine maintenance"
    },
    {
      id: 6,
      title: "Community Engagement",
      category: "Impact",
      description: "Local community benefiting from clean energy"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Project Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our solar plant through images showcasing construction, technology, and community impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={image.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Placeholder for actual images */}
                  <div className={`aspect-video bg-gradient-to-br ${
                    index % 4 === 0 ? 'from-primary/20 to-accent/20' :
                    index % 4 === 1 ? 'from-accent/20 to-primary/20' :
                    index % 4 === 2 ? 'from-primary/30 to-accent/10' :
                    'from-accent/30 to-primary/10'
                  } flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">{image.id}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Image Coming Soon</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More project photos and videos will be added as construction progresses
          </p>
        </div>
      </div>
    </section>
  );
}