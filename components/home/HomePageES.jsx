import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsTelegram, BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import style from '../../styles/components/home.module.scss'

const HomePageES = () => {
  return (
    <main className={style.body}>
    <h1>
      <span className={style.span}>Bienvenido/a</span> a mi portfolio!
    </h1>
    <section>
      <h2>Mi nombre es 
        <span className={style.span}> Diego Fusaro</span>
      </h2>
      <div className={style.dynamicTextContainer}>
        <div>
          Desarrollo: 
        </div>
        <ul className={style.dynamic}>
            <li><span className={style.colorTwo}> Webs</span></li>
            <li><span className={style.colorOne}> Web Apps</span></li>
            <li><span className={style.colorTwo}> Landing Pages</span></li>
            <li><span className={style.colorOne}> Software</span></li>
          </ul>
      </div>
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

export default HomePageES