import styles from "@/styles/layouts/header.module.scss";

const Logo = () => {
  return (
    <div>
      <h1 className={`${styles.logo}`}>고은서&apos;s Portfolio</h1>
      <p>Frontend developer</p>
    </div>
  );
};

export default Logo;
