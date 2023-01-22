import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <h2>
        <Link href="/">← Back to Home</Link>
      </h2>
      <div>
        <Image
          src="/images/profile.webp" //
          alt="eunseo"
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default About;
