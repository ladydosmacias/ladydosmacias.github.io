import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import photo1 from "../assets/tip-calculator.png";
import photo2 from "../assets/moody-app.png";
import photo3 from "../assets/smartaccess-app.png";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Knowledge", href: "#knowledge" },
  { label: "Projects", href: "#projects" },
];

export const testimonials = [
  {
    title: "SmartAccess",
    stack: "Swift, AWS, Python",
    image: photo3,
    text: "Project goal was to create an Access control mobile user interface with Swift, using Amazon Web Services tools as an backend",
  },
  {
    title: "Moody App",
    stack: "React Native, Typescript",
    image: photo2,
    text: "Moody app was made to allow everyone a possibility to track their mood individually and per community, such as with between a group of friends or family.",
  },
  {
    title: "Tip Calculator",
    stack: "React Native, Typescript",
    image: photo1,
    text: "Project provided a free way to calculate tips and divide costs between up to 20 people.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Mobile App Development",
    description:
      "Building cross-platform mobile appications with React Native and Native applications with Swift.",
  },
  {
    icon: <Fingerprint />,
    text: "Web Development",
    description: "Building single-page web applications with ReactJS",
  },
  {
    icon: <ShieldHalf />,
    text: "Amazon Web Services",
    description: "Implementing full backend system for any need",
  },
  {
    icon: <BatteryCharging />,
    text: "Backend Systems",
    description:
      "Planning and designing backend systems from database schemas to API architecture",
  },
  {
    icon: <PlugZap />,
    text: "Project Management",
    description:
      "Helping teams to work together and achieving goals with Agile methodologies.",
  },
  {
    icon: <GlobeLock />,
    text: "UI/UX Design",
    description:
      "From planning to interviews and prototyping, building a modern look for your needs.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
