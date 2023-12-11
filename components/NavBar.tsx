"use client"
import {useCallback} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LOGOsm from '@/public/LOGO-sm.png'
import LOGOdesk from '@/public/LOGO-desk.png';
import { FiMenu } from 'react-icons/fi'
import useMenuModal from '@/hooks/useMenuModal'


function NavBar() {
  const menuModal = useMenuModal()
  const handleClick = useCallback(()=>{
    menuModal.onOpen()
  },[menuModal])
  return (
      <div className="fixed top-0 z-20 inset-x-0 flex flex-row p-2 px-4 justify-between items-center bg-white bg-opacity-[0.02] backdrop-blur-[3px] backdrop-brightness-[85%] border-b-2 border-grei border-opacity-10">
          <Link href="/" className="lg:hidden hover:opacity-95 ">
              <Image className="" src={LOGOsm} alt="LOGO" />
          </Link>
          <Link href="/" className="max-lg:hidden hover:opacity-95 ">
              <Image className="" src={LOGOdesk} alt="LOGO" />
          </Link>

          <button
              onClick={handleClick}
              className="flex flex-row justify-center items-center text-title hover:text-text transition"
          >
              <h1 className=" text-2xl max-lg:hidden  p-2 pb-4">Menu</h1>

              <FiMenu size={28} className="" />
          </button>
      </div>
  )
}

export default NavBar