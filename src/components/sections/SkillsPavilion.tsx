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
      name: "Languages",
      icon: <Code size={28} className="text-blue-300" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Django", level: 80 }
      ]
    },
    {
      name: "Technologies & Frameworks",
      icon: <BrainCircuit size={28} className="text-purple-300" />,
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "CrewAI", level: 80 },
        { name: "Google Gen AI", level: 85 },
        { name: "Transformers", level: 80 },
        { name: "Scikit-learn", level: 90 }
      ]
    },
    {
      name: "Tools & Platforms",
      icon: <Database size={28} className="text-green-300" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "OpenAI", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "Power BI", level: 90 },
        { name: "Airflow", level: 80 },
        { name: "Tableau", level: 85 }
      ]
    },
    {
      name: "Data Analysis",
      icon: <LineChart size={28} className="text-yellow-300" />,
      skills: [
        { name: "MS Excel", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Kaggle", level: 80 }
      ]
    },
    {
      name: "Soft Skills",
      icon: <Lightbulb size={28} className="text-pink-300" />,
      skills: [
        { name: "Cross-Cultural Competence", level: 90 },
        { name: "Data Storytelling", level: 85 },
        { name: "Design Thinking", level: 85 },
        { name: "Learning Agility", level: 90 },
        { name: "Leadership", level: 85 }
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
            A comprehensive overview of my technical and analytical capabilities in data science and business analytics.
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