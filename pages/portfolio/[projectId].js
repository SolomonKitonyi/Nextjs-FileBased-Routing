import React from "react";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  console.log(router.path);
  console.log(router.query);
  return (
    <div>
      <h1>The Project Id Page</h1>
    </div>
  );
};

export default ProjectPage;
