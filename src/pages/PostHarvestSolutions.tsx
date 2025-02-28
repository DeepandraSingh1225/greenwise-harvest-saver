
import { useState } from 'react';
import { Package, Truck, Settings, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import FeatureCard from '@/components/FeatureCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PostHarvestSolutions = () => {
  const [selectedTab, setSelectedTab] = useState("storage");
  
  const solutions = {
    storage: [
      {
        icon: Package,
        title: "Controlled Atmosphere Storage",
        description: "Maintain optimal gas composition, temperature, and humidity levels to extend product shelf life."
      },
      {
        icon: Package,
        title: "Cold Chain Management",
        description: "End-to-end cold storage solutions from harvest to retail to maintain product freshness."
      },
      {
        icon: Package,
        title: "IoT-Enabled Monitoring",
        description: "Real-time monitoring of storage conditions with alerts for any deviations from optimal levels."
      },
      {
        icon: Package,
        title: "Modified Atmosphere Packaging",
        description: "Specialized packaging that alters the composition of air surrounding the product to slow respiration."
      }
    ],
    transportation: [
      {
        icon: Truck,
        title: "Temperature-Controlled Vehicles",
        description: "Specialized transportation with precise temperature control for sensitive produce."
      },
      {
        icon: Truck,
        title: "Real-time Tracking",
        description: "GPS and IoT-based tracking of shipments with environmental condition monitoring."
      },
      {
        icon: Truck,
        title: "Optimized Routing",
        description: "AI-based route optimization to reduce transit time and maintain product quality."
      },
      {
        icon: Truck,
        title: "Blockchain Traceability",
        description: "Secure, immutable records of the entire transportation journey for complete transparency."
      }
    ],
    processing: [
      {
        icon: Settings,
        title: "Minimal Processing Techniques",
        description: "Methods that maintain nutritional value while extending shelf life with minimal intervention."
      },
      {
        icon: Settings,
        title: "Value-Added Processing",
        description: "Transform raw agricultural products into higher-value processed goods to reduce waste."
      },
      {
        icon: Settings,
        title: "Quality Sorting Automation",
        description: "Computer vision systems for accurate grading and sorting to maximize value."
      },
      {
        icon: Settings,
        title: "Preservation Technology",
        description: "Advanced techniques like freeze-drying, irradiation, and high-pressure processing."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold animate-fade-in">Post-Harvest Solutions</h1>
              <p className="mt-4 text-muted-foreground text-lg animate-fade-in opacity-0" style={{animationDelay: '0.1s'}}>
                Comprehensive technologies and approaches to reduce losses and enhance 
                quality throughout the post-harvest value chain.
              </p>
            </div>
          </div>
        </section>
        
        {/* Solutions Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Tabs 
              defaultValue="storage" 
              value={selectedTab} 
              onValueChange={setSelectedTab}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="storage">Storage</TabsTrigger>
                  <TabsTrigger value="transportation">Transportation</TabsTrigger>
                  <TabsTrigger value="processing">Processing</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="storage" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
                  {solutions.storage.map((solution, index) => (
                    <div key={index} className="animate-scale-in opacity-0">
                      <FeatureCard 
                        icon={solution.icon}
                        title={solution.title}
                        description={solution.description}
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 lg:mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold">Smart Storage Solutions</h3>
                      <p className="mt-4 text-muted-foreground">
                        Our smart storage solutions integrate IoT sensors, climate control systems, and 
                        predictive analytics to maintain optimal conditions for your harvested products.
                      </p>
                      
                      <ul className="mt-6 space-y-3">
                        {[
                          "Reduces product loss by up to 40%",
                          "Extends shelf life by 2-3x compared to traditional storage",
                          "Minimizes energy consumption through smart climate control",
                          "Provides real-time alerts and condition reports"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="mt-8 group">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                        alt="Smart Storage" 
                        className="w-full h-auto object-cover shadow-md"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="transportation" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
                  {solutions.transportation.map((solution, index) => (
                    <div key={index} className="animate-scale-in opacity-0">
                      <FeatureCard 
                        icon={solution.icon}
                        title={solution.title}
                        description={solution.description}
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 lg:mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <h3 className="text-2xl font-bold">Smart Logistics Network</h3>
                      <p className="mt-4 text-muted-foreground">
                        Our integrated logistics platform connects farmers with temperature-controlled 
                        transportation services, providing end-to-end visibility and control.
                      </p>
                      
                      <ul className="mt-6 space-y-3">
                        {[
                          "Reduces transit losses by up to 35%",
                          "Ensures temperature integrity throughout the journey",
                          "Optimizes routes to reduce fuel consumption and transit time",
                          "Provides real-time location and condition tracking"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="mt-8 group">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                    
                    <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                        alt="Smart Logistics" 
                        className="w-full h-auto object-cover shadow-md"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="processing" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
                  {solutions.processing.map((solution, index) => (
                    <div key={index} className="animate-scale-in opacity-0">
                      <FeatureCard 
                        icon={solution.icon}
                        title={solution.title}
                        description={solution.description}
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 lg:mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold">Value-Added Processing</h3>
                      <p className="mt-4 text-muted-foreground">
                        Transform surplus or imperfect produce into high-value processed goods, 
                        reducing waste while creating additional revenue streams.
                      </p>
                      
                      <ul className="mt-6 space-y-3">
                        {[
                          "Increases farmer income by up to 25%",
                          "Reduces wastage of imperfect but nutritious produce",
                          "Creates off-season availability of seasonal products",
                          "Enables access to new markets and customer segments"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="mt-8 group">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                        alt="Value-Added Processing" 
                        className="w-full h-auto object-cover shadow-md"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">Success Stories</h2>
              <p className="mt-4 text-muted-foreground">
                See how farmers and agricultural businesses have transformed their 
                operations using our post-harvest solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Reducing Potato Losses by 45%",
                  description: "A cooperative of potato farmers implemented our smart storage solution and saw post-harvest losses drop from 30% to just 5%.",
                  image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
                },
                {
                  title: "Extending Tomato Shelf Life",
                  description: "Using our modified atmosphere packaging, a tomato producer increased product shelf life from 7 days to 21 days.",
                  image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
                },
                {
                  title: "Mango Export Success",
                  description: "Our integrated cold chain solution enabled a mango grower cooperative to successfully export to premium markets across Europe.",
                  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                }
              ].map((study, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground">{study.description}</p>
                    <Button variant="ghost" className="mt-4 p-0 hover:bg-transparent hover:text-primary">
                      Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Ready to Reduce Your Post-Harvest Losses?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our experts will analyze your specific challenges and recommend the most effective solutions for your operations.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="btn-hover-slide">Request Consultation</Button>
              <Button variant="outline" size="lg">Download Brochure</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PostHarvestSolutions;
