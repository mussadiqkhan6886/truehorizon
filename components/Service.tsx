import React from 'react'
import WorkFlow from './WorkFlow';

import AI from './AI';

interface Props {
    left: boolean,
    title: string,
    para: string,
    header: string,
    points: string[]
}

const Service = ({left, title, para, header, points}: Props) => {

    const details = (
    <div className="flex max-w-[300px] flex-col items-start gap-4 w-full md:max-w-xl">
      <div className="text-sm font-[500] border border-gray-700 px-2.5 py-1.5 mb-2 rounded-md">{header}</div>
      <div>
        <h3 className="text-2xl md:text-4xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 text-[12px] md:text-base mb-4">{para}</p>
        <ul className="flex gap-4">
          {points.map((item, i) => (
            <li key={i} className="text-[11px] sm:text-sm font-[500] border border-gray-700 px-2.5 py-1.5 mb-2 rounded-md">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

    let imageSection;

    if(header.toLowerCase().includes("workflow")){
        imageSection = <WorkFlow />
    }else if(header.toLowerCase().includes("ai")){
        imageSection = <AI />
    }else if(header.toLowerCase().includes("sales")){
        imageSection = <div className='w-[450px] h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'></div>
    }else if(header.toLowerCase().includes("projects")){
        imageSection = <div className='w-[450px] h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'></div>
    }else {
        imageSection = <div className='w-[450px] h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'></div>
    }

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-24 mb-20 max-w-[1020px]">
      {left ? (
        <>
          <div className='px-4 md:pr-10'>{details}</div>
          <div>{imageSection}</div>
        </>
      ) : (
        <>
        <div>
          {imageSection}
        </div>
        <div className='px-4 md:pr-10'>
          {details}
        </div>
        </>
      )}
    </section>
  )
}

export default Service
