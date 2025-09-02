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

// Project type definition
interface Project {
  title: string;
  period: string;
  tech: string[];
  description: string;
  achievements: string[];
  gradient: string;
  icon: string;
  link: string;
  image: string;
}

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [honorsTab, setHonorsTab] = useState<'awards' | 'certs'>('awards');
  const [projectFilter, setProjectFilter] = useState('All');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [skillsTab, setSkillsTab] = useState<'All' | 'AI/ML' | 'Full‑Stack' | 'Analytics' | 'Cloud/DevOps' | 'Other'>('All');
  const [activeProjectPreview, setActiveProjectPreview] = useState<Project | null>(null);

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
    { category: "Programming", icon: "💻", skills: ["Python", "C", "SQL", "JavaScript"] },
    { category: "Big Data", icon: "📊", skills: ["Hadoop", "Sqoop", "Hive", "Kafka"] },
    { category: "AI/ML", icon: "🧠", skills: ["LangChain", "Large Language Models (LLMs)", "FAISS", "TensorFlow", "Keras", "Scikit-learn", "PyTorch", "Hugging Face", "Transformer Models", "Prompt Engineering", "Model Deployment"] },
    { category: "Data Tools", icon: "📈", skills: ["Pandas", "NumPy", "Matplotlib", "GARCH", "Data Preprocessing", "Exploratory Data Analysis (EDA)", "Tableau", "Power BI", "Data Management", "Data Governance"] },
    { category: "Web & APIs", icon: "🌐", skills: ["FastAPI", "React.js", "Node.js", "REST APIs", "PostgreSQL", "Flask"] },
    { category: "Consulting & Professional Skills", icon: "💼", skills: ["Documentation", "Requirements Gathering", "Client Communication", "Business Process Analysis", "Solution Design", "Stakeholder Management"] },
    { category: "Cloud", icon: "☁️", skills: ["AWS (EC2, S3, Lambda, IAM, CloudWatch)", "Git"] },
    { category: "Other Tools", icon: "🛠️", skills: ["MongoDB", "JIRA", "NLTK", "Chart.js", "Framer Motion", "Leaflet.js"] }
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

  // --- Icon sources (Devicon / Simple Icons) ---------------------------------
  const devicon = useCallback((slug: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`, []);
  // Use colored Simple Icons CDN so logos are not monochrome/black
  const simple = useCallback((slug: string) => `https://cdn.simpleicons.org/${slug}`, []);

  const logoMap: Record<string, string> = useMemo(() => ({
    // Programming
    Python: devicon('python'),
    C: devicon('c'),
    SQL: simple('mysql'),
    JavaScript: devicon('javascript'),

    // Big Data
    Hadoop: simple('apachehadoop'),
    Sqoop: simple('apache'),
    Hive: simple('apachehive'),
    Kafka: simple('apachekafka'),

    // AI/ML
    LangChain: simple('langchain'),
    'Large Language Models (LLMs)': simple('openaigym'),
    FAISS: simple('facebook'),
    TensorFlow: devicon('tensorflow'),
    Keras: devicon('keras'),
    'Scikit-learn': devicon('scikitlearn'),
    PyTorch: devicon('pytorch'),
    'Hugging Face': simple('huggingface'),
    'Transformer Models': simple('huggingface'),
    'Prompt Engineering': simple('openai'),
    'Model Deployment': simple('vercel'),

    // Data Tools
    Pandas: devicon('pandas'),
    NumPy: devicon('numpy'),
    Matplotlib: null,
    GARCH: simple('apachespark'),
    'Data Preprocessing': simple('databricks'),
    'Exploratory Data Analysis (EDA)': null,
    Tableau: '/tableau.png',
    'Power BI': '/power.png',
    'Data Management': simple('googlecloud'),
    'Data Governance': simple('hashicorp'),

    // Web & APIs
    FastAPI: simple('fastapi'),
    'React.js': devicon('react'),
    'Node.js': devicon('nodejs'),
    'REST APIs': simple('swagger'),
    PostgreSQL: devicon('postgresql'),
    Flask: devicon('flask'),

    // Consulting
    Documentation: simple('readthedocs'),
    'Requirements Gathering': simple('notion'),
    'Client Communication': simple('gmail'),
    'Business Process Analysis': simple('miro'),
    'Solution Design': simple('figma'),
    'Stakeholder Management': simple('asana'),

    // Cloud
    'AWS (EC2, S3, Lambda, IAM, CloudWatch)': '/aws.png',
    Git: devicon('git'),

    // Other Tools
    MongoDB: devicon('mongodb'),
    JIRA: simple('jira'),
    NLTK: simple('python'),
    'Chart.js': simple('chartdotjs'),
    'Framer Motion': simple('framer'),
    'Leaflet.js': simple('leaflet'),
  }), [devicon, simple]);

  const urlMap: Record<string, string> = useMemo(() => ({
    Python: 'https://www.python.org/',
    C: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    SQL: 'https://www.mysql.com/',
    JavaScript: 'https://developer.mozilla.org/docs/Web/JavaScript',
    Hadoop: 'https://hadoop.apache.org/',
    Sqoop: 'https://sqoop.apache.org/',
    Hive: 'https://hive.apache.org/',
    Kafka: 'https://kafka.apache.org/',
    LangChain: 'https://www.langchain.com/',
    'Large Language Models (LLMs)': 'https://en.wikipedia.org/wiki/Large_language_model',
    FAISS: 'https://github.com/facebookresearch/faiss',
    TensorFlow: 'https://www.tensorflow.org/',
    Keras: 'https://keras.io/',
    'Scikit-learn': 'https://scikit-learn.org/',
    PyTorch: 'https://pytorch.org/',
    'Hugging Face': 'https://huggingface.co/',
    'Transformer Models': 'https://huggingface.co/docs/transformers/index',
    'Prompt Engineering': 'https://platform.openai.com/docs/guides/prompt-engineering',
    'Model Deployment': 'https://vercel.com/',
    Pandas: 'https://pandas.pydata.org/',
    NumPy: 'https://numpy.org/',
    Matplotlib: 'https://matplotlib.org/',
    Tableau: 'https://www.tableau.com/',
    'Power BI': 'https://powerbi.microsoft.com/',
    FastAPI: 'https://fastapi.tiangolo.com/',
    'React.js': 'https://react.dev/',
    'Node.js': 'https://nodejs.org/',
    'REST APIs': 'https://swagger.io/resources/articles/best-practices-in-api-design/',
    PostgreSQL: 'https://www.postgresql.org/',
    Flask: 'https://flask.palletsprojects.com/',
    Git: 'https://git-scm.com/',
    MongoDB: 'https://www.mongodb.com/',
    JIRA: 'https://www.atlassian.com/software/jira',
    NLTK: 'https://www.nltk.org/',
    'Chart.js': 'https://www.chartjs.org/',
    'Framer Motion': 'https://www.framer.com/motion/',
    'Leaflet.js': 'https://leafletjs.com/',
  }), []);

  const Logo: React.FC<{ name: string; categoryIcon: string }> = ({ name, categoryIcon }) => {
    const src = logoMap[name];
    const base = `w-5 h-5 md:w-6 md:h-6 object-contain flex-none`;
    if (!src) {
      return (
        <div className={`w-6 h-6 md:w-7 md:h-7 rounded-lg ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'} flex items-center justify-center text-xs`} title={name}>
          <span aria-hidden>{categoryIcon}</span>
        </div>
      );
    }
    const monogramSvg = encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><rect width='100%' height='100%' rx='6' ry='6' fill='${isDarkMode ? '#111827' : '#f3f4f6'}'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='14' fill='${isDarkMode ? '#e5e7eb' : '#111827'}'>${(name?.[0] || '?').toUpperCase()}</text></svg>`);
    const fallbackData = `data:image/svg+xml;utf8,${monogramSvg}`;
    const img = (
      <img
        src={src}
        alt={`${name} logo`}
        className={base}
        loading="lazy"
        onError={(e) => {
          if (src.includes('devicons')) {
            const slug = src.split('/').slice(-2, -1)[0];
            (e.currentTarget as HTMLImageElement).src = simple(slug);
          } else {
            (e.currentTarget as HTMLImageElement).src = fallbackData;
          }
        }}
      />
    );
    return urlMap[name] ? (
      <a href={urlMap[name]} target="_blank" rel="noreferrer" aria-label={`${name} website`}>
        {img}
      </a>
    ) : img;
  };

  // Optimized scroll effects
  useEffect(() => {
    const onScroll = () => setShowScrollTop(scrollY > 200);
    setShowScrollTop(scrollY > 200);
  }, [scrollY]);

  // Map skill names to simple inline SVG icons (lightweight, no external deps)
  const SkillIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
    const common = `inline-block ${className ?? ''}`.trim();
    const stroke = isDarkMode ? '#93c5fd' : '#2563eb';
    const fill = isDarkMode ? '#60a5fa' : '#3b82f6';
    switch (name.toLowerCase()) {
      case 'python':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <path fill={fill} d="M12 2c4 0 4 3 4 3v3H8V7s0-3 4-3h0Z"/>
            <path fill={stroke} d="M12 22c-4 0-4-3-4-3v-3h8v1s0 5-4 5Z"/>
            <circle cx="9.5" cy="6.5" r="1" fill="#fff"/>
            <circle cx="14.5" cy="17.5" r="1" fill="#0a0a0a"/>
          </svg>
        );
      case 'c':
      case 'c language':
      case 'c programming':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <path fill={fill} d="M12 2 2 7v10l10 5 10-5V7L12 2Z"/>
            <path fill="#fff" d="M15.2 12c0-1.8-1.2-3.2-3.2-3.2-2.1 0-3.6 1.7-3.6 3.2s1.5 3.2 3.6 3.2c1.4 0 2.6-.8 3-2h-1.9c-.2.5-.7.8-1.3.8-1 0-1.7-.9-1.7-2s.8-2 1.7-2c.6 0 1.1.3 1.3.8h2.1Z"/>
          </svg>
        );
      case 'javascript':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <rect width="24" height="24" rx="4" fill="#f7df1e"/>
            <path fill="#111827" d="M10.6 6.5v10.7c0 2.9-4.3 2.8-4.3-.1h1.9c0 1 .6 1 .6.2V6.5h1.8ZM12.9 16.4c.2 1.6 1.4 2.5 3.3 2.5 2 0 3.4-1 3.4-2.8 0-1.5-.9-2.3-2.7-2.8l-.9-.2c-.8-.2-1.2-.4-1.2-.9 0-.5.5-.8 1.1-.8.8 0 1.2.4 1.3 1.1h1.9c-.1-1.7-1.4-2.8-3.2-2.8-1.9 0-3.2 1.1-3.2 2.8 0 1.6 1 2.4 2.8 2.8l.9.2c.8.2 1.1.5 1.1 1 0 .6-.5.9-1.3.9-.9 0-1.4-.4-1.5-1.1h-2Z"/>
          </svg>
        );
      case 'react':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <circle cx="12" cy="12" r="1.6" fill={fill}/>
            <g fill="none" stroke={stroke} strokeWidth="1.4">
              <ellipse cx="12" cy="12" rx="9" ry="4.2"/>
              <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(120 12 12)"/>
            </g>
          </svg>
        );
      case 'flask':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <path fill="none" stroke={stroke} strokeWidth="1.4" d="M7 3s3 7 9 13c2.5 2.5 1.2 5.5-1.6 5.5H9.5"/>
            <path fill={isDarkMode ? '#e5e7eb' : '#111827'} d="M8.2 19.2c-1.1-.3-1.8-.8-2.2-1.6 1.7-.1 2.9.4 3.4 1.6-.3.1-.8.1-1.2 0Z"/>
          </svg>
        );
      case 'fastapi':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <circle cx="12" cy="12" r="10" fill="#059669"/>
            <path d="M12 6v12M9 9l3-3 3 3" stroke="#ecfdf5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'aws (ec2, s3, lambda)':
      case 'aws':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <path fill="#FF9900" d="M3 17c6 3 12 3 18 0v2c-6 3-12 3-18 0V17Z"/>
            <path fill={isDarkMode ? '#e5e7eb' : '#111827'} d="M6 7h2l.8 3L9.6 7H12l-2 6H8L6 7Zm8 0h5v2h-3v1h3v2h-3v1h3v2h-5V7Z"/>
          </svg>
        );
      case 'postgresql':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <path fill="#336791" d="M12 2c5.5 0 10 3.6 10 8s-4.5 8-10 8S2 14.4 2 10 6.5 2 12 2Z"/>
            <path fill="#fff" d="M8 9c0-1.7 1.8-3 4-3s4 1.3 4 3-1.8 3-4 3-4-1.3-4-3Zm4 5c2.9 0 4.9 1.2 5.6 3H6.4c.7-1.8 2.7-3 5.6-3Z"/>
          </svg>
        );
      case 'mongodb':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <path fill="#10b981" d="M12 2s5 5 5 10-3 9-5 10c-2-1-5-5-5-10S12 2 12 2Z"/>
            <path fill="#065f46" d="M12 6v13"/>
          </svg>
        );
      case 'powerbi':
      case 'powerbi/chart.js':
      case 'chart.js':
        return (
          <svg viewBox="0 0 24 24" className={common} width="18" height="18" aria-hidden>
            <rect x="3" y="10" width="3" height="9" rx="1" fill={fill}/>
            <rect x="8.5" y="6" width="3" height="13" rx="1" fill={fill}/>
            <rect x="14" y="3" width="3" height="16" rx="1" fill={fill}/>
          </svg>
        );
      default:
        return <span className={common}>•</span>;
    }
  };

  // Category inference and filtering for skills
  const inferTabForGroup = useCallback((g: { category: string; skills: string[] }) => {
    const c = g.category.toLowerCase();
    if (c.includes('ai') || c.includes('ml') || c.includes('big data')) return 'AI/ML' as const;
    if (c.includes('web') || c.includes('apis')) return 'Full‑Stack' as const;
    if (c.includes('data tools') || c.includes('data management')) return 'Analytics' as const;
    if (c.includes('cloud')) return 'Cloud/DevOps' as const;
    return 'Other' as const;
  }, []);

  const filteredSkillGroups = useMemo(() => {
    if (skillsTab === 'All') return skillGroups;
    return skillGroups.filter(g => inferTabForGroup(g) === skillsTab);
  }, [skillsTab, skillGroups, inferTabForGroup]);

  const proficiencyByGroup: Record<string, number> = useMemo(() => ({
    Programming: 90,
    'Big Data': 75,
    'AI/ML': 88,
    'Data Tools': 85,
    'Web & APIs': 82,
    'Consulting & Professional Skills': 80,
    Cloud: 78,
    'Other Tools': 72,
  }), []);

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
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-gradient-to-r from-blue-100/30 to-indigo-100/30'}`} />

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
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                    <div className="text-white font-bold text-lg md:text-xl drop-shadow">{project.title}</div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                        <Github className="w-7 h-7 text-white/90 hover:text-white transition" />
                      </a>
                    )}
                  </div>
                  {/* Project Preview Button - Triggers overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setActiveProjectPreview(project)}
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm"
                    >
                      🚀 View Full Preview
                    </button>
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

      {/* Project Preview Overlay - Page Level */}
      {activeProjectPreview && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl">
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <div className="bg-black/70 backdrop-blur-3xl rounded-3xl p-6 md:p-8 border border-white/30 shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectPreview(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500/80 hover:bg-red-500 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{activeProjectPreview.title}</h3>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
              
              {/* Full Size Image Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                {(() => {
                  // Use specific images for UKP and Crisis Report projects
                  let previewImages: string[] = [];
                  if (activeProjectPreview.title.includes('Unified Knowledge Platform')) {
                    previewImages = ['UKP1.png', 'UKP2.png', 'UKP3.png'];
                  } else if (activeProjectPreview.title.includes('Crisis Reporting')) {
                    previewImages = ['CR1.png', 'CR2.png', 'CR3.png'];
                  } else {
                    previewImages = [activeProjectPreview.image, activeProjectPreview.image, activeProjectPreview.image];
                  }
                  
                  return previewImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0, y: 30 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                      className="relative group/image"
                    >
                      {/* Image Container - Full Size */}
                      <div className="relative overflow-hidden rounded-2xl ring-2 ring-white/40 shadow-2xl bg-white/5 backdrop-blur-sm">
                        <LazyImage 
                          src={img} 
                          alt={`${activeProjectPreview.title} preview ${i+1}`} 
                          className="w-full h-64 md:h-80 object-cover transition-all duration-500 group-hover/image:scale-105" 
                          placeholder="/placeholder.jpg" 
                        />
                        
                        {/* Enhanced Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                        
                        {/* Image Number Badge - Large and Prominent */}
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-3 border-white/50 flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl font-bold">{i + 1}</span>
                        </div>
                        
                        {/* Hover Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <div className="text-white text-center">
                            <div className="text-lg font-semibold">Preview {i + 1}</div>
                            <div className="text-sm opacity-80">Full-size project showcase</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Glow Effect */}
                      <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-2xl blur-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  ));
                })()}
              </div>
              
              {/* Enhanced Preview Label */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <div className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/40 shadow-xl">
                  <span className="text-white text-xl font-semibold">🚀 Project Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

                      {/* Tabs */}
            <div className={`${cardClasses} rounded-xl border backdrop-blur-2xl px-2 py-2 mb-6 md:mb-8`}> 
              <div className="flex flex-wrap gap-2 md:gap-3">
                {(['All','AI/ML','Full‑Stack','Analytics','Cloud/DevOps','Other'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setSkillsTab(tab)}
                  className={`relative px-3.5 py-1.5 rounded-full font-semibold transition ${skillsTab === tab ? (isDarkMode ? 'text-white' : 'text-gray-900') : (isDarkMode ? 'text-slate-300' : 'text-gray-600')}`}
                >
                  {tab}
                  <span className={`block h-0.5 mt-1 rounded-full transition-all duration-300 ${skillsTab === tab ? (isDarkMode ? 'bg-blue-400 w-full' : 'bg-blue-600 w-full') : 'w-0'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className={`${cardClasses} rounded-2xl border p-4 md:p-6 backdrop-blur-2xl`}
            style={{ backgroundImage: isDarkMode ? 'radial-gradient(1200px 300px at 10% -20%, rgba(255,255,255,0.06), transparent)' : 'none' }}>
          <StaggerContainer
            staggerDelay={0.06}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            reducedMotion={prefersReducedMotion}
          >
            {filteredSkillGroups.map((group, index) => (
              <StaggerItem
                key={index}
                className={`${cardClasses} backdrop-blur-sm rounded-xl p-4 md:p-6 border hover:shadow-xl transition-all duration-300 flex flex-col`}
                reducedMotion={prefersReducedMotion}
              >
                <div className="flex items-center mb-3 md:mb-4">
                  <span className={`text-base md:text-lg font-semibold ${isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>{group.category}</span>
                </div>
                <ul className="flex flex-wrap gap-1.5 md:gap-2">
                  {group.skills.map((skill, i) => (
                    <li key={i} className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg border ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/90 border-gray-200 hover:bg-white'} transition whitespace-nowrap` }>
                      <span className="shrink-0 mt-[1px]">
                        <Logo name={skill} categoryIcon={group.icon as string} />
                      </span>
                      <span className={`text-xs md:text-sm ${isDarkMode ? 'text-slate-200' : 'text-gray-800'}`}>{skill}</span>
                    </li>
                  ))}
                </ul>
                {/* Proficiency bar */}
                <div className="mt-4">
                  <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                    <div
                      className={`h-full ${isDarkMode ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-blue-400 to-indigo-500'}`}
                      style={{ width: `${proficiencyByGroup[group.category] ?? 75}%` }}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          </div>

          {/* Roles grid derived from skills */}
          <div className="mt-12">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Roles I Can Excel In</h3>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-600'} mb-6`}>Based on my experience across AI, RAG systems, data, and full-stack.</p>
            <div className={`${cardClasses} rounded-2xl border p-4 md:p-6 backdrop-blur-2xl`}
              style={{ backgroundImage: isDarkMode ? 'radial-gradient(1200px 300px at 10% -20%, rgba(255,255,255,0.06), transparent)' : 'none' }}>
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
                  <StaggerItem key={idx} className={`${cardClasses} backdrop-blur-sm rounded-xl p-5 border hover:shadow-xl transition-all duration-300`} reducedMotion={prefersReducedMotion}>
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
        </div>
      </section>

      {/* Honors & Awards and Certifications Section */}
      <section id="honors" className="py-16 px-4 sm:px-6 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header with Glass Effect */}
          <div className={`${cardClasses} rounded-3xl border backdrop-blur-2xl p-6 md:p-8 mb-12 md:mb-16`}
            style={{ backgroundImage: isDarkMode ? 'radial-gradient(1200px 300px at 10% -20%, rgba(255,255,255,0.08), transparent)' : 'none' }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Award className={`w-8 h-8 md:w-10 md:h-10 mr-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                  {honorsTab === 'awards' ? 'Honors & Awards' : 'Certifications'}
                </h2>
                </div>
              <div className={`w-24 md:w-32 h-1 ${isDarkMode ? 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400' : 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500'} mx-auto mb-6`}></div>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                {honorsTab === 'awards' 
                  ? 'Recognition for academic excellence, research contributions, and professional achievements'
                  : 'Professional certifications and technical skills validation across various domains'
                }
              </p>
            </div>
            
            {/* Enhanced Tab Toggle */}
            <div className="flex justify-center mt-8">
              <div className={`${isDarkMode ? 'bg-white/10' : 'bg-gray-100'} rounded-2xl p-1 backdrop-blur-sm`}>
                <div className="flex">
                  {[
                    { key: 'awards', label: '🏆 Awards', icon: Award },
                    { key: 'certs', label: '📜 Certifications', icon: CheckCircle }
                  ].map((tab) => (
            <button
                      key={tab.key}
                      onClick={() => setHonorsTab(tab.key as 'awards' | 'certs')}
                      className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                        honorsTab === tab.key
                          ? `${isDarkMode ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300' : 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700'} shadow-lg`
                          : `${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-gray-600 hover:text-gray-800'}`
                      }`}
                    >
                      <tab.icon className={`w-5 h-5 ${honorsTab === tab.key ? (isDarkMode ? 'text-yellow-300' : 'text-yellow-600') : ''}`} />
                      {tab.label}
                      {honorsTab === tab.key && (
                        <motion.div
                          layoutId="honorsTab"
                          className={`absolute inset-0 rounded-xl ${isDarkMode ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20' : 'bg-gradient-to-r from-yellow-100 to-orange-100'}`}
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
            </button>
                  ))}
          </div>
              </div>
            </div>
          </div>

          {/* Content Grid with Enhanced Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {honorsTab === 'awards' ? (
              <>
                {/* Enhanced Award Cards */}
                {[
                  {
                    icon: Award,
                    title: "Student Excellence Award",
                    description: "Outstanding internship performance and research paper publication at Manipal University Jaipur",
                    link: "https://drive.google.com/file/d/1IAJbcBOw41Wi9EDc4M4jCCHX9HAvn0Dz/view?usp=sharing",
                    color: "yellow",
                    delay: 0.1
                  },
                  {
                    icon: Zap,
                    title: "HACKX Hackathon Finalist",
                    description: "Advanced to final round of university-level hackathon at Manipal University Jaipur",
                    link: "https://unstop.com/certificate-preview/2d40a416-34db-461b-9044-61f2114baf96",
                    color: "pink",
                    delay: 0.2
                  },
                  {
                    icon: BookOpen,
                    title: "Paper Presentation - CML 2025",
                    description: "Presented research on Skin Disease Detection using Deep Learning at Sikkim Manipal University",
                    link: "https://drive.google.com/file/d/1ie-S0rQc9wps4bI1ZAllZCOOMm3h9Elk/view?usp=sharing",
                    color: "blue",
                    delay: 0.3
                  },
                  {
                    icon: BookOpen,
                    title: "Paper Presentation - ICAESRTA 2K25",
                    description: "Presented research on hybrid stock forecasting using BiLSTM-GRU models at KBP College",
                    link: "https://drive.google.com/file/d/1KyGyowdEUuQxQravyHPIAeTCUtsf4pCq/view?usp=sharing",
                    color: "indigo",
                    delay: 0.4
                  },
                  {
                    icon: Briefcase,
                    title: "EY Internship Certificate",
                    description: "Ernst & Young: July 2024 - AI & RAG Systems Internship",
                    link: "https://drive.google.com/file/d/1Jp9_sDtTZ8TzZB6Wubbh9rlwYwjnq5gF/view?usp=sharing",
                    color: "emerald",
                    delay: 0.5
                  },
                  {
                    icon: Briefcase,
                    title: "Deloitte Internship Certificate",
                    description: "Deloitte Touche Tohmatsu India LLP: August 2024 - Cloud Computing Internship",
                    link: "https://drive.google.com/file/d/1E3Rnl5LBxIV-zlEO11d4Vll4nib47bCQ/view?usp=sharing",
                    color: "emerald",
                    delay: 0.6
                  }
                ].map((award, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 32, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: 'easeOut', 
                      delay: award.delay 
                    }}
                    className={`${cardClasses} backdrop-blur-2xl rounded-2xl border overflow-hidden group relative`}
                    style={{ 
                      backgroundImage: isDarkMode 
                        ? `radial-gradient(600px 200px at 50% 0%, rgba(255,255,255,0.08), transparent)`
                        : 'none'
                    }}
                  >
                    {/* Gradient Top Border */}
                    <div className={`h-1 ${isDarkMode ? `bg-gradient-to-r from-${award.color}-400 to-${award.color}-600` : `bg-gradient-to-r from-${award.color}-500 to-${award.color}-700`}`} />
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <award.icon className={`w-10 h-10 ${isDarkMode ? `text-${award.color}-400` : `text-${award.color}-600`} flex-shrink-0`} />
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? `bg-${award.color}-400` : `bg-${award.color}-600`} opacity-60`} />
                      </div>
                      
                      <h3 className={`text-lg md:text-xl font-bold mb-3 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'} leading-tight`}>
                        {award.title}
                      </h3>
                      
                      <p className={`text-sm md:text-base ${isDarkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                        {award.description}
                      </p>
                      
                      {/* Enhanced View Button */}
                      <div className="flex items-center justify-between">
                        <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${isDarkMode ? `bg-${award.color}-500/20 text-${award.color}-300 border border-${award.color}-400/30` : `bg-${award.color}-100 text-${award.color}-700 border border-${award.color}-300`}`}>
                          View Certificate
                        </div>
                        <a 
                          href={award.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`p-2 rounded-full ${isDarkMode ? `bg-${award.color}-500/20 hover:bg-${award.color}-500/30` : `bg-${award.color}-100 hover:bg-${award.color}-200`} transition-all duration-300 group-hover:scale-110`}
                          title="View Certificate"
                        >
                          <ExternalLink className={`w-5 h-5 ${isDarkMode ? `text-${award.color}-400` : `text-${award.color}-600`}`} />
                        </a>
                      </div>
                    </div>
                </motion.div>
                ))}
              </>
            ) : (
              <>
                {/* Enhanced Certification Cards */}
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 32, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: 'easeOut', 
                      delay: i * 0.1 
                    }}
                    className={`${cardClasses} backdrop-blur-2xl rounded-2xl border overflow-hidden group relative`}
                    style={{ 
                      backgroundImage: isDarkMode 
                        ? `radial-gradient(600px 200px at 50% 0%, rgba(255,255,255,0.08), transparent)`
                        : 'none'
                    }}
                  >
                    {/* Gradient Top Border */}
                    <div className={`h-1 ${isDarkMode ? `bg-gradient-to-r from-${cert.color}-400 to-${cert.color}-600` : `bg-gradient-to-r from-${cert.color}-500 to-${cert.color}-700`}`} />
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <cert.icon className={`w-10 h-10 ${isDarkMode ? `text-${cert.color}-400` : `text-${cert.color}-600`} flex-shrink-0`} />
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? `bg-${cert.color}-400` : `bg-${cert.color}-600`} opacity-60`} />
                      </div>
                      
                      <h3 className={`text-lg md:text-xl font-bold mb-3 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'} leading-tight`}>
                        {cert.title}
                      </h3>
                      
                      <p className={`text-sm md:text-base ${isDarkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                        {cert.desc}
                      </p>
                      
                      {/* Enhanced View Button */}
                    {cert.link && (
                        <div className="flex items-center justify-between">
                          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${isDarkMode ? `bg-${cert.color}-500/20 text-${cert.color}-300 border border-${cert.color}-400/30` : `bg-${cert.color}-100 text-${cert.color}-700 border border-${cert.color}-300`}`}>
                            View Certificate
                          </div>
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`p-2 rounded-full ${isDarkMode ? `bg-${cert.color}-500/20 hover:bg-${cert.color}-500/30` : `bg-${cert.color}-100 hover:bg-${cert.color}-200`} transition-all duration-300 group-hover:scale-110`}
                            title="View Certificate"
                          >
                            <ExternalLink className={`w-5 h-5 ${isDarkMode ? `text-${cert.color}-400` : `text-${cert.color}-600`}`} />
                          </a>
                        </div>
                      )}
                    </div>
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
