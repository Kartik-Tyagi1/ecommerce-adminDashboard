import { create } from "zustand";

interface IUseStoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

// State for the store modal

export const useStoreModal = create<IUseStoreModalStore> ((set) => ({
    // Initial State Values
    isOpen: false,
    onOpen: () => set({isOpen : true}),
    onClose: () => set({isOpen : false}),
}));

