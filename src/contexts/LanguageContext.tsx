
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
  contentData: Record<string, any>;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, contentData }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Translate function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = contentData;
    
    try {
      // First navigate to the right section
      for (let i = 0; i < keys.length - 1; i++) {
        value = value[keys[i]];
      }
      
      // Then get the translated value
      const translationKey = keys[keys.length - 1];
      
      if (value && value[translationKey] && value[translationKey][language]) {
        return value[translationKey][language];
      }
      
      // Fallback to English
      if (value && value[translationKey] && value[translationKey]['en']) {
        return value[translationKey]['en'];
      }
      
      // If no translation found, return the key
      return key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };
  
  useEffect(() => {
    // Update the HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
