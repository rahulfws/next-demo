"use client";

import { useRouter } from "next/navigation";

const Routing = () => {
  const router = useRouter()
  console.log("router--->", router);
  
  const handleClick = () => {
    router.push("/express");
  };

  return (
    <div>
      <button onClick={handleClick}>Click for change route</button>
    </div>
  );
};

export default Routing;
