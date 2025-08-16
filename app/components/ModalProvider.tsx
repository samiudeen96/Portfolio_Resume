// app/components/ModalProvider.tsx
"use client";

import useUiStore from "../store/uiStore";
import ProjectModal from "./ProjectModal";

export default function ModalProvider() {
  const isModalOpen = useUiStore((state) => state.isModalOpen);

  return <>{isModalOpen && <ProjectModal />}</>;
}
