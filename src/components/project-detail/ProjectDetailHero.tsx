import { motion } from 'framer-motion';
import { Github, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/data/projects';
import { getDomainTheme } from '@/lib/domain-theme';

interface Props {
  project: Project;
}

const ProjectDetailHero = ({ project }: Props) => {
  const navigate = useNavigate();
  const theme = getDomainTheme(project.domain);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-15`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Glow orbs */}
      <div className={`absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br ${theme.gradient} opacity-10 blur-[120px] rounded-full`} />
      <div className={`absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-to-br ${theme.gradient} opacity-8 blur-[100px] rounded-full`} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* Domain badge */}
          <span className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold mb-6 ${theme.borderAccent} ${theme.accentBg} ${theme.accentText}`}>
            {project.domain}
          </span>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Tool tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className={`px-4 py-2 rounded-2xl text-sm font-medium bg-secondary/80 text-foreground border ${theme.borderAccent}`}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className={`rounded-2xl bg-gradient-to-r ${theme.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  style={{ boxShadow: theme.glow }}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </Button>
              </motion.div>
            )}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => navigate(-1)}
                size="lg"
                variant="outline"
                className={`rounded-2xl ${theme.borderAccent} hover:${theme.accentBg} transition-all duration-300`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous Page
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
