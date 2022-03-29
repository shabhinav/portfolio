import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_image}
        src={project.image}
        alt={project.name}
      />
      <div className={styles.content}>
        <h3>{project.name}</h3>

        <p>
          <strong className='font-base'>Description:-</strong>
          {project.description}
        </p>
        <div>
          <p>
            <strong className='font-base'>Role:-</strong>
            {project.role}
          </p>
        </div>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project?.demo && (
            <a
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
