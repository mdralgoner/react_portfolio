import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Maximize2, X } from 'lucide-react';

interface ProjectCardProps {
  project: any;
  experienceIndex: number;
  projectIndex: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  experienceIndex, 
  projectIndex 
}) => {
  const { t } = useLanguage();
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const handleOpenFullScreen = () => {
    setIsFullScreen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    document.body.style.overflow = '';
  };

  // Get the description with potentially embedded HTML
  const descriptionHtml = t(`experience.${experienceIndex}.projects.${projectIndex}.description`);
  
  return (
    <>
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-2">
              {t(`experience.${experienceIndex}.projects.${projectIndex}.title`)}
            </h4>
            <p 
              className="text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            ></p>
          </div>
          
          {project.media && (
            <div className="md:w-1/3 flex-shrink-0 flex items-center justify-center">
              {project.media.type === 'image' && (
                <div className="relative aspect-video rounded-md overflow-hidden bg-background">
                  <img
                    src={project.media.url}
                    alt={t(`experience.${experienceIndex}.projects.${projectIndex}.media.alt`)}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    loading="lazy"
                  />
                  <button
                    onClick={handleOpenFullScreen}
                    className="absolute bottom-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm opacity-70 hover:opacity-100 transition-opacity"
                    aria-label={t('ui.viewImage')}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {project.media.type === 'video' && (
                <div className="aspect-video rounded-md overflow-hidden bg-background">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster={project.media.poster}
                  >
                    <source src={project.media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {isFullScreen && (
        <div 
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseFullScreen}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.media.url}
              alt={t(`experience.${experienceIndex}.projects.${projectIndex}.media.alt`)}
              className="w-full h-full object-contain"
            />
            <button
              onClick={handleCloseFullScreen}
              className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-md"
              aria-label={t('ui.close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
