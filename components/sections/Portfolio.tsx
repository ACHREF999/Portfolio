'use client'
import { useRef,useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import useProjectsModal from '@/hooks/useProjectsModal'
import ProjectCard from './components/ProjectCard'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function Portfolio() {
    const sliderRef = useRef<any>(null)
    
    // const child = useRef<HTMLElement | null>(null)
    const projectsModal = useProjectsModal()
    useEffect(() => {
        if(sliderRef?.current){
        projectsModal.registerSlideNext(sliderRef?.current?.slickNext)
        projectsModal.registerSlidePrev(sliderRef?.current?.slickPrev)
        }
    }, [sliderRef])

    // const handlePrev = () => {
    //     if (!sliderRef || !sliderRef.current) return
        
    //     sliderRef.current.scrollLeft -= 500
    // }
    const handlePrev = () => {
        if ((sliderRef?.current as any).slickPrev) {
            (sliderRef.current as any).slickPrev()
            // setCurrentIndex((currentIndex - 1 + jobs.length)%jobs.length)
        }
    }


    // const handleNext = () => {
    //     if (!sliderRef || !sliderRef.current) return
    //     sliderRef.current.scrollLeft += 500
    // }

    const handleNext = ()=>{
        if((sliderRef?.current as any).slickNext) 
        {
            (sliderRef.current as any).slickNext();
            // setCurrentIndex((currentIndex + 1)%jobs.length)
        }
    }

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }:any) => null

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }:any) =>
        null
        // <button
        //     {...props}
        //     className={
        //         'slick-next slick-arrow hidden' +
        //         (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
        //     }
        //     aria-hidden="true"
        //     aria-disabled={currentSlide === slideCount - 1 ? true : false}
        //     type="button"
        // >
        //     Next
        // </button>
    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />,
        speed: 450,
        variableWidth: true,
        // beforeChange: (current, next) => {
        //     setCurrentIndex(next)
        // },
    }

    return (
        <div className="flex flex-col gap-3 mt-6 text-xl lg:text-2xl w-full  py-3 relative" id="portfolio">
            <h1 className="text-beige text-2xl border-b-[1px] border-border70 w-fit py-3 my-3">
                PORTFOLIO
            </h1>

            {/* Title */}
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="text-title text-3xl border-b-[1px] border-border70 w-fit py-3 my-3">
                    Featured Projects
                </h1>
                {/* buttons */}
                <div className="flex flex-row gap-2 lg:gap-4 items-center">
                    <button
                        className="hover:border-beige p-1 border-beige border-opacity-0 hover:border-[1px] hover:scale-110 hover:p-1 hover:lg:p-3 hover:text-beige transition-all hover:border-opacity-1 hover:mx-1 hover:lg:mx-3  duration-300"
                        onClick={handlePrev}
                    >
                        <FaChevronLeft size={32} />
                    </button>

                    <button
                        className="hover:border-beige p-1 border-beige border-opacity-0 hover:border-[1px] hover:scale-110 hover:p-1 hover:lg:p-3  hover:text-beige transition-all hover:border-opacity-1 mr-2 lg:mr-6 hover:mr-1 hover:lg:mr-3 duration-300"
                        onClick={handleNext}
                    >
                        <FaChevronRight size={32} />
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="relative w-full h-full hide-scroll-bar flex flex-row flex-nowrap overflow-x-scroll items-start scroll-smooth snap-x  transition-all duration-300">
                <Slider
                    {...sliderSettings}
                    ref={sliderRef}
                    className="h-full w-full transition"
                >
                    {projectsModal.projects.map((project, index) => (
                        <ProjectCard
                            image={'/projectImage.jpg'}
                            links={project.links}
                            key={project.title}
                            tags={project.tags}
                            title={project.title}
                            description={project.description}
                            index={index}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Portfolio
