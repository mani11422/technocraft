import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PortfolioSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "VizagMart E-commerce Platform",
      description: "Complete e-commerce solution with payment integration, inventory management, and analytics dashboard for a local Visakhapatnam retailer.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["E-commerce", "Payment Gateway", "Analytics"]
    },
    {
      title: "HealthCare Plus Mobile App",
      description: "Patient management and appointment booking app for healthcare providers in Visakhapatnam with real-time notifications.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["iOS/Android", "Healthcare", "Real-time"]
    },
    {
      title: "TechnoVizag Corporate Website",
      description: "Professional corporate website with advanced SEO optimization, resulting in 300% increase in organic traffic for this Vizag-based company.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Corporate Website", "SEO", "Local Business"]
    },
    {
      title: "RestaurantPro Management System",
      description: "Custom restaurant management software with order processing, inventory tracking, and customer management for multiple Visakhapatnam restaurants.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Custom Software", "Restaurant", "Inventory"]
    },
    {
      title: "Social Media Success Campaign",
      description: "Comprehensive social media management for a Visakhapatnam fashion brand, achieving 500% growth in followers and 200% increase in sales.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Social Media", "Fashion", "Growth Marketing"]
    },
    {
      title: "EduVizag Learning Platform",
      description: "Complete learning management system for educational institutions in Visakhapatnam with video streaming, assessments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Education", "LMS", "Video Streaming"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Explore Our Results</h2>
          <p className="text-xl text-muted-foreground">See real client successes in web development, app solutions, software integrations, SEO, and social media strategy</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" onClick={scrollToContact}>
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
}
