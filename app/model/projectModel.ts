import { StaticImageData } from "next/image";

export default interface Project {
  name: string;
  tagline: string;
  overview: string;
  features: {
    list: string;
  }[];
  category: "Frontend" | "Full Stack" | "All";
  image: string | StaticImageData;
  tech: {
    label: string; // e.g., "Frontend", "Backend", "Payment & Integration"
    stack: {
      name: string;
    }[];
  }[];
  outcome: string;
  source_code_link: string;
  live_link: string;
}
