import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, BrainCircuit, LineChart, Lightbulb, Globe } from 'lucide-react';

interface SkillsPavilionProps {
  id: string;
  onVisible: () => void;
}

const SkillsPavilion: React.FC<SkillsPavilionProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const skillCategories = [
    {
      name: "Programming & Query Languages",
      icon: <Code size={28} className="text-blue-300" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "R", level: 75 },
        { name: "Django", level: 80 }
      ]
    },
    {
      name: "ML/AI Frameworks",
      icon: <BrainCircuit size={28} className="text-purple-300" />,
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "Transformers", level: 80 },
        { name: "OpenAI API", level: 85 }
      ]
    },
    {
      name: "Analytics & BI Tools",
      icon: <Database size={28} className="text-green-300" />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Excel (Advanced)", level: 95 },
        { name: "MySQL", level: 85 },
        { name: "Apache Airflow", level: 75 }
      ]
    },
    {
      name: "Data Science & Statistics",
      icon: <LineChart size={28} className="text-yellow-300" />,
      skills: [
        { name: "Statistical Modeling", level: 85 },
        { name: "A/B Testing", level: 80 },
        { name: "Data Visualization", level: 90 },
        { name: "Predictive Analytics", level: 85 },
        { name: "Time Series Analysis", level: 80 }
      ]
    },
    {
      name: "Business & Communication",
      icon: <Lightbulb size={28} className="text-pink-300" />,
      skills: [
        { name: "Data Storytelling", level: 85 },
        { name: "Business Intelligence", level: 85 },
        { name: "Stakeholder Management", level: 80 },
        { name: "Project Management", level: 85 },
        { name: "Cross-functional Collaboration", level: 90 }
      ]
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
          <h2 className="section-heading">Skills Pavilion</h2>
          <p className="text-white-glass text-xl max-w-3xl mx-auto leading-relaxed">
            Technical expertise and analytical capabilities aligned with industry requirements for data-driven roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8"
            >
              <div className="flex items-center mb-8">
                <div className="mr-4 p-3 glass-panel rounded-full">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white-bright">{category.name}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white-glass font-medium">{skill.name}</span>
                      <span className="text-white/70 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 + idx * 0.1 }}
                        className="skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPavilion;