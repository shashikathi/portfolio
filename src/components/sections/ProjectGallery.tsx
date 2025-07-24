import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight, LineChart, BarChart, Database, Wine, Github } from 'lucide-react';

interface ProjectGalleryProps {
  id: string;
  onVisible: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a production-ready ML model achieving 89% accuracy in predicting customer churn. Implemented feature engineering pipeline and A/B testing framework, resulting in 15% reduction in churn rate for pilot program.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      tools: ["Python", "Scikit-Learn", "Feature Engineering", "A/B Testing", "ROC-AUC: 0.89"],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/shashikathi/Customer-Churn-Prediction-",
      demo: null
    },
    {
      title: "Wine Quality Prediction",
      description: "Comparative analysis of 5 ML algorithms for wine quality prediction. Achieved 92% accuracy using ensemble methods with comprehensive EDA and statistical analysis of 12 chemical features.",
      image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      tools: ["Python", "Ensemble Methods", "Statistical Analysis", "EDA", "Accuracy: 92%"],
      icon: <Wine className="w-6 h-6" />,
      github: "https://github.com/shashikathi/Wine-Quality-Prediction",
      demo: null
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "Real-time crypto analytics dashboard processing 50+ cryptocurrencies with live price feeds. Built with Streamlit and integrated technical indicators, serving 100+ daily active users.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      tools: ["Streamlit", "REST APIs", "Real-time Data", "Technical Analysis", "100+ DAU"],
      icon: <LineChart className="w-6 h-6" />,
      github: "https://github.com/shashikathi/Cryptocurrency_Dashboard",
      demo: null
    },
    {
      title: "Poll-based Web Application",
      description: "Full-stack polling platform with real-time analytics and user engagement tracking. Implemented secure voting system with data visualization dashboard showing participation trends and demographic insights.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      tools: ["Full-Stack Development", "Real-time Analytics", "Data Visualization", "User Engagement"],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/shashikathi/Poll-based-Web-Application",
      demo: null
    },
    {
      title: "Superstore Analytics",
      description: "Business intelligence solution analyzing $2.3M+ in sales data. Created executive dashboards with predictive forecasting models, identifying key growth opportunities and cost optimization strategies.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      tools: ["Business Intelligence", "Predictive Modeling", "Executive Dashboards", "$2.3M+ Sales Data"],
      icon: <BarChart className="w-6 h-6" />,
      github: "https://github.com/shashikathi/Superstore_Analytics",
      demo: null
    }
  ];

  return (
    <section id={id} ref={ref} className="py-20 min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Data Analysis Portfolio</h2>
          <p className="text-white-glass text-xl max-w-3xl mx-auto leading-relaxed">
            End-to-end data projects demonstrating technical skills in ML, analytics, and business intelligence solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel group relative overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-800">
                {!imageLoaded[index] && (
                  <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    imageLoaded[index] ? 'opacity-100 group-hover:scale-105' : 'opacity-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6 glass-panel p-3 rounded-full">
                  <span className="text-white">{project.icon}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white-bright">
                  {project.title}
                </h3>
                <p className="text-white-glass mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="glass-panel px-4 py-2 rounded-full text-sm font-medium text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-blue-300 transition-colors font-semibold text-lg group/link"
                  >
                    <Github className="mr-2 w-5 h-5" />
                    View Code
                    <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-green-300 transition-colors font-semibold text-lg group/link"
                    >
                      <ExternalLink className="mr-2 w-5 h-5" />
                      Live Demo
                      <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;