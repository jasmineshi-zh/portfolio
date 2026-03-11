import { Hero } from '../components/Hero';
import { SelectedWork } from '../components/SelectedWork';
import { About } from '../components/About';
import { CurrentlySection } from '../components/CurrentlySection';
import { ProductPrinciples } from '../components/ProductPrinciples';
import { Contact } from '../components/Contact';
import { FloatingShapes } from '../components/FloatingShapes';
import { Navigation } from '../components/Navigation';

export function HomePage() {
  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <Navigation />
      <Hero />
      <SelectedWork />
      <About />
      <CurrentlySection />
      <ProductPrinciples />
      <Contact />
    </div>
  );
}
