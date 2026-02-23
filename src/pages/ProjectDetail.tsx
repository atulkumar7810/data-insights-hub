import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Lightbulb, Target, FileText, BookOpen, Play, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectNavigation from '@/components/ProjectNavigation';
import Footer from '@/components/Footer';
import ProjectDetailHero from '@/components/project-detail/ProjectDetailHero';
import ImpactMetrics from '@/components/project-detail/ImpactMetrics';
import CaseStudySection from '@/components/project-detail/CaseStudySection';
import { getProjectById } from '@/data/projects';
import { getDomainTheme } from '@/lib/domain-theme';
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
            <Button onClick={() => navigate(-1)} className="rounded-2xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Page
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const theme = getDomainTheme(project.domain);

  return (
    <div className="min-h-screen bg-background">
      <ProjectNavigation />

      <main className="pt-20">
        <ProjectDetailHero project={project} />
        <ImpactMetrics project={project} />

        {/* Power BI Dashboard */}
        {project.powerBiEmbed && (
          <CaseStudySection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <FileText className={`w-7 h-7 ${theme.accentText}`} />
              Interactive Dashboard
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Explore the live dashboard with interactive filters and drill-through capabilities.
            </p>
            <div className={`rounded-2xl overflow-hidden border ${theme.borderAccent} shadow-2xl bg-card backdrop-blur-sm`}>
              <iframe
                title={`${project.title} Power BI Report`}
                src={project.powerBiEmbed}
                className="w-full aspect-[16/10] min-h-[500px] md:min-h-[600px]"
                allowFullScreen
              />
            </div>
          </CaseStudySection>
        )}

        {/* LinkedIn Video for Gurgaon OR Image Gallery */}
        {project.id === 'gurgaon-real-estate' ? (
          <CaseStudySection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Project Walkthrough
            </h2>
            <div className={`rounded-2xl overflow-hidden border ${theme.borderAccent} shadow-2xl bg-card flex justify-center`}>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7171496475602968576?compact=1"
                className="w-full max-w-3xl aspect-video"
                allowFullScreen
                title="Gurgaon Real Estate Project Demo"
              />
            </div>
          </CaseStudySection>
        ) : project.images.length > 0 && !project.powerBiEmbed ? (
          <CaseStudySection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Project Preview
            </h2>
            <div className="grid gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl overflow-hidden border ${theme.borderAccent} shadow-xl`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </CaseStudySection>
        ) : null}

        {/* Walkthrough Video Placeholder */}
        {project.id !== 'gurgaon-real-estate' && (
          <CaseStudySection className="bg-secondary/20">
            <div className={`rounded-2xl border ${theme.borderAccent} bg-card p-10 md:p-16 shadow-lg`}>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full ${theme.accentBg} flex items-center justify-center`}>
                    <Video className={`w-9 h-9 ${theme.accentText}`} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full ${theme.accentBg} flex items-center justify-center backdrop-blur-sm`}>
                      <Play className={`w-4 h-4 ${theme.accentText} ml-0.5`} />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                  🎥 Project Walkthrough Video
                </h3>
                <p className="text-muted-foreground text-sm">Coming Soon</p>
                <div className={`mt-6 w-full max-w-md h-44 rounded-2xl border-2 border-dashed ${theme.borderAccent} flex items-center justify-center bg-secondary/20`}>
                  <div className="text-muted-foreground/40 text-sm flex flex-col items-center gap-2">
                    <Play className="w-7 h-7" />
                    <span>Video will appear here</span>
                  </div>
                </div>
              </div>
            </div>
          </CaseStudySection>
        )}

        {/* PDF Documentation */}
        {project.pdf && (
          <CaseStudySection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <BookOpen className={`w-7 h-7 ${theme.accentText}`} />
              Project Documentation
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Detailed documentation covering methodology, analysis, and findings.
            </p>
            <div className={`rounded-2xl overflow-hidden border ${theme.borderAccent} shadow-2xl bg-card`}>
              <iframe
                title={`${project.title} Documentation`}
                src={project.pdf}
                className="w-full min-h-[600px] md:min-h-[750px]"
                allowFullScreen
              />
            </div>
          </CaseStudySection>
        )}

        {/* Key Outcomes + Approach */}
        <CaseStudySection>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className={`rounded-2xl border ${theme.borderAccent} bg-card p-8 shadow-lg`}>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className={`w-6 h-6 ${theme.accentText}`} />
                Key Outcomes
              </h2>
              <ul className="space-y-4">
                {project.outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`flex items-start gap-3 p-3 rounded-xl bg-secondary/40 border border-border/30`}
                  >
                    <CheckCircle2 className={`w-5 h-5 ${theme.accentText} shrink-0 mt-0.5`} />
                    <span className="text-muted-foreground text-sm">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className={`rounded-2xl border ${theme.borderAccent} bg-card p-8 shadow-lg`}>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className={`w-6 h-6 ${theme.accentText}`} />
                Approach
              </h2>
              <ul className="space-y-4">
                {project.approach.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-secondary/40 border border-border/30"
                  >
                    <span className={`w-6 h-6 rounded-full ${theme.accentBg} ${theme.accentText} text-xs font-bold flex items-center justify-center shrink-0`}>
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground text-sm">{step}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </CaseStudySection>

        {/* Key Insights */}
        <CaseStudySection className="bg-secondary/20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Lightbulb className={`w-7 h-7 ${theme.accentText}`} />
            Key Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.insights.map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border ${theme.borderAccent} bg-card p-6 shadow-md`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-[0.05]`} />
                <div className="relative z-10">
                  <div className={`w-8 h-8 rounded-lg ${theme.accentBg} flex items-center justify-center mb-3`}>
                    <Lightbulb className={`w-4 h-4 ${theme.accentText}`} />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{insight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CaseStudySection>

        {/* Conclusion */}
        <CaseStudySection>
          <div className={`relative overflow-hidden rounded-2xl border ${theme.borderAccent} p-10 md:p-14 backdrop-blur-sm`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-[0.08]`} />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Conclusion & Recommendations
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {project.conclusion}
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Back */}
        <div className="pb-24 text-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button
              onClick={() => navigate(-1)}
              size="lg"
              variant="outline"
              className={`rounded-2xl ${theme.borderAccent} hover:shadow-lg transition-all duration-300`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous Page
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
