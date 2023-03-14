import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkPageES = () => {
  return (
    <article>
      <section>
        <h2>Aquí están mis <Link href={'/work'}>proyectos:</Link></h2>
      </section>
      <section>
        <div>
          <Image
            src={'/../public/pokedex-pc.jpg'}
            width={600}
            height={400}
          />
        </div>
        <section>
          <h2>Pokedex</h2>
          <p>Esta es una aplicación web donde puedes buscar el pokemon que desees. Ésta consume la API de Pokemon con la librería Axios y también utiliza Redux. Realicé todo el Front-End y el desafío mas complejo fue el de aprender y aplicar Redux.</p>
        </section>
      </section>
      <section>
        <div>
          <Image
            src={'/../public/alma-pc.jpg'}
            width={600}
            height={400}
          />
        </div>
        <section>
          <h2>Alma Shuryah</h2>
          <p>
          Esta es una Landing Page que realicé para un cliente local como Freelancer. Fue hecha desde cero con HTML, CSS y JS. El desafío mas complejo al que me enfrenté fue el de trabajar junto al cliente en la parte del diseño. Tuve que realizar 5 diseños hasta que dimos con el definitivo.
          </p>
        </section>
      </section>
      <section>
        <div>
          <Image
            src={'/../public/rym-pc.jpg'}
            width={600}
            height={400}
          />
        </div>
        <section>
          <h2>Rick and Morty's Character finder</h2>
          <p>
            Ésta es una aplicación que te permite buscar todas las locaciones y sus respectivos personajes de la serie Rick y Morty. Fue hecha desde cero con React y CSS vanilla. Consume la API de Rick y Morty con la librería Axios. Realicé todo el Front-End y el desafío mas difícil fué realizar el input controlado en la barra de busqueda.
          </p>
        </section>
      </section>
      <section>
        <div>
          <Image
            src={'/../public/weather-pc.jpg'}
            width={600}
            height={400}
          />
        </div>
        <section>
          <h2>Weather App</h2>
          <p>
            Ésta es una aplicación web que te brinda la información del clima desde tu ubicación. Consume la API del clima con Axios y fue hecha con React y CSS vanilla. Realicé todo el Front-End y la parte más difícil del proceso fué realizar el Loader con su logica y la animacion continua ya que la app la realicé mientras estaba aprendiendo CSS.
          </p>
        </section>
      </section>
      <section>
        <div>
          <Image
            src={'/../public/crud-pc.jpg'}
            width={600}
            height={400}
          />
        </div>
        <section>
          <h2>CRUD Users</h2>
          <p>
            Ésta es una aplicación web que te permite tener el primer contacto con el Almacenamiento Persistente CRUD creando algunos usuarios con información básica. Esto significa que puedes crear un usuario, refrescar la pagina y este no será eliminado. Incluso si tu cierras la página y la vuelves a abrir en el mismo dispositivo, el usuario que has hecho seguirá estando allí. Realicé todo el Front-End y lo mas desafiante en esta apicación fue la lógica del funcionamiento del Local storage.
          </p>
        </section>
      </section>
    </article>
  )
}

export default WorkPageES