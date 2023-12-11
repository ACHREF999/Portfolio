"use client"
import React,{useCallback} from 'react'
import Modal from './Modal';
import useMenuModal from '@/hooks/useMenuModal';
import Link from 'next/link'
import { FaTwitter,FaFacebookF,FaGithubAlt  } from "react-icons/fa";
import { SiUpwork } from 'react-icons/si'



function MenuModal() {
  const menuModal = useMenuModal()
  const links = [
    {
      label:"Home",
      href:"#home",
    },
    {
      label:"About",
      href:"#about",
    },
    {
      label:"Portfolio",
      href:"#portfolio",
    },
    {
      label:"Services",
      href:"#services",
    },
    {
      label:"Contact",
      href:"#contact",
    },
  ]

  const socialLinks = [
      {
          label: 'Twitter',
          href: 'https://twitter.com',
          icon: FaTwitter,
          color: ' hover:text-sky-300',
      },

      {
          label: 'Facebook',
          href: 'https://www.facebook.com/achrefSouda.hdielksjs',
          icon: FaFacebookF,
          color: ' hover:text-blue-700',
      },
      {
          label: 'Github',
          href: 'https://github.com/ACHREF999',
          icon: FaGithubAlt,
          color: ' hover:text-purple-500',
      },
      {
          label: 'UpWork',
          href: 'https://www.upwork.com/freelancers/~0142d8744868f2768b',
          icon: SiUpwork,
          color: ' hover:text-green-500',
      },
  ]
  const handleClick = useCallback(()=>{
    menuModal.onClose();
  },[menuModal])

  const bodyContent = (
      <div className="flex flex-col justify-between  p-4 h-full">
          <div className="flex flex-col gap-3">
              {links.map((link) => (
                  <Link
                      className="cursor-pointer p-4 py-3 text-title text-[22px] lg:text-3xl hover:bg-neutral-700 rounded-xl hover:bg-opacity-[3%] hover:text-beige transition "
                      onClick={handleClick}
                      key={link.label}
                      href={link.href}
                      // target='_blank'
                  >
                    <span className="">
                      {link.label}
                    </span>

                  </Link>
              ))}
          </div>


          <div>
            <h3 className="text-title text-md p-4 mt-[40%] cursor-default">
                Find me At : 
            </h3>
            <div className="flex flex-row items-center gap-4 ml-4">
              {socialLinks.map((link)=>(
                <Link href={link.href} className={`bg-darkCardBg p-2 lg:p-3  transition  ${link.color}`} key={link.label}>
                <link.icon className={``} size={28}/>
                </Link>
              ))}
            </div>
          </div>
      </div>
  )



  const footerContent = (
    <div className="text-text">
      Developed By <span className="text-title hover:underline hover:text-orange-200 cursor-default">Achref Souda</span>
    </div>
  )
  return (
      <Modal
          title="Menu"
          isOpen={menuModal.isOpen}
          clicked={menuModal.clicked}
          body={bodyContent}
          footer={footerContent}
          onOpen={menuModal.onOpen}
          onClose={menuModal.onClose}
          fgStyling={`right-0 top-0 h-full pb-8 w-full lg:w-[40%] overflow-y-hidden `}
          pannelAnimation={` animate-sideMenu`}
      />
  )
}

export default MenuModal