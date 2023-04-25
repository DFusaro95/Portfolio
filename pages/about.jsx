import AboutPage from '@/components/about/AboutPage'
import AboutPageES from '@/components/about/AboutPageES'
import FooterSection from '@/components/shared/FooterSection'
import LangBtn from '@/components/shared/LangBtn'
import PageHead from '@/components/shared/PageHead'

import React, { useState } from 'react'

const About = () => {

  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <div>
      <PageHead title={'About'} />
      <LangBtn isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      {
        isEnglish ? <AboutPage /> : <AboutPageES />
      }
      <FooterSection />
    </div>
  )
}

export default About