import React from 'react'
import { FiArrowLeft, FiArrowRight, FiFile, FiMinus, FiSearch, FiSettings, FiSquare } from 'react-icons/fi'
import { InfiniteMovingCode } from './ui/Code'

const CodeBlock = () => {
  return (
    <div className="bg-black text-gray-200  text-[11px] p-4 px-1 leading-4 w-full">
      <pre className="whitespace-pre">
        <code>
          <span className="text-purple-500">class</span> AutomationTrigger:
          {"\n"}
          {"    "}
          <span className="text-purple-500">def</span> __init__(self, threshold):
          {"\n"}
          {"        "}self.threshold = threshold{"\n"}
          {"        "}self.status = <span className="text-green-400">"inactive"</span>
          {"\n\n"}
          {"    "}
          <span className="text-purple-500">def</span> check_trigger(self, value):
          {"\n"}
          {"        "}
          <span className="text-purple-500">if</span> value &gt; self.threshold:
          {"\n"}
          {"            "}self.status = <span className="text-green-400">"active"</span>
          {"\n"}
          {"            "}
          <span className="text-purple-500">return</span>{" "}
          <span className="text-green-400">"Automation triggered!"</span>
          {"\n"}
          {"        "}
          <span className="text-purple-500">else</span>:
          {"\n"}
          {"            "}
          <span className="text-purple-500">return</span>{" "}
          <span className="text-green-400">"No action taken."</span>
          {"\n\n"}
          {"    "}
          <span className="text-purple-500">def</span> get_status(self):
          {"\n"}
          {"        "}
          <span className="text-purple-500">return</span>{" "}
          <span className="text-green-400">f"Status: &#123;self.status&#125;"</span>
        </code>
      </pre>
    </div>
  );
}

const AiCard = () => {
  return (
    <div className='relative h-[159px] border border-gray-800'>
      <div className='bg-zinc-900 w-full flex justify-between items-center px-1 h-[26px]'>
        <div className='flex text-[9px] gap-2'>
            <FiArrowLeft />
            <FiArrowRight />
        </div>
        <div className='bg-zinc-800 w-[100px] h-[10px] rounded-xl'>

        </div>
        <div className='flex pr-1 items-center gap-2 text-[9px] text-zinc-300'>
            <FiSquare />
            <FiMinus />
            <span>X</span>
        </div>
      </div>
      <div className='z-10 bg-zinc-900 w-[26px] h-[134px] left-0 bottom-0 absolute'>
        <div className='text-white/80 flex gap-3 items-center flex-col pt-3'>
            <FiFile />
            <FiSearch />
            <FiSettings />
        </div>
      </div>
        <div className="h-[90%] text-white bg-black rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
              <InfiniteMovingCode 
                items={<CodeBlock />}
                direction="up"
                speed="fast"
              />
        </div>
    </div>
  )
}

export default AiCard
