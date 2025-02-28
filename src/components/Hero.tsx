
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-primary/5"></div>
        <div className="absolute top-1/4 left-0 w-40 h-40 rounded-full bg-green-100/30"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-primary/10 animate-pulse-light"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Revolutionizing <span className="text-primary">Agricultural</span> Supply Chain
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Reducing post-harvest losses through innovative storage, transportation, and processing solutions while empowering farmers with AI-driven insights.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="group btn-hover-slide" 
                onClick={() => navigate('/post-harvest')}
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/yield-prediction')}
              >
                Try Yield Prediction
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-transparent rounded-2xl transform rotate-3 scale-105"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80" 
                alt="Agricultural landscape" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-animation">
          {[
            { label: "Reduced Waste", value: "40%" },
            { label: "Farmer Income", value: "+25%" },
            { label: "Supply Chain Efficiency", value: "60%" },
            { label: "Government Schemes", value: "100+" }
          ].map((stat, index) => (
            <div key={index} className="animate-slide-up opacity-0">
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
