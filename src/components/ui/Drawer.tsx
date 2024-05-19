"use client";
import { useDrawerContext } from "@/context/drawer";
import React from "react";

import { IconLink, IconBrandGithub } from "@tabler/icons-react";

interface Props {
  show?: boolean;
}

export const Drawer = ({ show }: Props) => {
  const { showDrawer, setShowDrawer, currentProject } = useDrawerContext();
  const close = () => setShowDrawer(false);
  return (
    <div
      className={`${
        showDrawer ? "fixed left-0" : "absolute left-full"
      } top-0  h-screen flex  w-full overflow-hidden duration-200`}
    >
      <div
        className="w-1/3 md:w-full h-full backdrop-blur-md"
        onClick={close}
      ></div>
      <div className="w-2/3 md:w-1/3 max-w-[400px] h-full dark:bg-secondary bg-white ">
        <div className="h-48 md:h-80 border border-gray-600">
          <img
            src={currentProject?.image}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-6">
          <h4 className="mb-4">{currentProject?.name}</h4>
          <p className="text-gray-500">{currentProject?.description}</p>
        </div>
        <div className="flex items-center justify-center gap-6 px-6 mt-6">
          {!!currentProject?.demo && (
            <a
              href={currentProject?.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center gap-2"
            >
              <IconLink />
              Demo
            </a>
          )}
          {!!currentProject?.repository && (
            <a
              href={currentProject?.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center gap-2"
            >
              <IconBrandGithub />
              code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
