'use client'
import React, { useState } from 'react'
import XPCard from './components/XPCard'
import { TbBrandNextjs } from 'react-icons/tb'
// import { } from "react-icons/si";
import {
    SiNeo4J,
    SiFlask,
    SiTailwindcss,
    SiWebassembly,
    SiAssemblyscript,
    SiTypescript,
    SiExpress,
} from 'react-icons/si'
import { FaNodeJs, FaReact, FaPython, FaCuttlefish ,FaCss3 ,FaHtml5  } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io5";
interface SkillCardProps {}

const SkillCard = () => {}

function Stats() {
    const skills = [
        {
            label: 'NextJS',
            icon: TbBrandNextjs,
            fgColor: 'hover:text-black',
            bgColor: 'hover:bg-title',
        },

        {
            label: 'WASM',
            icon: SiWebassembly,
            fgColor: 'hover:text-title',
            bgColor: 'hover:bg-sky-800',
        },

        {
            label: 'Assembly',
            icon: SiAssemblyscript,
            fgColor: 'hover:text-title',
            bgColor: 'hover:bg-blue-600',
        },

        {
            label: 'C',
            icon: FaCuttlefish,
            fgColor: 'hover:text-title',
            bgColor: 'hover:bg-sky-800',
        },

        {
            label: 'Python',
            icon: FaPython,
            fgColor: 'hover:text-orange-600',
            bgColor: 'hover:bg-title',
        },

        {
            label: 'React',
            icon: FaReact,
            fgColor: 'hover:text-sky-600',
            bgColor: 'hover:bg-title',
        },

        {
            label: 'NodeJS',
            icon: FaNodeJs,
            fgColor: 'hover:text-available',
            bgColor: 'hover:bg-title',
        },

        {
            label: 'TailwindCSS',
            icon: SiTailwindcss,
            fgColor: 'hover:text-sky-800',
            bgColor: 'hover:bg-title',
        },

        {
            label: 'Express',
            icon: SiExpress,
            fgColor: 'hover:text-black',
            bgColor: 'hover:bg-title',
        },

        {
            label: 'TypeScript',
            icon: SiTypescript,
            fgColor: 'hover:text-title',
            bgColor: 'hover:bg-sky-900',
        },

        {
            label: 'Flask',
            icon: SiFlask,
            fgColor: 'hover:text-black',
            bgColor: 'hover:bg-title',
        },

        {
            label: 'Neo4j',
            icon: SiNeo4J,
            fgColor: 'hover:text-blue-600',
            bgColor: 'hover:bg-green-100',
        },
        {
            label: 'CSS3',
            icon: FaCss3 ,
            fgColor: 'hover:text-blue-400',
            bgColor: 'hover:bg-title',
        },

        {
            label: 'HTML5',
            icon: FaHtml5  ,
            fgColor: 'hover:text-orange-500',
            bgColor: 'hover:bg-title',
        },

        {
            label:'JavaScript',
            icon:IoLogoJavascript,
            fgColor:"hover:text-black",
            bgColor:"hover:bg-yellow-400",
        }
    ]
    const [active, setActive] = useState(0)
    return (
        <div className="flex flex-col text-[1.2rem] sm:text-[1.4rem] lg:text-3xl  py-3 gap-3 mt-12">
            <div
                className={`flex flex-row justify-between items-center w-[90%] `}
            >
                <button
                    className={`${active === 0 ? 'text-beige ' : ''}`}
                    onClick={() => setActive(0)}
                >
                    Skills
                </button>

                <div className="mx-2 w-[10%] h-0 border-text border-[1px]"></div>

                <button
                    className={`${active === 1 ? 'text-beige ' : ''}`}
                    onClick={() => setActive(1)}
                >
                    Experience
                </button>

                <div className="mx-2 w-[10%] h-0 border-text border-[1px]"></div>

                <button
                    className={`${active === 2 ? 'text-beige underline' : ''}`}
                    onClick={() => setActive(2)}
                >
                    Education
                </button>
            </div>

            {/* Skills Section */}
            {active===0&&(
            <div className="flex flex-row flex-wrap gap-3 lg:gap-6 mt-6 transition-all">
              {skills.map((item)=>(
                <div key={item.label} className={`p-1 px-2 text-md sm:text-xl lg:p-3 lg:px-6 bg-darkCardBg w-fit text-md flex flex-col cursor-default ${item.fgColor} ${item.bgColor} transition shadow-lg hover:shadow-2xl `}>
                    <item.icon size={20} />
                    {item.label}

                </div>
              ))}
            </div>)}

            {/* Experience Section */}
            {active === 1 && (
                <div className="flex flex-col gap-6">
                    <XPCard
                        title="Jr. Front End Developer"
                        location="Algerie Telecom"
                        date="(2023)"
                        description="lorem ipsum opsds okpsadp kdsapokdp soakdpjaspd ija[ijdoisaodpihasdi"
                    />
                    <XPCard
                        title="Jr. Front End Developer"
                        location="Algerie Telecom"
                        date="(2023)"
                        description="lorem ipsum opsds okpsadp kdsapokdp soakdpjaspd ija[ijdoisaodpihasdi"
                    />
                </div>
            )}

            {/* Education Section */}
            {active===2&&(
                <div className="flex flex-col gap-4">
                    <XPCard
                    title='Computer Sceience'
                    location='ESTIN'
                    date='(2022-current)'
                    description="lorem ipsum opsds okpsadp kdsapokdp soakdpjaspd ija[ijdoisaodpihasdi lorem ipsum opsds okpsadp kdsapokdp soakdpjaspd ija[ijdoisaodpihasdi lorem ipsum opsds okpsadp kdsapokdp soakdpjaspd ija[ijdoisaodpihasdi"
                    />
                    <XPCard
                    title='Licence Degree'
                    location='ESTIN'
                    date='(2022-current)'
                    description="lorem ipsum opsds okpsadp kdsapokdp soakdpjaspd ija[ijdoisaodpihasdi lorem ipsum opsds okpsadp kdsapokdp soakdpjaspd ija[ijdoisaodpihasdi lorem ipsum opsds okpsadp kdsapokdp soakdpjaspd ija[ijdoisaodpihasdi"
                    />

                </div>
            )}
        </div>
    )
}

export default Stats
