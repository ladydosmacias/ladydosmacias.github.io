import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import photo1 from "../assets/tip-calculator.png";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Knowledge", href: "#knowledge" },
  { label: "Projects", href: "#projects" },
];

export const testimonials = [
  {
    title: "Tip Calculator",
    stack: "React Native, Typescript, Android only",
    image: photo1,
    text: "Totally free way to calculate tips and divide costs between up to 20 people. Tip rate is already added for you, or you can remove it and use the calculator for dividing cost only.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Web / Mobile App Development",
    description:
      "Building cross-platform mobile appications with React Native, native applications with Swift and web applications with ReactJS.",
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
