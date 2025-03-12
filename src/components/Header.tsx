
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="relative w-full py-12 md:py-16 animate-slide-down">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex justify-end mb-8">
          <LanguageSwitcher />
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full animate-fade-in">
            {t('header.profession')}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {t('header.name')}
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in text-balance">
            {t('header.bio')}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
