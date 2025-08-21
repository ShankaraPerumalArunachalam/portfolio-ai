import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, Star, User } from 'lucide-react';

const TestimonialsSection = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'Asign Technologies',
      content: 'Shankara\'s migration of our legacy PHP system to React was exceptional. His attention to accessibility and clean code standards made the project a huge success. The new application performs 40% better than before.',
      rating: 5,
      image: '/placeholder-user-1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      company: 'Unique Force Technology Solutions',
      content: 'Working with Shankara on the EpiServer migrations was a pleasure. His expertise in both frontend and backend technologies, combined with his problem-solving skills, made complex migrations seem effortless.',
      rating: 5,
      image: '/placeholder-user-2.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'UI/UX Designer',
      company: 'Creative Digital Agency',
      content: 'Shankara brings designs to life with pixel-perfect precision. His understanding of responsive design and modern CSS techniques is outstanding. He consistently delivers beyond expectations.',
      rating: 5,
      image: '/placeholder-user-3.jpg'
    },
    {
      name: 'David Williams',
      role: 'Senior Developer',
      company: 'Tech Innovations Ltd',
      content: 'His knowledge of React.js and modern JavaScript is impressive. Shankara writes clean, maintainable code and is always eager to learn new technologies. A valuable team member indeed.',
      rating: 5,
      image: '/placeholder-user-4.jpg'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" ref={elementRef} className="py-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-6">
            Ready to work together?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-block px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-wide font-medium relative overflow-hidden transform hover:scale-105"
          >
            <span className="relative z-10">Let's Start a Project</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          </div></div>
    </section>
  );
};

export default TestimonialsSection;