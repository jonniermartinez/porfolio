

type Social = {
  label: string;
  link: string;
  icon: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile: string;
};

const presentation: Presentation = {
  mail: "hi@sezz.dev",
  title: "Hi, I’m Jonnier Martinez 👋",
  profile: "/me.jpg",
  description:
    "+15 años de experiencia. <strong>Ingeniero de Software</strong> de Cali, Colomboa. Especializado en el desarrollo de aplicaciones web únicas.",
  socials: [
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/semihbugrasezer",
      icon: "./Icons/github.svg"
    },
    {
      label: "Twetter",
      link: "https://www.kaggle.com/semihbugrasezer",
      icon: "./Icons/github.svg"
    },
    {
      label: "Github",
      link: "https://github.com/semihbugrasezer",
      icon: "./Icons/github.svg"
    },
  ],
};

export default presentation;
