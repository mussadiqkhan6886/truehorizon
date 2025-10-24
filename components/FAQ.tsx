import React from 'react'
import Title from './Title'
import FaqCollapse from './FaqCollapse'

const FAQ = () => {
  return (
     <section className='py-10 text-white'>
      <Title buttonHeading='FAQs' firstLine='We’ve Got the Answers' secondLine="You’re Looking For" para='Quick answers to your AI automation questions.' />
      <FaqCollapse />
    </section>
  )
}

export default FAQ
