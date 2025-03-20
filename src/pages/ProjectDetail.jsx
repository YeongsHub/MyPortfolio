import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './data'; 
import './ProjectDetail.css';
import { HashLink } from 'react-router-hash-link';

export default function ProjectDetail() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);
  
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imgurl) => {
    setModalImage(imgurl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  if (!project) {
    return (
      <div className="project-detail">
        <p>404 Pages not Found</p>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p className="subtext">{project.subtext}</p>

      <div className="project-main-image">
        <img
          src={project.imgurl}
          alt={`${project.name} main page`}
          onClick={() => handleImageClick(project.imgurl)}
        />
      </div>

<br/>
      <h3>Sub-Pages</h3>
      <div className="project-detail-images">        
        {project.detailimginfo.map((item, index) => (
          <div key={index} className="detail-image-item">
            <img
              src={item.imgurl}
              alt={item.subject}
              onClick={() => handleImageClick(item.imgurl)}
            />
            <p className="image-caption">{item.subject}</p>
          </div>
        ))}
      </div>

      
      <div>
      <h3>Used Tools</h3><br/>

      </div>

      <HashLink to="/#AboutMe" className="back-link back-link-first">Back to Main</HashLink>
      <HashLink to="/#project" className="back-link">Back to project</HashLink>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="big" />
        </div>
      )}
    </div>
  );
}
