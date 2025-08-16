import { create } from "zustand";
import Project from "../model/projectModel"; // ✅ use your Project interface

interface UiState {
  isModalOpen: boolean;
  selectedProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

const useUiStore = create<UiState>((set) => ({
  isModalOpen: false,
  selectedProject: null,

  openModal: (project) => set({ isModalOpen: true, selectedProject: project }),
  closeModal: () => set({ isModalOpen: false, selectedProject: null }),
}));

export default useUiStore;
