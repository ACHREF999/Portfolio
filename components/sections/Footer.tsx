"use client"
import React from 'react'
import { BiUpArrow } from 'react-icons/bi'
// import Link from 'next/link';

function Footer() {
    const isBrowser = () => typeof(window)!== 'undefined';
    const handleScroll = ()=>{
        if (!isBrowser()) return ;
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
      <div className="absolute flex flex-row justify-between items-center w-full inset-x-0 py-2 pt-4 bottom-0 border-t-[1px] border-text ">
          <div className="w-[50%] ">
              Copyright @ 2023 . All rights rizzerved.
              <br />
              Developed by{' '}
              <span className="text-title hover:underline hover:text-orange-200 cursor-default">
                  ACHREF999
              </span>
          </div>
          <button onClick={handleScroll} className="w-[30%] h-fit  ">
              <BiUpArrow
                  className="absolute -top-6 hover:border-beige p-2 right-[10%] w-fit hover:text-beige hover:border-[1px] text-text bg-darkBg hover:scale-110 hover:p-2 transition-all"
                  size={48}
              />
          </button>
      </div>
  )
}

export default Footer