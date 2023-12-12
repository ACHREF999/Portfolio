import React from 'react'
import Image from 'next/image'
import signature from '@/public/signature.png'
function Introduction() {
  return (
    <div className="flex flex-col gap-3 py-8 group" id="home" >
      
      <h1 className="text-beige text-2xl border-b-[1px] border-border70 w-fit py-3 my-3">
        INTRODUCTION
      </h1>

      <h1 className="text-title text-3xl border-b-[1px] border-border70 w-fit py-3 my-3">
        FULL STACK Developer
      </h1>

      <p className="w-[95%] lg:w-[80%] py-3 leading-8 text-xl  transition">
I develop services for customers of all sizes , specializing in creating stylish  , clean and effecient modern web apps and services .
      </p>
        <Image width={400} height={60} src={signature} alt="Signature"  />
    </div>
  )
}

export default Introduction