import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../pages/data.js";
import { Link } from 'react-router-dom';

import "./Project.css";

export default function Project() {
  return (
    <Card id="project">
      <h1>Project</h1><br />
      <div className="row">
        {data.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Card>
  );
}

function ProjectItem({ project }) {
  return (
    <div className="col-md-4">
      <Card.Img variant="top" src={project.imgurl} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.subtext}</Card.Text>
        <Link to={`/detail/${project.id}`}>
          <Button>See details</Button>
        </Link>
      </Card.Body>
    </div>
  );
}
