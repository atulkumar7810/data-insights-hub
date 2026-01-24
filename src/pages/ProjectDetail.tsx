import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Lightbulb, Target, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectNavigation from '@/components/ProjectNavigation';
import Footer from '@/components/Footer';
import { getProjectById } from '@/data/projects';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen bg-background">
      <ProjectNavigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} py-16 md:py-24`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 dot-pattern" />
          </div>
          
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Domain Badge */}
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
                {project.domain}
              </span>
              
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {project.title}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8">
                {project.fullDescription}
              </p>
              
              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-background/95 text-foreground text-sm font-medium rounded-xl shadow-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 shadow-lg"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Power BI Embed Section */}
        {project.powerBiEmbed && (
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileText className="w-7 h-7 text-accent" />
                  Interactive Dashboard
                </h2>
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
                  <iframe
                    title={`${project.title} Power BI Report`}
                    src={project.powerBiEmbed}
                    className="w-full aspect-[16/10] min-h-[500px] md:min-h-[600px]"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Project Images */}
        {project.images.length > 0 && !project.powerBiEmbed && (
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Project Preview
                </h2>
                <div className="grid gap-6">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="rounded-2xl overflow-hidden border border-border shadow-xl"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Content Sections */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Key Outcomes */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-accent" />
                  Key Outcomes
                </h2>
                <ul className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Approach */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-accent" />
                  Approach
                </h2>
                <ul className="space-y-4">
                  {project.approach.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-sm font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Key Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 lg:mt-12 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-accent" />
                Key Insights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.insights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-secondary/50 rounded-xl border border-border/50"
                  >
                    <p className="text-muted-foreground text-sm">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 lg:mt-12 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6 md:p-8"
            >
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                Conclusion & Recommendations
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.conclusion}
              </p>
            </motion.div>

            {/* Back to Projects */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group"
              >
                <Link to="/#projects">
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to All Projects
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
