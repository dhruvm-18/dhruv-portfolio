import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Award, Code, Brain, Zap, Users, BookOpen, Calendar, MapPin, Phone, Moon, Sun, GraduationCap, Briefcase, User, Download, Menu, X, CheckCircle, Eye, FileText, ChevronUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { LazyImage } from '@/components/ui/lazy-image';
import { FadeIn, SlideIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/ui/optimized-motion';
import { useOptimizedScroll, useScrollSpy, usePerformanceOptimizer } from '@/hooks/use-optimized-scroll';
import eylogo from '/ey.png';
import Deloitte from '/Deloitte.png';
import Somerville from '/Somerville.png';
import Vivek from '/Vivek.jpeg';
import Manipal from '/logo.jpeg';
import dhruvProfilePic from '/dhruv.jpeg';


const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [honorsTab, setHonorsTab] = useState<'awards' | 'certs'>('awards');
  const [projectFilter, setProjectFilter] = useState('All');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingRoles = useMemo(() => [
    'Full-Stack Developer',
    'AI/ML Engineer',
    'Data Engineer',
    'LLMs & RAG Systems Engineer',
    'Prompt Engineer',
    'Cloud Developer'
  ], []);

  useEffect(() => {
    const current = rotatingRoles[typewriterIndex % rotatingRoles.length];
    const delta = isDeleting ? 40 : 90;

    const handler = setTimeout(() => {
      if (!isDeleting) {
        // typing
        const next = current.slice(0, typewriterText.length + 1);
        setTypewriterText(next);
        if (next === current) {
          setIsDeleting(true);
        }
      } else {
        // deleting
        const next = current.slice(0, typewriterText.length - 1);
        setTypewriterText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setTypewriterIndex((i) => (i + 1) % rotatingRoles.length);
        }
      }
    }, typewriterText.length === 0 && !isDeleting ? 400 : delta);

    return () => clearTimeout(handler);
  }, [typewriterText, isDeleting, typewriterIndex, rotatingRoles]);

  // Performance optimizations
  const { scrollY, isScrolling } = useOptimizedScroll({ throttleMs: 16 });
  const { isLowPowerMode, prefersReducedMotion } = usePerformanceOptimizer();
  
  // Optimized scroll progress
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized scrollspy
  const sectionIds = useMemo(() => [
    'home', 'about', 'experience', 'education', 'projects', 'skills', 'honors', 'contact'
  ], []);
  const activeSection = useScrollSpy(sectionIds, 80);

  const projects = [
    {
      title: "Unified Knowledge Platform - An Enterprise RAG Chatbot",
      period: "May 2025 - July 2025",
      tech: ["React","Flask","LangChain", "FAISS", "Gemini APIs", "Python", "LLMs"],
      description: "Developed an internal enterprise chatbot using Retrieval-Augmented Generation (RAG) techniques for efficient document retrieval and question answering.",
      achievements: [
        "Integrated vector search (FAISS) with Gemini APIs and LangChain pipelines",
        "30% gain in response relevance through optimization",
        "Advanced prompt engineering and document chunking"
      ],
      gradient: "from-purple-500 to-pink-500",
      icon: "🤖",
      link: "https://github.com/dhruvm-18/UnifiedKnowledgePlatform",
      image: "/PlaceholderRAG.jpg"
    },
    {
      title: "Crisis Reporting - A Crowd-Sourced Disaster Management",
      period: "May 2025 - July 2025",
      tech: ["React","Material UI (MUI)","Framer Motion","Axios","Leaflet.js","React Leaflet","React Router","React Dropzone","Flask","Werkzeug","flask-cors","JavaScript","Python","Full-Stack Development"],
      description: "Built a full-stack crowdsourced disaster reporting platform with interactive maps, live data feeds, emergency contacts, and donation integration for real-time crisis response.",
      achievements: [
        "Implemented interactive map features using Leaflet and React Leaflet for real-time disaster localization",
        "Enabled image/file uploads and dynamic content rendering with React Dropzone",
        "Integrated Flask backend with CORS support for seamless cross-origin communication",
        "Optimized API communication and data handling using Axios and Flask endpoints",
        "Designed responsive and accessible UI using Material UI and Framer Motion"
      ],      
      gradient: "from-purple-500 to-pink-500",
      icon: "🤖",
      link: "https://github.com/dhruvm-18/CrisisReporting",
      image: "/PlaceholderCrisis.jpg"
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

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  const experiences = [
    {
      company: "Ernst & Young (EY)",
      position: "AI Intern – Generative AI & RAG Systems",
      location: "Delhi, India",
      period: "May 2025 - July 2025",
      logo: <img src={eylogo} alt="Dhruv Mendiratta"className="w-16 h-16 object-cover rounded-md"/>,
      achievements: [
        "Developed a modular RAG pipeline using LangChain, FAISS, and Gemini for enterprise-grade document-grounded responses",
"Engineered multi-agent orchestration with domain-specific vector stores for context-aware query resolution",
"Implemented multilingual semantic chunking and embeddings using MiniLM optimized for Hindi-English corpora",
"Designed scalable document ingestion pipelines with OCR, metadata tagging, and incremental FAISS indexing",
"Built a React-based conversational frontend with real-time Gemini streaming, PDF traceability, and voice interaction",
"Integrated LLMs including Gemini, LLaMA 3, and Mistral with dynamic selection based on domain and query complexity",
"Authored robust prompt engineering templates with tone control, citation formatting, and domain-specific context",
"Reduced search latency through optimized FAISS similarity search and structured context augmentation",
"Enabled audit-compliant insights via inline pdf:// citations and chunk-level metadata for traceable responses",

      ]
    },
    {
      company: "Deloitte Touche Tohmatsu India LLP",
      position: "Software Engineering Intern – Cloud Computing (AWS)",
      location: "Gurugram, India",
      period: "May 2024 – Jul 2024",
      logo: <img src={Deloitte} alt="Dhruv Mendiratta" className="w-16 h-16 object-cover rounded-md"/>,
      achievements: [
        
"Completed hands-on training with 40+ AWS services including EC2, S3, Lambda, and IAM",
"Practiced secure cloud access management with IAM roles and policy configurations",
"Built foundational expertise in AWS architecture, scalability, and security principles",
"Prepared for and gained exposure to the AWS Certified Cloud Practitioner exam objectives"
      ]
    }
  ];

  const education = [
    {
      institution: "Manipal University Jaipur",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Sep 2022 - Present (Expected 2026)",
      location: "Jaipur, India",
      logo: <img src={Manipal} alt="Dhruv Mendiratta"className="w-16 h-16 object-cover rounded-md"/>,
      achievements: [
        "Student Excellence Award for outstanding overall performance (August 2024 & March 2025)",
        "Active Member – Google Developer Student Club (GDSC) – AI/ML & Full Stack Domains",
        "Published 3 AI-focused research papers"
      ]
    },
    {
      institution: "The Vivekanand School",
      degree: "Class XII",
      period: "July 2022",
      location: "Delhi, India",
      logo: <img src={Vivek} alt="Dhruv Mendiratta"className="w-16 h-16 object-cover rounded-md"/>,
      achievements: []
    },
    {
      institution: "Somerville School",
      degree: "Class X",
      period: "July 2020",
      location: "Noida, India",
      logo: <img src={Somerville} alt="Dhruv Mendiratta"className="w-16 h-16 object-cover rounded-md"/>,
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
      link: 'https://coursera.org/share/7408ce04d381206f256be139e8326626',
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
      desc: 'Participation in Tata Imagination Challenge 2024',
      color: 'red',
      link: 'https://unstop.com/certificate-preview/54bc4922-8c18-4dce-a92e-936ac2971bef',
    },
    {
      icon: CheckCircle,
      title: 'Certificate of Participation: TATA Crucible Campus Quiz 2024',
      desc: 'Participation in TATA Crucible Campus Quiz 2024',
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

  const themeClasses = isDarkMode ? "bg-black text-gray-100" : "bg-white text-gray-900";

  const cardClasses = isDarkMode
    ? "bg-white/6 border-white/10 text-gray-100 backdrop-blur-2xl"
    : "bg-white/70 border-gray-200/60 text-gray-900 backdrop-blur-2xl";

  const navClasses = isDarkMode
    ? "bg-gray-800/90 border-gray-600/50"
    : "bg-white/90 border-gray-200/50";

  // Optimized scroll effects
  useEffect(() => {
    const onScroll = () => setShowScrollTop(scrollY > 200);
    setShowScrollTop(scrollY > 200);
  }, [scrollY]);

  return (
    <div 
      ref={containerRef} 
      className={`min-h-screen transition-all duration-500 ${themeClasses} overflow-x-hidden scroll-smooth scrollbar-thin ${!isDarkMode ? 'force-light-text' : ''}`}
      style={{
        willChange: 'auto'
      }}
    >
      {/* Floating Navigation - Desktop */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-[9999] hidden md:flex justify-center items-center pointer-events-auto`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          willChange: 'transform, opacity',
        }}
      >
        <div className="w-full">
          <div className={`mx-auto mt-3 mb-2 flex items-center justify-between gap-x-4 w-full max-w-6xl px-4 rounded-2xl backdrop-blur-2xl ${isDarkMode ? 'bg-black/70 ring-1 ring-white/10' : 'bg-white/80 ring-1 ring-slate-200/60'} shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] py-2` }>
            {/* Logo - DHRUV */}
            <div className="mr-6 select-none">
              <span
                className={`text-2xl md:text-3xl font-extrabold tracking-widest uppercase text-white drop-shadow-lg`}
                style={{ letterSpacing: '0.18em', fontFamily: 'Fira Mono, Menlo, monospace' }}
              >
                DHRUV
              </span>
            </div>
            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 md:gap-x-3 flex-1">
              {['Home', 'About', 'Experience', 'Education', 'Projects', 'Skills', 'Honors', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-xs md:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-sky-400' : 'focus:ring-sky-500'}
                    ${isDarkMode ? 'text-slate-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                  style={{ overflow: 'hidden' }}
                >
                  <span className="relative z-[1]">{item}</span>
                  {/* pill background when active */}
                  <span className={`absolute inset-0 rounded-full transition-opacity duration-300 ${activeSection === item.toLowerCase() ? 'opacity-100' : 'opacity-0'}`}></span>
                  <span className={`absolute inset-0 rounded-full ${activeSection === item.toLowerCase() ? (isDarkMode ? 'bg-gradient-to-r from-sky-600/70 to-indigo-600/70' : 'bg-gradient-to-r from-sky-300 to-indigo-300') : ''}`}></span>
                </button>
              ))}
            </div>
            {/* Theme and Social Icons */}
            <div className="flex items-center space-x-2 md:space-x-3 ml-2 pl-3 border-l border-white/10">
              <Sun className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-200'}`} />
              <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
              <Moon className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              {/* Social Icons */}
                              <a href="https://www.linkedin.com/in/dhruv-mendiratta-132a46255/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`p-1.5 rounded-full ring-1 ${isDarkMode ? 'ring-white/10 hover:bg-white/10' : 'ring-slate-200/60 hover:bg-slate-100'} transition`}> <Linkedin className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-black'}`} /> </a>
                              <a href="https://github.com/dhruvm-18" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`p-1.5 rounded-full ring-1 ${isDarkMode ? 'ring-white/10 hover:bg-white/10' : 'ring-slate-200/60 hover:bg-slate-100'} transition`}> <Github className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-black'}`} /> </a>
                              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruv.mendiratta4@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail" className={`p-1.5 rounded-full ring-1 ${isDarkMode ? 'ring-white/10 hover:bg-white/10' : 'ring-slate-200/60 hover:bg-slate-100'} transition`}> <Mail className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-black'}`} /> </a>
            </div>
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
              {/* Mobile Logo */}
              <div className="mb-8 select-none">
                <span
                  className={`text-3xl font-extrabold tracking-widest uppercase text-white drop-shadow-lg`}
                  style={{ letterSpacing: '0.18em', fontFamily: 'Fira Mono, Menlo, monospace' }}
                >
                  DHRUV
                </span>
              </div>
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
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruv.mendiratta4@gmail.com"
  target="_blank"
  rel="noopener noreferrer" aria-label="Mail" className="p-2 rounded-full transition-colors duration-200 hover:bg-cyan-900/40"> <Mail className={`w-6 h-6 ${isDarkMode ? 'text-cyan-300' : 'text-cyan-600'}`} /> </a>
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
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0"
          initial={false}
        >
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30' : 'bg-gradient-to-r from-blue-100/30 to-indigo-100/30'}`} />

          {/* Animated code snippets background */}
          {[
            { code: `const ragResponse = await llm.query({ context: faiss.search(query) })`, color: 'from-cyan-500 to-blue-500' },
            { code: `def predict_stock(data):\n    model = LSTMGRU()\n    return model.predict(data)`, color: 'from-emerald-500 to-teal-500' },
            { code: `app.get('/api/projects', (req, res) => res.json(projects))`, color: 'from-indigo-500 to-purple-500' },
            { code: `const embeddings = langchain.embed(docs)`, color: 'from-pink-500 to-fuchsia-500' },
            { code: `if (accuracy > 0.99) {\n  publish('Research Paper')\n}`, color: 'from-yellow-500 to-orange-500' },
            { code: `const sentiment = analyzeReview(text)`, color: 'from-blue-500 to-cyan-500' },
            { code: `# FastAPI endpoint\n@app.post('/analyze')\ndef analyze(data: Review): ...`, color: 'from-teal-500 to-emerald-500' },
            { code: `vectorStore.addDocuments(docs, { chunkSize: 512 })`, color: 'from-purple-500 to-indigo-500' },
            { code: `const resume = await fetch('/Dhruv_Mendiratta_Detailed_Resume.pdf')`, color: 'from-orange-500 to-yellow-500' },
            { code: `const chatbot = new RAGChatbot({ llm, retriever })`, color: 'from-fuchsia-500 to-pink-500' },
          ].map((snippet, idx, arr) => {
            // Grid: 3 columns
            const columns = 3;
            const col = idx % columns;
            const row = Math.floor(idx / columns);
            const left = 8 + col * 30; // percent
            const top = 10 + row * 22; // percent
            return (
              <pre
                key={idx}
                className={`pointer-events-none select-none whitespace-pre text-xs md:text-sm font-mono font-semibold absolute bg-clip-text text-transparent 
                  ${isDarkMode 
                    ? `bg-gradient-to-r ${snippet.color} opacity-25 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]` 
                    : `bg-gradient-to-r from-gray-400 to-gray-200 opacity-15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.10)]`}
                `}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  maxWidth: '240px',
                  zIndex: 1,
                  filter: isDarkMode ? 'none' : 'blur(0.5px)',
                }}
              >
                {snippet.code}
              </pre>
            );
          })}
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Redesigned Profile Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`relative mb-4 rounded-[2.5rem]`}
          >
            <div className={`rounded-[2.3rem] p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10 relative overflow-hidden backdrop-blur-2xl ${isDarkMode ? 'bg-white/10' : 'bg-white/70'}`}>
              <div className={`pointer-events-none absolute inset-0 rounded-[2.3rem] ${isDarkMode ? 'bg-gradient-to-br from-sky-400/10 via-indigo-400/10 to-purple-400/10' : 'bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10'}`} />
              {/* Floating Profile Pic */}
              <div className="relative">
                <div className={`relative w-28 h-28 md:w-40 md:h-40 rounded-full p-1 shadow-xl ${isDarkMode ? 'bg-gradient-to-tr from-gray-600 via-gray-500 to-gray-700' : 'bg-gradient-to-tr from-gray-200 via-gray-100 to-white'}` }>
                  {/* animated gradient ring */}
                  <div className={`absolute -inset-1 rounded-full blur-lg ${isDarkMode ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-30' : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-40'}`} />
                  <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center text-4xl relative`}>
                    <img 
                      src={dhruvProfilePic} 
                      alt="Dhruv Mendiratta" 
                      className="rounded-full w-full h-full object-cover shadow-[0_10px_30px_-12px_rgba(59,130,246,0.55)]"
                    />
                    {/* spinning subtle outer ring */}
                    <div className="absolute -inset-0.5 rounded-full pointer-events-none" style={{ border: isDarkMode ? '1px solid rgba(99,102,241,0.35)' : '1px solid rgba(59,130,246,0.35)' }} />
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="flex-1 text-left flex flex-col justify-center items-center md:items-start">
                <div className="flex items-center space-x-4 mb-2">
                  <h1 className={`text-3xl md:text-5xl font-extrabold bg-gradient-to-r ${isDarkMode ? 'from-gray-300 via-gray-200 to-gray-100' : 'from-gray-700 via-gray-600 to-gray-500'} bg-clip-text text-transparent animate-gradient-x drop-shadow-lg`}>
                    Dhruv Mendiratta
                  </h1>
                </div>
                <p className={`text-base md:text-xl mb-3 font-medium ${isDarkMode ? 'text-slate-200' : 'text-gray-700'}`}>
                  <span className={`${isDarkMode ? 'text-blue-300' : 'text-blue-700'} font-semibold`}>{typewriterText}</span>
                  <motion.span
                    className={`ml-1 inline-block w-[2px] md:w-[2px] h-[1.05em] align-[-0.1em] ${isDarkMode ? 'bg-blue-300' : 'bg-blue-700'}`}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  />
                </p>
                {/* Role chips */}
                <div className="flex flex-wrap items-center gap-2 mb-5 md:mb-6 justify-center md:justify-start">
                  {rotatingRoles.map((r, i) => (
                    <span key={i} className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${isDarkMode ? 'bg-sky-500/10 text-sky-200 border-sky-400/30' : 'bg-sky-50 text-sky-700 border-sky-200'}`}>
                      {r}
                    </span>
                  ))}
                </div>
                {/* CTAs - centered within card on small screens */}
                <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-1">
                  <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 250, damping: 18 }}>
                    <Button asChild className={`group relative rounded-full px-8 py-2.5 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode ? 'text-white focus:ring-sky-400 focus:ring-offset-transparent' : 'text-sky-900 focus:ring-sky-400 focus:ring-offset-white'}`}>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruv.mendiratta4@gmail.com" target="_blank" rel="noopener noreferrer">
                        <span className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-sky-600 to-indigo-600' : 'bg-gradient-to-r from-sky-300 to-indigo-300'}`}></span>
                        <span className={`absolute inset-[2px] rounded-full ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/95'} shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`}></span>
                        <span className="relative flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Hire Me
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 250, damping: 18 }}>
                    <Button asChild className={`group relative rounded-full px-8 py-2.5 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode ? 'text-cyan-100 focus:ring-cyan-500 focus:ring-offset-transparent' : 'text-sky-700 focus:ring-sky-400 focus:ring-offset-white'}`}>
                      <a href="/Dhruv_Mendiratta_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <span className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-cyan-700 to-indigo-700' : 'bg-gradient-to-r from-sky-300 to-indigo-300'}`}></span>
                        <span className={`absolute inset-[2px] rounded-full ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/95'} shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`}></span>
                        <span className="relative flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          View My Resume
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Unified Status Card below profile card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 180 }}
             className={`relative flex justify-center items-center mb-8 max-w-2xl mx-auto`}
           >
            <div className={`relative w-full px-8 py-4 rounded-2xl font-bold text-lg md:text-xl shadow-2xl ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} tracking-wide backdrop-blur-2xl`} style={{ fontFamily: 'Fira Mono, Menlo, monospace', background: isDarkMode ? 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))' : 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6))' }}>
              <div className={`pointer-events-none absolute inset-0 rounded-2xl ${isDarkMode ? 'bg-gradient-to-r from-sky-400/10 via-indigo-400/10 to-purple-400/10' : 'bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10'}`} />
              <Code className={`relative w-6 h-6 inline-block mr-2 align-middle ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} />
              Currently Debugging Life's Edge Cases
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
          <FadeIn
            delay={0.2}
            duration={0.8}
            className="text-center mb-12 md:mb-16"
            reducedMotion={prefersReducedMotion}
          >
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <User className={`w-7 h-7 md:w-8 md:h-8 mr-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                Who Am I?
              </h2>
            </div>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-gray-400 to-gray-300' : 'bg-gradient-to-r from-gray-500 to-gray-400'} mx-auto mb-6 md:mb-8`}></div>
          </FadeIn>

                      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <SlideIn
                direction="left"
                duration={0.8}
                reducedMotion={prefersReducedMotion}
              >
              <div className={`${cardClasses} rounded-[1.25rem] border p-6 md:p-8 mb-6 backdrop-blur-2xl flex flex-col items-center text-center`}>
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                  <img src={dhruvProfilePic} alt="Dhruv Mendiratta" className="w-full h-full object-cover" />
                </div>
                <div className="mt-4">
                  <div className="text-2xl md:text-3xl font-extrabold text-white">Dhruv Mendiratta</div>
                  <div className="text-sm md:text-base text-slate-300 mt-1">AI Engineer • Full‑Stack Developer</div>
                </div>

              </div>
                          </SlideIn>

              <SlideIn
                direction="right"
                duration={0.8}
                className="space-y-4 md:space-y-6"
                reducedMotion={prefersReducedMotion}
              >
              <div className={`${cardClasses} rounded-[1.25rem] border p-6 md:p-8 backdrop-blur-2xl`}>
                                 <h3 className="text-xl md:text-2xl font-bold mb-3">About me</h3>
                 <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} text-base md:text-lg leading-relaxed mb-4`}>I'm Dhruv Mendiratta, a final‑year CSE student and practitioner across Data Visualization & Analytics, AI/ML, Full‑Stack, and Cloud.</p>
                 <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>I build data‑driven products end‑to‑end—dashboards and storytelling (PowerBI, Chart.js), analytics pipelines (Python, Pandas, SQL), and scalable web apps (React, FastAPI) deployed to cloud.</p>
                 <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>On the AI side, I focus on practical LLM/RAG systems (LangChain, FAISS, Gemini) with strong retrieval, evaluation, and prompt design.</p>
                 <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>I enjoy consulting with stakeholders, clarifying scope, and delivering clear docs and demos that align with business outcomes.</p>
                 <div className="h-px my-6 bg-white/10" />
                 <div className="grid sm:grid-cols-2 gap-3">
                   {[ 
                     'Data Visualization & Storytelling',
                     'Analytics & Insights (Python/SQL)',
                     'Dashboards (PowerBI/Chart.js)',
                     'LLM/RAG Engineering',
                     'Full‑Stack (React • FastAPI)',
                     'Cloud & CI/CD (AWS • Git)'
                   ].map((title, idx) => (
                     <div key={idx} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/5 border border-white/10">
                       <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                       <span className="text-sm text-slate-200">{title}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn
            delay={0.2}
            duration={0.8}
            className="text-center mb-12 md:mb-16"
            reducedMotion={prefersReducedMotion}
          >
            <Briefcase className={`w-7 h-7 md:w-8 md:h-8 mr-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>Experience</h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <FadeIn
                  key={index}
                  delay={Math.min(index * 0.08, 0.24)}
                  duration={0.5}
                  reducedMotion={prefersReducedMotion}
                >
                  <div className="relative pl-10 md:pl-14">
                    <div className="absolute left-3 md:left-5 top-6 w-2.5 h-2.5 rounded-full bg-white/70 ring-4 ring-white/10" />
                    <Card className={`${cardClasses} backdrop-blur-sm border transition-all duration-300` }>
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
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn
            delay={0.2}
            duration={0.8}
            className="text-center mb-12 md:mb-16"
            reducedMotion={prefersReducedMotion}
          >
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <GraduationCap className={`w-7 h-7 md:w-8 md:h-8 mr-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                Education
              </h2>
            </div>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto`}></div>
          </FadeIn>

          <div className="space-y-8">
            {education.map((edu,index) => (
              <SlideIn
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.2}
                duration={0.8}
                reducedMotion={prefersReducedMotion}
              >
                <Card className={`${cardClasses} backdrop-blur-sm border hover:shadow-2xl transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="text-3xl md:text-4xl">{edu.logo}</div>
                      <div>
                        </div>
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
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn
            delay={0.2}
            duration={0.8}
            className="text-center mb-12 md:mb-16"
            reducedMotion={prefersReducedMotion}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>Projects</h2>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto mb-6 md:mb-8`}></div>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-400'}`}>Here are some of my projects spanning full-stack development, data analysis, and cloud computing.</p>
          </FadeIn>
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
          <StaggerContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 gap-8"
            reducedMotion={prefersReducedMotion}
          >
            {filteredProjects.map((project, index) => (
              <StaggerItem
                key={index}
                className={`${cardClasses} rounded-2xl overflow-hidden border group flex flex-col transition-all duration-300 hover:scale-[1.01]`}
                reducedMotion={prefersReducedMotion}
              >
                {/* Top: Light area */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <LazyImage 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    placeholder="/placeholder.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="text-white font-bold text-lg md:text-xl drop-shadow">{project.title}</div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                        <Github className="w-7 h-7 text-white/90 hover:text-white transition" />
                      </a>
                    )}
                  </div>
                </div>
                {/* Bottom: Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                  <div className={`text-sm md:text-base ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} mb-3`}>{project.description}</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded-full text-xs font-semibold border border-white/10 bg-white/5 text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn
            delay={0.2}
            duration={0.8}
            className="text-center mb-12 md:mb-16"
            reducedMotion={prefersReducedMotion}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>Skills & Expertise</h2>
            <div className={`w-20 md:w-24 h-1 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} mx-auto mb-6 md:mb-8`}></div>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Here are key areas of my expertise, shaped by my academic & professional experience</p>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.06}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            reducedMotion={prefersReducedMotion}
          >
            {skillGroups.map((group, index) => (
              <StaggerItem
                key={index}
                className={`${cardClasses} backdrop-blur-sm rounded-xl p-4 md:p-6 border hover:shadow-xl transition-all duration-300 flex flex-col`}
                reducedMotion={prefersReducedMotion}
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
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Roles grid derived from skills */}
          <div className="mt-12">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Roles I Can Excel In</h3>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-600'} mb-6`}>Based on my experience across AI, RAG systems, data, and full-stack.</p>
            <StaggerContainer staggerDelay={0.05} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" reducedMotion={prefersReducedMotion}>
              {[
                { title: 'Full-Stack Developer', bullets: ['React, Node.js/Flask/FastAPI', 'REST APIs & Auth', 'PostgreSQL/MongoDB'], icon: '🧩' },
                { title: 'AI/ML Engineer', bullets: ['TensorFlow, PyTorch, Scikit-learn', 'Model training & deployment', 'MLOps basics on AWS'], icon: '🧠' },
                { title: 'Data Engineer', bullets: ['Hadoop, Hive, Kafka, Sqoop', 'ETL & Data Pipelines', 'Batch/Streaming'], icon: '🛠️' },
                { title: 'LLM/RAG Engineer', bullets: ['LangChain, FAISS, Vector DBs', 'Prompt Engineering & Evaluation', 'Context/Retrieval Pipelines'], icon: '🤖' },
                { title: 'Prompt Engineer', bullets: ['Prompt design & tuning', 'Guardrails & evaluation', 'Few-shot & RAG prompts'], icon: '✍️' },
                { title: 'Cloud Developer', bullets: ['AWS EC2/S3/Lambda', 'CI/CD & Git', 'CloudWatch monitoring'], icon: '☁️' },
                { title: 'Consultant', bullets: ['Requirements gathering', 'Stakeholder management', 'Solution design & docs'], icon: '🗂️' }
              ].map((role, idx) => (
                <StaggerItem key={idx} className={`${cardClasses} rounded-xl p-5 border hover:shadow-xl transition-all`} reducedMotion={prefersReducedMotion}>
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">{role.icon}</span>
                    <div className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>{role.title}</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {role.bullets.map((b, i) => (
                      <li key={i} className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{b}</li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.06 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3 relative`}>
                  <Award className={`w-8 h-8 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-500'}`} />
                  <div className="font-semibold text-lg md:text-xl mb-1">Student Excellence Award</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Given for outstanding internship performance and publishing a journal research paper at Manipal University Jaipur</div>
                  <a href="https://drive.google.com/file/d/1IAJbcBOw41Wi9EDc4M4jCCHX9HAvn0Dz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg" title="View Certificate">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3 relative`}>
                  <Zap className={`w-8 h-8 ${isDarkMode ? 'text-pink-300' : 'text-pink-500'}`} />
                  <div className="font-semibold text-lg md:text-xl mb-1">HACKX Hackathon – Round 2 Finalist (2024)</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Advanced to the final round of a university-level hackathon hosted by Manipal University Jaipur</div>
                  <a href="https://unstop.com/certificate-preview/2d40a416-34db-461b-9044-61f2114baf96" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg" title="View Certificate">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3 relative`}>
                  <BookOpen className={`w-8 h-8 ${isDarkMode ? 'text-blue-300' : 'text-blue-500'}`} />
                  <div className="font-semibold text-lg md:text-xl mb-1">Paper Presentation – CML 2025, Sikkim Manipal University</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Presented a paper on Skin Disease Detection using Deep Learning</div>
                  <a href="https://drive.google.com/file/d/1ie-S0rQc9wps4bI1ZAllZCOOMm3h9Elk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg" title="View Certificate">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }} className={`${cardClasses} rounded-2xl p-6 pb-12 border shadow-xl flex flex-col items-start gap-3 relative`}>
                  <BookOpen className={`w-8 h-8 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-500'}`} />
                  <div className="font-semibold text-lg md:text-xl mb-1">Paper Presentation – ICAESRTA 2K25, KBP College of Engineering</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Presented research on hybrid stock forecasting using BiLSTM-GRU models</div>
                  <a href="https://drive.google.com/file/d/1KyGyowdEUuQxQravyHPIAeTCUtsf4pCq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg" title="View Certificate">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.06 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3 relative`}>
                  <Briefcase className={`w-8 h-8 ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`} />
                  <div className="font-semibold text-lg md:text-xl mb-1">Ernst & Young Internship Certificate</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Ernst & Young: July 2024</div>
                  <a href="https://drive.google.com/file/d/1Jp9_sDtTZ8TzZB6Wubbh9rlwYwjnq5gF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg" title="View Certificate">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.06 }} className={`${cardClasses} rounded-2xl p-6 border shadow-xl flex flex-col items-start gap-3 relative`}>
                  <Briefcase className={`w-8 h-8 ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`} />
                  <div className="font-semibold text-lg md:text-xl mb-1">Deloitte Internship Certificate</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Deloitte Touche Tohmatsu India LLP: Aug 2024</div>
                  <a href="https://drive.google.com/file/d/1E3Rnl5LBxIV-zlEO11d4Vll4nib47bCQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg" title="View Certificate">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </motion.div>

              </>
            ) : (
              <>
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.06 }}
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
      <section id="contact" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn
            delay={0.2}
            duration={0.8}
            reducedMotion={prefersReducedMotion}
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
                { icon: Phone, title: "Phone", info: "+91 9013669130", color: "indigo" },
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
                { icon: Mail,href :"https://mail.google.com/mail/?view=cm&fs=1&to=dhruv.mendiratta4@gmail.com",
  target:"_blank",
  rel:"noopener noreferrer", color: "cyan" }
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
          </FadeIn>
        </div>
      </section>

      {/* Map Section at the bottom */}
      <section className="py-12 px-4 sm:px-6 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Left: About Me */}
            <div className={`${cardClasses} flex-1 max-w-xs rounded-2xl border shadow-lg p-6` }>
              <h4 className="text-xl font-bold mb-2">About Me</h4>
              <p className="text-sm md:text-base">AI Engineer & Full-Stack Developer passionate about building scalable AI solutions and modern web apps. Always learning, always building.</p>
              <ul className="mt-4 space-y-1 text-xs md:text-sm">
                <li>🌐 React, FastAPI, AWS</li>
                <li>🤖 LLMs, RAG, Deep Learning</li>
                <li>📍 Based in Delhi, India</li>
              </ul>
            </div>
            {/* Center: Map */}
            <div className={`relative rounded-2xl border shadow-lg overflow-hidden ${isDarkMode ? 'border-blue-800 bg-slate-900' : 'border-blue-200 bg-white'}`} style={{ width: 400, height: 300, minWidth: 300, minHeight: 200 }}>
              <img
                src="https://static-maps.yandex.ru/1.x/?lang=en-US&ll=77.2090,28.6139&z=11&l=map&size=400,300&pt=77.2090,28.6139,pm2rdm"
                alt="Delhi Map Preview"
                className="w-full h-full object-cover opacity-90"
                style={{ filter: isDarkMode ? 'grayscale(0.3) brightness(0.8)' : 'grayscale(0.1)' }}
              />
            </div>
            {/* Right: Contact Info */}
            <div className={`${cardClasses} flex-1 max-w-xs rounded-2xl border shadow-lg p-6` }>
              <h4 className="text-xl font-bold mb-2">Contact</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><span className="font-semibold">Email:</span> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruv.mendiratta4@gmail.com"
  target="_blank"
  rel="noopener noreferrer" className="underline hover:text-blue-500">Mail Here</a></li>
                <li><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/dhruv-mendiratta-132a46255/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Click Here</a></li>
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
            © 2025 Dhruv Mendiratta.Built from scratch with <code className="text-red-500">&lt;code&gt;</code> &amp; ☕.
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
          style={{
            willChange: 'transform, opacity',
          }}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
