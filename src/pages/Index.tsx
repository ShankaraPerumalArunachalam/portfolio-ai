import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';

import AchievementsSection from '@/components/AchievementsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import ResumeViewer from '@/components/ResumeViewer';
import ScrollProgress from '@/components/ui/scroll-progress';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const { isVisible: isAboutVisible, elementRef: aboutRef } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="about" ref={aboutRef} className="py-section">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-light tracking-tight mb-8 ${
                isAboutVisible ? 'animate-slide-up' : 'opacity-0'
              }`}>
                ABOUT
              </h2>
              <div className={`w-16 h-px bg-primary mx-auto mb-8 ${
                isAboutVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0 scale-x-0'
              }`} />
              <p className={`text-lg leading-relaxed text-muted-foreground mb-8 ${
                isAboutVisible ? 'animate-fade-in animate-delay-400' : 'opacity-0'
              }`}>
                As a dedicated web developer with expertise in both front-end and back-end 
                technologies, I bring a passion for creating innovative, user-centric digital experiences. 
                My journey spans from modern React applications to legacy system migrations, 
                always with a focus on accessibility, performance, and clean code.
              </p>
              
              <div className={`${
                isAboutVisible ? 'animate-fade-in animate-delay-500' : 'opacity-0'
              }`}>
                <ResumeViewer />
              </div>
            </div>
          </div>
        </div>
        
        <SkillsSection />
        <ExperienceSection />
      
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;