import {create} from 'zustand'
interface Project {
    title: string;
    image : string ;
    description :string;
    tags : string[];
    links:string[];
    index : number;
}

interface ProjectsStore {
    isOpen: boolean
    onOpen: (idx?: number) => void
    onClose: () => void
    next: () => void
    prev: () => void
    slideNext: () => void
    slidePrev: () => void
    registerSlideNext: (foo: () => void) => void
    registerSlidePrev: (foo: () => void) => void
    projects: Project[]
    active: number
    clicked: boolean
}
const expl = [
    {
        title: 'jingo ',
        image: '/projectImage.jpg',
        description: 'asdsadasdasd',
        tags: ['React', 'PWA'],
        links: ['/'],
        index: 0,
    },
    {
        title: 'isagi ',
        image: '/projectImage.jpg',
        description: 'asdsadasdasd',
        tags: ['React', 'PWA'],
        links: ['/'],
        index: 1,
    },
    {
        title: 'ryo ',
        image: '/projectImage.jpg',
        description: 'asdsadasdasd',
        tags: ['React', 'PWA'],
        links: ['/'],
        index: 2,
    },
    {
        title: 'nagi ',
        image: '/projectImage.jpg',
        description: 'asdsadasdasd',
        tags: ['React', 'PWA'],
        links: ['/'],
        index: 3,
    },
    {
        title: 'barou ',
        image: '/projectImage.jpg',
        description: 'asdsadasdasd',
        tags: ['React', 'PWA'],
        links: ['/'],
        index: 4,
    },
    {
        title: 'chigiri ',
        image: '/projectImage.jpg',
        description: 'asdsadasdasd',
        tags: ['React', 'PWA'],
        links: ['/'],
        index: 5,
    },
]

const useProjectsModal = create<ProjectsStore>((set) => ({
    isOpen: false,
    onOpen: (index) =>
        set((state) => ({ active: index, isOpen: true, clicked: true })),
    onClose: () => set((state) => ({ isOpen: false })),
    // next: () => set((state) => ({  active: ((state.active + 1)%state.projects.length )})),
    next: () =>
        set((state) => ({
            active:
                state.active < state.projects.length - 1
                    ? state.active + 1
                    : state.active,
        })),
    // prev: () => set((state) => ({  active: ((state.active - 1 + state.projects.length)%state.projects.length )})),
    prev: () =>
        set((state) => ({
            active: state.active > 0 ? state.active - 1 : state.active,
        })),
    registerSlideNext:(foo)=>set((state)=>({...state,slideNext:foo})),
    registerSlidePrev:(foo)=>set((state)=>({...state,slidePrev:foo})),
    slideNext: () => {},
    slidePrev: () => {},

    projects: [...expl],
    active: 0,
    clicked: false,
}))

export default useProjectsModal;
