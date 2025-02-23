import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';
import { getArticles } from './api/articles';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getArticles();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
