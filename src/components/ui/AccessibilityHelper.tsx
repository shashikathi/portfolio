import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Type, Contrast } from 'lucide-react';

const AccessibilityHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false
  });

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.style.filter = 'contrast(1.5)';
    } else {
      root.style.filter = '';
    }

    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '';
    }

    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
    }
  }, [settings]);

  const toggleSetting = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
        aria-label="Accessibility options"
      >
        <Eye size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed bottom-20 left-4 z-50 bg-white rounded-lg shadow-xl p-4 min-w-[200px]"
          >
            <h3 className="font-semibold mb-3 text-gray-900">Accessibility</h3>
            
            <div className="space-y-3">
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`flex items-center w-full p-2 rounded text-left transition-colors ${
                  settings.highContrast ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'
                }`}
              >
                <Contrast size={16} className="mr-2" />
                High Contrast
              </button>
              
              <button
                onClick={() => toggleSetting('largeText')}
                className={`flex items-center w-full p-2 rounded text-left transition-colors ${
                  settings.largeText ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'
                }`}
              >
                <Type size={16} className="mr-2" />
                Large Text
              </button>
              
              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`flex items-center w-full p-2 rounded text-left transition-colors ${
                  settings.reducedMotion ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'
                }`}
              >
                <EyeOff size={16} className="mr-2" />
                Reduce Motion
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityHelper;