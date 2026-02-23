import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/data/projects';

interface Props {
  project: Project;
}

const ProjectDetailHero = ({ project }: Props) => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Glow orbs */}
      <div className={`absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br ${project.gradient} opacity-10 blur-[120px] rounded-full`} />
      <div className={`absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-to-br ${project.gradient} opacity-8 blur-[100px] rounded-full`} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* Domain badge */}
          <Badge variant="accent" className="mb-6 text-sm px-4 py-1.5">
            {project.domain}
          </Badge>

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
                className="px-4 py-2 rounded-xl text-sm font-medium bg-secondary/80 text-foreground border border-border/50"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-foreground text-background hover:bg-foreground/90"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-border/50"
            >
              <Link to="/#projects">
                <Eye className="w-5 h-5 mr-2" />
                Preview
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
