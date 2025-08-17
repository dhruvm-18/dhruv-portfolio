import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, Menu, X, ArrowDown, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import dhruvProfilePic from '/dhruv.jpeg';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Unified Knowledge Platform",
      description: "Enterprise RAG chatbot using LangChain, FAISS, and Gemini APIs for document retrieval and Q&A.",
      tech: ["React", "Flask", "LangChain", "FAISS", "Python"],
      link: "https://github.com/dhruvm-18/UnifiedKnowledgePlatform",
      year: "2025"
    },
    {
      title: "Crisis Reporting Platform",
      description: "Full-stack disaster management platform with interactive maps and real-time data feeds.",
      tech: ["React", "Flask", "Leaflet.js", "Material UI"],
      link: "https://github.com/dhruvm-18/CrisisReporting",
      year: "2025"
    },
    {
      title: "Hybrid Stock Prediction",
      description: "LSTM-GARCH hybrid model for S&P 500 forecasting with 99% accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "ARCH"],
      link: "https://github.com/dhruvm-18/Stock-market-model",
      year: "2025"
    },
    {
      title: "Product Sentiment Analyzer",
      description: "NLP application for real-time product review sentiment analysis.",
      tech: ["FastAPI", "React", "NLTK", "PostgreSQL"],
      link: "https://github.com/dhruvm-18/Product-Sentiment-Analysis",
      year: "2025"
    }
  ];

  const experiences = [
    {
      company: "Ernst & Young (EY)",
      role: "AI Intern – Generative AI & RAG Systems",
      period: "May 2025 - July 2025",
      location: "Delhi, India",
      description: "Developed enterprise RAG pipelines using LangChain, FAISS, and Gemini APIs with 30% improvement in response relevance."
    },
    {
      company: "Deloitte Touche Tohmatsu India LLP",
      role: "Software Engineering Intern – Cloud Computing",
      period: "May 2024 – July 2024",
      location: "Gurugram, India",
      description: "Gained hands-on experience with 40+ AWS services including EC2, S3, Lambda, and IAM with focus on cloud architecture."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    "Python", "JavaScript", "React", "Node.js", "TensorFlow", "LangChain", 
    "FastAPI", "PostgreSQL", "AWS", "Docker", "Git"
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-950 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-950/80 border-gray-800' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              Dhruv
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-500 ${
                    activeSection === item.id ? 'text-blue-500' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className={`absolute right-0 top-0 h-full w-80 p-6 shadow-lg ${
                isDarkMode ? 'bg-gray-950' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-lg font-medium hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    variant="ghost"
                    onClick={toggleTheme}
                    className="w-full justify-start"
                  >
                    {isDarkMode ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>     
 {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={dhruvProfilePic}
              alt="Dhruv Mendiratta"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500/20"
            />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Dhruv Mendiratta
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              AI Engineer & Full-Stack Developer
            </p>
            
            <p className={`text-lg max-w-2xl mx-auto mb-12 leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate about building intelligent systems with RAG, LLMs, and modern web technologies. 
              Currently pursuing B.Tech in Computer Science at Manipal University Jaipur.
            </p>
            
            <div className="flex items-center justify-center space-x-6">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href="https://github.com/dhruvm-18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href="https://www.linkedin.com/in/dhruv-mendiratta-132a46255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              
              <Button
                size="lg"
                asChild
                className="group bg-blue-600 hover:bg-blue-700"
              >
                <a
                  href="mailto:dhruv.mendiratta4@gmail.com"
                  className="flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Contact</span>
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I'm a passionate AI engineer and full-stack developer with expertise in building 
                  intelligent systems using cutting-edge technologies like RAG, LangChain, and modern web frameworks.
                </p>
                
                <p className={`text-lg leading-relaxed mb-8 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Currently pursuing my B.Tech in Computer Science at Manipal University Jaipur, 
                  I've gained valuable experience through internships at Ernst & Young and Deloitte, 
                  working on enterprise-grade AI solutions and cloud computing projects.
                </p>
                
                <Button
                  variant="outline"
                  asChild
                  className="group"
                >
                  <a
                    href="/Dhruv_Mendiratta_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <span>View Resume</span>
                    <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className={`${
                    isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
                  }`}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{exp.company}</CardTitle>
                          <p className="text-lg font-medium text-blue-500">{exp.role}</p>
                        </div>
                        <div className={`text-sm mt-2 md:mt-0 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <div className="flex items-center space-x-1 mb-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className={`${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full group hover:shadow-lg transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' : 'bg-white border-gray-200 hover:shadow-xl'
                  }`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 group-hover:text-blue-500 transition-colors">
                            {project.title}
                          </CardTitle>
                          <p className={`text-sm ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {project.year}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className={`mb-4 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            
            <p className={`text-lg mb-12 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always interested in discussing new opportunities, innovative projects, 
              or just having a conversation about technology and AI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 group"
              >
                <a
                  href="mailto:dhruv.mendiratta4@gmail.com"
                  className="flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Send Email</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href="https://www.linkedin.com/in/dhruv-mendiratta-132a46255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2025 Dhruv Mendiratta. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;