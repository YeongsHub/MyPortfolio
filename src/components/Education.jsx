import React from 'react';
import './Education.css';

const educationData = [
  {
    period: "April 2023 - today",
    institution: "Georg-August-Universität Göttingen – M.Sc.",
    details: [
      "• Degree program: M.Sc. Business Informatics",
      "• Graduation: expected in April 2025"
    ]
  },
  {
    period: "October 2019 - August 2023",
    institution: "Georg-August-Universität Göttingen – B.Sc.",
    details: [
      "• Degree program: B.Sc. Business Informatics",
      "• Degree: Bachelor of Science"
    ]
  }
];

export default function Education() {
  return (
    <div id="education" className="education">
      <h2>Academic Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <h3 className="education-period">{edu.period}</h3>
          <h4 className="education-institution">{edu.institution}</h4>
          <ul className="education-details">
            {edu.details.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
