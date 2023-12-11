import React from 'react'
// import { GiAlgeria } from 'react-icons/gi'
import { PiDownloadLight } from 'react-icons/pi'
function AboutMe() {
  const bioList = [
    {
      key:'NAME',
      value:'Achref Souda'
    },
    {
      key:'AGE',
      value:'21 years'
    },
    {
      key:'LOCATION',
      value:'Algeria'
    },
    {
      key:'EMAIL',
      value:'achrefsouda1@gmail.com'
    },
    {
      key:'GITHUB',
      value:'@ACHREF999'
    },
  ]
    return (
        <div className="flex flex-col gap-3 mt-6 " id="about">
            <h1 className="text-beige text-2xl border-b-[1px] border-border70 w-fit py-3 my-3 ">
                ABOUT ME
            </h1>

            <h1 className="text-title text-3xl border-b-[1px] border-border70 w-fit py-3 my-3">
                Biography
            </h1>

            <p className="w-[95%] lg:w-[80%]  py-3 leading-8 text-xl">
                I’m a Freelancer Front-end & Back-end Developer with over 3
                years of experience . I’m from Algeria . I code and create web
                elements for amazing people around the world . I like to work
                with passionate new people for exciting experiences.
            </p>

            <section className="flex flex-col lg:flex-row justify-between items-center py-3 w-full gap-8">
                <div className="flex flex-col gap-4 w-[70%] max-lg:w-full text-xl">
                    {bioList.map((row) => (
                        <div
                            className="flex flex-row justify-between "
                            key={row.key}
                        >
                            <p className="text-text "> {row.key} </p>
                            <p className="text-title hover:underline hover:text-beige hover:text-opacity-90 cursor-default ">
                                {' '}
                                {row.value}{' '}
                            </p>
                        </div>
                    ))}
                </div>

                <button className="w-[30%] max-lg:w-full py-6 border-text hover:border-beige hover:text-beige border-[1px] flex flex-col items-center transition text-semibold text-xl lg:mx-8 group">
                    <PiDownloadLight
                        size={64}
                        className="group-hover:scale-105 transition-transform"
                    />
                    Download CV
                </button>
            </section>
        </div>
    )
}

export default AboutMe
