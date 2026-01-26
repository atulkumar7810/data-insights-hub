import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { z } from 'zod';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, India',
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'atulkumarsingh7810@gmail.com',
    href: 'mailto:atulkumarsingh7810@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8074252857',
    href: 'tel:+918074252857',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'atulkumar-s',
    href: 'https://www.linkedin.com/in/atulkumar-s/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'atulkumar7810',
    href: 'https://github.com/atulkumar7810',
  },
];

const EMAILJS_SERVICE_ID = 'service_1njnomn';
const EMAILJS_TEMPLATE_ID = 'template_am31oat';
const EMAILJS_PUBLIC_KEY = '1FxKvIoUbpQKGLEBr';

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  subject: z
    .string()
    .trim()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  // Validate form on each change
  const validateField = (field: keyof FormData, value: string): string | undefined => {
    try {
      const fieldSchema = contactSchema.shape[field];
      fieldSchema.parse(value);
      return undefined;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors[0]?.message;
      }
      return 'Invalid input';
    }
  };

  // Check if form is valid
  const isFormValid = useMemo(() => {
    const result = contactSchema.safeParse(formData);
    return result.success;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Only validate if field has been touched
    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    const error = validateField(fieldName, value);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // Validate all fields
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        if (!newErrors[field]) {
          newErrors[field] = err.message;
        }
      });
      setErrors(newErrors);
      toast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form before submitting.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: result.data.name,
        name: result.data.name,
        from_email: result.data.email,
        email: result.data.email,
        reply_to: result.data.email,
        subject: result.data.subject,
        message: result.data.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again or contact me directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (field: keyof FormData) => {
    const baseClass = 'bg-background transition-all duration-200';
    if (touched[field] && errors[field]) {
      return `${baseClass} border-destructive focus-visible:ring-destructive`;
    }
    if (touched[field] && !errors[field] && formData[field]) {
      return `${baseClass} border-accent/50 focus-visible:ring-accent`;
    }
    return baseClass;
  };

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
              Contact Information
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Feel free to reach out through any of these channels. I'm always open to discussing 
              new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 md:gap-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm md:text-base text-foreground font-medium hover:text-accent transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm md:text-base text-foreground font-medium truncate">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 md:mt-10 p-4 md:p-6 bg-background rounded-xl"
            >
              <h4 className="font-display font-semibold text-foreground mb-3 md:mb-4">Quick Actions</h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <Button variant="outline" size="sm" asChild className="text-xs md:text-sm">
                  <a href="mailto:atulkumarsingh7810@gmail.com">
                    <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="text-xs md:text-sm">
                  <a href="https://www.linkedin.com/in/atulkumar-s/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                    Connect
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-elevated p-5 sm:p-6 md:p-8 rounded-2xl">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Send a Message
              </h3>

              {/* Success Message */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-sm text-accent font-medium">
                    Your message has been sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={getInputClassName('name')}
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {touched.name && errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="name-error"
                        className="text-xs text-destructive flex items-center gap-1 mt-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Your Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className={getInputClassName('email')}
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {touched.email && errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="email-error"
                        className="text-xs text-destructive flex items-center gap-1 mt-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Project Inquiry"
                    className={getInputClassName('subject')}
                    aria-invalid={touched.subject && !!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {touched.subject && errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="subject-error"
                      className="text-xs text-destructive flex items-center gap-1 mt-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project or inquiry..."
                    rows={4}
                    className={`${getInputClassName('message')} resize-none`}
                    aria-invalid={touched.message && !!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {touched.message && errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="message-error"
                      className="text-xs text-destructive flex items-center gap-1 mt-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </motion.p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/1000 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 md:w-5 md:h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;