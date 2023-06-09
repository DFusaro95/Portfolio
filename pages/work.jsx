import FooterSection from '@/components/shared/FooterSection'
import LangBtn from '@/components/shared/LangBtn'
import PageHead from '@/components/shared/PageHead'
import WorkPage from '@/components/work/WorkPage'
import WorkPageES from '@/components/work/WorkPageES'

import React, { useState } from 'react'

const Work = () => {

  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <div>
      <PageHead title={'My work'} />
      <LangBtn isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
      {
        isEnglish ? <WorkPage /> : <WorkPageES />
      }
      <FooterSection />
    </div>
  )
}

export default Work