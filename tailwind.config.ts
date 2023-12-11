import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                beige: '#987750',
                grei: '#999978',
                text: '#958F91',
                title: '#F3F3F3',
                darkBg: '#1D1B19',
                darkCardBg: '#181715',
                available: '#44993B',
                border70: 'linear-gradient(to right,#F3F3F3,red)',
            },
            keyframes: {
                sideMenu: {
                    '0%': {
                        transform: 'translateX(100%);',
                    },

                    '100%': {
                        transform: 'translateX(0px);',
                    },
                },
                reverseSideMenu: {
                    '0%': {
                        transform: 'translateX(0%)',
                    },
                    '95%': {},
                    '100%': {
                        transform: 'translateX(200%)',

                    },
                },
                opaopa: {
                    '0%': {
                        opacity: '0%',
                    },
                    '100%': {
                        opacity: '100%',
                    },
                },
                reverseOpaopa :{
                    '0%':{
                        opacity : '100%',
                    },
                    '100%':{
                        opacity:'0%',
                        display: 'none',
                    }
                },
                notification :{
                    '0%':{
                        opacity:'0%',
                        transform:"translateX(10px)",
                    },
                    '20%':{
                        opacity:'100%',
                        transform:"translateX(2px)",
                    },
                    "70%":{
                        opacity:'100%'
                    },
                    '100%':{
                        opacity:'0%',
                    },

                }
            },
            animation: {
                sideMenu: 'sideMenu 600ms ease-in-out 1',
                opaopa: 'opaopa 600ms ease-in-out 1',
                reverseSideMenu: 'reverseSideMenu 400ms ease-in-out 1 forwards',
                reverseOpaopa : 'reverseOpaopa 400ms ease-out 1 forwards',
                notification : 'notification 3000ms ease-in-out infinite'
            },
            cursor:{
                'def':'url(/cursor.png),default',
                'point':'url(/hoverCursor.png),pointer'
            }
        },
    },
    plugins: [],
}
export default config
