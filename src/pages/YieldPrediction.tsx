
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PredictionForm from '@/components/PredictionForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const YieldPrediction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold animate-fade-in">AI Crop Yield Prediction</h1>
              <p className="mt-4 text-muted-foreground text-lg animate-fade-in opacity-0" style={{animationDelay: '0.1s'}}>
                Harness the power of machine learning to forecast crop yields with precision, 
                helping you make informed decisions for your farm.
              </p>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block"></div>
                
                {/* Steps */}
                <div className="space-y-12">
                  {[
                    {
                      number: "01",
                      title: "Input Your Data",
                      description: "Enter details about your crop, land area, soil type, and environmental conditions."
                    },
                    {
                      number: "02",
                      title: "AI Analysis",
                      description: "Our machine learning models analyze your inputs against historical data and weather patterns."
                    },
                    {
                      number: "03",
                      title: "Receive Predictions",
                      description: "Get accurate yield predictions with confidence levels and monthly forecasts."
                    },
                    {
                      number: "04",
                      title: "Make Informed Decisions",
                      description: "Use the predictions to plan harvesting, storage, transportation, and marketing."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex stagger-animation">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold mr-8 relative z-10 animate-fade-in opacity-0">
                        {step.number}
                      </div>
                      <div className="pt-1 animate-slide-right opacity-0">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Prediction Tool */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">Try Our Prediction Tool</h2>
              <p className="mt-4 text-muted-foreground">
                Get accurate crop yield forecasts based on your specific farming conditions 
                and historical data from your region.
              </p>
            </div>
            
            <PredictionForm />
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">Benefits of AI Prediction</h2>
              <p className="mt-4 text-muted-foreground">
                Our advanced prediction tool offers multiple advantages to help you 
                optimize your farming operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Precise Planning",
                  description: "Accurately forecast yields to plan harvesting schedules, labor requirements, and equipment needs.",
                  icon: "📊"
                },
                {
                  title: "Resource Optimization",
                  description: "Optimize the use of water, fertilizers, and other inputs based on expected yield returns.",
                  icon: "💧"
                },
                {
                  title: "Risk Management",
                  description: "Identify potential low-yield scenarios early to implement mitigation strategies.",
                  icon: "🛡️"
                },
                {
                  title: "Market Negotiation",
                  description: "Enter price negotiations with buyers armed with reliable production forecasts.",
                  icon: "💼"
                },
                {
                  title: "Storage Planning",
                  description: "Plan your storage requirements based on accurate yield expectations.",
                  icon: "🏢"
                },
                {
                  title: "Financial Planning",
                  description: "Create more accurate financial projections for loans, investors, and operational planning.",
                  icon: "💰"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">What Farmers Say</h2>
              <p className="mt-4 text-muted-foreground">
                Hear from farmers who are using our AI prediction tools to transform their operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "The yield predictions have been remarkably accurate, allowing me to negotiate better contracts with buyers before harvest even begins.",
                  name: "Rajesh Kumar",
                  role: "Wheat Farmer, Punjab"
                },
                {
                  quote: "I've been able to reduce my water usage by 30% by targeting irrigation based on the yield predictions and soil moisture data.",
                  name: "Meera Patel",
                  role: "Vegetable Grower, Gujarat"
                },
                {
                  quote: "The monthly forecast helps me plan my harvesting labor needs with precision, saving significant costs during peak season.",
                  name: "Sunil Reddy",
                  role: "Rice Farmer, Andhra Pradesh"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl text-gray-300 mb-4">"</div>
                  <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Ready to Optimize Your Harvest?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Try our AI prediction tool today and make data-driven decisions for your farm's success.
            </p>
            
            <Button size="lg" className="mt-8 btn-hover-slide group">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default YieldPrediction;
