import Link from "next/link";
import useSWR from "swr";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = () => {
  // const { data } = useSWR(URL);
  // const tags = data?.map((content: { tags: any }) => {
  //   return content.tags;
  // });
  // const subjects = [...new Set(tags)];
  return (
    <>
      <header>
        <div>
          {/* {subjects.map((subject, i) => {
            return (
              <ul key={i}>
                <li>
                  <Link href={`#${subject}`}>{subject}</Link>
                </li>
              </ul>
            );
          })} */}
        </div>
      </header>
    </>
  );
};

export default Header;
