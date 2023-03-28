import Link from 'next/link'
import React from 'react'
import { BsGithub, BsTelegram, BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import about from '../../styles/components/about.module.scss'
import style from '../../styles/components/home.module.scss'

const AboutPageES = () => {
  return (
    <article className={about.global}>
      <h2 className={about.principal}>Quién soy yo?</h2>
      <p className={about.secondary}>Saludos! Mi nombre es Diego Fusaro, tengo 27 años y soy un desarrollador Front-End 💻, recientemente me gradue del bootcamp de Academlo y estoy ansioso de obtener mi primer empleo en la industria de tecnología.. Me encanta resolver problemas, me hacen mejor desarrollador y agilizan mi lógica 🔧🔩.. Me siento muy comodo al trabajar en equipos porque, desde mi punto de vista es la mejor manera de resolver las cosas de una forma rápida y eficiente y soy muy versatil con las nuevas tecnologías también, por ende, si debo aprender alguna para trabajar en algún proyecto ¡Estaría encantado! sería genial si tu pudieses darme una chance de demostrar mis habilidades y obtener mi primer trabajo de la mano de tu empresa! Así que, si lo deseas, no dudes en contactarme! 📩</p>
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

export default AboutPageES