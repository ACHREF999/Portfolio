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
        title: 'WeeJob ',
        image: '/WeeJob.png',
        description: `Discover the beating heart of Algeria's gig economy with 'WeeJob,' an innovative Next.js-powered Full Stack web app that's transforming the way freelancers and clients connect. In this ongoing project, we're crafting a dynamic platform that encapsulates the spirit of Algerian creativity and pairs it with global opportunities.`,
        tags: ['NextJS', 'Prisma', 'MongoDB', 'TailwindCSS'],
        links: ['https://github.com/ACHREF999/WeeJob'],
        index: 0,
    },
    {
        title: 'ProgLang ',
        image: '/projectImage.jpg',
        description: 'asdsadasdasd',
        tags: ['Python', 'OOP'],
        links: ['https://github.com/ACHREF999/ProgLang'],
        index: 1,
    },
    {
        title: 'SpreadSheet Engine ',
        image: '/miniExcel.png',
        description: 'asdsadasdasd',
        tags: ['C', 'Parsing', 'SpreadSheet'],
        links: ['https://github.com/ACHREF999/SpreadSheet___'],
        index: 2,
    },
    {
        title: 'ThreeJS Palestine Flag ',
        image: '/Palestine.png',
        description:
            'Palestinan Flag In ThreeJS with some glsl shaders to control the vertices position to simulate a wind effect and coloring the vertices using glsl to assure that each vertex is corresponding to the Flag Schema',
        tags: ['ThreeJS', 'glsl', '3D'],
        links: ['https://github.com/ACHREF999/PalestineFlag'],
        index: 3,
    },
    {
        title: 'RedTsone ',
        image: '/RedTsone.png',
        description:
            'Introducing RedTsone , our Python GUI app built with PyQt, Qt Designer, and Pytube - your all-in-one solution for downloading YouTube videos seamlessly! Transform your digital experience by effortlessly saving your favorite content for offline enjoyment.',
        tags: ['Python', 'QT-Designer', 'PyQt5', 'PyTube'],
        links: ['https://github.com/ACHREF999/RedTsone'],
        index: 4,
    },
    // {
    //     title: 'chigiri ',
    //     image: '/projectImage.jpg',
    //     description: 'asdsadasdasd',
    //     tags: ['React', 'PWA'],
    //     links: ['/'],
    //     index: 5,
    // },
]

const useProjectsModal = create<ProjectsStore>((set) => ({
    isOpen: false,
    onOpen: (index) =>
        set((state) => ({
            ...state,
            active: index,
            isOpen: true,
            clicked: true,
        })),
    onClose: () => set((state) => ({ ...state, isOpen: false })),
    // next: () => set((state) => ({  active: ((state.active + 1)%state.projects.length )})),
    next: () =>
        set((state) => ({
            ...state,
            active:
                state.active < state.projects.length - 1
                    ? state.active + 1
                    : state.active ,
        })),
    // prev: () => set((state) => ({  active: ((state.active - 1 + state.projects.length)%state.projects.length )})),
    prev: () =>
        set((state) => ({
            ...state,
            active: state.active > 0 ? state.active - 1 : state.active,
        })),
    registerSlideNext: (foo) => set((state) => ({ ...state, slideNext: foo })),
    registerSlidePrev: (foo) => set((state) => ({ ...state, slidePrev: foo })),
    slideNext: () => {},
    slidePrev: () => {},

    projects: [...expl],
    active: 0,
    clicked: false,
}))

export default useProjectsModal;
