import React from 'react';
import './Career.css';

const careerData = [
  {
    period: "September 2021 - December 2024",
    company: "Sartorius – Working Student | Software Technology Enablement Göttingen",
    details: [
      "• Development of a web application for analyzing KPIs with React and Typescript",
      "• UX design for interfaces of laboratory instruments with Figma",
      "• Analysis of applications and creation of user stories for further optimization",
      "• Working in an agile software development team"
    ]
  },
  {
    period: "April 2018 - September 2021",
    company: "Adecco – IT Contractor Kassel",
    details: [
      "• IT Contractor for IBM in the Quality Assurance X-Force Content Security team",
      "• Database and data collection",
      "• Analysis and control of spam emails"
    ]
  },
  {
    period: "May 2014 - June 2015",
    company: "Oktokki Imagineering - Project Manager Seoul",
    details: [
      "Team: Business Strategic Department",
      "• Project and business planning",
      "• Website- and blog administration"
    ]
  }
];

export default function Career() {
  return (
    <div id="career" className="career">
      <h2>Professional career</h2>
      {careerData.map((job, index) => (
        <div key={index} className="job">
          <h3 className="job-period">{job.period}</h3>
          <h4 className="job-company">{job.company}</h4>
          <ul className="job-details">
            {job.details.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
