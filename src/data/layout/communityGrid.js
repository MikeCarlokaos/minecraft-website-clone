import sunflower from "../../assets/images/community/sunflower_1x1.webp";
import java1 from "../../assets/images/community/java1.webp";
import legends from "../../assets/images/community/Legends_newfriends_tile.webp";
import realms from "../../assets/images/community/RealmsPlus_December2022.webp";
import java2 from "../../assets/images/community/java2.webp";
import java3 from "../../assets/images/community/java3.webp";
import map from "../../assets/images/community/realms_map.webp";
import cornflower from "../../assets/images/community/cornflower-1x1.webp";

const communityGrids = [
  {
    id: 1,
    coverImg: `${sunflower}`,
    title: "around the block: sunflower plains",
    text: "Not that plain at all!",
    tag: "deep dives",
    style: "",
  },

  {
    id: 2,
    coverImg: `${java1}`,
    title: "minecraft java edition 1.19.3",
    text: "Minecraft Java 1.19.3 Released",
    tag: "news",
    style: "",
  },

  {
    id: 3,
    coverImg: `${legends}`,
    title: "when old foes become new friends",
    text: "The familiar yet unexpected allies in Minecraft Legends",
    tag: "deep dives",
    style: "",
  },

  {
    id: 4,
    coverImg: `${realms}`,
    title: "realms plus december 2022",
    text: "Winter wonders, mythical skins, and more!",
    tag: "marketplace",
    style: "",
  },

  {
    id: 5,
    coverImg: `${java2}`,
    title: "minecraft 1.19.3 release candidate 3",
    text: "A Minecraft Java Release Candidate",
    tag: "news",
    style: "hidden",
  },

  {
    id: 6,
    coverImg: `${java3}`,
    title: "minecraft 1.19.3 pre-release 3",
    text: "A Minecraft Java Pre-Release",
    tag: "news",
    style: "hidden",
  },

  {
    id: 7,
    coverImg: `${map}`,
    title: "new on java realms: maps for the lazy",
    text: "Lorem ipsum these 12 maps!",
    tag: "news",
    style: "hidden",
  },

  {
    id: 8,
    coverImg: `${cornflower}`,
    title: "taking inventory: cornflower",
    text: "Not to be confused with cornflour!",
    tag: "deep dives",
    style: "hidden",
  },
];

export default communityGrids;
