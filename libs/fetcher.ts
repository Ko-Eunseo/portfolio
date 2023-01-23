import axios from "axios";

const fetcher = (URL: string) => axios(URL).then((res) => JSON.parse(res.data));

export default fetcher;
