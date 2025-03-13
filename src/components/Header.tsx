import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Mail, Send, FileText } from 'lucide-react';
import { content } from '../data/content';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="relative w-full py-12 md:py-16 animate-slide-down">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex justify-end mb-8">
          <LanguageSwitcher />
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src="profile-photo.png" 
                alt={t('header.name')} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
          </div>

          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full animate-fade-in">
            {t('header.profession')}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {t('header.name')}
          </h1>
          
          <div className="flex justify-center gap-4 mb-4 animate-fade-in">
            <a 
              href={`mailto:${content.header.contact.email}`} 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-accent transition-colors"
              aria-label={t('ui.contact.email')}
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>{t('ui.contact.email')}</span>
            </a>
            <a 
              href={`https://t.me/${content.header.contact.telegram}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-accent transition-colors"
              aria-label={t('ui.contact.telegram')}
            >
              <Send className="w-4 h-4 text-primary" />
              <span>{t('ui.contact.telegram')}</span>
            </a>
            <a 
              href="/shakirov_cv.pdf"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-accent transition-colors"
              aria-label={t('ui.contact.cv')}
            >
              <FileText className="w-4 h-4 text-primary" />
              <span>{t('ui.contact.cv')}</span>
            </a>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in text-balance">
            {t('header.bio')}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
