import { IProject } from "@/types/projects";

export const projects: IProject[] = [
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
    name: "Sinculpa Restaurant Menu",
    description:
      "I made this project for a restaurant in my city, I used GatsbyJS and Tailwind CSS, and I deployed it in github pages.",
    image: "https://sinculpasite.files.wordpress.com/2022/09/sinculp.jpeg",
    repository: "https://github.com/jsonfm/sinculpa",
    demo: "https://jsonfm.github.io/sinculpa/",
    tags: [
      {
        name: "Gatsby.js",
        color: "#4A10A0 ",
      },
    ],
    topic: "Frontend",
  },
  {
    name: "Lyriks",
    description:
      "A music app made with React and Tailwind. It uses redux toolkit and Shazam API, to show artists and songs. It also implements, the clasic music player controls: next, previous, pause, play, etc.",
    image:
      "https://github.com/jsonfm/lyriks-music-app/blob/master/docs/images/ss.jpeg?raw=true",
    demo: "https://lyriksio.netlify.app",
    repository: "https://github.com/jsonfm/lyriks-music-app",
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
  {
    name: "REMIO",
    description:
      "Some time ago, I worked on the development of remote labs at my university. As a result of this work, I generated useful tools for the development of IOT devices in real time.",
    image: "https://jsonfm.github.io/remio/assets/images/arch-1.png",
    repository: "https://github.com/jsonfm/remio",
    demo: "https://jsonfm.github.io/remio/",
    tags: [
      {
        name: "python",
        color: "#1F387B",
      },
    ],
    topic: "Backend",
  },
  {
    name: "Express WebChat",
    image:
      "https://github.com/jsonfm/express-webchat/raw/master/docs/images/webchatapp.png",
    description: "💬 A realtime chat app made with Express and SocketIO.",
    repository: "https://github.com/jsonfm/express-webchat",
  },
];
