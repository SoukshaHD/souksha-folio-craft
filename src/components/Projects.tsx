import { Brain, Accessibility, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Skin Condition Analyzer',
      period: 'Feb 2025 - Present',
      icon: Brain,
      description: 'AI-powered diagnostic system for skin health analysis',
      achievements: [
        'Built AI-powered diagnostic system to analyze skin images/symptoms and detect conditions like acne, dryness, irritation',
        'Designed ML pipeline to provide tailored home remedies and OTC recommendations using data-driven insights'
      ],
      technologies: ['Python', 'Machine Learning', 'Computer Vision', 'AI'],
      gradient: 'from-primary to-accent',
      status: 'In Development'
    },
    {
      title: 'Smart Communication System for Disabled Individuals',
      period: 'Jan 2025 - Present',
      icon: Accessibility,
      description: 'IoT/AI system for inclusive communication assistance',
      achievements: [
        'Developed IoT/AI system using ESP32, servo motors, and speech recognition to convert voice into sign language',
        'Implemented real-time tactile Braille feedback for visually impaired users, creating an inclusive assistive tool'
      ],
      technologies: ['IoT', 'ESP32', 'AI', 'Speech Recognition', 'Hardware'],
      gradient: 'from-success to-primary',
      status: 'In Development'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Innovative solutions that combine AI, IoT, and full-stack development to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-card-border rounded-2xl p-8 h-full card-hover">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <project.icon size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-muted">{project.period}</p>
                    </div>
                  </div>
                  
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-text-muted text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-surface-bright border border-card-border rounded-full text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-card-border">
                  <button className="btn-outline flex items-center gap-2 text-sm py-2 px-4">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 text-sm py-2 px-4 text-text-muted hover:text-primary transition-colors">
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, innovative ideas, and opportunities to create impactful solutions together.
            </p>
            <a
              href="mailto:sougowda14@gmail.com"
              className="btn-primary"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;