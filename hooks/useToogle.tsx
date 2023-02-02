import { useState } from "react";

const useToggle = (init: boolean) => {
  const [toggle, setToggle] = useState(init);

  const toggler = () => {
    setToggle(!toggle);
  };
  return [toggle, toggler] as const;
};

export default useToggle;
