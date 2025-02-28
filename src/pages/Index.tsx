
import { Package, Truck, BarChart, Database, ArrowRight, Zap, Shield, BarChart2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-green-50/30">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-green-50/50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Our Solutions</span>
              <h2 className="text-3xl font-bold mt-4">Comprehensive Agricultural Solutions</h2>
              <p className="mt-4 text-muted-foreground">
                Integrating cutting-edge technology across the agricultural supply chain to minimize waste and maximize value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
              {features.map((feature, index) => (
                <div key={index} className="animate-fade-in opacity-0 transform hover:scale-105 transition-all duration-300">
                  <FeatureCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className="border-t-4 border-primary h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Post-Harvest Solutions */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-slide-right opacity-0">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Innovative Solutions</span>
                <h2 className="text-3xl font-bold mt-4">Post-Harvest Innovations</h2>
                <p className="mt-4 text-muted-foreground">
                  Our technology integrates throughout the agricultural supply chain, 
                  from harvesting to market delivery, ensuring minimal waste and maximum quality.
                </p>
                
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      icon: Shield,
                      text: "Smart storage facilities with IoT-based monitoring",
                    },
                    {
                      icon: Truck,
                      text: "Cold chain transportation with real-time tracking",
                    },
                    {
                      icon: Zap,
                      text: "Processing techniques that extend shelf life",
                    },
                    {
                      icon: Package,
                      text: "Packaging solutions for better preservation",
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center">
                        <item.icon size={14} />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="mt-8 group shadow-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  onClick={() => navigate('/post-harvest')}
                >
                  Explore All Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div className="order-1 lg:order-2 animate-scale-in opacity-0">
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Technology Solution" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Prediction Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50/30 to-green-50/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in opacity-0">
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="AI Prediction" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>
              
              <div className="animate-slide-right opacity-0">
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">AI-Powered</span>
                <h2 className="text-3xl font-bold mt-4">Crop Yield Prediction</h2>
                <p className="mt-4 text-muted-foreground">
                  Our advanced machine learning algorithms analyze historical data, weather patterns, 
                  and soil conditions to provide accurate yield forecasts.
                </p>
                
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      icon: BarChart2,
                      text: "Predict yields with up to 90% accuracy",
                    },
                    {
                      icon: Database,
                      text: "Plan harvesting and resource allocation efficiently",
                    },
                    {
                      icon: Zap,
                      text: "Optimize input usage based on predictions",
                    },
                    {
                      icon: Shield,
                      text: "Compare forecasts with regional averages",
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center">
                        <item.icon size={14} />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="mt-8 group shadow-md bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                  onClick={() => navigate('/yield-prediction')}
                >
                  Try Prediction Tool
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Government Support</span>
                <h2 className="text-3xl font-bold mt-4">Access to Schemes & Subsidies</h2>
                <p className="mt-4 text-muted-foreground">
                  Stay updated with all relevant agricultural schemes and subsidies 
                  offered by the government to support your farming operations.
                </p>
                
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      icon: Database,
                      text: "Comprehensive database of 100+ government schemes",
                    },
                    {
                      icon: Shield,
                      text: "Eligibility checker for quick assessment",
                    },
                    {
                      icon: Package,
                      text: "Step-by-step application guidance",
                    },
                    {
                      icon: BarChart,
                      text: "Deadline alerts and application tracking",
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 h-6 w-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
                        <item.icon size={14} />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="mt-8 group shadow-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                  onClick={() => navigate('/schemes')}
                >
                  Explore Schemes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div className="order-1 lg:order-2 animate-scale-in opacity-0">
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Government Schemes" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-100 to-blue-100 relative overflow-hidden">
          <div className="absolute -right-12 bottom-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 transform rotate-45"></div>
          <div className="absolute -left-12 top-0 w-64 h-64 bg-green-200 rounded-full opacity-20 transform rotate-45"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold">Ready to Transform Your Agricultural Operations?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Join thousands of farmers who have reduced waste, improved yields, 
              and increased profitability with our integrated solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="shadow-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">Get Started Now</Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50">Request Demo</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
