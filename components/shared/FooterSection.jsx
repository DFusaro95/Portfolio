import React from 'react'
import { BsSuitHeartFill } from 'react-icons/bs'
import { TbBrandNextjs } from 'react-icons/tb'
import footer from '../../styles/components/footer.module.scss'

const FooterSection = () => {
  return (
    <div className={footer.global}>
      This page was made with 
      <div>
        <TbBrandNextjs />NextJS<TbBrandNextjs />
      </div> 
      and much 
      <div>
        <BsSuitHeartFill />
      </div>
    </div>
  )
}

export default FooterSection