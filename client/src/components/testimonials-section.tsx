import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, VizagMart",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      testimonial: "TechCraft Solutions transformed our business with their excellent e-commerce platform. Sales increased by 250% within 6 months. Highly recommended for any business in Visakhapatnam!"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director, HealthCare Plus",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      testimonial: "The mobile app they developed for our healthcare clinic has revolutionized how we manage patients. The team's expertise and local understanding made all the difference."
    },
    {
      name: "Arjun Reddy",
      role: "Owner, Spice Garden Restaurant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      testimonial: "Their SEO services helped our restaurant business rank #1 for 'best restaurants in Visakhapatnam'. Our online orders have tripled! Excellent work and ongoing support."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">Trusted by businesses across Visakhapatnam for exceptional software development services</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
