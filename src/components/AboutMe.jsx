import React, { useState } from 'react';
import './AboutMe.css';
import Me from "../assets/yeong1.jpeg";

const englishMe = [
  {
    title: "Problem Solving",
    content:
      "Solving different problems and finding new approaches motivate me. I also enjoy checking Key Performance Indicators to see how my development contributes to business benefits.",
  },
  {
    title: "Learning and Growth",
    content:
      "Technology is continuously changing and developing; thus, I want to be a developer who learns and grows every moment. I enjoy learning new technologies and upgrading myself through diverse experiences.",
  },
  {
    title: "User-Experience Development",
    content:
      "My goal is to develop intuitive interfaces that prioritize the user's perspective, ensuring they are accessible and easy to use for everyone.",
  },
];

const germanMe = [
  {
    title: "Problemlösung",
    content:
      "Das Lösen unterschiedlicher Probleme und das Finden neuer Ansätze motivieren mich. Außerdem überprüfe ich gerne Key Performance Indicators, um zu sehen, wie meine Entwicklung dem Geschäft zugutekommt.",
  },
  {
    title: "Lernen und Wachstum",
    content:
      "Da sich die Technologie ständig weiterentwickelt, möchte ich ein Entwickler sein, der in jedem Moment lernt und wächst. Ich genieße es, neue Technologien zu erlernen und mich durch vielfältige Erfahrungen weiterzuentwickeln.",
  },
  {
    title: "User-Experience Entwicklung",
    content:
      "Mein Ziel ist es, intuitive User-Experience zu entwickeln, die die Perspektive der Nutzer in den Vordergrund stellen, sodass sie für jeden zugänglich und einfach zu bedienen sind.",
  },
];

export default function AboutMe() {
  const [language, setLanguage] = useState("en");
  const [sections, setSections] = useState(englishMe);

  function handleLanguageChange(lang) {
    if (lang === language) return;
    setSections(lang === "de" ? germanMe : englishMe);
    setLanguage(lang);
  }

  return (
    <div id="AboutMe" className="about-me-container">

      <h1>{language === "en" ? "About Me" : "Über Mich"}</h1>       
      <div className="language-buttons">
        <button
          onClick={() => handleLanguageChange("en")}
          disabled={language === "en"}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange("de")}
          disabled={language === "de"}
        >
          Deutsch
        </button>
      </div>

      <div className="d-inline-block float-end" >
        <img 
          alt="Profile"
          src={Me}
          width="500"
          height="500"
          className="img-fluid photo"
        />
      </div>

      {sections.map((section, i) => (
        <section key={i} className="about-section">
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}

    </div>
  );
}
