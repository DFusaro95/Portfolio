import Link from 'next/link'
import React from 'react'
import { BsGithub, BsTelegram, BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import about from '../../styles/components/about.module.scss'
import style from '../../styles/components/home.module.scss'

const AboutPage = () => {
  return (
    <article className={about.global}>
      <h2 className={about.principal}>Who am I?</h2>
      <p className={about.secondary}>Greetings! My name is Diego Fusaro, I&#39;m 27 years old and I&#39;m a Web Front-End Developer 💻, I&#39;m a graduated student from Academlo&#39;s Bootcamp and I&#39;m excited to get my first job in tech industry.. I love to resolve problems, it makes me a better developer and agilize my logic 🔧🔩, I&#39;m very comfortable working in teams because, from my point of view, it&#39;s the best way to resolve things in a fast and efficient way and I&#39;m versatile to new technologies too, so if I have to learn something to work in some project, I&#39;m pleasant!! It would be so cool if you could get me a chance to show you my skills and get my first job by the hand of your company! So if you want, don&#39;t doubt and contact me! 📩</p>
      <article className={style.btnContainer}>
          <div className={style.ghBg}>
            <button className={style.linksBtn}>
              <Link href='https://www.github.com/DFusaro95' target='_blank'>
                <BsGithub className={style.linkColor} />
              </Link>
            </button>
          </div>
          <div className={style.tgBg}>
            <button className={style.linksBtn}>
              <Link href='https://t.me/TheOneToBlame' target='_blank'>
                <BsTelegram className={style.linkColor} />
              </Link>
            </button>
          </div>
          <div className={style.ldiBg}>
            <button className={style.linksBtn}>
              <Link href='https://www.linkedin.com/in/diego-fusaro-' target='_blank'>
                <BsLinkedin className={style.linkColor} />
              </Link>
            </button>
          </div>
          <div className={style.emBg}>
            <button className={style.linksBtn}>
              <Link href="mailto:diefusaro@gmail.com?subject=I'm interested on your services as a web developer&body=Hello Diego, I was checking your portfolio and found it very interesting. Would you mind if we have an inteview?" target='_blank'>
                <BsMailbox2 className={style.linkColor} />
              </Link>
            </button>
          </div>
        </article>
    </article>
  )
}

export default AboutPage