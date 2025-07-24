import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight, LineChart, BarChart, Database, Wine } from 'lucide-react';

interface ProjectGalleryProps {
  id: string;
  onVisible: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a production-ready ML model achieving 89% accuracy in predicting customer churn. Implemented feature engineering pipeline and A/B testing framework, resulting in 15% reduction in churn rate for pilot program.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Python", "Scikit-Learn", "Feature Engineering", "A/B Testing", "ROC-AUC: 0.89"],
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/shashikathi/Customer-Churn-Prediction-"
    },
    {
      title: "Wine Quality Prediction",
      description: "Comparative analysis of 5 ML algorithms for wine quality prediction. Achieved 92% accuracy using ensemble methods with comprehensive EDA and statistical analysis of 12 chemical features.",
      image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Python", "Ensemble Methods", "Statistical Analysis", "EDA", "Accuracy: 92%"],
      icon: <Wine className="w-6 h-6" />,
      link: "https://github.com/shashikathi/Wine-Quality-Prediction"
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "Real-time crypto analytics dashboard processing 50+ cryptocurrencies with live price feeds. Built with Streamlit and integrated technical indicators, serving 100+ daily active users.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Streamlit", "REST APIs", "Real-time Data", "Technical Analysis", "100+ DAU"],
      icon: <LineChart className="w-6 h-6" />,
      link: "https://github.com/shashikathi/Cryptocurrency_Dashboard"
    },
    {
      title: "Poll-based Web Application",
      description: "Full-stack polling platform with real-time analytics and user engagement tracking. Implemented secure voting system with data visualization dashboard showing participation trends and demographic insights.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Full-Stack Development", "Real-time Analytics", "Data Visualization", "User Engagement"],
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/shashikathi/Poll-based-Web-Application"
    },
    {
      title: "Superstore Analytics",
      description: "Business intelligence solution analyzing $2.3M+ in sales data. Created executive dashboards with predictive forecasting models, identifying key growth opportunities and cost optimization strategies.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Business Intelligence", "Predictive Modeling", "Executive Dashboards", "$2.3M+ Sales Data"],
      icon: <BarChart className="w-6 h-6" />,
      link: "https://github.com/shashikathi/Superstore_Analytics"
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card group relative"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-blue-300 transition-colors font-semibold text-lg group"
                >
                  View Project
                  <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;