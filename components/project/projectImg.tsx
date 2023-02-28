import Image, { StaticImageData } from "next/image";
import omu from "@/public/images/project/omu.jpg";
import portfolio from "@/public/images/project/portfolio.jpg";
import todo from "@/public/images/project/todo.jpg";
import styles from "@/styles/layouts/project.module.scss";

export const projects = [
  { name: "omu", img: omu },
  { name: "portfolio", img: portfolio },
  { name: "todo", img: todo },
];

const ProjectImg = ({ projectName }: { projectName: string }) => {
  const filterByName = (
    arr: { name: string; img: StaticImageData }[],
    name: string
  ) => {
    const loweredName = name.toLowerCase();
    const filteredData = arr.filter((el) => {
      return el.name.includes(loweredName);
    });
    return filteredData[0];
  };
  const filteredProjcet = filterByName(projects, projectName);
  return (
    <>
      {filteredProjcet ? (
        <Image
          className={styles.project_img}
          src={filteredProjcet?.img.src}
          alt={filteredProjcet?.name}
          sizes="(min-width: 480px) 100vw, (min-width:600px) 500px, 500px"
          fill
        />
      ) : null}
    </>
  );
};

export default ProjectImg;
