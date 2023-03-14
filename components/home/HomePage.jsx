import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsTelegram, BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import style from '../../styles/components/home.module.scss'

const HomePage = () => {
  return (
    <main className={style.body}>
      <h1>
        <span className={style.span}>Welcome</span> to my Porfolio!
      </h1>
      <section>
        <h2>My name is 
          <span className={style.span}> Diego Fusaro</span>
        </h2>
        <h2>I develop: 
          <span className={style.span}>Webs</span>
          <span className={style.span}>Web Apps</span>
          <span className={style.span}>Landing Pages</span>
          <span className={style.span}>Software</span>
        </h2>
        <div><button><Link href='https://www.github.com/DFusaro95' target='_blank'><BsGithub /></Link></button></div>
        <div><button><Link href='https://t.me/TheOneToBlame' target='_blank'><BsTelegram /></Link></button></div>
        <div><button><Link href='https://www.linkedin.com/in/diego-fusaro-' target='_blank'><BsLinkedin /></Link></button></div>
        <div><button><Link href="mailto:diefusaro@gmail.com?subject=I'm interested on your services as a web developer&body=Hello Diego, I was checking your portfolio and found it very interesting. Would you mind if we have an inteview?" target='_blank'><BsMailbox2 /></Link></button></div>
      </section>
      <section>
        <div className={style.imgContariner}>
          <Image
            className={style.img}
            alt='Profile picture of a man with a winter hat and a black shirt, the picture has a black and white filter'
            src={'/../public/home__img1.png'}
            width={300}
            height={400}
          />

        </div>
      </section>
    </main>
  )
}

export default HomePage