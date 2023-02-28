import Image, { StaticImageData } from "next/image";
import html5 from "@/public/images/skillLogos/html5.svg";
import css3 from "@/public/images/skillLogos/css3.svg";
import react from "@/public/images/skillLogos/react.svg";
import javascript from "@/public/images/skillLogos/javascript.svg";
import figma from "@/public/images/skillLogos/figma.svg";
import styles from "@/styles/layouts/skill.module.scss";

const LogoImgs = ({ image }: { image: string }) => {
  const logos = [
    { name: "html5", img: html5 },
    { name: "css3", img: css3 },
    { name: "react", img: react },
    { name: "javascript", img: javascript },
    { name: "figma", img: figma },
  ];
  const findLogo = (
    arr: { name: string; img: StaticImageData }[],
    name: string
  ) => {
    const loweredName = name.toLocaleLowerCase();
    return arr.find((el) => {
      return el.name === loweredName;
    });
  };
  let foundedImage = findLogo(logos, image);
  return (
    <div className={styles.cardImgs}>
      {foundedImage ? (
        <Image
          src={foundedImage?.img.src}
          alt={foundedImage?.name}
          sizes="(min-width: 480px) 30vw, (min-width:600px) 50px, 50px"
          fill
        />
      ) : null}
    </div>
  );
};

export default LogoImgs;
