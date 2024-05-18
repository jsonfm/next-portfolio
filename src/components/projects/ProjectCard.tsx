import { IProject } from "@/types/projects";
import React from "react";

interface Props {
  project: IProject;
  isMiddle?: boolean;
}

export const ProjectCard = ({ project, isMiddle = false }: Props) => {
  return (
    <div
      className={`w-80 md:w-full  ${
        isMiddle ? "md:h-96" : "h-80"
      } rounded-lg overflow-hidden `}
    >
      <div className={`w-full h-[80%] rounded-lg overflow-hidden`}>
        <img
          src={project?.image}
          className="w-full h-full object-contain bg-white"
          alt={`project-image`}
        />
      </div>
      <div className="py-4">
        <h4 className="text-gray-400">{project?.name}</h4>
        <p className="text-gray-500">{project?.topic}</p>
      </div>
    </div>
  );
};
