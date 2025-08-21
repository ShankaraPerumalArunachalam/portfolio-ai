import { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
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

  const experiences = [
    {
      title: "FRONT END DEVELOPER",
      company: "Asign, Chennai",
      period: "Feb. 2024 - Present",
      points: [
        "Converted PHP-based frontend to React.js with GIT version control.",
        "Built a fully responsive design.",
        "Ensured the application followed WCAG guidelines.",
      ],
    },
    {
      title: "PROGRAMMER-II",
      company: "Unique Force Technology Solutions, Chennai",
      period: "Jan. 2020 - Nov. 2023",
      points: [
        "Designed layouts and wireframes.",
        "Developed UIs using JavaScript, HTML5, CSS3, SASS, and Bootstrap5.",
        "Managed databases with SQLServer.",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            WORK EXPERIENCE
          </h2>
          <div
            className={`w-16 h-px bg-primary mx-auto ${
              isVisible
                ? "animate-scale-in animate-delay-200"
                : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        {/* Timeline Pipeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 gradient-card p-6 shadow-portfolio hover-lift ${
                    isVisible
                      ? `animate-fade-in animate-delay-${(index + 1) * 200}`
                      : "opacity-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold tracking-wide">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium tracking-wide">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 font-medium">
                    {exp.company}
                  </p>

                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 max-md:hidden w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
