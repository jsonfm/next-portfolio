"use client";
import { useDrawerContext } from "@/context/drawer";
import { IProject } from "@/types/projects";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  project: IProject;
}

export const ProjectCard = ({ project }: Props) => {
  const { setShowDrawer, setCurrentProject } = useDrawerContext();
  const updateCurrentProject = () => {
    setCurrentProject(project);
    setShowDrawer(true);
  };
  return (
    <motion.div
      className={`cursor-pointer w-full md:w-full rounded-md overflow-hidden hover:scale-105 duration-200 h-64 md:h-[380px]`}
      onClick={updateCurrentProject}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={`w-full h-[70%] md:h-[80%] overflow-hidden borde`}>
        <img
          src={project?.image}
          className="w-full mx-auto h-full object-cover dark:bg-secondary"
          alt={`project-image`}
          loading="lazy"
        />
      </div>
      <div className="py-4">
        <h4 className="text-gray-200 uppercase">{project?.name}</h4>
        <p className="text-gray-500">{project?.topic}</p>
      </div>
    </motion.div>
  );
};
