
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };
  
  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center px-4 py-2 rounded-full border border-border hover:bg-accent/50 transition-all duration-300 shadow-sm group"
      aria-label={language === 'en' ? 'Switch to French' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 mr-2 text-primary group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-sm font-medium">
        {t('languages')}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
