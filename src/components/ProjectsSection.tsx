import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Filter, ArrowUpRight, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AtliQ Mart Sales Analysis',
    description: 'Comprehensive FMCG sales analysis project involving 50,000+ records. Built interactive Power BI dashboards for KPIs, revenue trends, and product performance analysis.',
    tools: ['SQL', 'Excel', 'Power BI'],
    domain: 'FMCG',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    outcomes: [
      'Analyzed 50,000+ sales records',
      'Built interactive KPI dashboards',
      'Identified key revenue drivers',
      'Created management reports',
    ],
    github: 'https://github.com/atulkumar7810',
    featured: true,
  },
  {
    title: 'Real Estate Capstone Project',
    description: 'End-to-end data science project with web scraping, data cleaning, EDA, and machine learning. Achieved 92% accuracy in property price prediction for Gurgaon.',
    tools: ['Python', 'BeautifulSoup', 'Scikit-learn'],
    domain: 'Real Estate',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    outcomes: [
      'Scraped 3,000+ property records',
      'Feature engineering & EDA',
      '92% accuracy prediction model',
      'Random Forest implementation',
    ],
    github: 'https://github.com/atulkumar7810',
    featured: true,
  },
  {
    title: 'Quantium Virtual Internship',
    description: 'Customer transaction analysis project focusing on retail analytics, uplift testing, and store optimization for data-driven marketing strategies.',
    tools: ['SQL', 'Excel', 'Power BI'],
    domain: 'Retail',
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    outcomes: [
      'Customer transaction analysis',
      'Automated Power BI reports',
      'Uplift testing & A/B analysis',
      'Store optimization insights',
    ],
    github: 'https://github.com/atulkumar7810',
    featured: true,
  },
];

const filters = ['All', 'SQL', 'Power BI', 'Python', 'FMCG', 'Real Estate', 'Retail'];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === 'All' ||
      project.tools.includes(activeFilter) ||
      project.domain === activeFilter
  );

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Folder className="w-4 h-4" />
            Portfolio
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world data analysis projects showcasing end-to-end analytics capabilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-12"
        >
          <Filter className="w-4 h-4 text-muted-foreground mr-2" />
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <div className={`h-full rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 ${
                  hoveredProject === project.title ? 'shadow-2xl shadow-accent/10 border-accent/30 -translate-y-2' : 'hover:border-border/80'
                }`}>
                  {/* Project Header with Gradient */}
                  <div className={`h-52 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                    {/* Animated pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 dot-pattern" />
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute bottom-8 left-8 w-12 h-12 border border-white/20 rounded-lg rotate-45"
                      animate={{ rotate: [45, 225] }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Domain label */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
                      {project.domain}
                    </div>
                    
                    {/* Tools Badge */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 bg-background/95 backdrop-blur-sm text-foreground text-xs font-medium rounded-lg shadow-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-full shadow-xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowUpRight className="w-6 h-6 text-foreground" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-lg">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Outcomes */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {project.outcomes.slice(0, 3).map((outcome) => (
                          <li key={outcome} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium rounded-xl transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium rounded-xl transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
