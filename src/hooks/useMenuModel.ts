import { create } from "zustand";

interface MenuModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const UseMenuModel = create<MenuModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default UseMenuModel;
