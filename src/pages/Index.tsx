import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Award, Code, Brain, Zap, Users, BookOpen, Calendar, MapPin, Phone, Moon, Sun, GraduationCap, Briefcase, User, Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import dhruvProfilePic from '/dhruv.jpeg';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Dhruv_Mendiratta_Detailed_Resume.pdf';
    link.download = 'Dhruv_Mendiratta_Detailed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      company: "Ernst & Young (EY)",
      position: "AI Intern – Generative AI & RAG Systems",
      location: "Delhi, India",
      period: "May 2025 - Present",
      logo: "🏢",
      achievements: [
        "Developed RAG-based enterprise AI chatbots using LangChain, FAISS, and Gemini APIs",
        "Designed and optimized LLM pipelines with 30% improved contextual accuracy",
        "Built scalable ingestion systems with chunking strategies and efficient embedding models",
        "Implemented prompt engineering and vector store tuning"
      ]
    },
    {
      company: "Deloitte Touche Tohmatsu India LLP",
      position: "Software Engineering Intern – Cloud Computing (AWS)",
      location: "Gurugram, India",
      period: "May 2024 – Jul 2024",
      logo: "☁️",
      achievements: [
        "Completed intensive AWS services training including EC2, S3, and Lambda",
        "Participated in cloud-based solution development with senior engineers",
        "Learned cloud architecture best practices and cost optimization",
        "Contributed to DevOps tooling and AWS ecosystem documentation"
      ]
    }
  ];

  const education = [
    {
      institution: "Manipal University Jaipur",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Sep 2022 - Present (Expected 2026)",
      location: "Jaipur, India",
      achievements: [
        "Student Excellence Award for outstanding overall performance (5th & 6th semester)",
        "Active Member – Google Developer Student Club (GDSC) – AI/ML & Full Stack Domains",
        "Published 3 AI-focused research papers (Deep Learning, RAG Systems, Stock Forecasting)"
      ]
    },
    {
      institution: "The Vivekanand School",
      degree: "Class XII",
      period: "July 2022",
      location: "Delhi, India",
      achievements: []
    }
  ];

  const projects = [
    {
      title: "Enterprise RAG Chatbot",
      period: "May 2025 - July 2025",
      tech: ["LangChain", "FAISS", "Gemini APIs", "Python", "LLMs"],
      description: "Developed an internal enterprise chatbot using Retrieval-Augmented Generation (RAG) techniques for efficient document retrieval and question answering.",
      achievements: [
        "Integrated vector search (FAISS) with Gemini APIs and LangChain pipelines",
        "30% gain in response relevance through optimization",
        "Advanced prompt engineering and document chunking"
      ],
      gradient: "from-purple-500 to-pink-500",
      icon: "🤖"
    },
    {
      title: "Hybrid Stock Price Prediction",
      period: "Jan 2025",
      tech: ["Python", "TensorFlow", "Keras", "Pandas", "ARCH", "Matplotlib"],
      description: "Designed a hybrid model combining LSTM (time-series) and GARCH (volatility modeling) for S&P 500 data forecasting.",
      achievements: [
        "Achieved R² = 0.9901, RMSE = 0.0125 prediction accuracy",
        "Submitted findings for academic publication",
        "Advanced feature engineering and cross-validation"
      ],
      gradient: "from-blue-500 to-cyan-500",
      icon: "📈"
    },
    {
      title: "Product Sentiment Analyzer",
      period: "March 2025",
      tech: ["FastAPI", "React", "NLTK", "PostgreSQL", "Chart.js"],
      description: "Full-stack NLP application with custom sentiment analysis algorithm for product review classification.",
      achievements: [
        "Real-time review processing and analysis",
        "Dynamic graphs and visual sentiment indicators",
        "Keyphrase extraction for customer feedback themes"
      ],
      gradient: "from-green-500 to-emerald-500",
      icon: "💭"
    },
    {
      title: "Railway Ticketing Chatbot",
      period: "May 2025",
      tech: ["Python", "NLTK"],
      description: "Built a rule-based chatbot simulating a train ticket booking flow using keyword mapping and intent matching.",
      achievements: [
        "Rule-based chatbot with keyword mapping",
        "Text interface and input validation pipeline",
        "Applied early NLP techniques for query classification"
      ],
      gradient: "from-orange-500 to-red-500",
      icon: "🚂"
    }
  ];

  const skillGroups = [
    { category: "Programming", icon: "💻", skills: ["Python", "C", "JavaScript", "SQL"] },
    { category: "Frontend", icon: "🌐", skills: ["HTML/CSS", "React"] },
    { category: "Backend", icon: "🟩", skills: ["Node.js", "FastAPI", "REST APIs"] },
    { category: "Data Science", icon: "📊", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Feature Engineering", "Model Evaluation"] },
    { category: "Machine/Deep Learning", icon: "🧠", skills: ["Scikit-learn", "TensorFlow", "Keras", "CNN", "LSTM", "BiLSTM-GRU", "GANs", "XGBoost", "Grad-CAM"] },
    { category: "Cloud/DevOps", icon: "☁️", skills: ["AWS (EC2, S3, Lambda)", "Docker", "Git & GitHub", "CI/CD"] },
    { category: "Database", icon: "🗄️", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Visualization", icon: "📈", skills: ["PowerBI", "Chart.js"] },
    { category: "AI/LLM", icon: "🔗", skills: ["LLMs", "LangChain", "RAG", "Prompt Engineering", "FAISS"] },
    { category: "Research", icon: "📝", skills: ["Academic Writing", "Paper Presentation", "Literature Review"] }
  ];

  const publications = [
    {
      title: "Skin Disease Detection using Deep Learning",
      venue: "CML 2025, Sikkim Manipal University",
      description: "Achieved 96.3% accuracy with hybrid CNN, GAN, and XGBoost model"
    },
    {
      title: "Enhanced Stock Market Forecasting Using Hybrid BiLSTM-GRU Models",
      venue: "ICAESRTA 2K25, KBP College of Engineering",
      description: "R² = 0.9901 accuracy with advanced preprocessing and cross-validation"
    },
    {
      title: "Driving Medical Diagnostics Forward: The Role of AI",
      venue: "Cuestiones de Fisioterapia Journal",
      description: "Comprehensive review of AI applications in healthcare diagnostics"
    }
  ];

  const themeClasses = isDarkMode 
    ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white"
    : "bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 text-gray-900";

  const cardClasses = isDarkMode
    ? "bg-slate-800/60 border-slate-600/50 text-white"
    : "bg-white/80 border-blue-200/50 text-gray-900";

  const navClasses = isDarkMode
    ? "bg-slate-800/80 border-slate-600/50"
    : "bg-white/80 border-blue-200/50";

  return (
    <div ref={containerRef} className={`min-h-screen transition-all duration-500 ${themeClasses} overflow-x-hidden`}>
      {/* Floating Navigation - Desktop */}
      <motion.nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex justify-center items-center backdrop-blur-md ${navClasses} rounded-full px-4 py-2 border shadow-xl`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2 md:gap-x-4">
          {['Hero', 'About', 'Experience', 'Education', 'Projects', 'Skills', 'Honors', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                isDarkMode ? 'text-slate-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {item}
            </button>
          ))}
          <div className="flex items-center space-x-1 md:space-x-2 ml-2 pl-2 border-l border-slate-400/30">
            <Sun className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-yellow-500'}`} />
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
            <Moon className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-slate-400'}`} />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button size="icon" variant="outline" onClick={() => setIsMobileMenuOpen(true)} className={`${navClasses} rounded-full`}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-lg"
          >
            <div className="flex justify-end p-4">
              <Button size="icon" variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-6 -mt-16">
              {['Hero', 'About', 'Experience', 'Education', 'Projects', 'Skills', 'Honors', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-semibold text-slate-100 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center space-x-4 mt-8">
                <Sun className={`w-6 h-6 ${isDarkMode ? 'text-slate-400' : 'text-yellow-500'}`} />
                <Switch checked={isDarkMode} onCheckedChange={toggleTheme} id="mobile-theme-switch" />
                <Moon className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-slate-400'}`} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-0 px-2 md:px-0">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30' : 'bg-gradient-to-r from-blue-100/30 to-indigo-100/30'}`} />
          {/* Animated background particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Profile Card - inspired by your reference */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`${cardClasses} backdrop-blur-md rounded-3xl p-8 mb-8 border shadow-2xl`}
          >
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1 mx-auto md:mx-0">
                  <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-white'} flex items-center justify-center text-4xl`}>
                    <img src={dhruvProfilePic} alt="Dhruv Mendiratta" className="rounded-full w-full h-full object-cover" />
                  </div>
                </div>
                <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full ${isDarkMode ? 'bg-green-500' : 'bg-green-400'} border-4 ${isDarkMode ? 'border-slate-800' : 'border-white'} flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>
              
              <div className="text-left">
                <div className="flex items-center space-x-4 mb-2">
                  <h1 className={`text-2xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Dhruv Mendiratta
                  </h1>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30">AI Engineer</Badge>
                </div>
                <p className={`text-base md:text-lg mb-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                  LLMs & RAG Systems | Full-Stack Developer
                </p>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
                  <span className={`flex items-center ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Available for work
                  </span>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>🕐 Delhi, India (IST)</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mt-6">
              <Button asChild className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full">
                <a href="mailto:dhruv.mendiratta4@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Hire Me
                </a>
              </Button>
              <Button variant="outline" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-emerald-500 hover:border-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" onClick={handleDownloadResume}>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className={`text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}
          >
            Building the future of AI with RAG systems, deep learning, and scalable solutions. 
            Published researcher passionate about human-aligned AI that bridges research and real-world impact.
          </motion.p>

          {/* Status Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className={`${cardClasses} backdrop-blur-md rounded-2xl p-3 md:p-4 max-w-xs md:max-w-md mx-auto border`}
          >
            <div className="flex items-center justify-center space-x-3">
              <Code className="w-5 h-5 text-purple-500" />
              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Currently Debugging Life's Edge Cases
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown 
            className={`w-8 h-8 cursor-pointer ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} 
            onClick={() => scrollToSection('about')} 
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <User className={`w-7 h-7 md:w-8 md:h-8 mr-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                Who Am I?
              </h2>
            </div>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto mb-6 md:mb-8`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                Final-year Computer Science student with hands-on experience developing Retrieval-Augmented Generation (RAG) 
                AI systems during a Generative AI internship at EY. I specialize in leveraging tools like LangChain, FAISS, 
                and Gemini APIs to build scalable AI solutions.
              </p>
              <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                With a strong foundation in cloud computing through AWS-focused experience at Deloitte, I've published research 
                in applied deep learning, contributing to CNN, GAN, and hybrid LSTM-GRU models for finance and medical imaging.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "3+", label: "Research Papers", color: "blue" },
                  { number: "2", label: "Internships", color: "indigo" },
                  { number: "4+", label: "Major Projects", color: "cyan" },
                  { number: "5+", label: "Awards", color: "emerald" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-2xl sm:text-3xl font-bold mb-2 ${isDarkMode ? `text-${stat.color}-400` : `text-${stat.color}-600`}`}>
                      {stat.number}
                    </div>
                    <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              {[
                { icon: Brain, title: "AI & Machine Learning", desc: "Specialized in RAG systems, LLMs, and deep learning with published research", color: "blue" },
                { icon: Code, title: "Full-Stack Development", desc: "Building scalable applications with React, FastAPI, and cloud technologies", color: "indigo" },
                { icon: BookOpen, title: "Research & Innovation", desc: "Published researcher with focus on practical AI applications", color: "cyan" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`${cardClasses} backdrop-blur-sm rounded-xl border`}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center mb-3">
                      <item.icon className={`w-6 h-6 md:w-8 md:h-8 mr-3 ${isDarkMode ? `text-${item.color}-400` : `text-${item.color}-600`}`} />
                      <h3 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>{item.title}</h3>
                    </div>
                    <p className={`text-sm md:text-base ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{item.desc}</p>
                  </CardContent>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 px-4 sm:px-6 md:py-20 ${isDarkMode ? 'bg-slate-900/20' : 'bg-blue-50/50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <Briefcase className={`w-7 h-7 md:w-8 md:h-8 mr-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>Experience</h2>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`${cardClasses} backdrop-blur-sm border hover:shadow-2xl transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="text-3xl md:text-4xl">{exp.logo}</div>
                        <div>
                          <CardTitle className={`text-xl md:text-2xl mb-1 md:mb-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{exp.company}</CardTitle>
                          <CardDescription className={`text-base md:text-lg ${isDarkMode ? 'text-slate-200' : 'text-gray-700'}`}>{exp.position}</CardDescription>
                        </div>
                      </div>
                      <div className="text-left md:text-right mt-3 md:mt-0">
                        <div className={`flex items-center text-sm mb-1 md:mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className={`flex items-center text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 pl-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <Zap className={`w-4 h-4 mr-2 md:mr-3 mt-1 flex-shrink-0 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                          <span className={`text-sm md:text-base ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <GraduationCap className={`w-7 h-7 md:w-8 md:h-8 mr-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                Education
              </h2>
            </div>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto`}></div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`${cardClasses} backdrop-blur-sm border hover:shadow-2xl transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className={`text-xl md:text-2xl mb-1 md:mb-2 ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>{edu.institution}</CardTitle>
                        <CardDescription className={`text-base md:text-lg ${isDarkMode ? 'text-slate-200' : 'text-gray-700'}`}>{edu.degree}</CardDescription>
                      </div>
                      <div className="text-left md:text-right mt-3 md:mt-0">
                        <div className={`flex items-center text-sm mb-1 md:mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className={`flex items-center text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.achievements.length > 0 && (
                    <CardContent>
                      <ul className="space-y-2 pl-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Award className={`w-4 h-4 mr-2 md:mr-3 mt-1 flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                            <span className={`text-sm md:text-base ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 sm:px-6 md:py-20 ${isDarkMode ? 'bg-slate-900/20' : 'bg-blue-50/50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className={`h-full border-0 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 ${isDarkMode ? 'bg-slate-800/80' : 'bg-white/90'} ${isDarkMode ? 'border-slate-700' : 'border-blue-200'}`}>
                  <div className={`bg-gradient-to-r ${project.gradient} p-1 rounded-lg`}>
                    <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg h-full`}>
                      <CardHeader className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-3xl md:text-4xl">{project.icon}</div>
                          <ExternalLink className={`w-5 h-5 ${isDarkMode ? 'text-slate-400 group-hover:text-slate-200' : 'text-gray-400 group-hover:text-gray-600'} transition-colors`} />
                        </div>
                        <CardTitle className={`text-xl ${isDarkMode ? 'text-white group-hover:text-blue-200' : 'text-gray-900 group-hover:text-blue-600'} transition-colors`}>
                          {project.title}
                        </CardTitle>
                        <CardDescription className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
                          {project.period}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary" className={`${isDarkMode ? 'bg-indigo-600/20 text-indigo-300 border-indigo-400/30' : 'bg-indigo-100 text-indigo-700 border-indigo-300'}`}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className={`mb-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{project.description}</p>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <Award className={`w-3 h-3 mr-2 mt-1 flex-shrink-0 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                              <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 md:mt-20"
          >
            <h3 className={`text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>Research Publications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`${cardClasses} backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300 border`}>
                    <CardHeader>
                      <CardTitle className={`text-base md:text-lg ${isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>{pub.title}</CardTitle>
                      <CardDescription className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{pub.venue}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{pub.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>Skills & Expertise</h2>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto mb-6 md:mb-8`}></div>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Here are key areas of my expertise, shaped by my academic & professional experience</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${cardClasses} backdrop-blur-sm rounded-xl p-4 md:p-6 border hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-center mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl mr-2">{group.icon}</span>
                  <span className={`text-base md:text-lg font-semibold ${isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>{group.category}</span>
                </div>
                <ul className="flex flex-wrap gap-1 md:gap-2">
                  {group.skills.map((skill, i) => (
                    <li key={i} className={`px-2 py-1 md:px-3 rounded-full text-xs md:text-sm font-medium ${isDarkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' : 'bg-blue-100 text-blue-700 border border-blue-300'}`}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors & Awards and Certifications Section */}
      <section id="honors" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>Honors & Awards</h2>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto mb-6 md:mb-8`}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className={`${cardClasses} backdrop-blur-sm rounded-xl p-4 md:p-6 border flex flex-col gap-4 items-start`}>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>Student Excellence Award</div>
              <div className="text-slate-400 text-sm mb-4">Recognized for overall academic and technical performance in the 5th semester at Manipal University Jaipur</div>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>HACKX Hackathon – Round 2 Finalist (2024)</div>
              <div className="text-slate-400 text-sm mb-4">Advanced to the final round of a university-level hackathon hosted by Manipal University Jaipur</div>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>Paper Presentation – CML 2025, Sikkim Manipal University</div>
              <div className="text-slate-400 text-sm mb-4">Presented a paper on Skin Disease Detection using Deep Learning</div>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>Paper Presentation – ICAESRTA 2K25, KBP College of Engineering</div>
              <div className="text-slate-400 text-sm">Presented research on hybrid stock forecasting using BiLSTM-GRU models</div>
            </div>
            <div className={`${cardClasses} backdrop-blur-sm rounded-xl p-4 md:p-6 border flex flex-col gap-4 items-start`}>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>NPTEL – Design & Analysis of Algorithms (SWAYAM, Govt. of India)</div>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>Deloitte Internship Certificate – Cloud Computing & AWS (EC2, S3, Lambda)</div>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>Cisco Certified Cybersecurity Specialist</div>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>Java Foundation Course – Oracle</div>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>IBM – Getting Started with Enterprise AI</div>
              <div className="flex items-center text-base md:text-lg font-semibold mb-2"><span className="mr-2"></span>Vanderbilt University – MATLAB for Data, Signal & Image Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 sm:px-6 md:py-20 ${isDarkMode ? 'bg-slate-900/20' : 'bg-blue-50/50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>
              Let's Connect
            </h2>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto mb-6 md:mb-8`}></div>
            <p className={`text-lg md:text-xl mb-8 md:mb-12 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              Ready to build the future of AI together? Let's discuss your next project.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              {[
                { icon: Mail, title: "Email", info: "dhruv.mendiratta4@gmail.com", color: "blue" },
                { icon: Phone, title: "Phone", info: "+91 901 366 9130", color: "indigo" },
                { icon: MapPin, title: "Location", info: "Delhi, India", color: "cyan" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${cardClasses} backdrop-blur-sm rounded-lg border p-4 md:p-6`}
                >
                  <contact.icon className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 ${isDarkMode ? `text-${contact.color}-400` : `text-${contact.color}-600`}`} />
                  <h3 className={`text-base md:text-lg font-semibold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>{contact.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{contact.info}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center space-x-4 md:space-x-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/dhruv-mendiratta", color: "blue" },
                { icon: Github, href: "https://github.com/dhruvm-18", color: "slate" },
                { icon: Mail, href: "mailto:dhruv.mendiratta4@gmail.com", color: "cyan" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className={`p-3 md:p-4 ${isDarkMode ? `bg-gradient-to-br from-${social.color}-600/20 to-${social.color}-600/40 border-${social.color}-400/30 hover:border-${social.color}-400` : `bg-gradient-to-br from-${social.color}-100 to-${social.color}-200 border-${social.color}-300 hover:border-${social.color}-400`} rounded-full border transition-all duration-300`}
                >
                  <social.icon className={`w-5 h-5 md:w-6 md:h-6 ${isDarkMode ? `text-${social.color}-400` : `text-${social.color}-600`}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 md:py-8 px-4 sm:px-6 border-t ${isDarkMode ? 'border-slate-600/50' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            © 2025 Dhruv Mendiratta. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
