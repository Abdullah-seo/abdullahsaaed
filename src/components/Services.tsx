import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Search, 
  Code, 
  Globe, 
  Zap, 
  FileText, 
  TrendingUp, 
  Link, 
  MapPin,
  Palette,
  ShoppingCart,
  RefreshCw,
  Bug,
  Gauge,
  Layout,
  Tag,
  BarChart3,
  FileCheck,
  Target,
  CheckCircle
} from "lucide-react";

const serviceCategories = [
  {
    id: "seo",
    title: "SEO Services",
    icon: Search,
    color: "from-teal-400 to-teal-600",
    description: "Boost your rankings and organic traffic with comprehensive SEO strategies",
    services: [
      { name: "Full Website SEO", icon: Globe },
      { name: "Technical SEO", icon: Zap },
      { name: "On-Page Optimization", icon: FileText },
      { name: "Off-Page SEO (High-Authority Backlinks)", icon: Link },
      { name: "Keyword Research", icon: Target },
      { name: "Competitor Analysis", icon: BarChart3 },
      { name: "Content Planning", icon: FileCheck },
      { name: "Speed Optimization", icon: Gauge },
      { name: "Local SEO", icon: MapPin },
    ],
  },
  {
    id: "webdev",
    title: "WordPress & Shopify Development",
    icon: Code,
    color: "from-blue-400 to-blue-600",
    description: "Custom web solutions that convert visitors into customers",
    services: [
      { name: "New Website Design", icon: Palette },
      { name: "Shopify Store Setup", icon: ShoppingCart },
      { name: "WordPress Customization", icon: Code },
      { name: "Full Website Redesign", icon: RefreshCw },
      { name: "Website Migrations", icon: RefreshCw },
      { name: "Bug Fixing", icon: Bug },
      { name: "Performance Optimization", icon: Gauge },
      { name: "Theme Customization", icon: Palette },
      { name: "Landing Pages", icon: Layout },
      { name: "E-commerce Setup", icon: ShoppingCart },
    ],
  },
  {
    id: "domains",
    title: "Domain Selling",
    icon: Globe,
    color: "from-purple-400 to-purple-600",
    description: "Premium domain acquisition and selling services",
    services: [
      { name: "Converting Landing Pages", icon: Layout },
      { name: "Marketplace Listings", icon: Tag },
      { name: "Premium Domain Sales", icon: TrendingUp },
      { name: "Domain Research & Evaluation", icon: Search },
      { name: "16+ Domain Projects on Fiverr", icon: CheckCircle },
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("seo");

  const activeService = serviceCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.05)_0%,_transparent_60%)]" />
      
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary/20 to-accent/20 border-primary text-foreground shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
                  : "glass hover:bg-secondary/50 text-muted-foreground"
              } border border-border/50`}
            >
              <category.icon className={`w-5 h-5 ${activeCategory === category.id ? "text-primary" : ""}`} />
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Category Details */}
        {activeService && (
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card-gradient p-8 rounded-3xl border border-border/50"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeService.color} flex items-center justify-center`}>
                <activeService.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{activeService.title}</h3>
                <p className="text-muted-foreground">{activeService.description}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeService.services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{service.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
