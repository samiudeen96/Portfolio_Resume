"use client";
import React, { useEffect } from "react";
import useUiStore from "../store/uiStore";

const ProjectModal = () => {
  const { isModalOpen, closeModal, selectedProject } = useUiStore();

  // Lock/unlock scroll behind modal
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = ""; // restore scroll
    }

    // cleanup just in case
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  if (!isModalOpen || !selectedProject) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4"
      onClick={() => closeModal()} // close on backdrop click
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full sm:max-w-[90%] lg:max-w-[90%] max-h-[90vh] flex flex-col animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center py-3 px-4 sm:px-6 border-b border-background">
          <h2 className="text-xl font-semibold">{selectedProject.name}</h2>
          <button
            className="text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
            onClick={closeModal}
          >
            ✕
          </button>
        </div>

        {/* Body → scroll only inside modal */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          <div className="space-y-1 mb-6">
            <h3 className="font-semibold text-primary text-lg">Tagline</h3>
            <p className="">{selectedProject.tagline}</p>
          </div>

          <div className="space-y-1 mb-6">
            <h3 className="font-semibold text-primary text-lg">Overview</h3>
            <p className="leading-[30px]">{selectedProject.overview}</p>
          </div>

          <div className="space-y-1 mb-6">
            <h3 className="font-semibold text-primary text-lg">
              Features & Functionality
            </h3>
            {/* <p className="">{selectedProject.overview}</p> */}
            <ul className="list-disc px-8">
              {selectedProject.features?.map((item, index) => (
                <li
                  key={index}
                  className="pb-2"
                  dangerouslySetInnerHTML={{ __html: item.list }}
                ></li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-primary text-lg">
              Tech Stack
            </h3>
            <div className="space-y-4">
              {selectedProject.tech.map((group, index) => (
                <div key={index} className="">
                  <div className="font-semibold mr-2">{group.label}:</div>
                  <div className="flex flex-wrap gap-1 items-center mt-1">
                    {group.stack.map((item, idx) => (
                      <div className="" key={idx}>
                        <div className="bg-background px-2 py-1 rounded mb-2 sm:mb-0">
                          {item.name}
                        </div>
                        {/* {idx < group.stack.length - 1 && (
                        <span className="hidden sm:inline-block border-l-2 border-background mx-2 h-4" />
                      )} */}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1 mb-6">
            <h3 className="font-semibold text-primary text-lg">Outcome</h3>
            <p className="leading-[30px]">{selectedProject.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
