import React from 'react'
import { InfiniteMovingCardsDemo } from './ui/VerticalMoving';

interface Props {
    left: boolean,
    title: string,
    para: string,
    header: string,
    points: string[]
}

const Service = ({left, title, para, header, points}: Props) => {

    const details = (
    <div className="flex flex-col items-start gap-4 max-w-lg">
      <div className="text-sm font-[500] border border-gray-700 px-2.5 py-1.5 mb-2 rounded-md">{header}</div>
      <div>
        <h3 className="text-4xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{para}</p>
        <ul className="flex gap-4">
          {points.map((item, i) => (
            <li key={i} className="text-sm font-[500] border border-gray-700 px-2.5 py-1.5 mb-2 rounded-md">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

    let imageSection;

    if(header.toLowerCase().includes("workflow")){
        imageSection = <div className='w-[450px] relative h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'>
          <div className='bg-black rounded-r-2xl border-b-0 p-4 border-gray-400/30 h-full border'>
            <div className='border-gray-400/20 p-1 text-[12px] bg-gray-400/10 border mb-2 flex gap-3'>
              <div className='bg-gray-700/60 px-0.5'>All Tasks</div>
              <div>Waiting for approval</div>
            </div>
            <InfiniteMovingCardsDemo />
          </div>
          <div className='bg-gradient-to-t from-[rgb(8,8,8)] to-transparent  absolute bottom-0 w-full h-[35px] left-0 z-10' />
        </div>
    }else if(header.toLowerCase().includes("ai")){
        imageSection = <div className='w-[450px] h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'></div>
    }else if(header.toLowerCase().includes("sales")){
        imageSection = <div className='w-[450px] h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'></div>
    }else if(header.toLowerCase().includes("projects")){
        imageSection = <div className='w-[450px] h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'></div>
    }else {
        imageSection = <div className='w-[450px] h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'></div>
    }

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-24 mb-20 max-w-[1020px]">
      {left ? (
        <>
          <div className='pr-10'>{details}</div>
          <div>{imageSection}</div>
        </>
      ) : (
        <>
        <div>
          {imageSection}
        </div>
        <div className='pr-10'>
          {details}
        </div>
        </>
      )}
    </section>
  )
}

export default Service
