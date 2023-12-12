import NavBar from '@/components/NavBar'
import MenuModal from '@/components/modals/MenuModal'
import ProjectsModal from '@/components/modals/ProjectsModal'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
    title: 'Achref Souda',
    description: 'Best Dev Ever Lived',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" >
            <body>
                <svg className="hidden svgContainer">
                    
                    <filter id="noise">
                        <feTurbulence baseFrequency="0.25"/>
                    </filter>

                </svg>
                <Toaster   position="bottom-center"/>
                <NavBar />
                <div className="mt-20">
                    <ProjectsModal />
                    <MenuModal />
                    {children}
                </div>
            </body>
        </html>
    )
}
