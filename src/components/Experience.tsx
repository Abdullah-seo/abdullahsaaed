import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code, Globe, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "SEO Expert",
    duration: "3+ Years Experience",
    icon: Search,
    color: "from-teal-400 to-cyan-500",
    description: "Worked on 16+ high-authority websites, improving rankings and driving significant organic traffic growth through comprehensive SEO strategies.",
    highlights: [
      "Keyword Research & Strategy",
      "Technical SEO Audits",
      "Link Building Campaigns",
      "Content Optimization",
    ],
  },
  {
    title: "Web Developer",
    duration: "2.5+ Years Experience",
    icon: Code,
    color: "from-blue-400 to-indigo-500",
    description: "Designed & migrated over 30+ websites on WordPress & Shopify, delivering modern, responsive, and high-converting web solutions.",
    highlights: [
      "WordPress Development",
      "Shopify Store Setup",
      "Website Migrations",
      "Custom Theme Development",
    ],
  },
  {
    title: "Domain Seller",
    duration: "2+ Years Experience",
    icon: Globe,
    color: "from-purple-400 to-pink-500",
    description: "Successfully completed 16 domain orders on Fiverr, helping clients acquire premium domains and maximize their digital investments.",
    highlights: [
      "Premium Domain Sales",
      "Landing Page Creation",
      "Marketplace Listings",
      "Domain Valuation",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/5 to-background" />
      
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Years of experience delivering exceptional digital solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="w-5 h-5 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                  />
                </div>

                {/* Content Card */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2 lg:direction-ltr" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card-gradient p-8 rounded-3xl border border-border/50 hover-glow"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                        <exp.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.duration}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                        >
                          <ArrowRight className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
