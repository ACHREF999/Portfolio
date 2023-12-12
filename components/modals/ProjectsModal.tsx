'use client'
// import React from 'react'
import useProjectsModal from '@/hooks/useProjectsModal'
import Modal from './Modal'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function ProjectsModal() {
    const projectsModal = useProjectsModal()
    const currentProject = projectsModal.projects[projectsModal.active]
    const tags =
        currentProject?.tags?.join() +
        `${currentProject?.tags?.length >0? ' .' : ''}`

    const bodyContent = (
        <div className="flex flex-col gap-4 pl-4 pt-8 overflow-y-scroll hide-scroll-bar">
            <span className="text-xl">{tags}</span>
            <div className="relative w-[95%] h-64 lg:h-96  bg-text p-24">
                <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                />
            </div>
            <p className="text-lg lg:text-xl leading-8 pt-4">{currentProject.description}</p>
        </div>
    )

    const footerContent = (
        <div className="flex flex-row absolute bottom-0 inset-x-0  h-20">
            <div
                className="absolute inset-y-0 flex flex-row items-center justify-start gap-3 border-text pl-12 border-[1px] border-opacity-60 w-1/2 h-full cursor-pointer font-bold text-xl hover:text-beige hover:border-beige "
                onClick={(e) => {
                    projectsModal.slidePrev()
                    projectsModal.prev()
                }}
            >
                <FaChevronLeft />
                previous
            </div>

            <div
                className="absolute inset-y-0 flex flex-row items-center justify-end gap-3 right-0 pr-12 border-text border-[1px] border-opacity-60 cursor-pointer font-bold text-xl  hover:border-beige hover:text-beige w-1/2 h-full"
                onClick={(e) => {
                    projectsModal.slideNext()
                    projectsModal.next()
                }}
            >
                next
                <FaChevronRight />
            </div>
        </div>
    )

    return (
        <Modal
            isOpen={projectsModal.isOpen}
            title={currentProject.title}
            onClose={projectsModal.onClose}
            onOpen={projectsModal.onOpen}
            body={bodyContent}
            fgStyling="overflow-y-scroll hide-scroll-bar  h-[90%] w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%]  border-text border-[1px] border-opacity-50 "
            clicked={projectsModal.clicked}
            pannelAnimation=" animate-opaopa "
            footer={footerContent}
        />
    )
}

export default ProjectsModal
