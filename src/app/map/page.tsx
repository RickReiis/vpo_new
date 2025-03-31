'use client'
import React, { useState } from 'react'
import Map from '../../components/NewMap'
import FooterButtons from '../../components/FooterButtons'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@src/components/ui/dialog'

const Page1 = () => {
  const [ballance, setBalance] = useState(240.0)
  const [favorites, setFavorites] = useState(6)
  return (
    <div className="static bg-blue-100">
      <div className="absolute inset-x-0 bottom-0 lg:w-[75%] md:w-full h-[50%] bg-red-500 m-auto z-2 md:px-4 px-2">
        <div className="flex  gap-4 h-1/3">
          <div className="flex flex-3 items-center justify-end bg-white h-full rounded-xl px-4">
            <p className='text-9xl font-["Exo_2"] font-black leading-none text-[#3F3F3F] text-stroke text-stroke-7'>
              {ballance}
            </p>
          </div>
          <div className="flex flex-2 items-center justify-center bg-[#dfde9d] h-full rounded-xl">
            <p className='text-9xl font-["Exo_2"] font-black leading-none text-[#3F3F3F] text-stroke text-stroke-7 text-center'>
              {favorites}
            </p>
          </div>
        </div>
        <div className="flex  gap-4 h">
          <div>
            <Dialog>
              <DialogTrigger>Open</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <FooterButtons />
        </div>
      </div>
      <Map />
    </div>
  )
}

export default Page1
