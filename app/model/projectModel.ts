import { StaticImageData } from "next/image";

export default interface Project {
  name: string;
  description: string;
  category: "Frontend" | "Full Stack" | "All";
  image: string |  StaticImageData;
  tags: {
    name: string;
    color: string;
  }[];
  source_code_link: string;
  live_link: string;
}
