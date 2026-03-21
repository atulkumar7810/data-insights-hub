import { motion } from 'framer-motion';
import { Github, Eye, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';
import { getDomainTheme } from '@/lib/domain-theme';

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: (title: string | null) => void;
}

const ProjectCard = ({ project, index, isHovered, onHover }: ProjectCardProps) => {
  const theme = getDomainTheme(project.domain);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      onMouseEnter={() => onHover(project.title)}
      onMouseLeave={() => onHover(null)}
      className="group h-full"
    >
      <motion.div
        className={`h-full flex flex-col rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-500 ${
          isHovered
            ? `${theme.borderAccent} bg-card/90`
            : 'border-border/50 bg-card/70 hover:border-border/80'
        }`}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        style={isHovered ? { boxShadow: theme.glow } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Project Header with per-project Gradient */}
        <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.gradient} shrink-0`}>
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 dot-pattern" />
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 border border-white/15 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 border border-white/15 rounded-lg rotate-45"
            animate={{ rotate: [45, 225] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />

          {/* Domain label */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 dark:bg-white/15 backdrop-blur-md text-foreground dark:text-white text-xs font-semibold rounded-xl shadow-sm border border-white/20">
            {project.domain}
          </div>

          {/* Tools Badge */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[calc(100%-2rem)]">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 bg-white/90 dark:bg-card/80 backdrop-blur-md text-foreground text-xs font-medium rounded-xl shadow-lg border border-border/30"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2.5 py-1 bg-white/90 dark:bg-card/80 backdrop-blur-md text-foreground text-xs font-medium rounded-xl shadow-lg border border-border/30">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/project/${project.id}`}>
              <motion.div
                className="p-4 bg-white/15 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center border border-white/20"
                whileHover={{ scale: 1.15, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUpRight className="w-6 h-6 text-white" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-3">
            <Link
              to={`/project/${project.id}`}
              className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 hover:underline line-clamp-1"
            >
              {project.title}
            </Link>
            {project.featured && (
              <motion.span
                className={`px-2 py-1 ${theme.accentBg} ${theme.accentText} text-xs font-semibold rounded-xl shrink-0 border ${theme.borderAccent}`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Featured
              </motion.span>
            )}
          </div>

          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {project.description}
          </p>

          {/* Impact metric highlight */}
          {project.outcomes[0] && (
            <div className="mb-4 px-3 py-2 rounded-xl bg-accent/5 border border-accent/15">
              <p className="text-xs font-medium text-accent flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {project.outcomes[0]}
              </p>
            </div>
          )}

          {/* Outcomes */}
          <div className="mb-4 flex-1">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Key Outcomes
            </h4>
            <ul className="space-y-1.5">
              {project.outcomes.slice(1, 4).map((outcome) => (
                <li key={outcome} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-gradient-to-r ${project.gradient}`} />
                  <span className="line-clamp-1">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/50 mt-auto">
            {project.showCode !== false && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-secondary/80 hover:bg-secondary text-foreground text-sm font-medium rounded-2xl transition-all duration-300 border border-border/30 hover:border-border/50"
                whileHover={{ y: -2, scale: 1.02, boxShadow: '0 4px 20px hsl(var(--accent) / 0.1)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            )}

            <motion.div
              whileHover={{ y: -2, scale: 1.02, boxShadow: '0 4px 20px hsl(var(--accent) / 0.2)' }}
              whileTap={{ scale: 0.97 }}
              className="flex-1"
            >
              {project.id === 'gurgaon-real-estate' ? (
                <a
                  href="https://gurgaonhousingmarketanalysis-lrucnaqwthf3lrubhanwxa.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-2xl transition-all duration-300 shadow-sm`}
                >
                  <Eye className="w-4 h-4" />
                  Demo
                </a>
              ) : (
                <Link
                  to={`/project/${project.id}`}
                  className={`flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-2xl transition-all duration-300 shadow-sm`}
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
