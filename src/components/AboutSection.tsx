import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: "Bachelor's Degree in Economics from Osmania University",
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Hands-on project experience across FMCG, Real Estate & Retail',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const itemLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const itemRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <motion.div
        className="container-custom"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemUp} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who I Am
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A results-driven analyst who turns raw data into clear, impactful business decisions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div variants={itemLeft}>
            <div className="relative mb-4 md:mb-6">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Analyst by Skill, Storyteller by Approach
              </h3>
              <motion.div
                className="mt-2 w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
              I'm a Data Analyst with strong proficiency in SQL, Power BI, Advanced Excel, and Python. 
              I specialize in transforming complex datasets into clean dashboards, automated reports, 
              and strategic insights that help businesses make confident, data-backed decisions.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Currently seeking <span className="text-accent font-medium">Data Analyst / BI Analyst</span> opportunities 
              where I can apply my analytical skills to solve real business problems and drive measurable outcomes.
            </p>

            {/* CTA */}
            <motion.div variants={itemUp} className="mt-8">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                whileHover={{ x: 5 }}
              >
                Let's work together
                <span className="text-xl">→</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div variants={itemRight} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl lg:max-w-none">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-elevated p-6 rounded-xl group hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500"
              >
                <motion.div
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
