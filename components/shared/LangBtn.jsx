import Image from 'next/image';
import React, { useState } from 'react';
import style from '../../styles/components/langbtn.module.scss'

const LangBtn = ({isEnglish, setIsEnglish }) => {

  const toogleLang = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <button className={style.btn} onClick={toogleLang}>
        {
          isEnglish ? <Image src={'/../public/españa.png'} width={50} height={25} /> : <Image src={'/../public/british.png'} width={50} height={25} />
        }
      </button>
  )
}

export default LangBtn