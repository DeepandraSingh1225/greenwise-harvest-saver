
import { useState } from 'react';
import { Search, Info, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SchemeCard from '@/components/SchemeCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GovernmentSchemes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    hasDeadline: false,
    isNew: false
  });
  
  // Sample scheme data
  const allSchemes = [
    {
      title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      description: "Income support scheme providing financial benefit to small and marginal farmer families.",
      eligibility: [
        "Small and marginal farmers with landholding up to 2 hectares",
        "All landholding farmer families with total cultivable holding up to 2 hectares"
      ],
      benefits: "Financial benefit of Rs 6,000 per year in three equal installments of Rs 2,000 each, every four months.",
      department: "Ministry of Agriculture",
      url: "#",
      isNew: true
    },
    {
      title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      description: "Crop insurance scheme providing financial support to farmers in case of crop failure due to natural calamities.",
      eligibility: [
        "All farmers growing notified crops in notified areas",
        "Both loanee and non-loanee farmers are eligible"
      ],
      benefits: "Insurance coverage and financial support to farmers in the event of crop failure due to natural calamities, pests & diseases.",
      department: "Ministry of Agriculture",
      deadline: "30 July 2023",
      url: "#"
    },
    {
      title: "Kisan Credit Card (KCC) Scheme",
      description: "Provides credit to farmers for their agricultural needs including crop production, post-harvest expenses, etc.",
      eligibility: [
        "All farmers - individual/joint borrowers who are owner cultivators",
        "Tenant farmers, oral lessees & share croppers",
        "SHGs or joint liability groups of farmers"
      ],
      benefits: "Credit with simplified procedures to meet the production needs of farmers. 7% interest subvention for loans up to Rs 3 lakh.",
      department: "Ministry of Finance",
      url: "#"
    },
    {
      title: "National Mission for Sustainable Agriculture (NMSA)",
      description: "Promotes sustainable agriculture through climate change adaptation measures.",
      eligibility: [
        "All categories of farmers in the mission areas",
        "Priority to small, marginal, women farmers and SC/ST farmers"
      ],
      benefits: "Support for soil health management, water use efficiency, pest management, etc. Financial assistance based on specific components.",
      department: "Ministry of Agriculture",
      deadline: "15 August 2023",
      url: "#",
      isNew: true
    },
    {
      title: "Micro Irrigation Fund (MIF)",
      description: "Created to expand coverage of micro irrigation systems by providing financial assistance.",
      eligibility: [
        "State governments",
        "State level implementing agencies"
      ],
      benefits: "Funds at concessional rate to states to mobilize resources for micro irrigation. Ultimate beneficiaries are farmers who get subsidized micro irrigation systems.",
      department: "Ministry of Water Resources",
      url: "#"
    },
    {
      title: "Sub-Mission on Agricultural Mechanization (SMAM)",
      description: "Promotes farm mechanization to increase productivity and reduce drudgery.",
      eligibility: [
        "Individual farmers",
        "Group of farmers",
        "Co-operatives, FPOs"
      ],
      benefits: "Financial assistance for procurement of agricultural machinery and equipment. Subsidy ranging from 25-50% based on category and equipment.",
      department: "Ministry of Agriculture",
      deadline: "31 October 2023",
      url: "#"
    }
  ];
  
  // Filter schemes based on search and filters
  const filteredSchemes = allSchemes.filter(scheme => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Department filter
    const matchesDepartment = filters.department === '' || 
      scheme.department === filters.department;
    
    // Deadline filter
    const matchesDeadline = !filters.hasDeadline || 
      (scheme.deadline !== undefined);
    
    // New scheme filter
    const matchesIsNew = !filters.isNew || 
      (scheme.isNew === true);
    
    return matchesSearch && matchesDepartment && matchesDeadline && matchesIsNew;
  });

  const departments = [...new Set(allSchemes.map(scheme => scheme.department))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold animate-fade-in">Government Schemes</h1>
              <p className="mt-4 text-muted-foreground text-lg animate-fade-in opacity-0" style={{animationDelay: '0.1s'}}>
                Explore available government schemes and subsidies designed to support 
                farmers and agricultural operations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Search and Filter */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      type="text"
                      placeholder="Search schemes by name or keyword..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Select 
                    value={filters.department} 
                    onValueChange={(value) => setFilters({...filters, department: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Departments</SelectItem>
                      {departments.map((department, index) => (
                        <SelectItem key={index} value={department}>
                          {department}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasDeadline" 
                      checked={filters.hasDeadline}
                      onCheckedChange={(checked) => setFilters({...filters, hasDeadline: checked as boolean})}
                    />
                    <Label htmlFor="hasDeadline">Has Deadline</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="isNew" 
                      checked={filters.isNew}
                      onCheckedChange={(checked) => setFilters({...filters, isNew: checked as boolean})}
                    />
                    <Label htmlFor="isNew">New Schemes</Label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results info */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredSchemes.length} out of {allSchemes.length} schemes
              </p>
              
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Clear Filters
              </Button>
            </div>
            
            {/* Schemes Grid */}
            {filteredSchemes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                {filteredSchemes.map((scheme, index) => (
                  <div key={index} className="animate-fade-in opacity-0">
                    <SchemeCard
                      title={scheme.title}
                      description={scheme.description}
                      eligibility={scheme.eligibility}
                      benefits={scheme.benefits}
                      department={scheme.department}
                      deadline={scheme.deadline}
                      url={scheme.url}
                      isNew={scheme.isNew}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Info className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-xl font-semibold">No schemes found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* How to Apply */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">How to Apply for Schemes</h2>
              <p className="mt-4 text-muted-foreground">
                Follow these simple steps to successfully apply for any government scheme.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Check Eligibility",
                  description: "Review the eligibility criteria carefully to ensure you qualify for the scheme."
                },
                {
                  step: "02",
                  title: "Gather Documents",
                  description: "Collect all required documents such as identity proof, land records, bank details, etc."
                },
                {
                  step: "03",
                  title: "Complete Application",
                  description: "Fill out the application form with accurate information, either online or offline."
                },
                {
                  step: "04",
                  title: "Submit & Track",
                  description: "Submit your application before the deadline and track its status regularly."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary font-semibold text-lg flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">
                Common questions about government schemes and application processes.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do I know if I'm eligible for a scheme?",
                  answer: "Each scheme has specific eligibility criteria, which are listed in the scheme details. Generally, eligibility is based on factors like land holding size, farmer category, crop type, and location."
                },
                {
                  question: "Are there schemes specifically for small and marginal farmers?",
                  answer: "Yes, many schemes like PM-KISAN are designed specifically for small and marginal farmers with landholdings up to 2 hectares. These schemes often provide financial assistance, subsidies, and other benefits."
                },
                {
                  question: "How can I apply for multiple schemes simultaneously?",
                  answer: "You can apply for multiple schemes as long as you meet the eligibility criteria for each. However, some schemes may have overlapping benefits, and there might be restrictions on availing similar benefits from different schemes."
                },
                {
                  question: "What documents are typically required for scheme applications?",
                  answer: "Common documents include identity proof (Aadhaar, voter ID), land records, bank account details, passport-sized photographs, and income/caste certificates if applicable. Specific requirements vary by scheme."
                },
                {
                  question: "How can I track my application status?",
                  answer: "Most schemes now offer online tracking through their official websites or mobile apps. You'll typically need your application reference number and some personal details to check the status."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Need Help With Applications?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our experts can guide you through the application process and help you 
              access the schemes you're eligible for.
            </p>
            
            <Button size="lg" className="mt-8 btn-hover-slide">
              Contact Our Support Team
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GovernmentSchemes;
