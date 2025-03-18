import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Maximize2, X } from 'lucide-react';

interface ProjectCardProps {
  project: {
    media?: {
      type: 'image' | 'video';
      url: string;
      alt?: string;
      poster?: string;
    };
    links?: Array<{
      url: string;
      label: string;
      icon?: string;
    }>;
  };
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
  const [modalElement, setModalElement] = useState<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (isFullScreen) {
      // Create a new div for the modal
      const modalDiv = document.createElement('div');
      modalDiv.id = 'image-modal-container';
      modalDiv.style.position = 'fixed';
      modalDiv.style.top = '0';
      modalDiv.style.left = '0';
      modalDiv.style.width = '100vw';
      modalDiv.style.height = '100vh';
      modalDiv.style.zIndex = '9999';
      modalDiv.style.display = 'flex';
      modalDiv.style.alignItems = 'center';
      modalDiv.style.justifyContent = 'center';
      modalDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      modalDiv.style.backdropFilter = 'blur(4px)';
      
      // Append to body
      document.body.appendChild(modalDiv);
      document.documentElement.style.overflow = 'hidden';
      
      // Store reference to modal div
      setModalElement(modalDiv);
      
      // Modal content setup
      const imgContainer = document.createElement('div');
      imgContainer.style.position = 'relative';
      imgContainer.style.maxWidth = '800px';
      imgContainer.style.maxHeight = '85vh';
      imgContainer.style.borderRadius = '8px';
      imgContainer.style.overflow = 'hidden';
      imgContainer.style.backgroundColor = 'var(--background)';
      imgContainer.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
      
      const img = document.createElement('img');
      img.src = project.media.url;
      img.alt = t(`experience.${experienceIndex}.projects.${projectIndex}.media.alt`);
      img.style.width = 'auto';
      img.style.height = 'auto';
      img.style.maxWidth = '100%';
      img.style.maxHeight = '80vh';
      img.style.objectFit = 'contain';
      
      // Close button
      const closeBtn = document.createElement('button');
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '16px';
      closeBtn.style.right = '16px';
      closeBtn.style.padding = '8px';
      closeBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      closeBtn.style.borderRadius = '50%';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.border = 'none';
      closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      
      // Fix click handlers
      const closeModal = (e: Event) => {
        e.preventDefault();
        setIsFullScreen(false);
      };
      
      closeBtn.addEventListener('click', closeModal);
      
      // Background click handler
      modalDiv.addEventListener('click', (e) => {
        if (e.target === modalDiv) {
          closeModal(e);
        }
      });
      
      // Prevent clicks on the image from closing the modal
      imgContainer.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      
      // Append elements
      imgContainer.appendChild(img);
      imgContainer.appendChild(closeBtn);
      modalDiv.appendChild(imgContainer);
      
      // Add keyboard escape handler
      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsFullScreen(false);
        }
      };
      
      document.addEventListener('keydown', handleEscapeKey);
      
      // Clean up event listeners when the modal is closed
      return () => {
        closeBtn.removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscapeKey);
        if (modalElement) {
          document.body.removeChild(modalElement);
          document.documentElement.style.overflow = '';
        }
      };
    } else if (modalElement) {
      // Remove modal when closed
      document.body.removeChild(modalElement);
      document.documentElement.style.overflow = '';
      setModalElement(null);
    }
  }, [isFullScreen, project.media.url, experienceIndex, projectIndex, t]);
  
  const handleOpenFullScreen = () => {
    setIsFullScreen(true);
  };
  
  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
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
            <div 
              className="text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
            
            {project.links && project.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
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
    </>
  );
};

export default ProjectCard;
