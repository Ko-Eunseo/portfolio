import useSWR from "swr";

export const useData = async () => {
  return useSWR("/api/notion");
  // const { data, error } = useSWR("/api/notion");

  // return {
  //   result: data,
  //   isLoading: !error && !data,
  //   isError: error,
  // };
};
