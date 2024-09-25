import React, { useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps {
    isOpen: boolean
    onOpen: (idx?:number) => void
    onClose: () => void
    title: string
    body: React.ReactElement
    footer?: React.ReactElement
    fgStyling?: string
    bgStyling?: string
    clicked: boolean;
    pannelAnimation:string;
    project?: boolean
}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onOpen,
    onClose,
    title,
    body,
    footer,
    fgStyling,
    bgStyling,
    clicked,
    pannelAnimation,
    project
}) => {
    const handleClose = useCallback(() => {
        onClose()
    }, [onClose])
    return (
        <>
            {
                <div
                    className={` ${
                        isOpen
                            ? '  '
                            : `${
                                    clicked
                                    ? ` animate-reverseOpaopa `
                                    : ' hidden '
                                }`
                    } fixed bg-neutral-800 bg-opacity-50 backdrop-blur-sm inset-0 flex flex-col items-center justify-center  overflow-x-hidden z-50   transition-all animate-opaopa pb-5`}
                    onClick={handleClose}
                >
                    <div
                        className={`absolute  bg-[#1D1B19] rounded-md  overflow-x-hidden  px-4 py-4 lg:py-10 lg:px-6  lg:max-w-5xl ${fgStyling}  transition-all ${pannelAnimation} ${project?' pb-0 ':''} `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/*Header */}
                        <div className="flex flex-row justify-between items-center border-b-grei border-opacity-10 pb-4 border-b-[1px]">
                            <h1 className="text-title text-3xl lg:text-4xl ml-4 lg:ml-6 cursor-default">
                                {title}
                            </h1>
                            <button
                                className="p-1 ml-auto border-0 text-title hover:text-text"
                                onClick={handleClose}
                            >
                                <AiOutlineClose size={28} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="relative  flex-grow overflow-x-hidden  hide-scroll-bar ">{body}</div>

                        {/* Footer */}
                        {project ? footer : 
                        <div className="pl-12">{footer}</div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Modal
