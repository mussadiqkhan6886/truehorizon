'use client';

import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Call = () => {
  const Heading = "Book a Call with us";
  const para ='Have questions or need AI solutions? Let us know by filling out the form, and we’ll be in touch!';

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <main className="pt-4 flex flex-col justify-center items-center overflow-x-hidden min-h-screen text-white bg-black">
      <div className='flex flex-col mb-10 pt-6 items-center justify-center h-[90vh] px-6 md:h-[70vh]'>
        <div className='px-2 py-1.5 border border-zinc-800 rounded-md text-md'>Contact</div>
        <TextGenerateEffect className='text-[45px] md:text-[70px] tracking-tight md:leading-[74px] leading-14 text-center font-bold' duration={1} filter={true} words={Heading} />
        <div className='px-0 md:px-26 lg:px-50'>
            <TextGenerateEffect className='text-base leading-snug tracking-wide text-center font-normal text-gray-300' duration={1.5} filter={true} words={para} />
        </div>
      </div>
      <Cal namespace="30min"
        calLink="truehorizon-ai/30min"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view"}}
      />
    </main>
  )
}

export default Call
