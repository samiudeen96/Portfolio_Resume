import { StaticImageData } from "next/image";

export default interface TechStack {
  title: string;
  tech: {
    icon: string | StaticImageData;
    label: string;
  }[];
}
