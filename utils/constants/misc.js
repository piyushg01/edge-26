import {
  MousePointerClick,
  ReceiptIndianRupee,
  Mail,
  Ticket,
} from "lucide-react";

export const DEFAULT_AVATAR_URL =
  "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

/* ===== SPONSORS ===== */
/* ONLY GEEKSFORGEEKS */
export const COMPANIES = [
  {
    name: "GeeksforGeeks",
    logo: "/assets/geeksforgeeks.png",
  },
];

/* ===== PROCESS ===== */
export const PROCESS = [
  {
    title: "Click Register",
    description: "Enter your credentials and Sign In on vierp.",
    icon: MousePointerClick,
  },
  {
    title: "Go to payments",
    description: "Check for event fees section and pay.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Check Email",
    description: "Email containing credentials will send soon",
    icon: Mail,
  },
  {
    title: "Get Ticket",
    description: "SignIn and collect ticket From website",
    icon: Ticket,
  },
];

/* ===== FEATURES ===== */
export const FEATURES = [
  {
    title: "Link shortening",
    description: "Create short links that are easy to remember and share.",
  },
  {
    title: "Advanced analytics",
    description: "Track and measure the performance of your links.",
  },
  {
    title: "Password protection",
    description: "Secure your links with a password.",
  },
  {
    title: "Custom QR codes",
    description: "Generate custom QR codes for your links.",
  },
  {
    title: "Link expiration",
    description: "Set an expiration date for your links.",
  },
  {
    title: "Team collaboration",
    description: "Share links with your team and collaborate in real-time.",
  },
];

/* ===== REVIEWS ===== */
export const REVIEWS = [
  {
    name: "Michael Smith",
    username: "@michaelsmith",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review:
      "This tool is a lifesaver! Managing and tracking my links has never been easier.",
  },
  {
    name: "Emily Johnson",
    username: "@emilyjohnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
    review:
      "Very useful app! It has streamlined my workflow considerably.",
  },
  {
    name: "Daniel Williams",
    username: "@danielwilliams",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review:
      "I've been using this app daily for months. Highly recommend it!",
  },
  {
    name: "Sophia Brown",
    username: "@sophiabrown",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    review:
      "This app is fantastic! It offers everything I need.",
  },
];