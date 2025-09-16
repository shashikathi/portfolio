import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Instagram } from 'lucide-react';
import { Scene } from '../3d/Scene';
import AboutMeModal from '../ui/AboutMeModal';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const [isAboutModalOpen, setIsAboutModalOpen] = React.useState(false);

  const handleExploreClick = () => {
    onSectionChange('experience');
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-12"
        >
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30">
              <img 
                src="https://i.postimg.cc/hQQLkMCg/photo-2024-03-17-17-14-48.jpg" 
                alt="K Shashi Preetham"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white-bright">
            <span className="hero-text">K Shashi Preetham</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl text-white-glass mb-8 font-medium animate-float">
              Data Analytics • Business Analysis • AI/ML Engineering
            </h2>
            
            <p className="text-xl text-white-glass mb-10 max-w-3xl mx-auto leading-relaxed">
              Transforming complex data into strategic business insights through advanced analytics, 
              machine learning models, and data-driven decision making. Open to opportunities across India.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex justify-center mb-6">
                <div className="glass-panel px-8 py-4 rounded-full">
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="font-medium">Available for Opportunities</span>
                    </div>
                    <div className="text-white/70 hidden sm:block">|</div>
                    <div className="flex items-center">
                      <span className="text-blue-300 mr-2">📍</span>
                      <span>India (Remote/Hybrid/Onsite)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div 
                  className="flex items-center glass-panel px-6 py-3 rounded-full animate-glow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-yellow-400 mr-3 text-xl">🏆</span>
                  <span className="text-white font-medium">Gold Medalist in Karate - State Level</span>
                </motion.div>
                <motion.div 
                  className="flex items-center glass-panel px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-blue-400 mr-3 text-xl">👨‍💼</span>
                  <span className="text-white font-medium">Senior Coordinator at Oasis</span>
                </motion.div>
                <motion.div 
                  className="flex items-center glass-panel px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-green-400 mr-3 text-xl">💻</span>
                  <span className="text-white font-medium">9+ ML/DL Projects on GitHub</span>
                </motion.div>
              </div>
            
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <motion.button 
                  onClick={handleExploreClick}
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Portfolio
                </motion.button>
                <motion.button 
                  onClick={() => setIsAboutModalOpen(true)}
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Me
                </motion.button>
                <motion.a 
                  href="#contact" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>

              <motion.a 
                href="https://www.instagram.com/____shashikathi____" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white-glass hover:text-white transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram className="w-6 h-6 mr-3" />
                <span>Follow me on Instagram</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={handleExploreClick}
            className="flex flex-col items-center text-white-glass hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={28} />
            </motion.div>
          </button>
        </motion.div>
      </div>
      
      <AboutMeModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;