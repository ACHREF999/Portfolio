import React from 'react'

import { FaCircle } from 'react-icons/fa6'

function HeyThere() {
  return (
      <div className=" mx-auto scale-[85%] flex flex-col h-fit w-[80%]  items-center  group cursor-default max-w-[600px] ">
          <div className="flex flex-col items-center relative w-full h-fit border-text group-hover:border-grei border-opacity-60  border-[1px] pb-2 mb-[10%] transition-all">
              {/* border */}

              <div className="absolute -top-[5%] border-text group-hover:border-grei border-opacity-60 border-2 w-[90%] h-[110%] transition-all"></div>
              {/* Image Content */}
              <div className="w-3/4 text-2xl font-semibold h-fit py-2 pt-4 flex flex-col scale-[90%] items-center">
                  <img src="/Ana(me).jpg" alt="Best Developer Ever Lived" />
                  <br />
                  <span>Hi There ! I Am</span>
                  <div className="flex relative flex-row w-full items-center justify-between pt-2">
                    <span className="text-4xl font-bold text-available">[</span>
                    <span className="font-semibold text-3xl pt-2 text-title">
                        Web Developer
                    </span>
                    <span className="text-4xl font-bold text-available">]</span>
                  </div>
              </div>

          </div>

          {/* Available */}
          <span
          className="text-xl hover:text-title group-hover:text-title/90 hover:underline flex flex-row items-center transition"
          >
            <FaCircle className="text-available mr-3" size={18}/>
            I&apos;m available for a freelance job . Hire me.</span>
      </div>
  )
}

export default HeyThere