import { StaticImageData } from "next/image";

export interface TimelineItemType {
  id: number;
  title: string;
  name: string;
  url: string;
  icon: string | StaticImageData;
  iconBg: string;
  date: string;
  points?: string[];
}