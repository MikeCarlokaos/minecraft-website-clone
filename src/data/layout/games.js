import minecraft from "../../assets/images/games/minecraft-cover.jpg";
import minecraftDungeon from "../../assets/images/games/minecraft-dungeons-cover.jpg";
import minecraftLegend from "../../assets/images/games/minecraft-legends-cover.webp";
import minecraftEducation from "../../assets/images/games/minecraft-education-edition-cover.webp";

const games = [
  {
    id: 1,
    coverImg: `${minecraft}`,
    title: "minecraft",
    text: "Explore your own unique world, survive the night, and create anything you can imagine!",
    link: "/minecraft",
  },

  {
    id: 2,
    coverImg: `${minecraftDungeon}`,
    title: "minecraft dungeons",
    text: "Discover an all-new action adventure game, inspired by classic dungeon crawlers!",
    link: "/minecraft-dungeons",
  },

  {
    id: 3,
    coverImg: `${minecraftLegend}`,
    title: "minecraft legends",
    text: "Discover the myteries of Minecraft Legends, a new action strategy game.",
    link: "/minecraft-legends",
  },

  {
    id: 4,
    coverImg: `${minecraftEducation}`,
    title: "minecraft: education edition",
    text: "A game-based learning platform supporting thousands of educators in over 100 countries!",
    link: "/minecraft-education",
  },
];

export default games;
