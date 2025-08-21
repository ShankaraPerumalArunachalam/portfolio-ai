import heroImage from '@/assets/hero-bg.jpg';
import ParticleBackground from './ParticleBackground';
import { motion, AnimatePresence } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
  {/* Background pattern */}
  <div
    className="absolute inset-0 opacity-10 animate-slow-zoom"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Particle Background */}
  <ParticleBackground />

  <div className="section-container relative z-10">
    <div className="max-w-4xl">
      {/* Animated name reveal */}
      <div className="overflow-hidden">
         <h1 className="text-3xl md:text-7xl font-light tracking-tight">
      <motion.span
        className="block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        SHANKARA
      </motion.span>

      <motion.span
        className="block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        PERUMAL
      </motion.span>

      <motion.span
        className="block font-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        ARUNACHALAM
      </motion.span>
    </h1>
      </div>

      {/* Subtitle with delay */}
      <div className="mt-8 animate-fade-in animate-delay-300">
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide animate-fade-up">
          Web Developer
        </p>
        <div className="w-24 h-px bg-primary mt-4 animate-scale-in animate-delay-500" />
      </div>

      {/* Objective with staggered animation */}
       <motion.div
      className="mt-12 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <motion.p
        className="text-lg leading-relaxed text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        My objective as a web developer is to use my skills in both front-end
        and back-end development to create innovative and user-interactive
        websites.
      </motion.p>
    </motion.div>

      {/* CTA Button */}
      <div className="mt-12 animate-fade-in animate-delay-700">
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="group relative px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-wide font-medium animate-pop-in"
        >
          GET IN TOUCH
          <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10" />
          <span className="absolute -top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
        </button>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative">
      <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
      <div className="absolute inset-0 border border-primary rounded-full animate-spin-slow opacity-30" />
    </div>
  </div>
</section>

  );
};

export default HeroSection;