import React from 'react'
import Cert1Img from '../assets/Certificates/Cert1.png';
import Cert2Img from '../assets/Certificates/Cert2.png';
import Cert3Img from '../assets/Certificates/Cert3.png';
import Cert4Img from '../assets/Certificates/Cert4.png';
const Certificates = () => {
  const container = {
    backgroundColor: '#f5f5f5',
    padding: '25px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };
  const heading = {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#1a1a1a',
  };
  const underline = {
    width: '100px',
    height: '4px',
    backgroundColor: '#1a1a1a',
    margin: '0 auto 30px',
  };
  const certContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const certCard = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const certImage = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const certContent = {
    padding: '20px',
  };

  const certTitle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#1a1a1a',
  };

  const certDescription = {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
  };

  const certificatesData = [
    {
      id: 1,
      image: Cert1Img,
      title: "Solidworks CAD Design Associate",
      description: "Solidworks CAD Design Associate",
    },
    {
      id: 2,
      image: Cert2Img,
      title: "IBM - Introduction to Gen AI",
      description: "IBM - Introduction to Gen AI",
    },
    {
      id: 3,
      image: Cert3Img,
      title: "Oracle Apex Cloud Developer",
      description: "Oracle Apex Cloud Developer",
    },
    {
      id: 4,
      image: Cert4Img,
      title: "Machine Learning & Image Processing",
      description: "Machine Learning & Image Processing",
    }
  ];

  return (
    <div style={container} id="certificates">
      <div style={heading}>Certificates</div>
      <div style={underline}></div>
      <div style={certContainer}>
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            style={certCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img src={cert.image} alt={cert.title} style={certImage} />
            <div style={certContent}>
              <h3 style={certTitle}>{cert.title}</h3>
              <p style={certDescription}>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates