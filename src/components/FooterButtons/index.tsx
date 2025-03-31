import React from 'react'
import { Home } from '@src/icons/Home'
import { Configuration } from '@src/icons/Configuration'
import { Go } from '@src/icons/Go'
import { PersonCicle } from '@src/icons/PersonCicle'
const FooterButtons = () => {
  return (
    <div className="flex flex-nowrap justify-between items-center w-full md:px-4 px-2">
      <button className="w-[90px] h-[90px] bg-white rounded-lg flex items-center justify-center mr-[3px]">
        <div className="w-[78px] h-[78px] flex items-center justify-center">
          <Home className="h-20 w-20 text-zinc-700" />
        </div>
      </button>
      <button className="w-[90px] h-[90px] bg-white rounded-lg flex items-center justify-center mr-[3px]">
        <div className="w-[78px] h-[78px] flex items-center justify-center">
          <Configuration className="h-20 w-20 text-zinc-700" />
        </div>
      </button>
      <button className="w-[90px] h-[90px] bg-white rounded-lg flex items-center justify-center mr-[3px]">
        <div className="w-[78px] h-[78px] flex items-center justify-center">
          <Go className="h-20 w-20 text-zinc-700" />
        </div>
      </button>
      <button className="w-[90px] h-[90px] bg-white rounded-lg flex items-center justify-center">
        <div className="w-[78px] h-[78px] flex items-center justify-center">
          <PersonCicle className="h-20 w-20 text-zinc-700" />
        </div>
      </button>
    </div>
  )
}

export default FooterButtons
