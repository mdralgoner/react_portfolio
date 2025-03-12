
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { content } from '../data/content';
import Header from '../components/Header';
import ExperienceSection from '../components/ExperienceSection';

const Index: React.FC = () => {
  return (
    <LanguageProvider contentData={content}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <ExperienceSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
