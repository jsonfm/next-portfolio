"use client";
import { IProject } from "@/types/projects";
import { createContext, ReactNode, useContext, useState } from "react";

interface DrawerContextState {
  showDrawer: boolean;
  setShowDrawer: (showDrawer: boolean) => void;
  currentProject?: IProject;
  setCurrentProject: (project?: IProject) => void;
}

const DrawerContext = createContext<DrawerContextState>({
  showDrawer: false,
  setShowDrawer: () => {},
  currentProject: undefined,
  setCurrentProject: (project?: IProject) => {},
});

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  return context;
};

interface DrawerContextProviderProps {
  children: ReactNode;
}

export const DrawerContextProvider = ({
  children,
}: DrawerContextProviderProps) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentProject, setCurrentProject] = useState<IProject>();
  return (
    <DrawerContext.Provider
      value={{ showDrawer, setShowDrawer, currentProject, setCurrentProject }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
