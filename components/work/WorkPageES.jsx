import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaReact, FaSass } from 'react-icons/fa'
import { SiCsswizardry, SiJavascript, SiRedux } from 'react-icons/si'
import { TiHtml5 } from 'react-icons/ti'
import work from '../../styles/components/work.module.scss'

const WorkPageES = () => {
  return (
    <article className={work.global}>
      <section className={work.title}>
        <h2>Aquí están mis <Link href={'/work'}>proyectos:</Link></h2>
      </section>
      
        <section className={work.sectionR}>
          <Link href={'https://pokeapi-df.netlify.app'} target='_blank' className={work.shadow}>
            <Image
              className={work.img}
              src={'/../public/pokedex-pc.jpg'}
              width={600}
              height={400}
              alt='Una imagen del proyecto a color y en alta calidad'
            />
          </Link>
          <section>
            <h2>Pokedex</h2>
            <p>Esta es una aplicación web donde puedes buscar el pokemon que desees. Ésta consume la API de Pokemon con la librería Axios y también utiliza Redux. Realicé todo el Front-End y el desafío mas complejo fue el de aprender y aplicar Redux.</p>
            <div>
              Utilicé:
            </div>
            <div className={work.logos}>
              <span> <FaReact /> </span>
              <span> <FaSass /> </span>
              <span> <SiJavascript /> </span>
              <span> <SiRedux /> </span>
            </div>
          </section>
        </section>
        <section className={work.sectionL}>
          <Link href={'https://alma-shuryah.netlify.app'} target='_blank' className={work.shadow}>
            <Image
              className={work.img}
              src={'/../public/alma-pc.jpg'}
              width={600}
              height={400}
              alt='Una imagen del proyecto a color y en alta calidad'
            />
          </Link>
          <section>
            <h2>Alma Shuryah</h2>
            <p>Esta es una Landing Page que realicé para un cliente local como Freelancer. Fue hecha desde cero con HTML, CSS y JS. El desafío mas complejo al que me enfrenté fue el de trabajar junto al cliente en la parte del diseño. Tuve que realizar 5 diseños hasta que dimos con el definitivo.</p>
            <div>
              Utilicé:
            </div>
            <div className={work.logos}>
              <span> <TiHtml5 /> </span>
              <span> <SiCsswizardry /> </span>
              <span> <SiJavascript /> </span>
            </div>
          </section>
        </section>
        <section className={work.sectionR}>
          <Link href={'https://rick-and-morty-app-df.netlify.app'} target='_blank' className={work.shadow}>
            <Image
              className={work.img}
              src={'/../public/rym-pc.jpg'}
              width={600}
              height={400}
              alt='Una imagen del proyecto a color y en alta calidad'
            />
          </Link>
          <section>
            <h2>Rick and Morty&#39;s Character finder</h2>
            <p>
              Ésta es una aplicación que te permite buscar todas las locaciones y sus respectivos personajes de la serie Rick y Morty. Fue hecha desde cero con React y CSS vanilla. Consume la API de Rick y Morty con la librería Axios. Realicé todo el Front-End y el desafío mas difícil fué realizar el input controlado en la barra de busqueda.
            </p>
            <div>
              I used:
            </div>
            <div className={work.logos}>
              <span> <FaReact /> </span>
              <span> <SiCsswizardry /> </span>
              <span> <SiJavascript /> </span>
            </div>
          </section>
        </section>
        <section className={work.sectionL}>
          <Link href={'https://weather-app-df.netlify.app'} target='_blank' className={work.shadow}>
            <Image
              className={work.img}
              src={'/../public/weather-pc.jpg'}
              width={600}
              height={400}
              alt='Una imagen del proyecto a color y en alta calidad'
            />
          </Link>
          <section>
            <h2>Weather App</h2>
            <p>
              Ésta es una aplicación web que te brinda la información del clima desde tu ubicación. Consume la API del clima con Axios y fue hecha con React y CSS vanilla. Realicé todo el Front-End y la parte más difícil del proceso fué realizar el Loader con su logica y la animacion continua ya que la app la realicé mientras estaba aprendiendo CSS.
            </p>
            <div>
              Utilicé:
            </div>
            <div className={work.logos}>
              <span> <FaReact /> </span>
              <span> <SiCsswizardry /> </span>
              <span> <SiJavascript /> </span>
            </div>
          </section>
        </section>
        <section className={work.sectionR}>
          <Link href={'https://crud-user-cards-df.netlify.app'} target='_blank' className={work.shadow}>
            <Image
              className={work.img}
              src={'/../public/crud-pc.jpg'}
              width={600}
              height={400}
              alt='Una imagen del proyecto a color y en alta calidad'
            />
          </Link>
          <section>
            <h2>CRUD Users</h2>
            <p>
              Ésta es una aplicación web que te permite tener el primer contacto con el Almacenamiento Persistente CRUD creando algunos usuarios con información básica. Esto significa que puedes crear un usuario, refrescar la pagina y este no será eliminado. Incluso si tu cierras la página y la vuelves a abrir en el mismo dispositivo, el usuario que has hecho seguirá estando allí. Realicé todo el Front-End y lo mas desafiante en esta apicación fue la lógica del funcionamiento del Local storage.
            </p>
            <div>
              Utilicé:
            </div>
            <div className={work.logos}>
              <span> <FaReact /> </span>
              <span> <SiCsswizardry /> </span>
              <span> <SiJavascript /> </span>
            </div>
          </section>
        </section>
      
    </article>
  )
}

export default WorkPageES