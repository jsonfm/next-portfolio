"use client";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Drawer } from "@/components/ui/Drawer";
import { projects } from "@/data/projects";
import { IProject } from "@/types/projects";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="py-6 h-[300px] flex items-center">
        <div className="container-md">
          <p className=" md:text-2xl text-gray-500">Hello there,</p>
          <p className="text-2xl md:text-4xl dark:text-gray-300 text-gray-600">
            {`I'm Jason, a software engineer passionate about building scalable solutions and transforming data into actionable insights.`}
          </p>
          <p className="text-gray-400 mt-6 text-lg">
            web, mobile and data development
          </p>
        </div>
      </section>
      <section className="py-6">
        <div className="container-md">
          <div className="h-[1px] w-full bg-gray-600 mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6">
              {projects?.slice(0, 4)?.map((item, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  project={item as IProject}
                />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {projects?.slice(4, 7)?.map((item, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  project={item as IProject}
                  isMiddle={true}
                />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {projects?.slice(7)?.map((item, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  project={item as IProject}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-6"></section>
      <Drawer />
    </>
  );
};

export default Home;
