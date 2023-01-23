import Link from "next/link";
import { FetchPosts } from "@/hooks/usePosts";
import { useSWRConfig } from "swr";
import useSWR from "swr";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const URL = "http://localhost:3000/api/notion";
  const { data } = useSWR(URL);
  const tags = data?.map((content: { tags: any }) => {
    return content.tags;
  });
  const subjects = [...new Set(tags)];
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
          {subjects.map((subject, i) => {
            return (
              <ul key={i}>
                <li>{subject}</li>
              </ul>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
