type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "nathan.pinard95@gmail.com",
  title: "Bonjour, je suis Nathan PINARD 👋",
  profile: "/profile.avif",
  description:
    "",
  socials: [
    {
      label: "Mon CV",
      link: "/cv_PINARD_NATHAN.pdf",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/nathan-pinard-/",
    },
    {
      label: "Github",
      link: "https://github.com/YOUGBOY95",
    },
    {
      label: "Bento",
      link: "https://bento.me/nathan-pinard",
    },
  ],
};

export default presentation;
