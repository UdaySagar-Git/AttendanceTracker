import { create } from "zustand";

interface FeaturesModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFeaturesModel = create<FeaturesModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFeaturesModel;
