import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    projectDetails: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description:
          "Thank you for your inquiry! We will contact you within 24 hours.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        projectDetails: "",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to submit contact form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.projectDetails
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      content: [
        "A-HUB, AU Incubation Centre, 1st Floor, AU North Campus, Visakhapatnam, Andhra Pradesh, India, 530003",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      content: ["+91 94903 57185 (Whatsapp Only)"],
    },
    {
      icon: Mail,
      title: "Email Us",
      content: ["jcb172126@gmail.com", "projects@techcraftvizag.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Accelerate Your Digital Business?
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Contact us today to start a personalized strategy session and get a
            tailored quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-background text-foreground shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                Get Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-software">
                          Custom Software Development
                        </SelectItem>
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="mobile-app">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="seo-marketing">
                          SEO & Digital Marketing
                        </SelectItem>
                        <SelectItem value="social-media">
                          Social Media Management
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Project Budget</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      handleInputChange("budget", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000-15000">
                        ₹5,000 - ₹15,000
                      </SelectItem>
                      <SelectItem value="15000-30000">
                        ₹15,000 - ₹30,000
                      </SelectItem>
                      <SelectItem value="30000-60000">
                        ₹30,000 - ₹60,000
                      </SelectItem>
                      <SelectItem value="60000+">₹60,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="projectDetails">Project Details *</Label>
                  <Textarea
                    id="projectDetails"
                    value={formData.projectDetails}
                    onChange={(e) =>
                      handleInputChange("projectDetails", e.target.value)
                    }
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={contactMutation.isPending}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {contactMutation.isPending
                    ? "Sending..."
                    : "Book Free Strategy Call"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-primary-foreground">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-foreground/10 rounded-lg p-3 mr-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.content.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="text-primary-foreground/80"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-lg transition-colors"
                    >
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
