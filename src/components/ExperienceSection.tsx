
import React from 'react';
import { content } from '../data/content';
import ExperienceItem from './ExperienceItem';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl mx-auto px-6">
        {content.experience.map((experience, index) => (
          <ExperienceItem 
            key={index} 
            experience={experience} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
