import { Code, Globe, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'Python'],
      color: 'from-primary to-primary-light'
    },
    {
      title: 'Interface Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-accent to-primary'
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-success to-primary'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['VS Code', 'GitHub', 'Power BI', 'Tableau', 'Postman', 'Figma', 'MS Excel'],
      color: 'from-primary-dark to-accent'
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-card-border rounded-2xl p-6 h-full card-hover">
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon size={24} className="text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-badge"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
            Additional Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Machine Learning',
              'Data Analysis',
              'IoT Development', 
              'AI Integration',
              'Problem Solving',
              'Team Collaboration'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-surface border border-card-border rounded-lg p-4 text-center hover:bg-surface-bright transition-colors"
              >
                <span className="text-text-primary font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">Python</div>
            <div className="text-text-muted">Primary Language</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">5+</div>
            <div className="text-text-muted">Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">AI/ML</div>
            <div className="text-text-muted">Specialization</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">Full Stack</div>
            <div className="text-text-muted">Development</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;