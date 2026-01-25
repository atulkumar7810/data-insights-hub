import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor's Degree in Economics",
    institution: 'Osmania University',
    location: 'Hyderabad, India',
    duration: 'Jun 2019 – Jun 2022',
    description: 'Developed strong analytical and quantitative skills with focus on economic data analysis and statistical methods.',
  },
  {
    degree: 'Higher Secondary School',
    institution: 'Army Public School, Golconda',
    location: 'Hyderabad, India',
    duration: 'Jun 2017 – Jun 2019',
    description: 'Completed higher secondary education with focus on Commerce and Mathematics.',
  },
];

const certifications = [
  {
    title: 'Google Data Analytics',
    issuer: 'Coursera',
    icon: '📊',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/google-data-analytics',
  },
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Coursera',
    icon: '📈',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/google-advanced-data-analytics',
  },
  {
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Coursera',
    icon: '📉',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/microsoft-power-bi',
  },
  {
    title: 'Advanced Data Science and AI',
    issuer: 'Skillslash Academy',
    icon: '🤖',
    credentialUrl: 'https://skillslash.com/verify',
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Education & Certifications
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Academic Background
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey and professional certifications in data analytics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Education
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

              <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className="relative pl-12 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-10 h-10 bg-background border-2 border-accent rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors z-10">
                      <span className="text-lg">🎓</span>
                    </div>

                    {/* Card */}
                    <div className="card-elevated p-6 rounded-xl group-hover:shadow-lg group-hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-accent font-medium mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card-elevated p-5 rounded-xl group hover:shadow-lg hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-2xl group-hover:bg-accent/20 transition-colors shrink-0">
                      📜
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-base font-semibold text-foreground mb-1 leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <span className="text-accent">{cert.icon}</span>
                        {cert.issuer}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg"
            >
              <p className="text-sm text-muted-foreground">
                <span className="text-accent font-medium">Continuous Learning:</span>{' '}
                Committed to staying updated with the latest tools and techniques in data analytics and business intelligence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
