import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Smartphone, Search, Share2, Wrench } from "lucide-react";

export default function ServicesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Solve business challenges with tailored CRM, automation, and data solutions designed for your unique workflow and requirements.",
      color: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-100 dark:border-blue-800",
      buttonText: "Discuss Your Project"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Professional websites, e-commerce platforms, and web applications built with modern technologies and optimized for performance.",
      color: "bg-green-50 dark:bg-green-950",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-100 dark:border-green-800",
      buttonText: "View Packages"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Robust, scalable apps for iOS and Android built for performance and user experience. From idea to launch, we handle it all.",
      color: "bg-purple-50 dark:bg-purple-950",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-100 dark:border-purple-800",
      buttonText: "Request a Quote"
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Dominate search rankings with our proven SEO strategies and comprehensive digital marketing solutions for Visakhapatnam businesses.",
      color: "bg-orange-50 dark:bg-orange-950",
      iconColor: "text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-100 dark:border-orange-800",
      buttonText: "View SEO Packages"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Professional social media strategy, content creation, and management across all platforms to build your brand presence.",
      color: "bg-pink-50 dark:bg-pink-950",
      iconColor: "text-pink-600 dark:text-pink-400",
      borderColor: "border-pink-100 dark:border-pink-800",
      buttonText: "Get Started"
    },
    {
      icon: Wrench,
      title: "Support & Maintenance",
      description: "Ongoing technical support, website maintenance, hosting management, and performance optimization for your digital assets.",
      color: "bg-indigo-50 dark:bg-indigo-950",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-100 dark:border-indigo-800",
      buttonText: "Learn More"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Comprehensive Software Development Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom software solutions to complete digital transformation, we're your trusted technology partner in Visakhapatnam
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={`service-card ${service.color} ${service.borderColor} border-2 hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`${service.iconColor} h-8 w-8`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => scrollToSection('contact')}
                  >
                    {service.buttonText} →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
