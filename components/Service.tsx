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
    <div className="flex flex-col gap-4 max-w-xl">
      <div className="text-sm font-semibold uppercase text-blue-600">{header}</div>
      <div>
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{para}</p>
        <ul className="space-y-2 text-gray-700">
          {points.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-blue-500">•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

    let imageSection;

    if(header.toLowerCase().includes("workflow")){
        imageSection = <></>
    }else if(header.toLowerCase().includes("ai")){
        imageSection = <></>
    }else if(header.toLowerCase().includes("sales")){
        imageSection = <></>
    }else if(header.toLowerCase().includes("projects")){
        imageSection = <></>
    }else {
        imageSection = <></>
    }

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-16">
      {left ? (
        <>
          {details}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {details}
        </>
      )}
    </section>
  )
}

export default Service
