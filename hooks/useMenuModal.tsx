import {create} from 'zustand'

interface MenuStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
    clicked:boolean;
}
const useMenuModal = create<MenuStore>((set) => ({
    isOpen: false,
    clicked:false,
    onOpen: () => set({ isOpen: true,clicked:true }),
    onClose: () => set({ isOpen: false })
}))

export default useMenuModal;