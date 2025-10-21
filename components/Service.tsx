import React from 'react'

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
        imageSection = <div className='w-[400px] h-[300px] bg-gray-700'></div>
    }else if(header.toLowerCase().includes("ai")){
        imageSection = <div className='w-[400px] h-[300px] bg-gray-700'></div>
    }else if(header.toLowerCase().includes("sales")){
        imageSection = <div className='w-[400px] h-[300px] bg-gray-700'></div>
    }else if(header.toLowerCase().includes("projects")){
        imageSection = <div className='w-[400px] h-[300px] bg-gray-700'></div>
    }else {
        imageSection = <div className='w-[400px] h-[300px] bg-gray-700'></div>
    }

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-24 mb-20 max-w-[980px]">
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
