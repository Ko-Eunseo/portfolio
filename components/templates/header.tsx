import Link from "next/link";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <header>
        <div>
          <h1>
            <Link href="/about">About Me</Link>
          </h1>
          <h1>
            <Link href="/projects/first-project">Project</Link>
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
