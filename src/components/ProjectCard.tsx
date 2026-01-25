import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: (title: string | null) => void;
}

const ProjectCard = ({ project, index, isHovered, onHover }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      onMouseEnter={() => onHover(project.title)}
      onMouseLeave={() => onHover(null)}
      className="group h-full"
    >
      <div
        className={`h-full flex flex-col rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 ${
          isHovered
            ? 'shadow-2xl shadow-accent/10 border-accent/30 -translate-y-2'
            : 'hover:border-border/80'
        }`}
      >
        {/* Project Header with Gradient */}
        <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.gradient} shrink-0`}>
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
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[calc(100%-2rem)]">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 bg-background/95 backdrop-blur-sm text-foreground text-xs font-medium rounded-lg shadow-lg"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2.5 py-1 bg-background/95 backdrop-blur-sm text-foreground text-xs font-medium rounded-lg shadow-lg">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          {/* Hover overlay */}
          <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              className="p-4 bg-white rounded-full shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={`/project/${project.id}`}>
                <ArrowUpRight className="w-6 h-6 text-foreground" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title and Featured Badge */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <Link
              to={`/project/${project.id}`}
              className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors hover:underline line-clamp-1"
            >
              {project.title}
            </Link>
            {project.featured && (
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-lg shrink-0">
                Featured
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {project.description}
          </p>

          {/* Outcomes */}
          <div className="mb-4 flex-1">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Key Outcomes
            </h4>
            <ul className="space-y-1.5">
              {project.outcomes.slice(0, 3).map((outcome) => (
                <li key={outcome} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-1.5" />
                  <span className="line-clamp-1">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
            {/* CODE BUTTON – conditionally rendered */}
            {project.showCode !== false && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium rounded-xl transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}

            {/* DEMO BUTTON */}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            ) : project.powerBiEmbed || project.images.length > 0 ? (
              <Link
                to={`/project/${project.id}/demo`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
