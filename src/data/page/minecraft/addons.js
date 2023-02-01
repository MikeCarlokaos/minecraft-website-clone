import realm from "../../../assets/page/minecraft/images/addons/realm-plus.webp";
import trade from "../../../assets/page/minecraft/images/addons/trade.png";
import mobile from "../../../assets/page/minecraft/images/addons/mobile.png";

const addons = [
  {
    id: 1,
    coverImg: `${realm}`,
    title: "realm plus is available now",
    text: "Get instant access to over 50 Marketplace items with new additions each month. Share with friends on your own private Realms server.",
    button: "learn more",
    style: "flex-row",
  },

  {
    id: 2,
    coverImg: `${trade}`,
    title: "add more to your game",
    text: "Keep your gameplay endlessly inventive and fun with skin packs, texture packs, and more—some of which were built by our very own community members!",
    button: "browse marketplace",
    style: "flex-row-reverse",
  },

  {
    id: 3,
    coverImg: `${mobile}`,
    title: "find a new perspective",
    text: "In our community of millions, somone is always ready with fresh inspiration and news of the latest creations and releases.",
    button: "join the community",
    style: "flex-row",
  },
];

export default addons;
