
import { Package, Truck, BarChart, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Package,
      title: "Storage Solutions",
      description: "Advanced storage technologies to extend shelf life and reduce post-harvest losses."
    },
    {
      icon: Truck,
      title: "Transportation Systems",
      description: "Efficient transportation methods and cool chains to maintain product quality."
    },
    {
      icon: BarChart,
      title: "Yield Prediction",
      description: "AI-driven predictive models for precise crop yield forecasting and planning."
    },
    {
      icon: Database,
      title: "Government Schemes",
      description: "Comprehensive database of agricultural support schemes and subsidies."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold">Our Comprehensive Solutions</h2>
              <p className="mt-4 text-muted-foreground">
                Integrating technology across the agricultural supply chain to minimize waste and maximize value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
              {features.map((feature, index) => (
                <div key={index} className="animate-fade-in opacity-0">
                  <FeatureCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Post-Harvest Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-slide-right opacity-0">
                <h2 className="text-3xl font-bold">Innovative Post-Harvest Solutions</h2>
                <p className="mt-4 text-muted-foreground">
                  Our technology integrates throughout the agricultural supply chain, 
                  from harvesting to market delivery, ensuring minimal waste and maximum quality.
                </p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    "Smart storage facilities with IoT-based monitoring",
                    "Cold chain transportation with real-time tracking",
                    "Processing techniques that extend shelf life",
                    "Packaging solutions for better preservation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="mt-8 btn-hover-slide"
                  onClick={() => navigate('/post-harvest')}
                >
                  Explore All Solutions
                </Button>
              </div>
              
              <div className="order-1 lg:order-2 animate-scale-in opacity-0">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Technology Solution" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Prediction Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in opacity-0">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="AI Prediction" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>
              
              <div className="animate-slide-right opacity-0">
                <h2 className="text-3xl font-bold">AI-Driven Crop Yield Prediction</h2>
                <p className="mt-4 text-muted-foreground">
                  Our advanced machine learning algorithms analyze historical data, weather patterns, 
                  and soil conditions to provide accurate yield forecasts.
                </p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    "Predict yields with up to 90% accuracy",
                    "Plan harvesting and resource allocation efficiently",
                    "Optimize input usage based on predictions",
                    "Compare forecasts with regional averages"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="mt-8 btn-hover-slide"
                  onClick={() => navigate('/yield-prediction')}
                >
                  Try Prediction Tool
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Government Schemes */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-slide-right opacity-0">
                <h2 className="text-3xl font-bold">Access to Government Schemes</h2>
                <p className="mt-4 text-muted-foreground">
                  Stay updated with all relevant agricultural schemes and subsidies 
                  offered by the government to support your farming operations.
                </p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    "Comprehensive database of 100+ government schemes",
                    "Eligibility checker for quick assessment",
                    "Step-by-step application guidance",
                    "Deadline alerts and application tracking"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="mt-8 btn-hover-slide"
                  onClick={() => navigate('/schemes')}
                >
                  Explore Schemes
                </Button>
              </div>
              
              <div className="order-1 lg:order-2 animate-scale-in opacity-0">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Government Schemes" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Ready to Transform Your Agricultural Operations?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Join thousands of farmers who have reduced waste, improved yields, 
              and increased profitability with our integrated solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="btn-hover-slide">Get Started Now</Button>
              <Button variant="outline" size="lg">Request Demo</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
