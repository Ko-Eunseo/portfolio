import Link from "next/link";
import { Client } from "@notionhq/client";
// import { getDatabase } from "../api/get";

const FirstProject = () => {
  return (
    <div>
      <h1>오무: 오늘의 무드</h1>
      <h2>
        <Link href="/">← Back to Home</Link>
      </h2>
    </div>
  );
};

export default FirstProject;
