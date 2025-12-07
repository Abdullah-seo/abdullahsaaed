import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code, Globe, CheckCircle } from "lucide-react";

const stats = [
  { number: "3+", label: "Years SEO Experience", icon: Search },
  { number: "2.5+", label: "Years Web Development", icon: Code },
  { number: "2+", label: "Years Domain Selling", icon: Globe },
];

const achievements = [
  { number: "100+", label: "Websites Audited" },
  { number: "30+", label: "Websites Built/Migrated" },
  { number: "16+", label: "SEO Projects Completed" },
  { number: "16+", label: "Domain Orders on Fiverr" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Who Is <span className="gradient-text">Abdullah Saeed</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Abdullah Saeed</span>, an SEO expert, WordPress & Shopify developer, and domain reseller. Over the past years, I've helped businesses increase organic traffic, design modern responsive websites, migrate websites from one CMS to another, and sell high-value domain names.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I combine <span className="text-primary">SEO + UI/UX + technical skills</span> to create real business results. Whether you need to rank higher on Google, build a stunning e-commerce store, or acquire premium domains — I've got you covered.
            </p>

            {/* Experience Stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass p-4 rounded-xl text-center hover-lift"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card-gradient p-6 rounded-2xl border border-border/50 hover-lift"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-3xl font-bold text-foreground">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
