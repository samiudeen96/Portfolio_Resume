import crescent from "../../public/crescent.png";
import jamal from "../../public/jamal.png";
import hasnatech from "../../public/hasnatech.png";
import ilife from "../../public/ilife.png";
import Service from "../model/serviceModel";

// Project
import collection from "../../public/project/collection.png";
import expTracker from "../../public/project/expTracker.png";
import hotelGame from "../../public/project/hotelGame.png";
import portfolio from "../../public/project/portfolio.png";
import { TimelineItemType } from "../model/timelineModel";
import Project from "../model/projectModel";
// import todo from "../../public/project/todo.png"

// service
import api from "../../public/service/api.svg";
import ui from "../../public/service/ui.svg";
import performance from "../../public/service/performance.svg";
import map from "../../public/service/map.svg";
import cloud from "../../public/service/cloud.svg";
import host from "../../public/service/host.svg";
import frontend from "../../public/service/frontend.svg";
import backend from "../../public/service/backend.svg";
import TechStack from "../model/techStackModel";

// import react  from "../../public/tech/reactjs.png";
import {
  react,
  angular,
  next,
  redux,
  tailwind,
  bootstrap,
  shadcn,
  javascript,
  typescript,
  responsive,

  node,
  express,
  mongodb,
  mysql,
  git,
  github,
  vercel,
  restapi,
  postman,
  vscode,
} from "../../public/assets";

export const experiences: TimelineItemType[] = [
  {
    id: 1,
    title: "Front-End Developer",
    name: "ILIFE Technologies",
    url: "https://ilifetech.in/",
    icon: ilife,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Dec 2019",
    points: [
      "Responsive Web Development - Built and optimized layouts using HTML5, CSS3, and JavaScript, improving mobile responsiveness across 100+ pages.",
      "Performance Optimization - Reduced load time by 40% for faster and more efficient user experiences.",
      "Front-End & Backend Integration - Collaborated with backend developers to ensure seamless server-side connectivity.",
      "Testing & Debugging - Identified and fixed issues to enhance website functionality and user experience.",
      "UI Consistency & Best Practices - Maintained design consistency, followed coding standards, and implemented interactive features for better engagement.",
    ],
  },
  {
    id: 2,
    title: "Front-End Developer | React Developer",
    name: "Hasna Technology",
    url: "https://hasnatech.com/",
    icon: hasnatech,
    iconBg: "#E6DEDD",
    date: "Nov 2021 – Feb 2025",
    points: [
      "Front-End Development - Built 20+ responsive UI components using React.js & Tailwind CSS, boosting engagement by 30%.",
      "LMS Features & Gamification - Developed quizzes, progress tracking, certifications, and leaderboards to enhance learning.",
      "Interactive & Accessible Design - Integrated animations, videos, and ensured WCAG compliance for a seamless experience.",
      "Collaboration & Communication - Added chat, forums, and live session features for better user interaction.",
      "Deployment & Optimization - Deployed on GitHub/Vercel with performance improvements and minimal downtime.",
    ],
  },
];

export const education: TimelineItemType[] = [
  {
    id: 1,
    title: "Master of Computer Application (MCA)",
    name: "B.S. AbdurRahman Crescent Institute of Science and Technology",
    url: "https://crescent.education/",
    icon: crescent,
    iconBg: "#E6DEDD",
    date: "Apr 2017 - Dec 2019",
  },
  {
    id: 2,
    title: "Bachelor of Computer Application (BCA) ",
    name: "Jamal Mohamed College",
    url: "https://jmc.edu/",
    icon: jamal,
    iconBg: "#E6DEDD",
    date: "Apr 2014 - Dec 2017",
  },
];

