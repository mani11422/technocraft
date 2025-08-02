export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "SEO & Digital Marketing",
    "Social Media Management",
    "Website Maintenance",
  ];

  const quickLinks = [
    { label: "About Us", action: () => scrollToSection("about") },
    { label: "Portfolio", action: () => scrollToSection("portfolio") },
    { label: "Pricing", action: () => scrollToSection("pricing") },
    { label: "Contact Us", action: () => scrollToSection("contact") },
    { label: "Blog", action: () => {} },
    { label: "Career", action: () => {} },
  ];

  return (
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TechCraft Solutions</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading software development company in Visakhapatnam providing
              comprehensive digital solutions for modern businesses. Your
              trusted partner for web development, mobile apps, and digital
              marketing.
            </p>

            <div className="space-y-2 text-sm text-gray-300">
              <p>
                📍 A-HUB, AU Incubation Centre, 1st Floor, AU North Campus,
                Visakhapatnam, Andhra Pradesh, India, 530003
              </p>
              <p>📞 +91 94903 57185 (Whatsapp Only) | ✉️ jcb172126@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 TechCraft Solutions. All rights reserved. Proudly serving
            Visakhapatnam and beyond.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </button>
            <button className="text-gray-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
