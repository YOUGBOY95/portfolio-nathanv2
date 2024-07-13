export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [

  {
    title: "🤖 | BUMBLE-B",
    techs: ["React native", "Typescript", "Expo", "Java", "C++", "Docker"],
    link: "https://github.com/N95Ryan/Bumble-B",
    isComingSoon: true,
  },
  
  {
    title: "🎮 | ULG",
    techs: ["React.js", "Typescript","Scss","Docker"],
    link: "https://www.urbanleaguegame.com/",
  },

  {
    title: "🌐​ | MON PORTFOLIO V1",
    techs: ["React.js", "Typescript","Scss"],
    link: "https://portfolio-nathan-bfgy1pz0e-yougboy95s-projects.vercel.app/",
  },

  {
    title: "🪀 | SALINE ROYALE ACADEMY",
    techs: ["React.js", "Javascript","Scss", "Java","Docker"],
    link: "https://saline-royal.vercel.app/",
  },
  {
    title: "✨ | SECRET-TIME",
    techs: ["React.js", "Javascript", "Tailwind.css"],
    link: "https://secret-time.vercel.app/",
  },
  
];

export default projects;
