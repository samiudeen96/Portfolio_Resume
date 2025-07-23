import { StaticImageData } from "next/image";

export default interface Service {
  label: string;
  description: string;
  icon: string |  StaticImageData;
}