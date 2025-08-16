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
import todo from "../../public/project/notes.jpg";

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

export const projects: Project[] = [
  {
    name: "Ecommerce",
    tagline:
      "A full-stack online store with secure payments, dynamic product management, and a modern responsive interface.",
    overview:
      "I developed a full-stack e-commerce platform designed to deliver a smooth and secure shopping experience for users, while providing admins with complete control over the store. The platform supports role-based access (User/Admin), dynamic product listings, advanced product filtering, and image management. It also integrates multiple payment options including Razorpay, Stripe, and Cash on Delivery (COD).",
    features: [
      {
        list: `<b>Role-Based Access</b>: Users browse and purchase products; admins manage inventory, orders, and images.`,
      },
      {
        list: `<b>Product Management</b>: Add, update, delete products; categorize and filter for easy discovery.`,
      },
      {
        list: `<b>Secure Authentication</b>: JWT-based authentication for secure login and protected routes.`,
      },
      {
        list: `<b>Image Handling</b>: Efficient image upload and management using Multer and Cloudinary.`,
      },
      {
        list: `<b>Payment Integration</b>: Razorpay, Stripe, and COD for versatile payment options.`,
      },
      {
        list: `<b>Responsive Design</b>: Mobile-first UI with React.js and Tailwind CSS.`,
      },
    ],
    tech: [
      {
        label: "Frontend",
        stack: [
          {
            name: "React.js",
          },
          {
            name: "Tailwind CSS",
          },
          {
            name: "Context API",
          },
          {
            name: "Axios",
          },
        ],
      },
      {
        label: "Backend",
        stack: [
          {
            name: "Node.js",
          },
          {
            name: "Express.js",
          },
          {
            name: "MongoDB",
          },
          {
            name: "JWT",
          },
          {
            name: "Cloudinary",
          },
          {
            name: "Multer",
          },
        ],
      },
      {
        label: "Payment & Integration",
        stack: [
          {
            name: "Razorpay",
          },
          {
            name: "Stripe",
          },
        ],
      },
    ],
    outcome:
      "A full-fledged e-commerce application demonstrating end-to-end development skills, from frontend design and state management to backend APIs, secure authentication, image handling, and payment integration.",
    category: "Full Stack",
    image: collection,
    source_code_link: "https://github.com/samiudeen96/collection",
    live_link: "https://collection-plum.vercel.app/",
  },
  {
    name: "Hotel Game",
    tagline:
      "Manage your virtual hotel, optimize services, and grow your business in a dynamic simulation environment.",
    overview:
      "Developed a web-based hotel management simulation game where players take on the role of a hotel manager, handling bookings, managing resources, and optimizing services to grow their business. The game provides interactive dashboards, animated UI elements, and real-time statistics to enhance player engagement.",
    features: [
      {
        list: `<b>Hotel Management</b>: Players manage hotel rooms, services, and staff to maximize customer satisfaction and revenue.`,
      },
      {
        list: `<b>Bookings & Reservations</b>: Handle room bookings and cancellations with dynamic availability updates.`,
      },
      {
        list: `<b>Performance Tracking</b>: Visualize hotel performance using Chart.js for occupancy, revenue, and customer ratings.`,
      },
      {
        list: `<b>Interactive UI</b>: Smooth animations using Angular Animations for engaging gameplay and transitions.`,
      },
      {
        list: `<b>Responsive Design</b>: Built with Bootstrap to ensure compatibility across devices and screen sizes.`,
      },
    ],
    tech: [
      {
        label: "Frontend",
        stack: [
          {
            name: "Angular",
          },
          {
            name: "Angular Animations",
          },
          {
            name: "Bootstrap",
          },
          {
            name: "Chart.js",
          },
        ],
      },
    ],
    outcome: "A fully interactive hotel management simulation game demonstrating frontend development skills, dynamic UI interactions, data visualization, and responsive design—showcasing the ability to build engaging web-based simulations.",
    category: "Frontend",
    image: hotelGame,
    source_code_link: "https://github.com/samiudeen96/hotelGame",
    live_link: "https://hasnatech.github.io/hotel_game/",
  },
  {
    name: "Expense Tracker",
    tagline: "",
    overview:
      "Built a finance tracking app to manage income and expenses with real-time balance updates. Included category-wise summaries for better financial insights.",
    features: [
      {
        list: `<b>Role-Based Access</b>: Users browse and purchase products; admins manage inventory, orders, and images.`,
      },
    ],
    tech: [
      {
        label: "Frontend",
        stack: [
          {
            name: "React.js",
          },
          {
            name: "Tailwind CSS",
          },
          {
            name: "Context API",
          },
          {
            name: "Axios",
          },
        ],
      },
      {
        label: "Backend",
        stack: [
          {
            name: "Node.js",
          },
          {
            name: "Express.js",
          },
          {
            name: "MongoDB",
          },
          {
            name: "JWT",
          },
          {
            name: "Cloudinary",
          },
          {
            name: "Multer",
          },
        ],
      },
      {
        label: "Payment & Integration",
        stack: [
          {
            name: "Razorpay",
          },
          {
            name: "Stripe",
          },
        ],
      },
    ],
    outcome: "",
    category: "Full Stack",
    image: expTracker,
    source_code_link: "https://github.com/samiudeen96/ExpenseTracker",
    live_link: "https://expensetracker-samiudeen.vercel.app/",
  },
  {
    name: "3D Portfolio",
    tagline: "",
    overview:
      "Created an immersive 3D portfolio experience that blends modern web technologies with interactive design. Showcases development skills and personal projects by Samiudeen.",
    features: [
      {
        list: `<b>Role-Based Access</b>: Users browse and purchase products; admins manage inventory, orders, and images.`,
      },
    ],
    tech: [
      {
        label: "Frontend",
        stack: [
          {
            name: "React.js",
          },
          {
            name: "Tailwind CSS",
          },
          {
            name: "Context API",
          },
          {
            name: "Axios",
          },
        ],
      },
      {
        label: "Backend",
        stack: [
          {
            name: "Node.js",
          },
          {
            name: "Express.js",
          },
          {
            name: "MongoDB",
          },
          {
            name: "JWT",
          },
          {
            name: "Cloudinary",
          },
          {
            name: "Multer",
          },
        ],
      },
      {
        label: "Payment & Integration",
        stack: [
          {
            name: "Razorpay",
          },
          {
            name: "Stripe",
          },
        ],
      },
    ],
    outcome: "",
    category: "Frontend",
    image: portfolio,
    source_code_link: "https://github.com/samiudeen96/3D_portfolio",
    live_link: "https://samiudeen96.github.io/3D_portfolio/",
  },
  {
    name: "ToDo App",
    tagline: "",
    overview:
      "Developed a simple and clean To-Do web app for task management. Users can create, view, filter, edit, and delete tasks based on their status.",
    features: [
      {
        list: `<b>Role-Based Access</b>: Users browse and purchase products; admins manage inventory, orders, and images.`,
      },
    ],
    tech: [
      {
        label: "Frontend",
        stack: [
          {
            name: "React.js",
          },
          {
            name: "Tailwind CSS",
          },
          {
            name: "Context API",
          },
          {
            name: "Axios",
          },
        ],
      },
      {
        label: "Backend",
        stack: [
          {
            name: "Node.js",
          },
          {
            name: "Express.js",
          },
          {
            name: "MongoDB",
          },
          {
            name: "JWT",
          },
          {
            name: "Cloudinary",
          },
          {
            name: "Multer",
          },
        ],
      },
      {
        label: "Payment & Integration",
        stack: [
          {
            name: "Razorpay",
          },
          {
            name: "Stripe",
          },
        ],
      },
    ],
    outcome: "",
    category: "Frontend",
    image: todo,
    source_code_link: "https://github.com/samiudeen96/To-Do",
    live_link: "https://samiudeen96.github.io/To-Do",
  },
];