export const projects: Project[] = [
  {
    name: "Ecommerce",
    description:
      "Web-based platform for buying and selling products or services. It includes features like product listings, shopping carts, secure payments, and order management.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "node.js",
        color: "text-green-500",
      },
      {
        name: "mongodb",
        color: "text-green-600",
      },
    ],
    category: "Full Stack",
    image: collection,
    source_code_link: "https://github.com/samiudeen96/collection",
    live_link: "https://collection-plum.vercel.app/",
  },
  {
    name: "Hotel Game",
    description:
      "Web page is likely based on a hotel management simulation game where players manage a hotel, handle bookings, and optimize services to grow their business.",
    tags: [
      {
        name: "angular",
        color: "text-red-500",
      },
      {
        name: "typeScript",
        color: "text-blue-500",
      },
      {
        name: "bootstarp",
        color: "text-violet-600",
      },
    ],
    category: "Frontend",
    image: hotelGame,
    source_code_link: "https://github.com/samiudeen96/hotelGame",
    live_link: "https://hasnatech.github.io/hotel_game/",
  },
  {
    name: "Expense Tracker",
    description:
      "Built a finance tracking app to manage income and expenses with real-time balance updates. Included category-wise summaries for better financial insights.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "node.js",
        color: "text-green-500",
      },
      {
        name: "MySQL",
        color: "text-blue-900",
      },
    ],
    category: "Full Stack",
    image: expTracker,
    source_code_link: "https://github.com/samiudeen96/ExpenseTracker",
    live_link: "https://expensetracker-samiudeen.vercel.app/",
  },
  {
    name: "3D Portfolio",
    description:
      "Created an immersive 3D portfolio experience that blends modern web technologies with interactive design. Showcases development skills and personal projects by Samiudeen.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "three.js",
        color: "",
      },
    ],
    category: "Frontend",
    image: portfolio,
    source_code_link: "https://github.com/samiudeen96/3D_portfolio",
    live_link: "https://samiudeen96.github.io/3D_portfolio/",
  },
  {
    name: "ToDo App",
    description:
      "Developed a simple and clean To-Do web app for task management. Users can create, view, filter, edit, and delete tasks based on their status.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
    ],
    category: "Frontend",
    image: collection,
    source_code_link: "https://github.com/samiudeen96/To-Do",
    live_link: "https://samiudeen96.github.io/To-Do",
  },
];

export const services: Service[] = [
  {
    label: "Frontend Development",
    icon: frontend,
    description:
      "Building responsive, high-performance web interfaces using React.js, Next.js, and modern UI frameworks like Tailwind CSS.",
  },
  {
    label: "Full-Stack Development",
    icon: backend,
    description:
      "Creating end-to-end applications with Node.js, Express.js, and MongoDB/MySQL, ensuring scalability and clean architecture.",
  },
  {
    label: "API Development & Integration",
    icon: api,
    description:
      "Designing and integrating REST APIs to connect backend services with seamless frontend experiences.",
  },
  {
    label: "UI/UX Implementation",
    icon: ui,
    description:
      "Turning Figma designs into functional, pixel-perfect interfaces with a focus on usability and responsiveness.",
  },
  {
    label: "Performance Optimization",
    icon: performance,
    description:
      "Improving load times, SEO, and overall user experience by optimizing code and following best practices.",
  },
  {
    label: "Continuous Learning",
    icon: map,
    description:
      "Exploring the latest tools and frameworks to stay ahead in modern web development trends.",
  },
];

export const technologies: TechStack[] = [
  {
    title: "Frontend",
    tech: [
      {
        icon: react,
        label: "React.js",
      },
      {
        icon: next,
        label: "Next.js",
      },
      {
        icon: angular,
        label: "Angular",
      },
      {
        icon: redux,
        label: "Redux",
      },
      {
        icon: tailwind,
        label: "Tailwind CSS",
      },
      {
        icon: bootstrap,
        label: "Bootstrap",
      },
            {
        icon: shadcn,
        label: "Shadcn",
      },
      
      {
        icon: javascript,
        label: "Javascript",
      },
      {
        icon: typescript,
        label: "Typescript",
      },
            {
        icon: responsive,
        label: "Responsive Design",
      },
    ],
  },
  {
    title: "Backend & Database",
    tech: [
      {
        icon: node,
        label: "Node.js",
      },
      {
        icon: express,
        label: "Express.js",
      },
      {
        icon: mongodb,
        label: "MongoDb",
      },
      {
        icon: mysql,
        label: "MySQL",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    tech: [
      {
        icon: vscode,
        label: "VS Code",
      },
      {
        icon: git,
        label: "Git",
      },
      {
        icon: github,
        label: "Github",
      },
      {
        icon: vercel,
        label: "Vercel",
      },
      {
        icon: restapi,
        label: "REST APIs",
      },
      {
        icon: postman,
        label: "Postman",
      },
    ],
  },
];
