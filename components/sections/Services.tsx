import React from 'react'
import XPCard from './components/XPCard'

function Services() {
  return (
      <div className="py-3 flex flex-col gap-3" id="services">
          <h1 className="text-beige text-2xl border-b-[1px] border-border70 w-fit py-3 my-3">
              SERVICES
          </h1>

          <h1 className="text-title text-3xl border-b-[1px] border-border70 w-fit py-3 my-3">
              What Do I Do
          </h1>

          <p className="w-[95%] lg:w-[80%]  py-3 leading-8 text-xl">
              I help ambitious businesses like yours generate more profits by
              building professional , clean web apps connecting with customers
              and growing overall traffic .
          </p>

          <XPCard
              title="Front-End Development"
              description="I can help you turn prototypes and designs of your app with HOT technologies such as NextJS , TailwindCSS and more!"
          />
          <XPCard
              title="Back-End Development"
              description="I would assist you in building RESTfull APIs for the logic of your application with Dominant technologies such as Flask , NodeJS & ExpressJS , Django ..."
          />
      </div>
  )
}

export default Services