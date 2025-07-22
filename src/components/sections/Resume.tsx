import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download } from 'lucide-react';

interface ResumeProps {
  id: string;
  onVisible: () => void;
}

const Resume: React.FC<ResumeProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  return (
    <section id={id} ref={ref} className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Resume</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Download my detailed professional resume
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 flex justify-center"
          >
            <a
              href="https://drive.google.com/drive/folders/1YvHlx6K3aNXhGODY2etrAIk6FUIamzpd?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;