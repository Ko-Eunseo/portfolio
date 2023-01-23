import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const FetchPosts = (URL: string) => {
  const { data } = useSWR(URL, fetcher);
  return data;
};

const usePosts = () => {};

export { usePosts, FetchPosts };
