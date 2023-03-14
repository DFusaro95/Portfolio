import AboutPage from '@/components/about/AboutPage'
import AboutPageES from '@/components/about/AboutPageES'
import LangBtn from '@/components/shared/LangBtn'
import PageHead from '@/components/shared/PageHead'

import React, { useState } from 'react'

const about = () => {

  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <div>
      <PageHead title={'About'} />
      <LangBtn isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      {
        isEnglish ? <AboutPage /> : <AboutPageES />
      }
    </div>
  )
}

export default about