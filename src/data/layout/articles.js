import avatar from "../../assets/images/article/avatar-cover.webp";
import jacket from "../../assets/images/article/minecraft-jacket.jpg";
import fauna from "../../assets/images/article/minecraft-dungeons-fauna.webp";

const articles = [
  {
    id: 1,
    coverImg: `${avatar}`,
    alt: "minecraft avatar",
    title: "you are the avatar!",
    text: "Master all four elements and learn new skills from Team Avatar and Team Korra, meet up with Katara, Zuko, and others, and complete quests in this element bending game.",
    button: "learn more",
  },

  {
    id: 2,
    coverImg: `${jacket}`,
    alt: "minecraft shop",
    title: "shop the holiday gift guide",
    text: "Don't miss out on exclusive Minecraft holiday merch, including cozy sweaters, mugs, stockings, ornaments, and the newest Minecraft toys!",
    button: "shop now",
  },

  {
    id: 3,
    coverImg: `${fauna}`,
    alt: "minecraft dungeons fauna",
    title: "come together at the faire!",
    text: "Fauna Faire is setting up camp, bringing with it both blazing activities and fun festivities. Unite with friends and take on new challenges together.",
    button: "learn more",
  },
];

export default articles;
