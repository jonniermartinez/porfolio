import type { Social } from "./presentation";

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile: string;
};

const presentation: Presentation = {
  mail: "",
  title: "Jonnier Martinez",
  profile: "/me.jpg",
  description:
    "Full Stack Software Developer experienced in designing and implementing scalable web applications, microservices, and business process automation. Passionate about Clean Architecture, SOLID principles, and building impactful products.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/jonniermartinez",
      icon: "/Icons/github.svg",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jonniermartinez/",
      icon: "/Icons/LinkedIn.svg",
    },
  ],
};

export default presentation;
export type { Social };
