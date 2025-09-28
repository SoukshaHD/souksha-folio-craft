import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/souksha-hd',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/souksha-hd',
      icon: Github,
      color: 'hover:text-purple-400'
    },
    {
      name: 'Email',
      href: 'mailto:sougowda14@gmail.com',
      icon: Mail,
      color: 'hover:text-green-400'
    }
  ];

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-background font-bold">SH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Souksha HD</h3>
                <p className="text-text-muted text-sm">Data Analyst | Full Stack Developer | Python Developer</p>
              </div>
            </div>
            
            <p className="text-text-secondary max-w-md mb-6 leading-relaxed">
              Passionate about transforming data into insights and building innovative solutions 
              that make a real-world impact. Always ready to take on new challenges and create meaningful technology.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-10 h-10 rounded-lg bg-surface border border-card-border flex items-center justify-center text-text-muted transition-all hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:sougowda14@gmail.com"
                className="block text-text-muted hover:text-primary transition-colors text-sm"
              >
                sougowda14@gmail.com
              </a>
              <a
                href="tel:+916362418224"
                className="block text-text-muted hover:text-primary transition-colors text-sm"
              >
                +91 6362418224
              </a>
              <p className="text-text-muted text-sm">India</p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-card-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-text-muted text-sm">
              <span>© {currentYear} Souksha HD. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>
            
            <div className="text-text-muted text-sm">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;