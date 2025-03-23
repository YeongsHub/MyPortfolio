import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import "./Skills.css"

import htmlIcon from "../assets/html.png";
import cssIcon from '../assets/css.png';
import tailwindIcon from '../assets/tailwind.png';
import jsIcon from '../assets/javascript.png';
import tsIcon from '../assets/typescript.png';

import mySQLIcon from '../assets/mysql.png';
import javaIcon from '../assets/java.png';
import springIcon from '../assets/spring-boot.png';

import reactIcon from '../assets/react.png';
import bootstrapIcon from '../assets/bootstrap.png';

import figmaIcon from '../assets/figma.png';
import photoshopIcon from '../assets/photoshop.png';

import gitIcon from '../assets/git.png';
import azureIcon from '../assets/azure.svg';
import vercelIcon from '../assets/vercel.svg';
import kibanaIcon from '../assets/kibana.png';
import postmanIcon from '../assets/postman.png';


export default function Skills() {
    return(
        <Stack id="Skills" direction="vertical" gap={2}><h1>Skills</h1>
            <div>
          <h2><Col>Frontend</Col></h2>
          <h3><Badge bg="light" text="dark">
            <img src={htmlIcon} alt="HTML Icon" className="skill-icon" />
          HTML</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={cssIcon} alt="CSS Icon" className="skill-icon" />
          CSS</Badge></h3>

          <h3><Badge bg="light" text="dark">            
            <img src={jsIcon} alt="Javascript Icon" className="skill-icon" />
          JavaScript</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={tsIcon} alt="Typescript Icon" className="skill-icon" />
          TypeScript</Badge></h3>
          </div>
          <div>
          <h2><Col>Backend / Database</Col></h2>
          <h3><Badge bg="light" text="dark">            
            <img src={javaIcon} alt="Java Icon" className="skill-icon" />
          Java</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={mySQLIcon} alt="MySQL Icon" className="skill-icon" />
          MySQL</Badge></h3>
          </div>
          <div>
          <h2><Col>Frameworks / Libraries</Col></h2>
          <h3><Badge bg="light" text="dark">            
            <img src={springIcon} alt="Springboot Icon" className="skill-icon" />
          Spring Boot</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={reactIcon} alt="React Icon" className="skill-icon" />
          ReactJS</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={bootstrapIcon} alt="Bootstrap Icon" className="skill-icon" />
          Bootstrap</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={tailwindIcon} alt="Tailwind CSS Icon" className="skill-icon" />
          Tailwind CSS</Badge></h3>
          </div>
            <div>
        <h2><Col>Design</Col></h2>
          <h3><Badge bg="light" text="dark">            
            <img src={figmaIcon} alt="Figma Icon" className="skill-icon" />
          Figma</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={photoshopIcon} alt="Photoshop Icon" className="skill-icon" />
          Photoshop</Badge></h3>
          </div>
          <div>
        <h2><Col>Other Tools</Col></h2>
          <h3><Badge bg="light" text="dark">            
            <img src={gitIcon} alt="Git Icon" className="skill-icon" />
          Git</Badge></h3>
          <h3><Badge bg="light" text="dark"> 
          <img src={azureIcon} alt="azureDevOps Icon" className="skill-icon" />
          Azure DevOps</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={vercelIcon} alt="Vercel Icon" className="skill-icon" />
          Vercel</Badge></h3>
          <h3><Badge bg="light" text="dark">            
            <img src={postmanIcon} alt="postman Icon" className="skill-icon" />
          Postman</Badge></h3>
          <h3><Badge bg="light" text="dark">   
          <img src={kibanaIcon} alt="Kibana Icon" className="skill-icon" />
          Kibana</Badge></h3>
          </div>
      </Stack>
    );
}