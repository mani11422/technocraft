import { Button } from "@/components/ui/button";
import { CheckCircle, Users, MapPin, Calendar, Eye } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-bg py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your Business with 
              <span className="text-primary"> Modern Digital Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Expert Software Development, Web Applications, Mobile Apps, and Digital Marketing Solutions for Growing Brands in Visakhapatnam and Beyond
            </p>
            <p className="mt-4 text-lg text-foreground">
              Ready to elevate your business? We deliver high-impact software solutions, websites, mobile apps, and digital marketing strategies for service-driven brands.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Strategy Call
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => scrollToSection('portfolio')}
              >
                <Eye className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                200+ Projects Delivered
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-green-500 mr-2" />
                100% Client Satisfaction
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-green-500 mr-2" />
                Based in Visakhapatnam
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional software development team collaborating on modern technology solutions" 
              className="rounded-2xl shadow-2xl w-full h-auto dark:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
