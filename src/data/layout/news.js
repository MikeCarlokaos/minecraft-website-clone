import realms from "../../assets/images/news/minecraft-realms.webp";
import avatar from "../../assets/images/news/minecraft-avatar.webp";
import fence from "../../assets/images/news/fence.webp";
import sunflower from "../../assets/images/news/sunflower.webp";

const news = [
  {
    id: 1,
    coverImg: `${sunflower}`,
    title: "around the block: sunflower plains",
    text: "Not that pain at all!",
    tag: "deep dive",
  },

  {
    id: 2,
    coverImg: `${realms}`,
    title: "realms plus: december",
    text: "Winter wonders, mythical skins, and more!",
    tag: "marketplace",
  },

  {
    id: 3,
    coverImg: `${avatar}`,
    title: "a new avatar adventure",
    text: "Aang, Korra, and friends are coming to Minecraft!",
    tag: "marketplace",
  },

  {
    id: 4,
    coverImg: `${fence}`,
    title: "block of the month: fence",
    text: "The great barrier block!",
    tag: "deep dive",
  },
];

export default news;
