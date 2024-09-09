

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
  mail: "",
  title: "Hi, I’m Jonnier Martinez 👋",
  profile: "https://imagenes.jonnier.com/Jhonnier.jpg",
  description:
    "+1 year experience. I'm all about <strong>crafting tech solutions </strong> from Cali, Colombia 🇨🇴. I'm currently working at <a href='https://velaio.com/' target='_blank' class='bg-blue-500 hover:bg-blue-800 p-1 rounded-md font-bold'>VELAIO</a> as a Zoho solutions analyst expert.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/jonniermartinez/",
      icon: "./Icons/LinkedIn.svg"
    },
    {
      label: "Github",
      link: "https://github.com/jonniermartinez",
      icon: "./Icons/github.svg"
    },
  ],
};

export default presentation;
