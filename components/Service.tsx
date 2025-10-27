import React from 'react'
import WorkFlow from './WorkFlow';

import AI from './AI';
import GrowthCard from './GrowthCard';
import Custom from './Custom';
import Galaxy from './Stars';

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
        <ul className="flex gap-3">
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
        imageSection = <GrowthCard />
    }else if(header.toLowerCase().includes("projects")){
        imageSection = <Custom />
    }else {
        imageSection = <div className='w-[450px] overflow-hidden h-[370px] grid place-content-center relative rounded-3xl bg-[#0d0d0dcc] p-5 pb-0'>
            <h5 className='text-3xl tracking-tight px-10 sm:px-2 font-bold text-center'>We create dynamic brands that help new companies grow.</h5>
            <Galaxy />
          <div className='bg-gradient-to-t from-[rgb(8,8,8)] to-transparent  absolute bottom-0 w-full h-[60px] left-0 z-10' />
        </div>
    }

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-20 mb-20 max-w-[1020px]">
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
