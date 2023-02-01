import img1 from "../../../assets/page/community/image/resource/image.webp";
import img2 from "../../../assets/page/community/image/resource/image-2.webp";
import img3 from "../../../assets/page/community/image/resource/image-3.jfif";
import img4 from "../../../assets/page/community/image/resource/image-4.webp";

const resources = [
  {
    id: 1,
    coverImg: `${img1}`,
    alt: "Support",
    title: "get help with minecraft",
    text: "Find answers for all of your Minecraft questions.",
    button: "",
    style: "flex-row",
  },

  {
    id: 2,
    coverImg: `${img2}`,
    alt: "Feedback",
    title: "how to submit feedback",
    text: "We need your feedback to help our team find out about the things that matter to you the most and what you want to see in Minecraft.",
    button: "",
    style: "flex-row-reverse",
  },

  {
    id: 3,
    coverImg: `${img3}`,
    alt: "Bug Report",
    title: "bugs us about bugs",
    text: "Sometimes bugs can come along and spoil everything. That's why we want you to log bugs so the Minecraft team can fix them asap.",
    button: "",
    style: "flex-row",
  },

  {
    id: 4,
    coverImg: `${img4}`,
    alt: "Redstone",
    title: "get started with redstone",
    text: "Redstone unlocks limitless posibilities in Minecraft and the growing Redstone communityis here to help.",
    button: "",
    style: "flex-row-reverse",
  },
];

export default resources;
