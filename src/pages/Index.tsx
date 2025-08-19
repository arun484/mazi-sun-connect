import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Vision } from '@/components/sections/Vision';
import { EnvironmentalImpact } from '@/components/sections/EnvironmentalImpact';
import { SolarDiagram } from '@/components/sections/SolarDiagram';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Vision />
        <SolarDiagram />
        <EnvironmentalImpact />
      </main>
    </div>
  );
};

export default Index;
