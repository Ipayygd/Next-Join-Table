import { PrismaClient } from "@prisma/client";
import AddProject from "./add";
import DeleteProject from "./delete";
const prisma = new PrismaClient();

const getProjects = async () => {
  const response = await prisma.projects.findMany({
    select: {
      id: true,
      title: true,
      category: true,
      description: true,
      image: true,
      link: true,
      technologyId: true,
      technology: true,
    },
  });
  return response;
};

const getTechnology = async () => {
  const response = await prisma.technology.findMany();
  return response;
};

const ProjectPage = async () => {
  const [projects, technology] = await Promise.all([
    getProjects(),
    getTechnology(),
  ]);
  return (
    <main>
      <h1>Projects</h1>
      <AddProject technology={technology} />
      {projects.map((project) => (
        <div key={project.id}>
          <img src={project.image} />
          <h1>Title : {project.title}</h1>
          <h1>Category : {project.category}</h1>
          <h1>Description : {project.description}</h1>
          <h1>Link : {project.link}</h1>
          <h1>Tech : {project.technology.name}</h1>
          <DeleteProject project={project} />
        </div>
      ))}
    </main>
  );
};

export default ProjectPage;
