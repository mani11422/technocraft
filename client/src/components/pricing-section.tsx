import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Wrench, Server, Globe, PenTool } from "lucide-react";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const websitePackages = [
    {
      title: "Landing Page",
      price: "₹8,000",
      features: ["One scrollable page", "Lead capture form", "Mobile optimized", "Fast loading templates", "Basic SEO setup"],
      popular: false
    },
    {
      title: "Portfolio Website",
      price: "₹11,000",
      features: ["3-7 custom pages", "Professional gallery", "Testimonials section", "Contact form", "Responsive design"],
      popular: false
    },
    {
      title: "Business Website",
      price: "₹14,000",
      features: ["5-10 pages", "Premium theme", "SEO optimization", "Analytics setup", "Security & live chat"],
      popular: true
    },
    {
      title: "E-Commerce Website",
      price: "₹21,000",
      features: ["Up to 50 products", "Payment gateway", "Order management", "Basic inventory", "SSL security"],
      popular: false
    },
    {
      title: "Custom Website",
      price: "₹61,000",
      features: ["Advanced custom design", "Admin dashboard", "Dynamic content", "API integrations", "Custom features"],
      popular: false
    }
  ];

  const seoPackages = [
    {
      title: "Basic SEO Setup",
      subtitle: "One-time optimization",
      price: "₹3,500",
      features: ["Keyword research", "On-page SEO optimization", "Google Search Console setup", "Basic local SEO for Visakhapatnam"],
      popular: false
    },
    {
      title: "Advanced SEO",
      subtitle: "Monthly management",
      price: "₹7,500/mo",
      features: ["On-page + off-page SEO", "Monthly reporting", "Keyword ranking tracking", "Competitor analysis", "Local SEO optimization"],
      popular: true
    }
  ];

  const socialMediaPackages = [
    {
      title: "Profile Setup",
      subtitle: "Per platform",
      price: "₹4,000",
      features: ["Professional setup", "Brand identity design", "Cover graphics creation", "FB/IG/LinkedIn optimization"],
      popular: false
    },
    {
      title: "Ongoing Management",
      subtitle: "Per platform/month",
      price: "₹7,000/mo",
      features: ["8-12 posts per month", "Content creation & captions", "Scheduling & publishing", "Monthly analytics reporting", "Community management"],
      popular: true
    }
  ];

  const addOns = [
    { icon: Wrench, title: "Website Maintenance", price: "₹8,000/month", subtitle: "or ₹1,500/hour" },
    { icon: Server, title: "Hosting", price: "₹3,000-₹8,000", subtitle: "per year" },
    { icon: Globe, title: "Domain Registration", price: "₹1,000", subtitle: "per year" },
    { icon: PenTool, title: "Blog Setup", price: "₹2,500", subtitle: "one-time" }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Transparent Pricing for Every Business</h2>
          <p className="text-xl text-muted-foreground">Professional software development services with clear, upfront pricing</p>
        </div>
        
        {/* Website Development Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Website Development Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {websitePackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-lg' : 'border-border'} hover:shadow-xl transition-shadow`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" onClick={scrollToContact}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* SEO & Social Media Packages */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* SEO Packages */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">SEO Packages</h3>
            <div className="space-y-6">
              {seoPackages.map((pkg, index) => (
                <Card key={index} className={`${pkg.popular ? 'border-primary' : 'border-border'}`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{pkg.title}</h4>
                        <p className="text-muted-foreground">{pkg.subtitle}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Social Media Management */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Social Media Management</h3>
            <div className="space-y-6">
              {socialMediaPackages.map((pkg, index) => (
                <Card key={index} className={`${pkg.popular ? 'border-primary' : 'border-border'}`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{pkg.title}</h4>
                        <p className="text-muted-foreground">{pkg.subtitle}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Add-ons Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Add-Ons & Extras</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">{addon.title}</h4>
                    <p className="text-primary font-bold">{addon.price}</p>
                    <p className="text-sm text-muted-foreground">{addon.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
