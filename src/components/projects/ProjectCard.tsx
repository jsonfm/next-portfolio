"use client";
import { useDrawerContext } from "@/context/drawer";
import { IProject } from "@/types/projects";
import React from "react";

interface Props {
  project: IProject;
  isMiddle?: boolean;
}

export const ProjectCard = ({ project, isMiddle = false }: Props) => {
  const { setShowDrawer, setCurrentProject } = useDrawerContext();
  const updateCurrentProject = () => {
    setCurrentProject(project);
    setShowDrawer(true);
  };
  return (
    <div
      className={`cursor-pointer w-full md:w-full  ${
        isMiddle ? "md:h-96" : "h-80"
      } rounded-md overflow-hidden `}
      onClick={updateCurrentProject}
    >
      <div className={`w-full h-[80%] rounded-md overflow-hidden`}>
        <img
          src={project?.image}
          className="w-full h-full object-contain dark:bg-secondary bg-white"
          alt={`project-image`}
          loading="lazy"
        />
      </div>
      <div className="py-4">
        <h4 className="text-gray-400">{project?.name}</h4>
        <p className="text-gray-500">{project?.topic}</p>
      </div>
    </div>
  );
};
