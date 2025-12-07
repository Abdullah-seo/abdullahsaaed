import { motion } from "framer-motion";
import { Heart, ArrowUp, Linkedin, Facebook, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "SEO Services", href: "#services" },
    { name: "WordPress Development", href: "#services" },
    { name: "Shopify Development", href: "#services" },
    { name: "Domain Selling", href: "#services" },
  ];

  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/1234567890", label: "WhatsApp" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-saeed-seo-expert/", label: "LinkedIn" },
    { icon: Facebook, href: "https://web.facebook.com/AbdullahSaeed8970/", label: "Facebook" },
    { icon: Mail, href: "mailto:abdullahseo859@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-navy-900 border-t border-border/50">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.05)_0%,_transparent_50%)]" />

      <div className="container-tight relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold inline-block mb-4">
              <span className="gradient-text">Abdullah</span>
              <span className="text-foreground"> Saeed</span>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              SEO Expert, WordPress & Shopify Developer, and Domain Seller helping businesses grow online.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:abdullah@example.com" className="hover:text-primary transition-colors">
                  abdullahseo859@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +92 3137205502
                </a>
              </li>
              <li>Available Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Abdullah Saeed. Made with
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
