import {
  MousePointerClick,
  ReceiptIndianRupee,
  Mail,
  Ticket,
} from "lucide-react";

export const DEFAULT_AVATAR_URL =
  "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

/* =======================
   SPONSORS
   RULES:
   - Logos MUST be inside /public/assets
   - Filenames MUST match exactly
======================= */
export const COMPANIES = [
  {
    name: "GeeksforGeeks",
    logo: "/assets/geeksforgeeks.png",
  },
  {
    name: "AARNELL",
    logo: "/assets/aarnell.png",
  },
  {
    name: "My Equation",
    logo: "/assets/my-equation.png",
  },
  {
    name: "Campus Times",
    logo: "/assets/campus-times.png",
  },
  {
    name: "EduOptions",
    logo: "/assets/eduooptions1.png",
  },
];

/* =======================
   PROCESS
======================= */
export const PROCESS = [
  {
    title: "Click Register",
    description: "Enter your credentials and sign in on the platform.",
    icon: MousePointerClick,
  },
  {
    title: "Go to Payments",
    description: "Navigate to the event fees section and complete payment.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Check Email",
    description: "Confirmation and details will be sent to your email.",
    icon: Mail,
  },
  {
    title: "Get Ticket",
    description: "Sign in and download your event ticket.",
    icon: Ticket,
  },
];

/* =======================
   FEATURES
======================= */
export const FEATURES = [
  {
    title: "Career Guidance",
    description: "Get clarity on career paths and future planning.",
  },
  {
    title: "Mock GDPI",
    description: "Real interview-style group discussions & interviews.",
  },
  {
    title: "Expert Speakers",
    description: "Learn directly from industry professionals.",
  },
  {
    title: "Hands-on Workshops",
    description: "Practical sessions designed for placements & growth.",
  },
  {
    title: "Networking",
    description: "Connect with peers, mentors, and professionals.",
  },
  {
    title: "Execution Mindset",
    description: "Turn plans into action with structured guidance.",
  },
];

/* =======================
   REVIEWS
======================= */
export const REVIEWS = [
  {
    name: "Michael Smith",
    username: "@michaelsmith",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review: "This event completely changed how I approach my career planning.",
  },
  {
    name: "Emily Johnson",
    username: "@emilyjohnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
    review: "Very insightful sessions and great mentors. Highly recommended.",
  },
  {
    name: "Daniel Williams",
    username: "@danielwilliams",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review: "Mock interviews felt real and feedback was extremely helpful.",
  },
  {
    name: "Sophia Brown",
    username: "@sophiabrown",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    review: "Loved the structure and clarity this event provided.",
  },
];