import spinner from "@/public/essets/beanEater.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image src={spinner} alt="로딩중" width={100} height={100} />
    </div>
  );
};

export default Loading;
