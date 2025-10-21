import React from 'react'
import Title from './Title'
import Service from './Service'

const Services = () => {
  return (
    <section className='bg-black px-40 text-white flex flex-col gap-10 items-center justify-center py-10'>
      <Title buttonHeading='Our Services' title='Dashboards & Decision Intelligence' para='Live KPI boards, forecasts, and next-best-action—so teams act, not guess.' />
      <Service left={false} title='Automate repetitive tasks' para='We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains  saving time and cutting down errors.' header='Workflow Automation' points={["Internal Task Bots", "100+ Automations"]} />

      <Service left={true} title='A.I Voice Agents' para='From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.' header='AI Assistant' points={["Summaries" ,"Scheduling", "Many more"]} />

      <Service left={false} title='Accelerate Sales Growth' para='AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.' header='Sales & Marketing' points={["Leads","Content","Social post"]} />

      <Service left={true} title='Build Smarter Systems' para='Whether you are starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.' header='Custom Projects' points={["Strategy","Custom AI","Consulting"]} />
     
    </section>
  )
}

export default Services
