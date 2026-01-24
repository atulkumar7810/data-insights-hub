import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AtliQ Mart Sales Analysis',
    description: 'Comprehensive FMCG sales analysis project involving 50,000+ records. Built interactive Power BI dashboards for KPIs, revenue trends, and product performance analysis.',
    tools: ['SQL', 'Excel', 'Power BI'],
    domain: 'FMCG',
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

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === 'All' ||
      project.tools.includes(activeFilter) ||
      project.domain === activeFilter
  );

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-muted-foreground self-center mr-2" />
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                  : 'text-muted-foreground hover:text-foreground'
              }
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              layout
              className="group"
            >
              <div className="card-elevated h-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/20">
                {/* Project Header */}
                <div 
                  className="h-48 relative overflow-hidden"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <div className="text-4xl font-display font-bold mb-2 opacity-20">
                        {project.domain}
                      </div>
                    </div>
                  </div>
                  
                  {/* Tools Badge */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Outcomes */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-1">
                      {project.outcomes.slice(0, 3).map((outcome) => (
                        <li key={outcome} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center p-8 bg-secondary rounded-2xl">
            <Github className="w-12 h-12 text-foreground mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              View More on GitHub
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Explore more projects and code repositories with clean, well-documented implementations.
            </p>
            <Button
              asChild
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <a
                href="https://github.com/atulkumar7810"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
