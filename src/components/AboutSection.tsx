import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, Briefcase, MapPin } from 'lucide-react';

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
  {
    icon: Target,
    title: 'Focus',
    description: 'Data Analysis, Business Intelligence & MIS Reporting',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Hyderabad, India',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Passionate About Data-Driven Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming complex data into meaningful stories that drive business decisions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Turning Data Into Decisions
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an entry-level Data Analyst with a strong foundation in SQL, Advanced Excel, 
                Power BI, and Python. My journey in data analytics began with a passion for 
                uncovering patterns and trends that drive meaningful business outcomes.
              </p>
              <p>
                With hands-on experience in data cleaning, exploratory data analysis, 
                dashboard development, and business intelligence reporting, I've worked 
                across diverse domains including FMCG, Real Estate, and Retail.
              </p>
              <p>
                My goal is to grow as a Data Analyst and MIS professional, contributing 
                to impactful business decisions through data-driven insights and compelling 
                visualizations.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Let's work together
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="card-elevated p-6 rounded-xl group hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
