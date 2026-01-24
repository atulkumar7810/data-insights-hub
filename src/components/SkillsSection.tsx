import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
  { name: 'SQL', icon: Database, category: 'Tools', color: 'from-blue-500 to-cyan-500' },
  { name: 'Advanced Excel', icon: FileSpreadsheet, category: 'Tools', color: 'from-green-500 to-emerald-500' },
  { name: 'Power BI', icon: BarChart3, category: 'Tools', color: 'from-yellow-500 to-orange-500' },
  { name: 'Python', icon: Code, category: 'Tools', color: 'from-blue-600 to-indigo-600' },
  { name: 'Data Cleaning', icon: Sparkles, category: 'Skills', color: 'from-purple-500 to-pink-500' },
  { name: 'EDA', icon: LineChart, category: 'Skills', color: 'from-teal-500 to-cyan-500' },
  { name: 'Data Visualization', icon: PieChart, category: 'Skills', color: 'from-rose-500 to-red-500' },
  { name: 'Dashboard Development', icon: Layout, category: 'Skills', color: 'from-indigo-500 to-violet-500' },
  { name: 'Reporting', icon: FileText, category: 'Skills', color: 'from-amber-500 to-yellow-500' },
  { name: 'Pandas & NumPy', icon: Boxes, category: 'Libraries', color: 'from-sky-500 to-blue-500' },
  { name: 'Business Intelligence', icon: TrendingUp, category: 'Domain', color: 'from-emerald-500 to-green-500' },
  { name: 'Machine Learning', icon: BrainCircuit, category: 'Advanced', color: 'from-fuchsia-500 to-purple-500' },
];

const categories = ['All', 'Tools', 'Skills', 'Libraries', 'Domain', 'Advanced'];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter(
    skill => activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4" />
            Skills & Expertise
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </motion.div>

        {/* Modern Pill-Style Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border/50">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? 'text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileTap={{ scale: 0.97 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent rounded-xl shadow-lg shadow-accent/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  delay: index * 0.04, 
                  duration: 0.4,
                  layout: { type: 'spring', stiffness: 300, damping: 25 }
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group"
              >
                <motion.div 
                  className={`relative h-full p-5 md:p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 transition-all duration-400 cursor-default ${
                    hoveredSkill === skill.name 
                      ? 'shadow-xl shadow-foreground/5 border-accent/40' 
                      : 'hover:shadow-lg hover:shadow-foreground/3'
                  }`}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <motion.div 
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${skill.color} shadow-lg mb-4`}
                      whileHover={{ 
                        rotate: [0, -8, 8, -4, 0],
                        scale: 1.05
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                    </motion.div>
                    
                    {/* Skill Name */}
                    <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </h3>
                    
                    {/* Category Badge */}
                    <span className="text-xs font-medium text-muted-foreground/80 bg-secondary/60 px-3 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute -top-px -right-px w-12 h-12 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-bl-3xl rounded-tr-2xl transition-opacity duration-500`} />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6 font-medium">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Matplotlib', 'Seaborn', 'BeautifulSoup', 'Scikit-learn', 'Git', 'Jupyter'].map((lib, index) => (
              <motion.span
                key={lib}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="px-5 py-2.5 bg-card/60 backdrop-blur-sm border border-border/50 text-foreground text-sm font-medium rounded-xl hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default"
              >
                {lib}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
