import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingCategories = [
  {
    id: "seo",
    title: "SEO Packages",
    packages: [
      {
        name: "Basic",
        price: "$299",
        period: "/month",
        description: "Perfect for small businesses starting their SEO journey",
        features: [
          "Keyword Research (10 keywords)",
          "On-Page Optimization",
          "Monthly Report",
          "Google Analytics Setup",
          "Basic Technical Audit",
        ],
        popular: false,
      },
      {
        name: "Standard",
        price: "$599",
        period: "/month",
        description: "Ideal for growing businesses seeking better rankings",
        features: [
          "Everything in Basic",
          "Keyword Research (25 keywords)",
          "Content Optimization",
          "Backlink Building (5/month)",
          "Competitor Analysis",
          "Bi-weekly Reports",
          "Technical SEO Fixes",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "$999",
        period: "/month",
        description: "Complete SEO solution for maximum growth",
        features: [
          "Everything in Standard",
          "Unlimited Keywords",
          "Advanced Link Building (15/month)",
          "Content Strategy & Creation",
          "Local SEO Optimization",
          "Weekly Reports & Calls",
          "Priority Support",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "webdev",
    title: "Web Development",
    packages: [
      {
        name: "Starter",
        price: "$499",
        period: "one-time",
        description: "Simple landing page or personal website",
        features: [
          "5-Page Website",
          "Responsive Design",
          "Contact Form",
          "Basic SEO Setup",
          "1 Month Support",
        ],
        popular: false,
      },
      {
        name: "Business",
        price: "$1,299",
        period: "one-time",
        description: "Professional business website with all essentials",
        features: [
          "10-Page Website",
          "Custom Design",
          "Blog Integration",
          "Social Media Integration",
          "Advanced SEO",
          "Speed Optimization",
          "3 Months Support",
        ],
        popular: true,
      },
      {
        name: "Advanced",
        price: "$2,499",
        period: "one-time",
        description: "Complete e-commerce or complex web application",
        features: [
          "Unlimited Pages",
          "E-commerce Functionality",
          "Custom Features",
          "Payment Integration",
          "Inventory Management",
          "Full SEO Package",
          "6 Months Support",
          "Training Session",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "domains",
    title: "Domain Selling",
    packages: [
      {
        name: "Landing Page",
        price: "$99",
        period: "one-time",
        description: "Professional landing page for your domain",
        features: [
          "Custom Landing Page",
          "Contact Form",
          "Mobile Responsive",
          "SEO Optimized",
          "1 Revision",
        ],
        popular: false,
      },
      {
        name: "Full Listing",
        price: "$199",
        period: "one-time",
        description: "Complete marketplace listing package",
        features: [
          "Landing Page Included",
          "Listing on 5 Marketplaces",
          "Domain Valuation",
          "Sales Copy Writing",
          "Lead Capture Setup",
          "3 Revisions",
        ],
        popular: true,
      },
      {
        name: "Promotion Bundle",
        price: "$399",
        period: "one-time",
        description: "Maximum exposure for premium domains",
        features: [
          "Everything in Full Listing",
          "Listing on 10+ Marketplaces",
          "Social Media Promotion",
          "Email Outreach Campaign",
          "Negotiation Support",
          "Priority Placement",
          "Unlimited Revisions",
        ],
        popular: false,
      },
    ],
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("seo");

  const currentCategory = pricingCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="pricing" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.05)_0%,_transparent_60%)]" />
      
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the package that fits your needs and budget
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {pricingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        {currentCategory && (
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {currentCategory.packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative card-gradient p-8 rounded-3xl border ${
                  pkg.popular
                    ? "border-primary shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
                    : "border-border/50"
                } hover-lift`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a href="#contact">
                    {pkg.popular && <Zap className="w-4 h-4 mr-2" />}
                    Get Started
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground mt-8"
        >
          Need a custom package? <a href="#contact" className="text-primary hover:underline">Contact me</a> for a tailored solution.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
