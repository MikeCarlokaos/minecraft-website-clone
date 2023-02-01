import create from "../../../assets/page/minecraft/images/background/modes-minecraft-create.jpg";
import survival from "../../../assets/page/minecraft/images/background/modes-minecraft-survival.webp";
import friends from "../../../assets/page/minecraft/images/background/modes-minecraft-friends.jpg";

const modes = [
  {
    id: 0,
    bgImg: `${create}`,
    title: "play to create",
    text: "If you can dream it, you can build it. Put your imagination and limitless resources to work with Creative Mode.",
    style: "text-black",
  },
  {
    id: 1,
    bgImg: `${survival}`,
    title: "play to survive",
    text: "Battle mobs, construct shelter, and explore the landscape—it’s all in a day’s work when you try to survive and thrive in Survival Mode.",
    style: "text-white",
  },
  {
    id: 2,
    bgImg: `${friends}`,
    title: "play with friends",
    text: "Build together, search together, have fun together! The world of Minecraft is even better when explored with your best buds.",
    style: "text-white",
  },
];

export default modes;
