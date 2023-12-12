import Image from 'next/image'
import './globals.css'
import HeyThere from '@/components/sections/HeyThere'
import Introduction from '@/components/sections/Introduction'
import AboutMe from '@/components/sections/AboutMe'
import Stats from '@/components/sections/Stats'
import Portfolio from '@/components/sections/Portfolio'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
    return (
        <main className="relative flex flex-col p-6 xl:p-8 gap-4 xl:flex-row ">
            <div className="Desk max-xl:hidden h-full fixed inset-y-0 pt-20 lg:pt-24 right-0 w-[40%] max-w-3xl border-l-[1px] border-text hover:border-grei transition-all justify-self-center self-center group">
                <HeyThere />
            </div>
            <div className="small xl:hidden self-center justify-self-center w-full h-fit  mx-auto group">
                <HeyThere />
            </div>

            <div className="xl:w-[60%] flex flex-col relative">
                <Introduction />
                <AboutMe />
                <Stats />
                <Portfolio />
                <Services />
                <Contact />
                <Footer />
            </div>
        </main>
    )
}
