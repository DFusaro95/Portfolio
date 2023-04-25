import Image from 'next/image';
import React, { useState } from 'react';
import style from '../../styles/components/langbtn.module.scss'

const LangBtn = ({isEnglish, setIsEnglish }) => {

  const toogleLang = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <section className={style.global}>
    <button className={style.btn} onClick={toogleLang}>
        {
          isEnglish ? 
          <Image className={style.img} src={'/../public/españa.png'} width={50} height={25} alt='A picture of Spain flag'/> : 
          <Image className={style.img} src={'/../public/british.png'} width={50} height={25} alt='A picture of United Kingdom flag'/>
        }
      </button>
    </section>
  )
}

export default LangBtn