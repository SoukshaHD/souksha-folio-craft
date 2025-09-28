import { useState, useEffect } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const roles = ['Data Analyst', 'Full Stack Developer', 'Python Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="container-max text-center relative z-10">
        {/* Main Heading */}
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">
              Souksha HD
            </span>
          </h1>
          
          {/* Animated Role */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 
              className={`text-2xl md:text-4xl font-semibold text-text-secondary transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {roles[currentRoleIndex]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about transforming data into insights and building innovative solutions 
            that make a real-world impact. Specialized in AI, machine learning, and full-stack development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="btn-primary flex items-center gap-2"
            >
              Explore My Work
              <ArrowDown size={20} />
            </button>
            <button className="btn-outline flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">2+</div>
              <div className="text-text-muted">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-text-muted">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-text-muted">Certifications</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full border border-primary/30 hover:border-primary/60 transition-colors"
          >
            <ArrowDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;