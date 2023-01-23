import { AppProps } from "next/app";
import useSWR, { SWRConfig } from "swr";
import { FetchPosts } from "@/hooks/usePosts";
import fetcher from "@/libs/fetcher";

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default App;
