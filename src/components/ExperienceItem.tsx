import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface ExperienceItemProps {
  experience: any;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  const { t } = useLanguage();
  const [showProjects, setShowProjects] = useState(false);
  
  // Calculate animation delay based on index
  const animationDelay = `${(index + 1) * 100}ms`;
  
  return (
    <div 
      className="mb-12 opacity-0 animate-slide-up"
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-md overflow-hidden flex items-center justify-center flex-shrink-0">
            {experience.website ? (
              <a 
                href={experience.website} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${t(`experience.${index}.company`)} website`}
                className="flex items-center justify-center w-full h-full"
              >
                <img 
                  src={experience.logo} 
                  alt={t(`experience.${index}.company`)} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </a>
            ) : (
              <img 
                src={experience.logo} 
                alt={t(`experience.${index}.company`)} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">
                {t(`experience.${index}.company`)}
              </h2>
              <h3 className="text-base font-medium text-muted-foreground">
                {t(`experience.${index}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t(`experience.${index}.period`)}
              </p>
            </div>
            
            <p 
              className="mt-3 text-sm text-foreground/80"
              dangerouslySetInnerHTML={{ __html: t(`experience.${index}.description`) }}
            />

            {experience.projects && experience.projects.length > 0 && (
              <button
                onClick={() => setShowProjects(!showProjects)}
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                aria-expanded={showProjects}
              >
                {showProjects ? (
                  <>
                    {t('ui.hideProjects')}
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    {t('ui.showProjects')}
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
        
        {showProjects && (
          <div className="mt-6 space-y-6 animate-fade-in">
            {experience.projects.map((project: any, projectIndex: number) => (
              <ProjectCard 
                key={projectIndex} 
                project={project} 
                experienceIndex={index} 
                projectIndex={projectIndex} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
