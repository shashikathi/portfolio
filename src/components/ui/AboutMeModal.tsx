import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Trophy } from 'lucide-react';

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl font-bold text-white-bright">About Me</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white-bright mb-4">Introduction</h3>
                  <div className="text-white-glass leading-relaxed space-y-4">
                    <p>
                      I'm <strong className="text-white">Kathi Shashi Preetham</strong>, a data professional with a knack for turning messy datasets into clean, actionable insights. My experience spans across Business Analysis, Data Engineering, and Machine Learning — from designing scalable ETL pipelines and dashboards to building predictive models that drive smarter decisions.
                    </p>
                    <p>
                      Skilled in Python, SQL, Power BI, Tableau, and cloud platforms, I've delivered solutions that cut reporting latency by 60%, improved compliance workflows, and boosted model accuracy for real-world use cases like customer churn and wine quality prediction.
                    </p>
                    <p>
                      Beyond tools and tech, I thrive at connecting the dots between stakeholders, processes, and data — whether it's writing BRDs to align teams or deploying ML pipelines that actually scale. With a strong foundation in both analytics and engineering, I'm eager to contribute to solving complex business problems and building AI-driven solutions that create impact.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-8">
                  <h3 className="text-2xl font-semibold text-white-bright mb-6 flex items-center">
                    <Trophy className="mr-3 text-yellow-400" size={28} />
                    Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel p-6">
                      <div className="flex items-start">
                        <Award className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="text-white font-semibold mb-2">Academic Excellence Scholarship</h4>
                          <p className="text-white-glass text-sm">
                            Awarded 50% 4-year scholarship (AIR &lt; 500) for academic excellence, recognizing outstanding performance in competitive examinations.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-panel p-6">
                      <div className="flex items-start">
                        <Trophy className="text-blue-400 mr-4 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="text-white font-semibold mb-2">TechNotion Startup Event</h4>
                          <p className="text-white-glass text-sm">
                            Runner-up at TechNotion Startup Event as Co-founder, building a startup prototype with innovative tech solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutMeModal;