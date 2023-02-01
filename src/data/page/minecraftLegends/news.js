import foes from "../../../assets/page/minecraftLegends/images/news/Legends_newfriends_tile.webp";
import pvp from "../../../assets/page/minecraftLegends/images/news/Legends_PVPDD_tile.webp";
import golem from "../../../assets/page/minecraftLegends/images/news/golems-tile.webp";
import mob from "../../../assets/page/minecraftLegends/images/news/Legends_MobdDD_tile.webp";
import diary from "../../../assets/page/minecraftLegends/images/news/MinecraftLegends_screenshot3_tile.webp";
import trailer from "../../../assets/page/minecraftLegends/images/news/NEW_MCL_trailer-tile_1x1_Frame2.webp";
import thumbnail from "../../../assets/page/minecraftLegends/images/news/legends_thumbnail.webp";
import cover from "../../../assets/page/minecraftLegends/images/news/MinecraftLegends_KeyArt_Net_NoLogo.webp";

const news = [
  {
    id: 1,
    coverImg: `${foes}`,
    title: "when old foes become new friends",
    text: "The familiar yet unexpected allies in Minecraft Legends",
    tag: "deep dives",
    style: "",
  },

  {
    id: 2,
    coverImg: `${pvp}`,
    title: "minecraft legends dev diaries: pvp",
    text: "The devs talk about strategic building, competing for resources, and more",
    tag: "news",
    style: "",
  },

  {
    id: 3,
    coverImg: `${golem}`,
    title: "new friends: the golems",
    text: "Brave companions, ready to defend the Overworld",
    tag: "deep dive",
    style: "",
  },

  {
    id: 4,
    coverImg: `${mob}`,
    title: "the second minecraft legends dev diary",
    text: "we talk about familiar friends, old foes, and some fancy headgear",
    tag: "deep dives",
    style: "",
  },

  {
    id: 5,
    coverImg: `${diary}`,
    title: "the first minecraft legends dev diary",
    text: "BBI join us to talk about the making of a legend",
    tag: "legends",
    style: "hidden",
  },

  {
    id: 6,
    coverImg: `${trailer}`,
    title: "new minecraft legends trailer",
    text: "The battle heats up as the piglins bring the danger - and the",
    tag: "news",
    style: "hidden",
  },

  {
    id: 7,
    coverImg: `${thumbnail}`,
    title: "minecraft legends community roundup",
    text: "Unite the Overworld",
    tag: "fan art",
    style: "hidden",
  },

  {
    id: 8,
    coverImg: `${cover}`,
    title: "minecraft legends",
    text: "A new action strategy game, coming in 2023",
    tag: "news",
    style: "hidden",
  },
];

export default news;
