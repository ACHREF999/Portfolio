import React from 'react'

interface XPCardProps{
    location?:string;
    date?:string;
    title:string;
    description:string;

}

const XPCard:React.FC<XPCardProps> = ({
  title,location,date,description
})=> {
  return (
      <div className="py-3 mt-3 bg-darkCardBg rounded-sm flex flex-col gap-3 pb-6 justify-between shadow-lg max-w-4xl border-transparent border-[1px] px-2  cursor-default hover:border-text hover:border-[1px] hover:border-opacity-30 transition-all">

          <div className="flex flex-row justify-between w-[60%] max-w-xs px-4 items-center">
              <h2 className="text-title text-opacity-80">{location}</h2>
              <h2>{date}</h2>
          </div>
        
          <h1 className="px-4 text-title text-2xl lg:text-3xl">{title}</h1>
        
          <p className="px-4 border-l-[2px]  border-text">
              {description}
          </p>
      </div>
  )
}

export default XPCard