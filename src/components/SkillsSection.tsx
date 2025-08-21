import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'FRONT-END',
      skills: [
        'ReactJS', 'Tailwindcss','NodeJS', 'HTML5', 'CSS3', 
        'SASS', 'JavaScript',  'Bootstrap5', 'Episerver CMS'
      ]
    },
    {
      title: 'BACK-END',
      skills: ['SQLServer', 'MYSQL']
    },
    {
      title: 'Other-TechSkills',
      skills: ['Git','Vercel','Firebase','Adobe Photoshop',  'Adobe XD']
    }
  ];

  const SkillCard = ({ skill, index, categoryIndex, isVisible }: {
    skill: string;
    index: number;
    categoryIndex: number;
    isVisible: boolean;
  }) => (
    <div
      className={`relative group bg-surface/70 border border-border/30 rounded-lg p-4 text-center text-sm font-medium tracking-wide hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 ${
        isVisible 
          ? `animate-scale-in animate-delay-${(categoryIndex + 1) * 200 + index * 100}` 
          : 'opacity-0 scale-95'
      }`}
    >
      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
        {skill}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  const CategoryCard = ({ category, categoryIndex, isVisible }: {
    category: { title: string; skills: string[] };
    categoryIndex: number;
    isVisible: boolean;
  }) => (
    <div
      className={`relative group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/30 ${
        isVisible 
          ? `animate-fade-in animate-delay-${(categoryIndex + 1) * 200}` 
          : 'opacity-0'
      }`}
    >
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold tracking-wide bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {category.title}
        </h3>
        <div className="w-12 h-px bg-primary/50 mx-auto mt-3" />
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-1 gap-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard 
            key={skill}
            skill={skill}
            index={skillIndex}
            categoryIndex={categoryIndex}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-t-xl" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
    </div>
  );

  return (
<section
  id="skills"
  ref={sectionRef}
  className="relative py-section bg-surface overflow-hidden"
>
  {/* Background pulse effect */}
  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/10 animate-pulse-slow" />

  <div className="section-container relative z-10">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2
        className={`text-3xl md:text-5xl font-light tracking-tight mb-4 relative inline-block ${
          isVisible ? "animate-slide-in-up" : "opacity-0"
        }`}
      >
        <span className="relative">
          <span className="absolute -inset-1 blur-md rounded-lg animate-glow" />
          <span className="relative">SKILLS</span>
        </span>
      </h2>
      <div
        className={`w-24 h-1 bg-primary mx-auto rounded-full ${
          isVisible
            ? "animate-scale-in animate-delay-300"
            : "opacity-0 scale-x-0"
        }`}
      />
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {skillCategories.map((category, categoryIndex) => (
        <div
          key={category.title}
          className={`gradient-card relative p-8 rounded-2xl shadow-xl transform transition-transform duration-500 hover:-translate-y-3 hover:rotate-1 ${
            isVisible
              ? `animate-fade-in animate-delay-${(categoryIndex + 1) * 200}`
              : "opacity-0"
          }`}
        >
          {/* Category Title */}
          <h3 className="text-lg font-semibold tracking-wider mb-8 text-center uppercase text-primary">
            {category.title}
          </h3>

          {/* Skills List */}
          <div className="flex flex-wrap justify-center gap-3">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full bg-background/60 shadow-sm text-sm font-medium tracking-wide border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ${
                  isVisible
                    ? `animate-bounce-in animate-delay-${
                        (categoryIndex + 1) * 300 + skillIndex * 100
                      }`
                    : "opacity-0 scale-90"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default SkillsSection;