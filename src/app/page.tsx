"use client";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Drawer } from "@/components/ui/Drawer";
import { projects } from "@/data/projects";
import { IProject } from "@/types/projects";
import { Icon } from "@iconify/react";
import React from "react";
import { motion } from "framer-motion";
import { MagicButton } from "@/components/ui/MagicButton";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

const Home = () => {
  return (
    <>
      <section className="py-6">
        <div className="container-md w-full h-full min-h-[200px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[700px]  flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[600px] "
          >
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl mb-4"
            >
              Jason
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-4xl lg:text-5xl inline-block bg-gradient-to-r from-rose-600 via-blue-500 to-indigo-400 bg-clip-text  text-transparent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.05 }}
              drag="x"
              dragConstraints={{ left: 0, right: 20 }}
            >
              Fullstack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-2 md:mt-6 text-sm md:text-xl"
            >
              Focused on problem solving and resources optimization. Strategist
              and data analyst. Entrepreneurial spirit. Web & mobile developer
            </motion.p>
            <div className="mt-16 flex justify-center md:justify-start">
              <a
                href="mailto:franciscomacas3@gmail.com?subject=Get%20in%20Touch&body=Hey%20Jason%2C%20..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton>Get in Touch</MagicButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        <div className="container-md flex justify-center md:justify-start"></div>
      </section>
      <section className="py-16">
        <div className="container-md">
          <motion.h4
            className="mb-16 text-center text-xl md:text-2xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.7 }}
          >
            Technologies
          </motion.h4>
          <motion.div
            className="w-full flex justify-center items-center gap-2  dark:text-gray-200"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            <Icon icon="tabler:brand-nodejs" fontSize={44} />
            <Icon icon="ant-design:python-outlined" fontSize={45} />
            <Icon icon="uil:react" fontSize={50} />
            <Icon icon="teenyicons:nextjs-outline" fontSize={38} />
            <Icon icon="cib:postgresql" fontSize={40} />
            <Icon icon="bxl:mongodb" className="-ml-1" fontSize={42} />
          </motion.div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-md">
          <motion.h4
            className="mb-16 text-center text-xl md:text-2xl"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            Services
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
            <motion.div
              className="flex flex-col"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h5 className="text-xl mb-2 text-rose-500">Backend</h5>
              <p>
                REST and GraphQL API development, data modeling, relational and
                non-relational databases, vector databases, security.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h5 className="text-xl mb-2 text-blue-400">Frontend</h5>
              <p>
                Mobile first and responsive development. Layout and design,
                prototyping of web applications with SSR, SCR, PWA.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h5 className="text-xl mb-2 text-indigo-400">Mobile</h5>
              <p>
                Mobile application development with <b>React Native</b>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-md">
          <motion.h4
            className="mb-16 text-center text-xl md:text-2xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.7 }}
          >
            Work
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects?.map((item, index) => (
              <ProjectCard key={`project-${index}`} project={item} />
            ))}
          </div>
        </div>
      </section>
      <Drawer />
    </>
  );
};

export default Home;
