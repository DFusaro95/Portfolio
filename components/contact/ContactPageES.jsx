import React from 'react'
import { BsGithub, BsTelegram, BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import style from '../../styles/components/home.module.scss'
import contact from '../../styles/components/contact.module.scss'
import Link from 'next/link'

const ContactPageES = () => {
  return (
    <article className={contact.global}>
    <h2 className={contact.title}>Contáctame!!</h2>
    <article className={contact.btnContainer}>
          <div className={contact.ghBg}>
            <button className={style.linksBtn}>
              <Link href='https://www.github.com/DFusaro95' target='_blank'>
                <BsGithub className={style.linkColor} />
              </Link>
            </button>
          </div>
          <div className={contact.tgBg}>
            <button className={style.linksBtn}>
              <Link href='https://t.me/TheOneToBlame' target='_blank'>
                <BsTelegram className={style.linkColor} />
              </Link>
            </button>
          </div>
          <div className={contact.ldiBg}>
            <button className={style.linksBtn}>
              <Link href='https://www.linkedin.com/in/diego-fusaro-' target='_blank'>
                <BsLinkedin className={style.linkColor} />
              </Link>
            </button>
          </div>
          <div className={contact.emBg}>
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

export default ContactPageES