import {
  BookMarked,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Shapes,
} from "lucide-react";

import photo3 from "../assets/class-content.png";
import photo2 from "../assets/price-list-new.png";
import photo4 from "../assets/where-to-find.png";

import cover2 from "../assets/class-content-cover.png";
import cover1 from "../assets/prices-cover.png";
import cover3 from "../assets/where-to-find-coming.png";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#private" },
];

export const testimonials = [
  {
    title: "Prices",
    image: photo2,
    cover: cover1,
    text: "Prices valid until further notice",
  },
  {
    title: "Class content",
    image: photo3,
    cover: cover2,
    text: "Prices valid until further notice",
  },
  {
    title: "News",
    image: photo4,
    cover: cover3,
    text: "",
  },
];

export const features = [
  {
    icon: <BookMarked />,
    text: "Levels of teaching",
    description: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    icon: <Shapes />,
    text: "Classes",
    description:
      "I offer private classes in both Salsa and Bachata. Your level can be anywhere from beginner to advanced, and you can book the private class alone or with a friend or partner. I teach Bachata Sensual with a twist in my own style.",
  },
  {
    icon: <MapPin />,
    text: "Location",
    description:
      "I can provide a space for our private dance classes in the beautiful Kirkkonummi. My space is just 10 minutes bus drive from Kivenlahti Metro Station. Alternatively I can also teach you at the location of your choice in Espoo & Helsinki area.",
  },
];

export const commonIcons = {
  phone: <PhoneCall />,
  email: <Mail />,
  instagram: <Instagram />,
};
