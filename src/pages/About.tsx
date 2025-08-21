import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                About Mazi Green Energy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Leading India's renewable energy revolution with innovative solar solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To harness the power of the sun and provide clean, sustainable energy solutions 
                    that contribute to India's energy independence while protecting our environment 
                    for future generations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become India's leading solar energy provider, setting new standards in 
                    renewable energy technology and making clean power accessible to every 
                    community across the nation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Globe className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Committed to environmental stewardship and sustainable practices
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Excellence</h3>
                  <p className="text-muted-foreground">
                    Delivering superior quality in every project and service
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Innovation</h3>
                  <p className="text-muted-foreground">
                    Pioneering cutting-edge solar technology solutions
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Community</h3>
                  <p className="text-muted-foreground">
                    Building stronger communities through clean energy access
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals driving India's solar energy transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold mb-2">Sai Shankar</h3>
                  <p className="text-primary mb-4">Chief Executive Officer</p>
                  <p className="text-muted-foreground">
                    20+ years in renewable energy sector with expertise in large-scale solar projects
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold mb-2">SPVS</h3>
                  <p className="text-primary mb-4">Chief Technology Officer</p>
                  <p className="text-muted-foreground">
                    Expert in solar technology innovation with multiple patents in photovoltaic systems
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold mb-2">Kumar V</h3>
                  <p className="text-primary mb-4">Chief Operations Officer</p>
                  <p className="text-muted-foreground">
                    Specialized in project management and operational excellence for renewable energy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;