

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
    "+3 year experience. I'm all about <strong>crafting tech solutions </strong> from Colombia 🇨🇴. I'm currently building <a href='https://gurwi.com/' target='_blank' class='bg-orange-500 hover:bg-orange-800 p-1 rounded-md font-bold'>GURWI</a>. ",
  socials: [
    {
      label: "Github",
      link: "https://github.com/jonniermartinez",
      icon: "./Icons/github.svg"
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/jonnier.ig/",
      icon: "./Icons/IG.svg"
    },
  ],
};

export default presentation;
