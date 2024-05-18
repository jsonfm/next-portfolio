import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { IProject } from "@/types/projects";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="py-6">
        <div className="container-md">
          <p className=" md:text-2xl text-gray-400">Hello there,</p>
          <p className="text-2xl md:text-4xl text-gray-500">
            I am a software developer with an interest in creating{" "}
            <b className="font-bold">AI</b> products and cross-platform
            applications.
          </p>
        </div>
      </section>
      <section className="py-6">
        <div className="container-md">
          <div className="h-[1px] w-full bg-gray-400 mb-12"></div>
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
    </>
  );
};

export default Home;
