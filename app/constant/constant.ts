import crescent from "../../public/crescent.png";
import jamal from "../../public/jamal.png";
import hasnatech from "../../public/hasnatech.png";
import ilife from "../../public/ilife.png";
import Service from "../model/serviceModel";

// Project
import collection from "../../public/project/collection.png";
import expTracker from "../../public/project/expTracker.png";
import dashboard from "../../public/project/dashboard.png";
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
  zustand,
  rtq,
  passport,
  oauth,
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
        icon: redux,
        label: "Redux",
      },
      {
        icon: zustand,
        label: "Zustand",
      },
      {
        icon: rtq,
        label: "TanStack Query",
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
        icon: passport,
        label: "Passport.js",
      },
      {
        icon: oauth,
        label: "OAuth",
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
    outcome:
      "A fully interactive hotel management simulation game demonstrating frontend development skills, dynamic UI interactions, data visualization, and responsive design—showcasing the ability to build engaging web-based simulations.",
    category: "Frontend",
    image: hotelGame,
    source_code_link: "https://github.com/samiudeen96/hotelGame",
    live_link: "https://hasnatech.github.io/hotel_game/",
  },
  {
    name: "Dashboard",
    tagline:
      "A versatile and secure dashboard application for managing data, users, and insights—ideal for CRM or admin platforms.",
    overview:
      "Built a full-stack role-based dashboard application designed for CRM or similar business platforms that require secure access and interactive data visualization. The application supports role-based authentication, OAuth login (Google), and local authentication with session handling via cookies. It features a responsive UI, dynamic data fetching, and engaging animations for a modern user experience.",
    features: [
      {
        list: `<b>Role-Based Authentication</b>: Different access levels for users and admins, secured with JWT and Passport.js.`,
      },
      {
        list: `<b>OAuth Integration</b>: Login with Google alongside traditional local authentication.`,
      },
      {
        list: `<b>Session Handling</b>: Managed authentication and persistence using cookie parser for secure sessions.`,
      },
      {
        list: `<b>State Management</b>: Global state handled with Zustand for scalable and efficient data flow.`,
      },
      {
        list: `<b>Data Fetching & Caching</b>: Integrated TanStack React Query with Axios for optimized API communication.`,
      },
      {
        list: `<b>Dynamic UI</b>: Responsive dashboard built with Tailwind CSS and enhanced with Lottie animations.`,
      },
      {
        list: `<b>Backend APIs</b>: Developed with Node.js, Express, and MongoDB to handle authentication, data storage, and secure endpoints.`,
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
            name: "Zustand",
          },
          {
            name: "TanStack React Query",
          },
          {
            name: "Axios",
          },
          {
            name: "Lottie Player",
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
            name: "Passport.js",
          },
          {
            name: "OAuth (Google)",
          },
          {
            name: "Cookie Parser",
          },
        ],
      },
    ],
    outcome:
      "A flexible and secure dashboard system demonstrating end-to-end full-stack development skills, role-based authentication, and OAuth integration, suitable for CRM or business management applications.",
    category: "Full Stack",
    image: dashboard,
    source_code_link: "https://github.com/samiudeen96/dashboard",
    live_link: "https://dashboard-frontend-application.vercel.app/",
  },
  {
    name: "Expense Tracker",
    tagline:
      "Track your income and expenses, gain financial insights, and manage your budget with ease.",
    overview:
      "Built a full-stack finance tracking application that allows users to manage their income and expenses, visualize their spending patterns, and gain actionable insights. The app provides real-time balance updates, and category-wise summaries.",
    features: [
      {
        list: `<b>Income & Expense Management</b>: Add, update, and delete transactions to keep track of finances in real-time.`,
      },
      {
        list: `<b>Category-Wise Summaries</b>: Visual breakdown of spending and income using charts for better financial insights.`,
      },
      {
        list: `<b>Interactive Visuals</b>: Engaging UI with Recharts for graphs and Lottie React for animations.`,
      },
      {
        list: `<b>Secure Authentication</b>: JWT-based authentication and role-based access for users.`,
      },
      {
        list: `<b>Password Reset via Email</b>: Integrated Nodemailer to send password reset links with secure tokens.`,
      },
      {
        list: `<b>Data Export</b>: Export financial data to Excel using XLSX for offline analysis.`,
      },
      {
        list: `<b>Responsive Design</b>: Modern, mobile-first design using Tailwind CSS.`,
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
            name: "TanStack React Query",
          },
          {
            name: "Axios",
          },

          {
            name: "Recharts",
          },
          {
            name: "Lottie React",
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
            name: "MySQL",
          },
          {
            name: "JWT",
          },
          {
            name: "Multer",
          },
          {
            name: "Nodemailer",
          },
          {
            name: "XLSX",
          },
        ],
      },
    ],
    outcome:
      "A comprehensive finance tracking app demonstrating full-stack development skills, real-time data handling, secure authentication, interactive data visualization, and user-friendly responsive design.",
    category: "Full Stack",
    image: expTracker,
    source_code_link: "https://github.com/samiudeen96/ExpenseTracker",
    live_link: "https://expensetracker-samiudeen.vercel.app/",
  },
  {
    name: "3D Portfolio",
    tagline:
      "An immersive 3D web experience that showcases my skills and projects with interactive design.",
    overview:
      "Developed a 3D interactive portfolio that provides a visually engaging way to showcase personal projects and development skills. The portfolio combines modern web technologies, smooth animations, and 3D elements to create a unique browsing experience.",
    features: [
      {
        list: `<b>3D Interactive Design</b>: Leveraged Three.js to create immersive 3D visuals and interactive scenes.`,
      },
      {
        list: `<b>Animated Transitions</b>: Smooth animations and page transitions using Framer Motion.`,
      },
      {
        list: `<b>Project Timeline</b>: Displayed projects in a vertical timeline format using react-vertical-timeline-component for easy navigation.`,
      },
      {
        list: `<b>Responsive Layout</b>: Built with Tailwind CSS to ensure seamless experience across devices.`,
      },
      {
        list: `<b>Showcase of Skills</b>: Highlights personal projects, tech stack proficiency, and design capabilities in an engaging format.`,
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
            name: "Three.js",
          },
          {
            name: "Framer Motion",
          },
        ],
      },
    ],
    outcome:
      "A visually striking portfolio that demonstrates modern frontend development skills, 3D web design, and interactive UI/UX, creating a memorable experience for visitors.",
    category: "Frontend",
    image: portfolio,
    source_code_link: "https://github.com/samiudeen96/3D_portfolio",
    live_link: "https://samiudeen96.github.io/3D_portfolio/",
  },
  {
    name: "ToDo App",
    tagline:
      "A clean and intuitive task management app to organize and track your daily tasks efficiently.",
    overview:
      "Developed a simple and responsive To-Do web application that helps users manage their tasks effectively. The app allows users to create, view, edit, filter, and delete tasks based on their status, providing a smooth and intuitive task management experience.",
    features: [
      {
        list: `<b>Task Management</b>: Add, edit, delete, and mark tasks as completed or pending.`,
      },
      {
        list: `<b>Task Filtering</b>: Filter tasks by status (all, to-start, in-progress, completed) for better organization.`,
      },
      {
        list: `<b>Responsive Design</b>: Built with Tailwind CSS for a clean and mobile-friendly interface.`,
      },
      {
        list: `<b>State Management</b>: Used React Context API to handle task data globally across components.`,
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
        ],
      },
    ],
    outcome:
      "A lightweight, user-friendly task management app demonstrating frontend development skills, state management, and responsive design principles.",
    category: "Frontend",
    image: todo,
    source_code_link: "https://github.com/samiudeen96/To-Do",
    live_link: "https://samiudeen96.github.io/To-Do",
  },
];
