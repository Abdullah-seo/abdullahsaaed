import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Search, 
  Code, 
  Globe, 
  TrendingUp, 
  Users, 
  ShoppingCart,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";

const projectCategories = [
  {
    id: "seo",
    title: "SEO Case Studies",
    subtitle: "16 Websites",
    icon: Search,
  },
  {
    id: "webdev",
    title: "Web Development",
    subtitle: "30+ Websites",
    icon: Code,
  },
  {
    id: "domains",
    title: "Domain Selling",
    subtitle: "16 Orders",
    icon: Globe,
  },
];

const seoProjects = [
  { title: "E-commerce SEO Growth (UK)", result: "0 to 25K monthly traffic", icon: ShoppingCart, metric: "+25K" },
  { title: "Local Business SEO", result: "Ranking #1 for 15+ keywords", icon: Users, metric: "#1" },
  { title: "Blog Website SEO", result: "Increased organic clicks by 300%", icon: TrendingUp, metric: "+300%" },
  { title: "Technical SEO Fixes", result: "Removed 250+ errors across sites", icon: Search, metric: "-250" },
  { title: "E-commerce Product Pages", result: "50% increase in conversions", icon: ShoppingCart, metric: "+50%" },
  { title: "SaaS Website Optimization", result: "2x organic traffic in 6 months", icon: TrendingUp, metric: "2X" },
  { title: "News Portal SEO", result: "1M+ monthly impressions", icon: Users, metric: "1M+" },
  { title: "Healthcare Website SEO", result: "Top 3 rankings for 40+ keywords", icon: Search, metric: "Top 3" },
  { title: "Real Estate Platform", result: "Reduced bounce rate by 45%", icon: TrendingUp, metric: "-45%" },
  { title: "Education Platform SEO", result: "200% increase in enrollments", icon: Users, metric: "+200%" },
  { title: "Travel Blog Optimization", result: "500K+ monthly visitors", icon: ShoppingCart, metric: "500K+" },
  { title: "B2B Company Website", result: "75% more qualified leads", icon: TrendingUp, metric: "+75%" },
];

const webdevProjects = [
  { title: "Shopify to Shopify Migration", type: "Migration", category: "E-commerce" },
  { title: "WordPress to WordPress", type: "Migration", category: "Business" },
  { title: "Wix to WordPress", type: "Migration", category: "Portfolio" },
  { title: "Squarespace to Shopify", type: "Migration", category: "E-commerce" },
  { title: "Custom E-commerce Store", type: "Full Design", category: "E-commerce" },
  { title: "Business Corporate Site", type: "Full Design", category: "Business" },
  { title: "Portfolio Website", type: "Full Design", category: "Portfolio" },
  { title: "Landing Page Design", type: "Full Design", category: "Landing Page" },
  { title: "Fashion E-commerce", type: "Full Design", category: "E-commerce" },
  { title: "Restaurant Website", type: "Full Design", category: "Business" },
  { title: "Fitness Studio Site", type: "Full Design", category: "Business" },
  { title: "Coaching Platform", type: "Full Design", category: "Landing Page" },
];

const domainProjects = [
  { title: "Premium .com Domain Sale", value: "$5,000+", type: "Sale" },
  { title: "Brand Domain Acquisition", value: "$3,500", type: "Sale" },
  { title: "Tech Startup Domain", value: "$2,800", type: "Sale" },
  { title: "E-commerce Domain Pack", value: "$4,200", type: "Bundle" },
  { title: "Landing Page Creation", value: "10+ Pages", type: "Service" },
  { title: "Marketplace Listings", value: "50+ Domains", type: "Listing" },
  { title: "Lead Management", value: "100+ Leads", type: "Service" },
  { title: "Domain Valuation", value: "200+ Domains", type: "Service" },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("seo");

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.05)_0%,_transparent_60%)]" />
      
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of successful projects across SEO, web development, and domain selling
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
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
              <div className="text-left">
                <span className="font-medium block">{category.title}</span>
                <span className="text-xs opacity-70">{category.subtitle}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* SEO Projects */}
        {activeCategory === "seo" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {seoProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-gradient p-5 rounded-2xl border border-border/50 hover-lift group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">{project.metric}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground">{project.result}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Web Dev Projects */}
        {activeCategory === "webdev" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Migrations */}
              <div className="card-gradient p-6 rounded-2xl border border-border/50">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  Website Migrations (10+)
                </h4>
                <div className="space-y-3">
                  {webdevProjects.filter(p => p.type === "Migration").map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all group"
                    >
                      <span className="text-foreground">{project.title}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{project.category}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Full Designs */}
              <div className="card-gradient p-6 rounded-2xl border border-border/50">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Custom Designs (20+)
                </h4>
                <div className="space-y-3">
                  {webdevProjects.filter(p => p.type === "Full Design").slice(0, 4).map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all group"
                    >
                      <span className="text-foreground">{project.title}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{project.category}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Thumbnails Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="aspect-video rounded-xl bg-gradient-to-br from-secondary to-navy-800 border border-border/50 flex items-center justify-center group cursor-pointer hover-lift overflow-hidden"
                >
                  <div className="text-center">
                    <Code className="w-8 h-8 text-primary/50 mx-auto mb-2 group-hover:text-primary transition-colors" />
                    <p className="text-xs text-muted-foreground">Project {index + 1}</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Domain Projects */}
        {activeCategory === "domains" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {domainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-gradient p-5 rounded-2xl border border-border/50 hover-lift group cursor-pointer text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-lg font-bold gradient-text mb-1">{project.value}</p>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">{project.type}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
