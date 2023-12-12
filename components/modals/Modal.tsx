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
                        className={`absolute  bg-[#1D1B19] rounded-md   px-4 py-10 lg:px-6 lg:py-6 lg:max-w-5xl ${fgStyling}  transition-all ${pannelAnimation} `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/*Header */}
                        <div className="flex flex-row justify-between items-center border-b-grei border-opacity-10 pb-4 border-b-[1px]">
                            <h1 className="text-title text-3xl lg:text-4xl ml-6 cursor-default">
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
                        <div className="relative  flex-auto overflow-x-hidden  hide-scroll-bar ">{body}</div>

                        {/* Footer */}
                        {footer && <div className="pl-12">{footer}</div>}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal
