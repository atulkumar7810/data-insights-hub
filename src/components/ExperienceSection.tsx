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

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
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
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot - centered on md+ */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-background border-2 border-accent rounded-full items-center justify-center z-10 shadow-lg shadow-accent/20">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                  <div className="card-elevated p-6 rounded-xl group hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="md:hidden w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-muted-foreground">
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
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tools/Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-accent/5 border border-accent/20 text-accent text-xs font-medium rounded-full hover:bg-accent/10 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Interested in my work? Check out my projects or get in touch!
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 md:px-6 md:py-2.5 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors text-sm md:text-base min-h-[44px] flex items-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 md:px-6 md:py-2.5 border border-accent/30 text-foreground font-medium rounded-lg hover:bg-accent/10 transition-colors text-sm md:text-base min-h-[44px] flex items-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
