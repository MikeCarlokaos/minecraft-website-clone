import resourceful from "../../../assets/page/minecraft/images/tip/beresourceful.webp";
import survive from "../../../assets/page/minecraft/images/tip/survive.webp";
import build from "../../../assets/page/minecraft/images/tip/buildsomething.webp";

const guides = [
  {
    id: 1,
    coverImg: `${resourceful}`,
    title: "be resourceful",
    text: "Get crafty and use the surrounding environment to gather building materials—see how breaking down trees can help you create something new.",
    style: "flex-row",
  },

  {
    id: 2,
    coverImg: `${survive}`,
    title: "survive the night",
    text: "It's always best to avoid the unpredictable by distancing yourself from wandering mobs—you never know what'll happen if they get too close!",
    style: "flex-row-reverse",
  },

  {
    id: 3,
    coverImg: `${build}`,
    title: "build something amazing",
    text: "Discover all the versatile ways dust from the Redstone ore can be used to enhance your creations, bring them to life, or give them some bang.",
    style: "flex-row",
  },
];

export default guides;
