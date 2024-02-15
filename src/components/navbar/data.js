import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";

const NAV_LINKS = [
  {
    id: 1,
    linkName: "Products",
    path: "/products",
  },
  {
    id: 2,
    linkName: "Features",
    path: "/features",
  },
  {
    id: 3,
    linkName: "Industries",
    path: "/industries",
  },
  {
    id: 4,
    linkName: "Resources",
    path: "/resources",
  },
  {
    id: 5,
    linkName: "Pricing",
    path: "/pricing",
  },
];

const BUTTON_LINKS = [
  {
    id: 1,
    name: "Sign In",
    path: "/signin",
  },
  {
    id: 2,
    name: "Try Free",
    path: "/pricing",
  },
  {
    id: 3,
    name: "Try Paid",
    path: "/pricing",
  },
];

const FOOTER_LINKS = [
  {
    id: 1,
    title: "Why Dodo?",
    links: [
      { id: 1, name: "Dodo vs Internal Communication" },
      { id: 2, name: "Features" },
      { id: 3, name: "Watch Demo" },
    ],
  },
  {
    id: 2,
    title: "Pricing",
    links: [
      { id: 1, name: "Subscription" },
      { id: 2, name: "Paid vs Free" },
    ],
  },
  {
    id: 3,
    title: "Resources",
    links: [
      { id: 1, name: "Downloads" },
      { id: 2, name: "Blog" },
      { id: 3, name: "Help Center" },
    ],
  },
  {
    id: 4,
    title: "Compnay",
    links: [
      { id: 1, name: "About Us" },
      { id: 2, name: "Leadership" },
      { id: 3, name: "Contact" },
    ],
  },
];
const BOTTOM_FOOTER_ICONS = [
  {
    id: 1,
    icon: ImFacebook2,
    path: "#!",
  },
  {
    id: 2,
    icon: RiTwitterXLine,
    path: "#!",
  },
  {
    id: 3,
    icon: SiYoutube,
    path: "#!",
  },
  {
    id: 4,
    icon: IoLogoLinkedin,
    path: "#!",
  },
];

export { NAV_LINKS, BUTTON_LINKS, FOOTER_LINKS, BOTTOM_FOOTER_ICONS };
