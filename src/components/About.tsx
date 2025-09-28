import { User, Code, Database, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Photo Placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-card-border flex items-center justify-center mb-6">
                <div className="text-center">
                  <User size={80} className="text-primary/60 mx-auto mb-4" />
                  <p className="text-text-muted text-sm">Professional Photo</p>
                  <p className="text-text-muted text-xs">Coming Soon</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="prose prose-lg prose-invert">
                <p className="text-text-secondary leading-relaxed">
                  Motivated Information Science student with strong skills in C, Python, and web development. 
                  Experienced in building, debugging, and optimizing applications to solve real-world problems. 
                  Skilled in applying emerging technologies with a focus on innovation and efficiency.
                </p>
                
                <p className="text-text-secondary leading-relaxed">
                  Eager to expand technical expertise, contribute to industry projects, and grow in dynamic, 
                  cross-functional environments. Passionate about leveraging data science and AI to create 
                  meaningful solutions that drive positive impact.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="bg-surface-bright rounded-xl p-4 border border-card-border">
                  <Code className="text-primary mb-2" size={24} />
                  <h3 className="font-semibold text-text-primary">Programming</h3>
                  <p className="text-sm text-text-muted">C, Python, JavaScript</p>
                </div>
                
                <div className="bg-surface-bright rounded-xl p-4 border border-card-border">
                  <Database className="text-primary mb-2" size={24} />
                  <h3 className="font-semibold text-text-primary">Databases</h3>
                  <p className="text-sm text-text-muted">MongoDB, MySQL</p>
                </div>
                
                <div className="bg-surface-bright rounded-xl p-4 border border-card-border">
                  <Brain className="text-primary mb-2" size={24} />
                  <h3 className="font-semibold text-text-primary">AI & ML</h3>
                  <p className="text-sm text-text-muted">Data Analysis, LLM</p>
                </div>
                
                <div className="bg-surface-bright rounded-xl p-4 border border-card-border">
                  <User className="text-primary mb-2" size={24} />
                  <h3 className="font-semibold text-text-primary">Experience</h3>
                  <p className="text-sm text-text-muted">2+ Years</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="mailto:sougowda14@gmail.com"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;