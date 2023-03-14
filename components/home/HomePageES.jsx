import Image from 'next/image'
import React from 'react'
import { BsGithub, BsTelegram, BsLinkedin, BsMailbox2 } from 'react-icons/bs'

const HomePageES = () => {
  return (
    <main>
    <h1>
      <span>Bienvenido/a</span> a mi portfolio!
    </h1>
    <section>
      <h2>Mi nombre es <span>Diego Fusaro</span></h2>
      <h2>Yo desarrollo: <span>Webs</span><span>Web Apps</span><span>Landing Pages</span><span>Software</span></h2>
      <div><BsGithub /></div>
      <div><BsTelegram /></div>
      <div><BsLinkedin /></div>
      <div><BsMailbox2 /></div>
    </section>
    <section>
      <div>
        {/* hero img */}
      <Image
      alt='Foto de perfil de un hombre con un gorro de invierno y una remera negra, la foto tiene colocado el filtro de blanco y negro'
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