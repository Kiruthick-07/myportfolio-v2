import React from 'react';

const FeaturedProjects = () => {
  const styles = {
    container: {
      backgroundColor: '#f5f5f5',
      padding: '60px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '10px',
      color: '#1a1a1a',
    },
    underline: {
      width: '100px',
      height: '4px',
      backgroundColor: '#1a1a1a',
      margin: '0 auto 30px',
    },
    subtitle: {
      textAlign: 'center',
      color: '#555',
      fontSize: 'clamp(14px, 2.5vw, 18px)',
      maxWidth: '900px',
      margin: '0 auto 60px',
      lineHeight: '1.6',
      padding: '0 15px',
    },
    projectsGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      padding: '0 20px',
    },
    projectCard: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
    },
    projectImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      display: 'block',
    },
    projectContent: {
      padding: '25px',
    },
    projectTitle: {
      fontSize: 'clamp(20px, 2.5vw, 24px)',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1a1a1a',
    },
    projectDescription: {
      fontSize: 'clamp(14px, 1.8vw, 16px)',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    techBadge: {
      padding: '6px 14px',
      backgroundColor: '#f0f0f0',
      borderRadius: '6px',
      fontSize: 'clamp(12px, 1.5vw, 14px)',
      color: '#333',
      fontWeight: '500',
    },
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Featured Projects</h2>
      <div style={styles.underline}></div>
      <p style={styles.subtitle}>
        A selection of projects that showcase my technical skills, problem-solving abilities, and
        passion for creating exceptional user experiences.
      </p>

      <div style={styles.projectsGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={styles.projectCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={styles.projectImage}
            />
            <div style={styles.projectContent}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              <div style={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
