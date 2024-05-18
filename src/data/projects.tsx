import { IProject } from "@/types/projects";

export const projects: IProject[] = [
  {
    name: "Lyriks",
    description:
      "A music app made with React and Tailwind. It uses redux toolkit and Shazam API, to show artists and songs. It also implements, the clasic music player controls: next, previous, pause, play, etc.",
    image:
      "https://github.com/jsonfm/lyriks-music-app/blob/master/docs/images/ss.jpeg?raw=true",
    demo: "https://lyriksio.netlify.app",
    repository: "https://github.com/jsonfm/lyriks-music-app",
    topic: "Frontend",
  },
  {
    name: "BgRemover",
    description: "",
    image:
      "https://github.com/jsonfm/flask-image-bgremover/raw/master/docs/images/preview.png",
    repository: "https://github.com/jsonfm/flask-image-bgremover",
    topic: "AI",
  },
  {
    name: "Little Lemon",
    description: "A react native app",
    image:
      "https://github.com/jsonfm/little-lemon-app/raw/master/docs/images/preview.gif",
    topic: "Mobile",
  },
  {
    name: "Petgram",
    description:
      "A social network for pets, which UI is inspired by instagram.",
    image:
      "https://github.com/jsonfm/petgram/blob/master/docs/images/petgram.jpeg?raw=true",
    repository: "https://github.com/jsonfm/petgram",
    demo: "https://petgram-jsonfm.vercel.app/",
    tags: [
      {
        name: "React.js",
        color: "#0DACB7 ",
      },
      {
        name: "Styled Components",
        color: "#FF338D",
      },
    ],
    topic: "Frontend",
  },
];
