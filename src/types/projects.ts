export interface IProjectTag {
  name: string;
  color: string;
}

export interface IProject {
  name: string;
  description: string;
  image: string;
  demo?: string;
  repository?: string;
  tags?: IProjectTag[];
  topic?: string;
}
