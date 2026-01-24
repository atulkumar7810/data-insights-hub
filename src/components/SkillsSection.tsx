import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  Code, 
  Sparkles, 
  LineChart, 
  PieChart, 
  Layout, 
  FileText, 
  Boxes,
  BrainCircuit,
  TrendingUp
} from 'lucide-react';

const skills = [
  { name: 'SQL', level: 90, icon: Database, category: 'Tools' },
  { name: 'Advanced Excel', level: 95, icon: FileSpreadsheet, category: 'Tools' },
  { name: 'Power BI', level: 85, icon: BarChart3, category: 'Tools' },
  { name: 'Python', level: 80, icon: Code, category: 'Tools' },
  { name: 'Data Cleaning', level: 90, icon: Sparkles, category: 'Skills' },
  { name: 'EDA', level: 85, icon: LineChart, category: 'Skills' },
  { name: 'Data Visualization', level: 88, icon: PieChart, category: 'Skills' },
  { name: 'Dashboard Development', level: 85, icon: Layout, category: 'Skills' },
  { name: 'Reporting', level: 90, icon: FileText, category: 'Skills' },
  { name: 'Pandas & NumPy', level: 80, icon: Boxes, category: 'Libraries' },
  { name: 'Business Intelligence', level: 85, icon: TrendingUp, category: 'Domain' },
  { name: 'Machine Learning', level: 65, icon: BrainCircuit, category: 'Advanced' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical Proficiency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="card-elevated p-6 rounded-xl group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'var(--gradient-accent)' }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="absolute -right-1 -top-6 text-sm font-medium text-accent"
                >
                  {skill.level}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also proficient in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Matplotlib', 'Seaborn', 'BeautifulSoup', 'Scikit-learn', 'Git', 'Jupyter'].map((lib) => (
              <span
                key={lib}
                className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-full hover:bg-accent/10 transition-colors cursor-default"
              >
                {lib}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
