import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const experienceData = [
  {
    role: 'Virtual Intern – Data Analytics',
    company: 'Quantium',
    type: 'Internship',
    duration: 'Aug 2024 – Sep 2024',
    responsibilities: [
      'Analyzed 200K+ customer transaction records to identify purchasing patterns and segment high-value customers',
      'Designed Power BI dashboards that reduced manual reporting time by streamlining weekly business reviews',
      'Performed end-to-end data cleaning and validation, improving dataset accuracy for downstream analysis',
      'Conducted uplift testing to measure campaign effectiveness, contributing to data-driven store layout recommendations',
    ],
    tools: ['SQL', 'Excel', 'Power BI', 'Data Analysis'],
  },
  {
    role: 'Data Analyst',
    company: 'Independent Projects',
    type: 'Projects',
    duration: 'Ongoing',
    responsibilities: [
      'Built 6+ end-to-end analytics projects across FMCG, Retail, Real Estate, and Transportation domains',
      'Created interactive Power BI dashboards with DAX measures to track KPIs and business performance',
      'Applied Python (Pandas, Matplotlib) for EDA, trend analysis, and automated data pipelines',
      'Delivered executive-ready reports with actionable recommendations that simulate real business scenarios',
    ],
    tools: ['SQL', 'Python', 'Power BI', 'Excel', 'Pandas'],
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

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <motion.div
        className="container-custom"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemUp} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            My professional experience and hands-on project work in data analytics
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-0">
          {/* Animated Timeline line */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-8 md:space-y-16">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.25, duration: 0.7, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-stretch ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-12 h-12 bg-background border-2 border-accent rounded-full items-center justify-center z-10 shadow-lg shadow-accent/20"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.25, type: 'spring', stiffness: 300 }}
                >
                  <Briefcase className="w-5 h-5 text-accent" />
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    className="card-elevated p-6 rounded-2xl group hover:border-accent/30 transition-colors duration-500"
                    whileHover={{ y: -4, boxShadow: '0 16px 40px -8px hsl(175 70% 50% / 0.12)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="md:hidden w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-accent" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.25 + i * 0.08 }}
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tools/Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <motion.span
                          key={tool}
                          className="px-3 py-1 bg-accent/5 border border-accent/20 text-accent text-xs font-medium rounded-full hover:bg-accent/10 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <motion.div variants={itemUp} className="mt-12 md:mt-16 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Interested in my work? Check out my projects or get in touch!
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <motion.a
              href="#projects"
              className="px-5 py-2.5 md:px-6 md:py-2.5 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors text-sm md:text-base min-h-[44px] flex items-center shadow-lg shadow-accent/20"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-5 py-2.5 md:px-6 md:py-2.5 border border-accent/30 text-foreground font-medium rounded-lg hover:bg-accent/10 transition-colors text-sm md:text-base min-h-[44px] flex items-center"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
