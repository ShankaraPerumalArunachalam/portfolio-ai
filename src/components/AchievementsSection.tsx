import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accessibility,Layout,Trophy, Target, Users, Clock, Code, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const AchievementsSection = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    linesOfCode: 0
  });

  const achievements = [
   {
  icon: Layout,
  title: 'Responsive Design',
  description: 'Delivered fully responsive, mobile-first UI for enterprise apps',
  year: '2024'
},
{
  icon: Accessibility,
  title: 'WCAG Compliance',
  description: 'Ensured accessibility and compliance with WCAG standards',
  year: '2024'
},
    {
      icon: Users,
      title: 'Team Collaborator',
      description: 'Led frontend development teams',
      year: '2022-Present'
    },
    {
      icon: Zap,
      title: 'Performance Optimizer',
      description: 'Improved app performance by 40%',
      year: '2024'
    }
  ];

  const stats = [
    { key: 'projects', target: 50, suffix: '+', label: 'Projects Completed' },
   
    { key: 'experience', target: 4, suffix: '+', label: 'Years Experience' },
    { key: 'linesOfCode', target: 100, suffix: 'K+', label: 'Lines of Code' }
  ];

  // Animated counter effect
  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (key: string, target: number, duration: number = 2000) => {
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (target - startValue) * progress);

        setCounts(prev => ({ ...prev, [key]: currentValue }));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    };

    // Animate each counter with a slight delay
    stats.forEach((stat, index) => {
      setTimeout(() => {
        animateCount(stat.key as keyof typeof counts, stat.target);
      }, index * 200);
    });
  }, [isVisible]);

  return (
    <section id="achievements" ref={elementRef} className="py-section bg-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}>
            STATS OF MY WORK
          </h2>
          <div className={`w-16 h-px bg-primary mx-auto mb-8 ${
            isVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
            isVisible ? 'animate-fade-in animate-delay-400' : 'opacity-0'
          }`}>
            Numbers that showcase my dedication and growth in web development
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20 justify-center">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center gradient-card p-6 shadow-portfolio hover-lift group ${
                isVisible 
                  ? `animate-scale-in animate-delay-${(index + 1) * 200}` 
                  : 'opacity-0 scale-95'
              }`}
            >
              <div className="text-3xl md:text-4xl font-light tracking-tight mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>
              <div className="text-sm font-medium tracking-wide text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`gradient-card p-6 text-center shadow-portfolio hover-lift group ${
                  isVisible 
                    ? `animate-fade-in animate-delay-${600 + (index + 1) * 150}` 
                    : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="font-semibold tracking-wide mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {achievement.description}
                </p>
                
                <div className="text-xs font-medium text-primary">
                  {achievement.year}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className={`mt-16 text-center ${
          isVisible ? 'animate-fade-in animate-delay-700' : 'opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <Code className="h-8 w-8 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <h4 className="font-semibold mb-2">Code Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Maintains 95%+ code coverage and follows industry best practices
                </p>
              </div>
              
              <div className="group">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <h4 className="font-semibold mb-2">On-Time Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  100% project delivery rate within agreed timelines
                </p>
              </div>
              
              <div className="group">
                <Users className="h-8 w-8 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <h4 className="font-semibold mb-2">Client Satisfaction</h4>
                <p className="text-sm text-muted-foreground">
                  98% client satisfaction rate with positive feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;