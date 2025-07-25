import Image, { StaticImageData } from "next/image";
import React from "react";

import { gmail, whatsapp, linkedin, phone, newgit, location } from "../../public/assets";

const Contact = () => {
  interface ContactProps {
    label: string;
    icon: string | StaticImageData;
    text: string;
    link: string;
    isOpen: boolean;
  }

  const contact: ContactProps[] = [
    {
      label: "Email",
      icon: gmail,
      text: "samiudeen96amm@gmail.com",
      link: "mailto:samiudeen96amm@gmail.com",
      isOpen: false,
    },
    {
      label: "Phone",
      icon: phone,
      text: "+971 502126746",
      link: "tel:+971502126746",
      isOpen: false,
    },
    {
      label: "What'sApp",
      icon: whatsapp,
      text: "+971 502126746",
      link: "https://wa.me/+971502126746",
      isOpen: true,
    },
    {
      label: "Linkedin",
      icon: linkedin,
      text: "Professional Profile",
      link: "https://www.linkedin.com/in/samiudeen",
      isOpen: true,
    },
    {
      label: "GitHub",
      icon: newgit,
      text: "Repository",
      link: "https://github.com/samiudeen96",
      isOpen: true,
    },
  ];

  return (
    <div className="bg-[#111215]">
      <div
        className="px-4 py-14 mx-auto max-w-7xl min-h-[calc(100vh-72px)] scroll-mt-6"
        id="contact"
      >
        <div>
          <h2 className="text-3xl font-bold text-center text-white mt-6">
            Ready to Create Something Exceptional?
          </h2>
          <p className="text-center custom_paragraph mt-6 text-lg">
            Focused on crafting seamless, user-focused web applications that
            bring your vision to life.
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-5 mt-12 ">
          {contact.map((item, index: number) =>
            item.isOpen ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 hover:bg-gray-700 border-[#9ca3af] p-8 text-center rounded-md space-y-2 flex justify-center items-center flex-col w-full sm:w-auto"
              >
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt={item.label}
                />

                <h4 className="text-md text-white font-semibold mt-2">
                  {item.label}
                </h4>
                <p className="custom_paragraph">{item.text}</p>
              </a>
            ) : (
              <a
                key={index}
                href={item.link}
                className="border-2 border-[#9ca3af] p-8 text-center rounded-md space-y-2 flex justify-center items-center flex-col w-full sm:w-auto"
              >
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt={item.label}
                />

                <h4 className="text-md text-white font-semibold mt-2">
                  {item.label}
                </h4>
                <p className="custom_paragraph">{item.text}</p>
              </a>
            )
          )}
        </div> 
        <div className="flex items-center justify-center gap-1 mt-16">
          <Image src={location} width={20} height={20} alt="location" />
          <p className="custom_paragraph ">
          Based in Dubai, UAE • Available for remote and on-site projects
        </p>
        </div>

        <p className="text-center custom_paragraph mt-6 text-sm">
          &copy; {new Date().getFullYear()} Samiudeen. Transforming ideas into
          seamless, user-focused experiences.
        </p>
      </div>
    </div>
  );
};

export default Contact;
