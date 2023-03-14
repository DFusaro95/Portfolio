import ContactPage from '@/components/contact/ContactPage'
import ContactPageES from '@/components/contact/ContactPageES'
import LangBtn from '@/components/shared/LangBtn'
import PageHead from '@/components/shared/PageHead'

import React, { useState } from 'react'

const contact = () => {

  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <div>
      <PageHead title={'Contact Me'} />
      <LangBtn isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
      {
        isEnglish ? <ContactPage /> : <ContactPageES />
      }
    </div>
  )
}

export default contact