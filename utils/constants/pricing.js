export const PLANS = [
  {
    name: "EDGE",
    info: "Day 1 Access",
    price: {
      monthly: 150,   // Vitian
      yearly: 150,    // Non-Vitian
    },
    features: [
      { text: "Panel Discussion" },
      { text: "Workshop" },
      { text: "Speaker Session" },
      { text: "Jamming Session (Band / Standup)" },
    ],
    link: "https://learner.vierp.in/event/EDGE2024",
  },
  {
    name: "EDGE + MOCK GDPI",
    info: "Complete Event Access (Day 1 + Day 2)",
    price: {
      monthly: 250,   // Vitian
      yearly: 250,    // Non-Vitian
    },
    features: [
      { text: "All Day 1 Events" },
      { text: "Technical Test (Mock GDPI)" },
      { text: "Group Discussions" },
      { text: "Technical & HR Interviews" },
      { text: "Speaker Sessions" },
      { text: "Personal Branding" },
    ],
    link: "https://learner.vierp.in/event/EDGE-With-Mock-GDPI2024",
  },
  {
    name: "MOCK GDPI",
    info: "Day 2 Placement Specific",
    price: {
      monthly: 150,   // Vitian
      yearly: 150,    // Non-Vitian
    },
    features: [
      { text: "Technical Test (Under Mock GDPI)" },
      { text: "Group Discussions" },
      { text: "Personal Interviews" },
    ],
    link: "https://learner.vierp.in/event/MOCK-GDPI2024",
  },
];

export const PRICING_FEATURES = [
  {
    text: "Panel Discussions",
    tooltip: "Industry-focused expert panel discussions",
  },
  {
    text: "Mock Group Discussions",
    tooltip: "Real interview-style GD experience",
  },
  {
    text: "Personal Interviews",
    tooltip: "One-on-one mock interview sessions",
  },
  {
    text: "Career Guidance",
    tooltip: "Mentorship and career roadmap guidance",
  },
  {
    text: "Resume Building",
    tooltip: "AI-assisted resume building sessions",
  },
  {
    text: "Placement Preparation",
    tooltip: "Focused preparation for placement interviews",
  },
];

export const WORKSPACE_LIMIT = 2;
