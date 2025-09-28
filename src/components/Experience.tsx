import { Building2, Award, Calendar, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'IBM SkillsBuild (AICTE Edunet)',
      role: 'AI & Cloud Intern',
      period: 'Sep-Oct 2025',
      type: 'Internship',
      description: 'Worked on hands-on projects integrating AI applications with cloud-based solutions. Collaborated with peers and mentors to solve real-world problems and enhance deployment skills.',
      skills: ['AI Integration', 'Cloud Computing', 'Project Management', 'Team Collaboration']
    },
    {
      company: 'VOIS & Vodafone Idea Foundation (Edunet)',
      role: 'LLM Conversational Data Intern',
      period: 'Sep-Oct 2025',
      type: 'Internship',
      description: 'Conducted data analysis with Large Language Models to improve conversational AI accuracy. Built and tested LLM-based prototypes for real-world conversational systems.',
      skills: ['Large Language Models', 'Data Analysis', 'Conversational AI', 'Prototype Development']
    }
  ];

  const certifications = [
    { name: 'RPA Developer Foundation', provider: 'UiPath', year: '2024' },
    { name: 'Postman API Fundamentals', provider: 'Postman', year: '2024' },
    { name: 'Oracle SQL Bootcamp', provider: 'Udemy', year: '2024' },
    { name: 'Salesforce AI Agentforce - Champion L1', provider: 'Salesforce', year: '2025' },
    { name: 'Oracle Cloud Infrastructure Data Science', provider: 'Oracle University', year: '2025' }
  ];

  const workshops = [
    'Hackathon participation (NITTE)',
    'DevOps Workshop (Dept.)',
    'Postman beginner course (NIT Surathkal)',
    'Deloitte Data Analytics Job Simulation'
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Experience & Certifications
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Professional journey through internships, certifications, and continuous learning
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="text-primary" size={28} />
            <h3 className="text-2xl font-bold text-text-primary">Professional Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-card-border rounded-2xl p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-bold text-text-primary">{exp.role}</h4>
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-primary font-semibold mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-text-muted">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                      Key Skills Developed
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="skill-badge text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-primary" size={28} />
            <h3 className="text-2xl font-bold text-text-primary">Certifications & Courses</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-surface border border-card-border rounded-xl p-6 hover:bg-surface-bright transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <Award className="text-primary flex-shrink-0" size={20} />
                  <span className="text-xs text-text-muted">{cert.year}</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2 leading-tight">
                  {cert.name}
                </h4>
                <p className="text-sm text-text-muted">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops & Additional Learning */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-primary" size={28} />
            <h3 className="text-2xl font-bold text-text-primary">Workshops & Additional Learning</h3>
          </div>

          <div className="bg-surface border border-card-border rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {workshops.map((workshop, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-text-secondary">{workshop}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">2</div>
              <div className="text-text-muted text-sm">Internships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-text-muted text-sm">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">4+</div>
              <div className="text-text-muted text-sm">Workshops</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-text-muted text-sm">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;