const menu = [
  {
    name: "Projects",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },

  {
    name: "Resume",
    href: "/resume",
  },
];

const selectedProjects = [
  {
    title: "Movie Recommendation App",
    href: "/morec.png",
    descriptions: [
      "Effortlessly sign up and slog out with an intuitive session concept.",
      "Navigate effortlessly through Next and Prev buttons to discover more random film lists.",
      "Receive personalized recommendations from the system for similar films.",
    ],
    link: "https://github.com/hrmneffdii/Morec--Movie-Recommender-Website",
    stacks: ["mongodb", "express", "react", "nodejs", "tailwind"],
  },
  {
    title: "Next.js Dashboard",
    href: "/dashboard.png",
    descriptions: [
      "Creating a dashboard with a user-friendly interface.",
      "User aunthentication and authorization.",
      "Implementing partial rendering for faster loading.",
      "Using debounce for better performance and responsiveness.",
    ],
    link: "https://github.com/hrmneffdii/nextjs-dashboard",
    stacks: ["nextjs", "tailwind", "vercel", "typescript"],
  },
];

export { menu, selectedProjects };
