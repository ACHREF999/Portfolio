"use client"
import {FormEvent, useCallback, useState} from 'react'
import toast from 'react-hot-toast'
import { RiSendPlane2Line } from 'react-icons/ri'
import send from '@/lib/resend'
function Contact() {
    const [info,setInfo] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })
    const [clicked,setClicked] = useState(false)

    const validateEmail = useCallback((email:string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    },[])
    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault()
        
        let errMsg = ''
        let validName= true
        if (info.name.length < 3){
            validName = false    
        }
        let validEmail = validateEmail(info.email)


        if(!validName || !validEmail || info.message.length<1){
            toast.error('Please Fill required fields correctly.', {
                style: {
                    marginTop:"24px",
                    border: '1px solid #713200',
                    padding: '16px',
                    backgroundColor: '#181715',
                    color: '#F3F3F3',
                },
                iconTheme: {
                    primary: '#b13200',
                    secondary: '#FFFAEE',
                },
            })
        }
        else{
                await send(info)

                toast.success('Form Was Sent!', {
                    style: {
                        marginTop:"6px",
                        border: '1px solid #713200',
                        padding: '16px',
                        backgroundColor: '#181715',
                        color: '#F3F3F3',
                    },
                    iconTheme: {
                        primary: '#416200',
                        secondary: '#FFFAEE',
                    },
                })
                setInfo({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })

        }


    }
    return (
        <div className="w-[90%] mt-8 mb-24 " id="contact">
            <h1 className="text-beige text-2xl border-b-[1px] border-border70 w-fit py-3 my-3">
                CONTACT
            </h1>

            <h1 className="text-title text-3xl border-b-[1px] border-border70 w-fit py-3 my-3">
                Get In Touch
            </h1>
            {/* <form action="mailto:you@yourdmainhere.com" method="post" enctype="text/plain"> */}
            <form
                // action="mailto:achrefsouda1@gmail.com"
                // method="post"
                // encType="text/plain"
                className="flex flex-col items-start w-full mb-16 lg:mb-28"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col md:flex-row justify-between gap-[7%] w-full ">
                    <label className="relative w-full">
                        <input
                            className={`w-full border-text bg-transparent px-4  text-title outline-none  border-[1px] my-3 mx-1 py-3 peer focus:border-beige transition-all duration-300`}
                            type="text"
                            name="name"
                            value={info.name}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setInfo({ ...info, name: e.target.value })
                            }
                        />
                        <span
                            className={`text-text text-sm lg:text-xl absolute top-[30%] left-4 peer-focus:-left-1 peer-focus:scale-75 peer-focus:translate-y-[-90%]  bg-darkBg peer-focus:px-2 peer-focus:py-1 peer-focus:text-beige transition-all duration-300 rounded-full ${
                                info.name === ''
                                    ? ''
                                    : ' left-1 scale-75 translate-y-[-100%]  bg-darkBg px-2 py-1 '
                            }`}
                        >
                            Name<span className="text-red-700">*</span>
                        </span>
                    </label>

                    <label className="relative w-full">
                        <input
                            className={`w-full border-text bg-transparent px-4  text-title outline-none  border-[1px] my-3 mx-1 py-3 peer focus:border-beige transition-all duration-300`}
                            type="text"
                            name="name"
                            value={info.email}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setInfo({ ...info, email: e.target.value })
                            }
                        />
                        <span
                            className={`text-text text-sm lg:text-xl absolute top-[30%] left-4 peer-focus:-left-1 peer-focus:scale-75 peer-focus:translate-y-[-90%]  bg-darkBg peer-focus:px-2 peer-focus:py-1 peer-focus:text-beige transition-all duration-300 rounded-full ${
                                info.email === ''
                                    ? ''
                                    : ' left-1 scale-75 translate-y-[-100%]  bg-darkBg px-2 py-1 '
                            }`}
                        >
                            Email<span className="text-red-700">*</span>
                        </span>
                    </label>
                </div>

                <label className="relative w-full">
                    <input
                        className={`w-full border-text bg-transparent text-title outline-none  border-[1px] my-3 mx-1 py-3 px-4 peer focus:border-beige transition-all duration-300`}
                        type="text"
                        name="name"
                        value={info.subject}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setInfo({ ...info, subject: e.target.value })
                        }
                    />
                    <span
                        className={`text-text text-sm lg:text-xl absolute top-[30%] left-4 peer-focus:-left-1 peer-focus:scale-75 peer-focus:translate-y-[-90%]  bg-darkBg peer-focus:px-2 peer-focus:py-1 peer-focus:text-beige transition-all duration-300 rounded-full ${
                            info.subject === ''
                                ? ''
                                : ' left-1 scale-75 translate-y-[-100%]  bg-darkBg px-2 py-1 '
                        }`}
                    >
                        Subject
                    </span>
                </label>

                <label className="relative w-full">
                    <textarea
                        className={`w-full border-text bg-transparent text-title outline-none  border-[1px] my-3 mx-1 px-4 py-3 peer focus:border-beige transition-all duration-300 autofill:bg-darkCardBg`}
                        name="name"
                        rows={7}
                        maxLength={512}
                        value={info.message}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setInfo({ ...info, message: e.target.value })
                        }
                    />
                    <span
                        className={`text-text text-sm lg:text-xl absolute top-5 left-4 peer-focus:-left-1 peer-focus:scale-75 peer-focus:translate-y-[-90%]  bg-darkBg peer-focus:px-2 peer-focus:py-1 peer-focus:text-beige transition-all duration-300 rounded-full ${
                            info.message === ''
                                ? ''
                                : ' left-1 scale-75 translate-y-[-100%]  bg-darkBg px-2 py-1 '
                        }`}
                    >
                        Message<span className="text-red-700">*</span>
                    </span>
                </label>

                <button className="w-full flex flex-row items-center  hover:opacity-95 justify-center gap-[4%]  px-4 py-3 my-3 mx-1  border-[2px] border-title hover:border-beige hover:text-beige  text-title opacity-[75%] group transition-all">
                    <span className="font-bold ml-4  text-xl ">
                        SEND MESSAGE
                    </span>
                    <RiSendPlane2Line
                        className=" group-hover:scale-100 "
                        size={28}
                    />
                </button>

            </form>
        </div>
    )
    
}

