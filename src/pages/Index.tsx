import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Award, Code, Brain, Zap, Users, BookOpen, Calendar, MapPin, Phone, Moon, Sun, GraduationCap, Briefcase, User, Download, Menu, X, CheckCircle, Eye, FileText, ChevronUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import dhruvProfilePic from '/dhruv.jpeg';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const containerRef = useRef<HTMLDivElement>(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  const [honorsTab, setHonorsTab] = useState<'awards' | 'certs'>('awards');

  const [projectFilter, setProjectFilter] = useState('All');

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
      icon: "🤖",
      image: "/PlaceholderRAG.jpg"
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
      icon: "📈",
      link: "https://github.com/dhruvm-18/Stock-market-model",
      image: "/PlaceholderStock.jpg"
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
      icon: "💭",
      link: "https://github.com/dhruvm-18/Product-Sentiment-Analysis",
      image: "/PlaceholderSentiment.jpg"
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
      icon: "🚂",
      link: "https://github.com/dhruvm-18/TicketBookingChatbot",
      image: "/PlaceholderRailway.jpg"
    }
  ];

  const projectCategories = [
    'All',
    ...Array.from(new Set(projects.flatMap(p =>
      [
        p.tech.some(t => ['React', 'FastAPI', 'Node.js'].includes(t)) ? 'Full-Stack Development' : null,
        p.tech.some(t => ['TensorFlow', 'Keras', 'Pandas', 'NLTK', 'Chart.js', 'Data Analysis'].includes(t)) ? 'Data Analysis & ML' : null,
        p.tech.some(t => ['LLMs', 'LangChain', 'RAG', 'AI', 'Gemini APIs'].includes(t)) ? 'AI & RAG Systems' : null,
      ].filter(Boolean)
    )))
  ];

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(p => {
        if (projectFilter === 'Full-Stack Development') {
          return p.tech.some(t => ['React', 'FastAPI', 'Node.js'].includes(t));
        }
        if (projectFilter === 'Data Analysis & ML') {
          return p.tech.some(t => ['TensorFlow', 'Keras', 'Pandas', 'NLTK', 'Chart.js', 'Data Analysis'].includes(t));
        }
        if (projectFilter === 'AI & RAG Systems') {
          return p.tech.some(t => ['LLMs', 'LangChain', 'RAG', 'AI', 'Gemini APIs'].includes(t));
        }
        return false;
      });

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

  const skillGroups = [
    { category: "Programming", icon: "💻", skills: ["Python", "C", "JavaScript", "SQL"] },
    { category: "Frontend", icon: "🌐", skills: ["HTML/CSS", "React"] },
    { category: "Backend", icon: "🟩", skills: ["Node.js", "FastAPI", "REST APIs"] },
    { category: "Data Science", icon: "📊", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Feature Engineering", "Model Evaluation"] },
    { category: "Machine/Deep Learning", icon: "🧠", skills: ["Scikit-learn", "TensorFlow", "Keras", "CNN", "LSTM", "BiLSTM-GRU", "GANs", "XGBoost", "Grad-CAM"] },
    { category: "Cloud/DevOps", icon: "☁️", skills: ["AWS (EC2, S3, Lambda)", "Git & GitHub", "CI/CD"] },
    { category: "Database", icon: "🗄️", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Visualization", icon: "📈", skills: ["PowerBI", "Chart.js"] },
    { category: "AI/LLM", icon: "🔗", skills: ["LLMs", "LangChain", "RAG", "Prompt Engineering", "FAISS"] },
    { category: "Research", icon: "📝", skills: ["Academic Writing", "Paper Presentation", "Literature Review"] }
  ];

  const certifications = [
    {
      icon: CheckCircle,
      title: 'NPTEL Design and Analysis of Algorithm',
      desc: 'SWAYAM',
      color: 'blue',
      link: 'https://drive.google.com/file/d/13RTH2AALJEI1O6s5hV183HIeQLZv5TF-/view?usp=sharing',
    },
    {
      icon: CheckCircle,
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      desc: 'Cisco',
      color: 'indigo',
      link: 'https://www.credly.com/badges/b31195bf-7e35-4ed1-b6d6-b64a31288abf/public_url',
    },
    {
      icon: CheckCircle,
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      desc: 'Cisco',
      color: 'indigo',
      link: 'https://www.credly.com/badges/cf53a1a9-fb6b-4272-a0d2-8611c5580306/public_url',
    },
    {
      icon: CheckCircle,
      title: 'Getting Started with Enterprise-grade AI',
      desc: 'IBM',
      color: 'cyan',
      link: 'https://www.credly.com/badges/8a873631-3c8a-43b9-808d-5efd941a6bfe/public_url',
    },
    {
      icon: CheckCircle,
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      desc: 'Amazon Web Services Academy',
      color: 'blue',
      link: 'https://www.credly.com/badges/6164f5df-9c25-4dd1-b221-6f5be898b043/public_url',
    },
    {
      icon: CheckCircle,
      title: 'Introduction to Data, Signal, and Image Analysis with MATLAB',
      desc: 'Vanderbilt University',
      color: 'orange',
    },
    {
      icon: CheckCircle,
      title: 'Introduction to Cybersecurity',
      desc: 'Cisco',
      color: 'yellow',
      link: 'https://drive.google.com/file/d/10ILT26y0j1zoETf6RP-vbzTyJGyqInUE/view?usp=sharing',
    },
    {
      icon: CheckCircle,
      title: 'Java Foundation Course',
      desc: 'Oracle',
      color: 'violet',
      link: 'https://drive.google.com/file/d/1eROtRLJQkiaUazcoztz4-f9Cs5Z5aTSN/view?usp=sharing',
    },
    {
      icon: CheckCircle,
      title: 'Certificate of Participation: Tata Imagination Challenge 2024',
      desc: 'This certificate provided by Tata group is proof of the sheer grit, hard work, & dedication of the participant through which he/she has participated in the Tata Imagination Challenge 2024. Unstop congratulates them on achieving yet another milestone.',
      color: 'red',
      link: 'https://unstop.com/certificate-preview/54bc4922-8c18-4dce-a92e-936ac2971bef',
    },
    {
      icon: CheckCircle,
      title: 'Certificate of Participation: TATA Crucible Campus Quiz 2024',
      desc: 'This certificate provided by Tata Group is proof of the sheer grit, hard work, & dedication of the participant through which he/she has participated in the TATA Crucible Campus Quiz 2024. Unstop congratulates them on achieving yet another milestone.',
      color: 'green',
      link: 'https://unstop.com/certificate-preview/dfb6861c-9538-4bf3-92dc-7d5974a78f6a',
    },
    {
      icon: CheckCircle,
      title: 'HTML Tutorial Certification',
      desc: 'HTML Tutorial Completion',
      color: 'rose',
      link: 'https://drive.google.com/file/d/1khXePy8VNpJhheGnE0Ww-nNFnHoBnKy3/view?usp=sharing',
    },
    {
      icon: CheckCircle,
      title: 'CSS Tutorial Certification',
      desc: 'CSS Tutorial Completion',
      color: 'blue',
      link: 'https://drive.google.com/file/d/1n5-pCE2-1DkgQfOEwsWNrzpsE-8_1B6P/view?usp=sharing',
    },
    {
      icon: CheckCircle,
      title: 'Introduction to JavaScript',
      desc: 'JavaScript Tutorial Completion',
      color: 'yellow',
      link: 'https://drive.google.com/file/d/1EX0boiVIluCV6mQLdu8HkHcHTxHzTRWZ/view?usp=sharing',
    },
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

  // --- Scrollspy logic ---
  useEffect(() => {
    const sectionIds = [
      'home', 'about', 'experience', 'education', 'projects', 'skills', 'honors', 'contact'
    ];
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) { // 80px for nav height
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollBehavior = '';
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} className={`min-h-screen transition-all duration-500 ${themeClasses} overflow-x-hidden scroll-smooth`}>
      {/* Floating Navigation - Desktop */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center items-center backdrop-blur-md ${navClasses} py-3 border-b shadow-lg`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 md:gap-x-4">
          {['Home', 'About', 'Experience', 'Education', 'Projects', 'Skills', 'Honors', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`group relative text-xs md:text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                ${isDarkMode ? 'text-slate-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}
              `}
              style={{ overflow: 'hidden' }}
            >
              <span>{item}</span>
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full transition-all duration-300
                  ${activeSection === item.toLowerCase() ? (isDarkMode ? 'bg-blue-400' : 'bg-blue-600') : 'bg-transparent'}
                `}
                style={{
                  transform: activeSection === item.toLowerCase() ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                }}
              />
              <span
                className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400/60 dark:bg-blue-600/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ transformOrigin: 'left' }}
              />
            </button>
          ))}
          <div className="flex items-center space-x-1 md:space-x-2 ml-2 pl-2 border-l border-slate-400/30">
            <Sun className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-yellow-500'}`} />
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
            <Moon className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-slate-400'}`} />
            {/* Social Icons */}
            <a href="https://www.linkedin.com/in/dhruv-mendiratta-132a46255/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`ml-3 p-2 rounded-full transition-colors duration-200 hover:bg-blue-100/30 ${isDarkMode ? 'hover:bg-blue-900/40' : ''}`}> <Linkedin className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> </a>
            <a href="https://github.com/dhruvm-18" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full transition-colors duration-200 hover:bg-slate-200/40 dark:hover:bg-slate-700/40"> <Github className={`w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} /> </a>
            <a href="mailto:dhruv.mendiratta4@gmail.com" aria-label="Mail" className="p-2 rounded-full transition-colors duration-200 hover:bg-cyan-100/30 dark:hover:bg-cyan-900/40"> <Mail className={`w-5 h-5 ${isDarkMode ? 'text-cyan-300' : 'text-cyan-600'}`} /> </a>
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
              {['Home', 'About', 'Experience', 'Education', 'Projects', 'Skills', 'Honors', 'Contact'].map((item) => (
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
                {/* Social Icons Mobile */}
                <a href="https://www.linkedin.com/in/dhruv-mendiratta-132a46255/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full transition-colors duration-200 hover:bg-blue-900/40"> <Linkedin className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /> </a>
                <a href="https://github.com/dhruvm-18" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full transition-colors duration-200 hover:bg-slate-700/40"> <Github className={`w-6 h-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} /> </a>
                <a href="mailto:dhruv.mendiratta4@gmail.com" aria-label="Mail" className="p-2 rounded-full transition-colors duration-200 hover:bg-cyan-900/40"> <Mail className={`w-6 h-6 ${isDarkMode ? 'text-cyan-300' : 'text-cyan-600'}`} /> </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-28 px-2 md:px-0">
        <div className="w-full max-w-6xl mx-auto px-6 mb-2 md:mb-4">
          <h1 className={`text-4xl md:text-6xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-left drop-shadow-lg`} style={{letterSpacing: '0.01em'}}>
            Hey it's,
          </h1>
        </div>
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
          {/* Redesigned Profile Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`relative p-1 mb-8 rounded-[2.5rem] shadow-2xl animate-gradient-x ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900' : 'bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-100'}`}
            style={{ boxShadow: isDarkMode ? '0 0 40px 0 #0ea5e9, 0 0 0 4px #64748b' : undefined }}
          >
            <div className={`backdrop-blur-xl rounded-[2.3rem] p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10 relative overflow-hidden border ${isDarkMode ? 'bg-gradient-to-br from-slate-800/90 via-blue-950/90 to-indigo-900/90 border-blue-900/60' : 'bg-gradient-to-br from-white via-blue-100 to-indigo-100 border-blue-200/60'}`}>
              {/* Floating Profile Pic */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                className="relative"
              >
                <div className={`w-28 h-28 md:w-40 md:h-40 rounded-full p-1 animate-spin-slow shadow-xl ${isDarkMode ? 'bg-gradient-to-tr from-blue-700 via-indigo-700 to-slate-800' : 'bg-gradient-to-tr from-blue-200 via-indigo-200 to-white'}` }>
                  <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-white'} flex items-center justify-center text-4xl`}>
                    <img src={dhruvProfilePic} alt="Dhruv Mendiratta" className="rounded-full w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
              
              {/* Info */}
              <div className="flex-1 text-left flex flex-col justify-center items-center md:items-start">
                <div className="flex items-center space-x-4 mb-2">
                  <h1 className={`text-3xl md:text-5xl font-extrabold bg-gradient-to-r ${isDarkMode ? 'from-cyan-300 via-blue-400 to-indigo-300' : 'from-blue-700 via-indigo-500 to-cyan-600'} bg-clip-text text-transparent animate-gradient-x drop-shadow-lg`}>
                    Dhruv Mendiratta
                  </h1>
                  <Badge className={`bg-gradient-to-r ${isDarkMode ? 'from-slate-800 via-blue-900 to-indigo-900 text-cyan-300 border-blue-700/40' : 'from-blue-100 via-indigo-100 to-cyan-100 text-blue-700 border-blue-300'} text-base md:text-lg px-3 py-1 rounded-full shadow-md animate-bounce-slow`}>AI Engineer</Badge>
                </div>
                <p className={`text-base md:text-xl mb-4 font-medium ${isDarkMode ? 'text-slate-200' : 'text-gray-700'}`}
                  style={{ textShadow: isDarkMode ? '0 2px 8px #0ea5e9' : '0 2px 8px #a5b4fc' }}>
                  LLMs & RAG Systems | Full-Stack Developer
                </p>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-base">
                  <span className={`flex items-center font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}> <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div> Available for work </span>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-semibold`}>🕐 Delhi, India (IST)</span>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-6">
                  <Button asChild className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full shadow-lg hover:shadow-2xl animate-glow">
                    <a href="mailto:dhruv.mendiratta4@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
                    </a>
              </Button>
                  <Button asChild variant="outline" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-emerald-500 hover:border-emerald-600 rounded-full shadow-lg hover:shadow-2xl animate-glow">
                    <a href="/Dhruv_Mendiratta_Detailed_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View Detailed Resume
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-cyan-500 hover:border-cyan-600 rounded-full shadow-lg hover:shadow-2xl animate-glow">
                    <a href="/Dhruv_Mendiratta_1page_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      View ATS Friendly Resume
                    </a>
              </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Status Badge Below Tile */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 180 }}
            className="relative flex justify-center items-center mb-8"
          >
            <div className="relative">
              {/* Animated code-y background with floating shapes, light/dark adaptive */}
              <div className={`absolute inset-0 z-0 rounded-2xl blur-xl opacity-80 animate-gradient-x ${isDarkMode ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-100 via-indigo-100 to-cyan-100'}`} style={{ filter: 'blur(24px)' }} />
              {/* Floating code-y shapes */}
              <div className={`absolute left-2 top-2 w-6 h-6 rounded-full ${isDarkMode ? 'bg-cyan-400/30' : 'bg-blue-200/40'} animate-bounce-slow`} style={{ animationDelay: '0.2s' }} />
              <div className={`absolute right-2 bottom-2 w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-700/30' : 'bg-cyan-200/40'} animate-pulse`} style={{ animationDelay: '0.6s' }} />
              <div className={`absolute left-10 bottom-3 w-4 h-4 rounded-full ${isDarkMode ? 'bg-indigo-400/20' : 'bg-indigo-200/30'} animate-spin-slow`} style={{ animationDuration: '10s' }} />
              <div className={`absolute right-10 top-3 w-3 h-3 rounded-full ${isDarkMode ? 'bg-green-400/20' : 'bg-green-200/30'} animate-bounce-slow`} style={{ animationDelay: '1.2s' }} />
              <div className={`relative z-10 px-8 py-4 rounded-2xl font-bold text-lg md:text-xl shadow-2xl border-2 ${isDarkMode ? 'border-blue-800/40 bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 text-cyan-200' : 'border-blue-200/60 bg-gradient-to-r from-white via-blue-100 to-cyan-100 text-blue-700'} animate-gradient-x tracking-wide`} style={{ fontFamily: 'Fira Mono, Menlo, monospace' }}>
                <Code className={`w-6 h-6 animate-spin-slow ${isDarkMode ? 'text-cyan-300' : 'text-blue-500'}`} />
                Currently Debugging Life's Edge Cases
              </div>
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
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>Projects</h2>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto mb-6 md:mb-8`}></div>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-400'}`}>Here are some of my projects spanning full-stack development, data analysis, and cloud computing.</p>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {projectCategories.map(cat => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full font-semibold shadow transition ${projectFilter === cat ? 'bg-blue-500 text-white' : isDarkMode ? 'bg-slate-800 text-white hover:bg-slate-900' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                onClick={() => setProjectFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-gradient-to-b from-yellow-50 to-slate-900/90 group flex flex-col"
              >
                {/* Top: Light area */}
                <div className="p-6 bg-yellow-50 dark:bg-slate-800 flex flex-col md:flex-row items-center gap-4 relative">
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{project.title}</div>
                    <div className="text-base font-medium text-slate-700 dark:text-slate-300 mb-2">{project.period}</div>
                    <div className="flex gap-2 mb-3">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="inline-block bg-slate-200 dark:bg-slate-700 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-700">{tech}</span>
                          ))}
                        </div>
                    </div>
                  {/* Illustration/Placeholder */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-6xl md:text-7xl">{project.icon}</span>
                    )}
                  </div>
          </div>
                {/* Bottom: Dark area */}
                <div className="flex-1 flex flex-col justify-between bg-slate-900 p-6">
                  <div>
                    <div className="text-lg font-bold text-white mb-2">{project.title}</div>
                    <div className="text-slate-300 text-sm mb-3">{project.description}</div>
                  </div>
                  <div className="flex justify-end items-center mt-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                        <Github className="w-7 h-7 text-gray-200 hover:text-white bg-slate-800 rounded-full p-1 border-2 border-gray-700 transition" style={{ boxShadow: '0 2px 8px #24292f55' }} />
                      </a>
                    )}
                  </div>
                </div>
                </motion.div>
              ))}
            </div>
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
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
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <div className="text-center w-full">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>{honorsTab === 'awards' ? 'Honors & Awards' : 'Certifications'}</h2>
              <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto mb-6 md:mb-8`}></div>
                </div>
            {/* Right-side minimalist toggle button */}
            <button
              className={`ml-4 p-2 rounded-full border-2 border-blue-400 bg-transparent hover:bg-blue-500/10 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onClick={() => setHonorsTab(honorsTab === 'awards' ? 'certs' : 'awards')}
              aria-label={honorsTab === 'awards' ? 'Show Certificates' : 'Show Honors & Awards'}
              title={honorsTab === 'awards' ? 'Show Certificates' : 'Show Honors & Awards'}
            >
              <ChevronRight className={`w-6 h-6 ${honorsTab === 'awards' ? 'text-blue-400' : 'text-blue-600'} transition-transform duration-200`} style={{ transform: honorsTab === 'awards' ? 'rotate(0deg)' : 'rotate(180deg)' }} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
            {honorsTab === 'awards' ? (
              <>
                {/* Individual Award Tiles */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -6 }} transition={{ duration: 0.5 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3`}>
                  <Award className={`w-8 h-8 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-500'}`} />
                  <div className="font-semibold text-lg md:text-xl">
                    <a href="https://drive.google.com/file/d/1IAJbcBOw41Wi9EDc4M4jCCHX9HAvn0Dz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500 transition-colors">Student Excellence Award</a>
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Given for outstanding internship performance and publishing a journal research paper at Manipal University Jaipur</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -6 }} transition={{ duration: 0.5, delay: 0.1 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3`}>
                  <Zap className={`w-8 h-8 ${isDarkMode ? 'text-pink-300' : 'text-pink-500'}`} />
                  <div className="font-semibold text-lg md:text-xl flex flex-col items-start">
                    <a href="https://unstop.com/certificate-preview/2d40a416-34db-461b-9044-61f2114baf96" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500 transition-colors">HACKX Hackathon – Round 2 Finalist (2024)</a>
                    <ExternalLink className="w-4 h-4 mt-1 text-blue-400 hover:text-blue-600 transition-colors" />
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Advanced to the final round of a university-level hackathon hosted by Manipal University Jaipur</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -6 }} transition={{ duration: 0.5, delay: 0.2 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3`}>
                  <BookOpen className={`w-8 h-8 ${isDarkMode ? 'text-blue-300' : 'text-blue-500'}`} />
                  <div className="font-semibold text-lg md:text-xl flex flex-col items-start">
                    <a href="https://drive.google.com/file/d/1ie-S0rQc9wps4bI1ZAllZCOOMm3h9Elk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500 transition-colors">Paper Presentation – CML 2025, Sikkim Manipal University</a>
                    <ExternalLink className="w-4 h-4 mt-1 text-blue-400 hover:text-blue-600 transition-colors" />
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Presented a paper on Skin Disease Detection using Deep Learning</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -6 }} transition={{ duration: 0.5, delay: 0.3 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3`}>
                  <BookOpen className={`w-8 h-8 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-500'}`} />
                  <div className="font-semibold text-lg md:text-xl">Paper Presentation – ICAESRTA 2K25, KBP College of Engineering</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Presented research on hybrid stock forecasting using BiLSTM-GRU models</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -6 }} transition={{ duration: 0.5, delay: 0.05 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3`}>
                  <Briefcase className={`w-8 h-8 ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`} />
                  <div className="font-semibold text-lg md:text-xl flex flex-col items-start">
                    <a href="https://drive.google.com/file/d/1E3Rnl5LBxIV-zlEO11d4Vll4nib47bCQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500 transition-colors">Deloitte Internship Certificate</a>
                    <ExternalLink className="w-4 h-4 mt-1 text-blue-400 hover:text-blue-600 transition-colors" />
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Deloitte Touche Tohmatsu India LLP: Aug 2024</div>
                </motion.div>
              </>
            ) : (
              <>
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                    className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3 relative`}
                  >
                    <cert.icon className={`w-8 h-8 ${isDarkMode ? `text-${cert.color}-300` : `text-${cert.color}-500`}`} />
                    <div className="font-semibold text-lg md:text-xl mb-1">{cert.title}</div>
                    <div className={`text-sm truncate max-w-full ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{cert.desc}</div>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg" title="View Certificate">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </>
            )}
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
                { icon: Linkedin, href: "https://www.linkedin.com/in/dhruv-mendiratta-132a46255/", color: "blue" },
                { icon: Github, href: "https://github.com/dhruvm-18", color: "slate" },
                { icon: Mail, href: "mailto:dhruv.mendiratta4@gmail.com", color: "cyan" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className={`p-3 md:p-4 ${isDarkMode ? `bg-gradient-to-br from-${social.color}-600/20 to-${social.color}-600/40 border-${social.color}-400` : `bg-gradient-to-br from-${social.color}-100 to-${social.color}-200 border-${social.color}-300`} rounded-full border transition-all duration-300`}
                >
                  <social.icon className={`w-5 h-5 md:w-6 md:h-6 ${isDarkMode ? `text-${social.color}-400` : `text-${social.color}-600`}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section at the bottom */}
      <section className="py-12 px-4 sm:px-6 md:py-16 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Left: About Me */}
            <div className={`flex-1 max-w-xs rounded-2xl border-2 shadow-lg p-6 ${isDarkMode ? 'border-blue-800 bg-slate-900 text-white' : 'border-blue-200 bg-white text-blue-900'}` }>
              <h4 className="text-xl font-bold mb-2">About Me</h4>
              <p className="text-sm md:text-base">AI Engineer & Full-Stack Developer passionate about building scalable AI solutions and modern web apps. Always learning, always building.</p>
              <ul className="mt-4 space-y-1 text-xs md:text-sm">
                <li>🌐 React, FastAPI, AWS</li>
                <li>🤖 LLMs, RAG, Deep Learning</li>
                <li>📍 Based in Delhi, India</li>
              </ul>
            </div>
            {/* Center: Map */}
            <div className={`relative rounded-2xl border-2 shadow-lg overflow-hidden ${isDarkMode ? 'border-blue-800 bg-slate-900' : 'border-blue-200 bg-white'}`} style={{ width: 400, height: 300, minWidth: 300, minHeight: 200 }}>
              <img
                src="https://static-maps.yandex.ru/1.x/?lang=en-US&ll=77.2090,28.6139&z=11&l=map&size=400,300&pt=77.2090,28.6139,pm2rdm"
                alt="Delhi Map Preview"
                className="w-full h-full object-cover opacity-90"
                style={{ filter: isDarkMode ? 'grayscale(0.3) brightness(0.8)' : 'grayscale(0.1)' }}
              />
            </div>
            {/* Right: Contact Info */}
            <div className={`flex-1 max-w-xs rounded-2xl border-2 shadow-lg p-6 ${isDarkMode ? 'border-blue-800 bg-slate-900 text-white' : 'border-blue-200 bg-white text-blue-900'}` }>
              <h4 className="text-xl font-bold mb-2">Contact</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><span className="font-semibold">Email:</span> <a href="mailto:dhruv.mendiratta4@gmail.com" className="underline hover:text-blue-500">dhruv.mendiratta4@gmail.com</a></li>
                <li><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/dhruv-mendiratta-132a46255/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">/in/dhruv-mendiratta-132a46255</a></li>
                <li><span className="font-semibold">GitHub:</span> <a href="https://github.com/dhruvm-18" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">@dhruvm-18</a></li>
              </ul>
              <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">Let's build something great together!</div>
            </div>
          </div>
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

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
