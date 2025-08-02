import { Users, Rocket, Handshake } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Expert Team in Visakhapatnam",
      description: "Local expertise with global standards. Our team understands the Vizag market and delivers world-class solutions."
    },
    {
      icon: Rocket,
      title: "Innovation-Driven Approach",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage."
    },
    {
      icon: Handshake,
      title: "Long-term Partnership",
      description: "We don't just deliver projects – we build lasting relationships and continue supporting your digital journey."
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Your Partners in Digital Growth</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is a blend of passionate developers, designers, and digital marketing experts dedicated to results and innovation. We're your partners in building long-term digital growth.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 rounded-lg p-3 mr-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional software development team collaborating in modern office setting"
              className="rounded-2xl shadow-xl w-full h-auto dark:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
