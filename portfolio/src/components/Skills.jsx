import React from 'react';

const SkillsExpertise = () => {
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
      maxWidth: '800px',
      margin: '0 auto 60px',
      lineHeight: '1.6',
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      padding: '0 20px',
    },
    section: {
      width: '100%',
    },
    sectionTitle: {
      fontSize: 'clamp(22px, 3vw, 28px)',
      fontWeight: '600',
      marginBottom: '30px',
      color: '#1a1a1a',
    },
    skillItem: {
      marginBottom: '25px',
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    },
    skillName: {
      fontSize: 'clamp(15px, 2vw, 18px)',
      fontWeight: '500',
      color: '#333',
    },
    skillPercent: {
      fontSize: 'clamp(14px, 1.8vw, 16px)',
      color: '#666',
      fontWeight: '500',
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#e0e0e0',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#1a1a1a',
      transition: 'width 1s ease-in-out',
    },
    techGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: '12px',
      marginTop: '30px',
    },
    techBadge: {
      padding: '12px 16px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      textAlign: 'center',
      fontSize: 'clamp(13px, 1.8vw, 15px)',
      color: '#333',
      fontWeight: '500',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'default',
    },
  };

  const skills = [
    { name: 'React', level: 90 },
    { name: 'MERN Stack', level: 75 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'C & Java Programming', level: 80 },
  ];

  const technologies = [
    'React', 'Vue.js', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'HTML', 'CSS',
    'JavaScript', 'Flask', 'Python', 'java',
    'Git', 'Python', 'Figma', 'Photoshop',
    'PremierPro', 'AfterEffects'
  ];

  return (
    <div style={styles.container} id="skills">
      <h2 style={styles.heading}>Skills & Expertise</h2>
      <div style={styles.underline}></div>
      <p style={styles.subtitle}>
        A comprehensive toolkit built through years of hands-on experience and continuous
        learning in modern web development.
      </p>

      <div style={styles.contentWrapper}>
        {/* Technical Proficiency Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Technical Proficiency</h3>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillItem}>
              <div style={styles.skillHeader}>
                <span style={styles.skillName}>{skill.name}</span>
                <span style={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${skill.level}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies & Tools Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Technologies & Tools</h3>
          <div style={styles.techGrid}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                style={styles.techBadge}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.08)';
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExpertise;
