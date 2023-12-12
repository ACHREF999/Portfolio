'use client'
import Image from 'next/image'
import useProjectsModal from '@/hooks/useProjectsModal'


interface Project {
    title: string
    image: string
    description: string
    tags: string[]
    links: string[]
    index: number
}
const ProjectCard:React.FC<Project>= ({
    title,image,tags,description,index,links
})=> {
    const projectsModal = useProjectsModal()
    const handleClick = ()=>{
        projectsModal.onOpen(index)
    }
    const mouseDownCoords = (e: any) => {
        ;(window as any).checkForDrag = e.clientX
    }

    const clickOrDrag = (e:any) => {
    const mouseUp = e.clientX;
    if (
      mouseUp < (window as any).checkForDrag + 6 &&
      mouseUp > (window as any).checkForDrag - 6
    ) {
      handleClick();
    }}
  return (
      <div
          key={title}
          className="relative  min-w-[340px] max-w-[520px] md:max-w-[45vw] md:min-w-[45vw] lg:min-w-[25vw] lg:max-w-[25vw] h-80  flex flex-col justify-between  snap-center mr-8 cursor-pointer hover:bg-text hover:bg-opacity-5 pb-3"
          onMouseDown={mouseDownCoords}
          onMouseUp={clickOrDrag}
      >
          <div className="w-full h-[70%] relative mb-1">
              <Image src={image} alt={title} fill />
          </div>
          <div className="flex flex-col px-4 gap-2">
              <span className="text-text overflow-hidden">
                  {tags.join() +
                      `${tags.length > 0 ? ' .' : ''}`}
              </span>
              <span className="text-title">{title}</span>
          </div>
      </div>
  )
}

export default ProjectCard