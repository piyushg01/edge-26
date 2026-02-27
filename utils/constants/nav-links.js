import { HelpCircleIcon, UserRoundSearch, CalendarFold, Mail } from "lucide-react";

export const NAV_LINKS = [
  {
    title: "Event",
    href: "#",
    menu: [
      {
        title: "Speakers",
        tagline: "Meet our enigmatic speakers.",
        href: "/speakers",
        icon: UserRoundSearch,
      },
      {
        title: "Workshops",
        tagline: "Get to know about workshops.",
        href: "/workshops",
        icon: HelpCircleIcon,
      },
      {
        title: "Main Events",
        tagline: "Flagship Content.",
        href: "/main-events",
        icon: CalendarFold,
      },
      {
        title: "Dear Future Me",
        tagline: "Write a letter to your future self.",
        href: "https://aether-capsule-one.vercel.app/",
        icon: Mail,
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
];
