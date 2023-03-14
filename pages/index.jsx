import PageHead from '@/components/shared/PageHead'
import HomePage from '@/components/home/HomePage'
import WorkPage from '@/components/work/WorkPage'
import AboutPage from '@/components/about/AboutPage'
import ContactPage from '@/components/contact/ContactPage'
import { useState } from 'react'
import HomePageES from '@/components/home/HomePageES'
import WorkPageES from '@/components/work/WorkPageES'
import AboutPageES from '@/components/about/AboutPageES'
import ContactPageES from '@/components/contact/ContactPageES'
import LangBtn from '@/components/shared/LangBtn'
import style from '../styles/pages/index.module.scss'


export default function Home() {

  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <article className={style.article} id={isEnglish}>
      <PageHead title={'Diego Fusaro'} />
      <LangBtn
      
      isEnglish={isEnglish}
      setIsEnglish={setIsEnglish}/>
      {
        isEnglish ? <HomePage /> : <HomePageES />
      }
      {
        isEnglish ? <WorkPage /> : <WorkPageES />
      }
      {
        isEnglish ? <AboutPage /> : <AboutPageES />
      }
      {
        isEnglish ? <ContactPage /> : <ContactPageES />
      }

    </article>
  )
}
