import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Folder, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectNavigation from '@/components/ProjectNavigation';
import Footer from '@/components/Footer';
import { getProjectById } from '@/data/projects';
import { useEffect } from 'react';

const ProjectDemo = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <ProjectNavigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const hasDemo = project.powerBiEmbed || project.images.length > 0;

  if (!hasDemo) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <ProjectNavigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Demo Not Available</h1>
            <p className="text-muted-foreground mb-6">This project doesn't have a demo available yet.</p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to={`/project/${project.id}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View Project Details
                </Link>
              </Button>
              <Button asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ProjectNavigation />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/#projects" className="hover:text-foreground transition-colors">Projects</Link>
            <span>/</span>
            <Link to={`/project/${project.id}`} className="hover:text-foreground transition-colors">{project.title}</Link>
            <span>/</span>
            <span className="text-foreground">Demo</span>
          </motion.div>

          {/* Demo Card - Matching Project Card Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden bg-card border border-border shadow-xl"
          >
            {/* Card Header with Gradient - Matching Project Card */}
            <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} py-8 px-6 md:py-12 md:px-8`}>
              {/* Animated pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 dot-pattern" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute bottom-8 right-12 w-16 h-16 border border-white/20 rounded-lg rotate-45"
                animate={{ rotate: [45, 225] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              <div className="relative">
                {/* Domain Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-lg mb-4">
                  <Folder className="w-3.5 h-3.5" />
                  {project.domain}
                </span>
                
                <h1 className="font-display text-2xl md:text-4xl font-bold text-white mb-3">
                  {project.title}
                </h1>
                
                <p className="text-white/90 text-sm md:text-base max-w-2xl mb-6">
                  {project.description}
                </p>
                
                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-background/95 text-foreground text-xs font-medium rounded-lg shadow-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-white text-foreground hover:bg-white/90 shadow-lg"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Link to={`/project/${project.id}`}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Full Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Demo Content */}
            <div className="p-6 md:p-8">
              {/* Power BI Embed */}
              {project.powerBiEmbed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Interactive Dashboard
                  </h2>
                  <div className="rounded-xl overflow-hidden border border-border bg-secondary/30">
                    <iframe
                      title={`${project.title} Power BI Report`}
                      src={project.powerBiEmbed}
                      className="w-full aspect-[16/10] min-h-[500px] md:min-h-[650px]"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              )}

              {/* Project Images/Screenshots */}
              {project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: project.powerBiEmbed ? 0.3 : 0.2 }}
                  className="mb-8"
                >
                  <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    {project.powerBiEmbed ? 'Additional Screenshots' : 'Project Preview'}
                  </h2>
                  <div className="grid gap-4">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden border border-border shadow-lg"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Key Outcomes Summary */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-secondary/50 rounded-xl p-6 border border-border/50"
              >
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Key Outcomes
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2" />
                      <span className="text-sm text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button asChild variant="outline" size="lg">
              <Link to={`/project/${project.id}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Project Details
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/#projects">
                Back to All Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDemo;
