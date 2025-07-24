import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Drive Data-Driven Success?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Looking for a data professional who can transform complex datasets into strategic business insights? 
            Let's discuss how I can contribute to your team's success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              className="btn btn-outline bg-white/20 text-white border-white/30 hover:bg-white/30 px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/drive/folders/1YvHlx6K3aNXhGODY2etrAIk6FUIamzpd?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-white text-blue-600 hover:bg-white/90 px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Available Immediately</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span>Remote/Hybrid/Onsite</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              <span>Pan-India Opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;