export default Contact


/*

    return (
        <div className="my-3 lg:my-6 mb-24 w-full lg:mb-36">
            <form>
                <div className="flex flex-col lg:flex-row justify-between lg:w-[82%] w-full border-2 border-white">
                <label className="relative mr-2">
                    <input
                        className="relative px-3 py-2 lg:px-6 lg:py-4 bg-transparent min-w-[40%] max-lg:w-full border-[1px] border-text rounded-sm outline-none text-title peer focus:border-beige transition-all duration-300"
                        type="text"
                        name="name"
                        value={info.name}
                        onChange={(e) =>
                            setInfo({ ...info, name: e.target.value })
                        }
                    />
                    <span className={`text-text text-sm lg:text-xl absolute top-[0%] left-4 peer-focus:-left-1 peer-focus:scale-75 peer-focus:translate-y-[-100%]  bg-darkBg peer-focus:px-2 peer-focus:py-1 peer-focus:text-beige transition-all duration-300 rounded-full ${
                            info.name === ''
                                ? ''
                                : ' left-1 scale-75 translate-y-[-100%]  bg-darkBg px-2 py-1 '
                        }`}>
                        Name*
                    </span>
                </label>

                <label className="relative ml-2">
                    <input
                        className="relative px-3 py-2 lg:px-6 lg:py-4 bg-transparent w-[40%] border-[1px] border-text rounded-sm outline-none text-title   peer focus:border-beige transition-all duration-300"
                        type="text"
                        name="email"
                        value={info.email}
                        onChange={(e) =>
                            setInfo({ ...info, email: e.target.value })
                        }
                    />
                    <span className={`text-text text-sm lg:text-xl absolute top-[0%] left-4 peer-focus:-left-1 peer-focus:scale-75 peer-focus:translate-y-[-100%]  bg-darkBg peer-focus:px-2 peer-focus:py-1 peer-focus:text-beige transition-all duration-300 rounded-full ${
                            info.email === ''
                                ? ''
                                : ' left-1 scale-75 translate-y-[-100%]  bg-darkBg px-2 py-1 '
                        }`}>
                        Email*
                    </span>
                </label>
                </div>
                
                <br />
                <br />
                <label className="relative  my-2 lg:my-5 ">
                    <input
                        className="relative px-3 py-2 lg:px-6 lg:py-4 bg-transparent w-[40%] border-[1px] border-text rounded-sm outline-none text-title   peer focus:border-beige transition-all duration-300"
                        type="text"
                        name="subject"
                        value={info.subject}
                        onChange={(e) =>
                            setInfo({ ...info, subject: e.target.value })
                        }
                    />
                    <span className={`text-text text-sm lg:text-xl absolute top-[0%] left-4 peer-focus:-left-1 peer-focus:scale-75 peer-focus:translate-y-[-100%]  bg-darkBg peer-focus:px-2 peer-focus:py-1 peer-focus:text-beige transition-all duration-300 rounded-full ${
                            info.subject === ''
                                ? ''
                                : ' left-1 scale-75 translate-y-[-100%]  bg-darkBg px-2 py-1 '
                        }`}>
                        Subject*
                    </span>
                </label>
                <br />
                <br />
                <label className="relative my-2 lg:my-5 ">
                    <input
                        className={`relative px-3 py-2 lg:px-6 lg:py-4 bg-transparent w-[82%]  border-[1px] border-text rounded-sm outline-none text-title focus:border-beige   peer transition-all duration-300`}
                        type="textarea"
                        name="message"
                        maxLength={500}
                        value={info.message}
                        onChange={(e) =>
                            setInfo({ ...info, message: e.target.value })
                        }
                    />
                    <span
                        className={`text-text text-sm lg:text-xl absolute top-[0%] left-4  peer-focus:-left-1 peer-focus:scale-75 peer-focus:translate-y-[-100%]  peer-focus:bg-darkBg peer-focus:px-2 peer-focus:py-1  peer-focus:text-beige  transition-all duration-300 rounded-full ${
                            info.message === ''
                                ? ''
                                : ' left-1 scale-75 translate-y-[-100%]  bg-darkBg px-2 py-1 '
                        }`}
                    >
                        Message*
                    </span>
                </label>
            </form>
        </div>
    ) 
*/