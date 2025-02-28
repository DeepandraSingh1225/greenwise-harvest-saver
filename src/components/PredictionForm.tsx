
import { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowRight, ChevronDown } from 'lucide-react';

const cropTypes = [
  "Rice", "Wheat", "Maize", "Soybean", "Cotton", "Sugarcane", "Potato"
];

const soilTypes = [
  "Loamy", "Sandy", "Clay", "Silt", "Peat", "Chalky", "Alluvial"
];

const seasons = [
  "Spring", "Summer", "Monsoon", "Winter"
];

interface PredictionResult {
  expectedYield: number;
  confidence: number;
  monthlyForecast: Array<{name: string; yield: number}>;
  comparisonData: Array<{name: string; current: number; average: number}>;
}

const PredictionForm = () => {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [formValues, setFormValues] = useState({
    cropType: "",
    soilType: "",
    season: "",
    landArea: 1,
    rainfall: 50,
    temperature: 25,
    humidity: 60,
    soilMoisture: 40
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock prediction result
      const mockResult: PredictionResult = {
        expectedYield: Math.floor(Math.random() * 40) + 20,
        confidence: Math.floor(Math.random() * 15) + 75,
        monthlyForecast: [
          { name: 'Jan', yield: Math.floor(Math.random() * 10) + 5 },
          { name: 'Feb', yield: Math.floor(Math.random() * 10) + 10 },
          { name: 'Mar', yield: Math.floor(Math.random() * 10) + 15 },
          { name: 'Apr', yield: Math.floor(Math.random() * 10) + 20 },
          { name: 'May', yield: Math.floor(Math.random() * 10) + 25 },
          { name: 'Jun', yield: Math.floor(Math.random() * 10) + 30 },
        ],
        comparisonData: [
          { name: 'Quality', current: Math.floor(Math.random() * 40) + 60, average: Math.floor(Math.random() * 20) + 60 },
          { name: 'Quantity', current: Math.floor(Math.random() * 40) + 60, average: Math.floor(Math.random() * 20) + 60 },
          { name: 'Growth', current: Math.floor(Math.random() * 40) + 60, average: Math.floor(Math.random() * 20) + 60 },
          { name: 'Health', current: Math.floor(Math.random() * 40) + 60, average: Math.floor(Math.random() * 20) + 60 },
        ]
      };
      
      setPrediction(mockResult);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="shadow-md border-0">
        <CardHeader>
          <CardTitle>AI-Driven Crop Yield Prediction</CardTitle>
          <CardDescription>
            Enter your crop and environmental details to get an accurate yield prediction.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Select 
                  value={formValues.cropType} 
                  onValueChange={(value) => handleInputChange('cropType', value)}
                >
                  <SelectTrigger id="cropType" className="w-full">
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropTypes.map(crop => (
                      <SelectItem key={crop} value={crop}>
                        {crop}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type</Label>
                <Select 
                  value={formValues.soilType} 
                  onValueChange={(value) => handleInputChange('soilType', value)}
                >
                  <SelectTrigger id="soilType" className="w-full">
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    {soilTypes.map(soil => (
                      <SelectItem key={soil} value={soil}>
                        {soil}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="season">Growing Season</Label>
                <Select 
                  value={formValues.season} 
                  onValueChange={(value) => handleInputChange('season', value)}
                >
                  <SelectTrigger id="season" className="w-full">
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    {seasons.map(season => (
                      <SelectItem key={season} value={season}>
                        {season}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="landArea">Land Area (Hectares)</Label>
                <Input 
                  id="landArea" 
                  type="number" 
                  min="0.1" 
                  step="0.1" 
                  value={formValues.landArea}
                  onChange={(e) => handleInputChange('landArea', parseFloat(e.target.value))}
                />
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="rainfall">Rainfall (mm)</Label>
                  <span className="text-sm text-muted-foreground">{formValues.rainfall} mm</span>
                </div>
                <Slider 
                  id="rainfall"
                  min={0}
                  max={200}
                  step={1}
                  value={[formValues.rainfall]}
                  onValueChange={(value) => handleInputChange('rainfall', value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="temperature">Temperature (°C)</Label>
                  <span className="text-sm text-muted-foreground">{formValues.temperature} °C</span>
                </div>
                <Slider 
                  id="temperature"
                  min={0}
                  max={50}
                  step={1}
                  value={[formValues.temperature]}
                  onValueChange={(value) => handleInputChange('temperature', value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="humidity">Humidity (%)</Label>
                  <span className="text-sm text-muted-foreground">{formValues.humidity}%</span>
                </div>
                <Slider 
                  id="humidity"
                  min={0}
                  max={100}
                  step={1}
                  value={[formValues.humidity]}
                  onValueChange={(value) => handleInputChange('humidity', value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="soilMoisture">Soil Moisture (%)</Label>
                  <span className="text-sm text-muted-foreground">{formValues.soilMoisture}%</span>
                </div>
                <Slider 
                  id="soilMoisture"
                  min={0}
                  max={100}
                  step={1}
                  value={[formValues.soilMoisture]}
                  onValueChange={(value) => handleInputChange('soilMoisture', value[0])}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleSubmit} disabled={loading} className="group">
            {loading ? 'Processing...' : 'Generate Prediction'}
            {!loading && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
          </Button>
        </CardFooter>
      </Card>

      {prediction && (
        <Card className="mt-8 shadow-md border-0 animate-fade-in">
          <CardHeader>
            <CardTitle>Yield Prediction Results</CardTitle>
            <CardDescription>
              Based on your inputs, here's our AI-driven prediction for your crop.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 text-center border border-green-100">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Expected Yield</h3>
                <p className="text-4xl font-bold text-primary">{prediction.expectedYield} q/ha</p>
                <p className="text-sm text-muted-foreground mt-1">Quintal per Hectare</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 text-center border border-green-100">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Prediction Confidence</h3>
                <p className="text-4xl font-bold text-primary">{prediction.confidence}%</p>
                <p className="text-sm text-muted-foreground mt-1">Based on historical data</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-medium mb-4">Monthly Yield Forecast</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={prediction.monthlyForecast}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="yield" 
                      name="Yield (q/ha)"
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-medium mb-4">Comparison with Average</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={prediction.comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="current" name="Your Prediction" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="average" name="Regional Average" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PredictionForm;
