import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaReact, FaSass } from 'react-icons/fa'
import { SiCsswizardry, SiJavascript, SiRedux } from 'react-icons/si'
import { TiHtml5 } from 'react-icons/ti'
import work from '../../styles/components/work.module.scss'

const WorkPage = () => {
  return (
    <article className={work.global}>
      <section className={work.sections}>
        <h2>Here're my <Link href={'/work'}>projects:</Link></h2>
      </section>
      <section className={work.sections}>
        <Link href={'https://pokeapi-df.netlify.app'} target='_blank' className={work.shadow}>
          <Image
            className={work.img}
            src={'/../public/pokedex-pc.jpg'}
            width={600}
            height={400}
          />
        </Link>
        <section>
          <h2>Pokedex</h2>
          <p>This is a web app where you can find the pokemon that you want. It consumes the Pokemon's API with Axios library and has Redux in it. I made all the Front-End and the most difficult challenge was learn and apply Redux</p>
          <div>
            I used:
          </div>
          <div className={work.logos}>
            <span> <FaReact /> </span>
            <span> <FaSass /> </span>
            <span> <SiJavascript /> </span>
            <span> <SiRedux /> </span>
          </div>
        </section>
      </section>
      <section className={work.sections}>
        <Link href={'https://alma-shuryah.netlify.app'} target='_blank' className={work.shadow}>
          <Image
            className={work.img}
            src={'/../public/alma-pc.jpg'}
            width={600}
            height={400}
          />
        </Link>
        <section>
          <h2>Alma Shuryah</h2>
          <p>This is a Landing Page that I made for a local client as a Freelancer. It was made from a scratch with HTML, CSS and JS. The most difficult challenge was the design part working with the client itself, I had to make about 5 designs until get with the definitive one.</p>
          <div>
            I used:
          </div>
          <div className={work.logos}>
            <span> <TiHtml5 /> </span>
            <span> <SiCsswizardry /> </span>
            <span> <SiJavascript /> </span>
          </div>
        </section>
      </section>
      <section className={work.sections}>
        <Link href={'https://rick-and-morty-app-df.netlify.app'} target='_blank' className={work.shadow}>
          <Image
            className={work.img}
            src={'/../public/rym-pc.jpg'}
            width={600}
            height={400}
          />
        </Link>
        <section>
          <h2>Rick and Morty's Character finder</h2>
          <p>This is an app that allows you to find every location and its characters in Rick and Morty's serie. It's made from a scratch with React and vanilla CSS. It consumes the Rick and Morty's API with Axios library. I made all the Front-End and the most difficult challenge was to make the controlled input in the search bar</p>
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
      <section className={work.sections}>
        <Link href={'https://weather-app-df.netlify.app'} target='_blank' className={work.shadow}>
          <Image
            className={work.img}
            src={'/../public/weather-pc.jpg'}
            width={600}
            height={400}
          />
        </Link>
        <section>
          <h2>Weather App</h2>
          <p>This is a web app that gives you the weather information from your geolocation. I consumes the weather's API with Axios and it was made with React and vanilla CSS. I made all the Front-End and the most challenging part of the proccess was made the Loader page with the logic and the continuous animation because I made it while I was learning basic CSS</p>
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
      <section className={work.sections}>
        <Link href={'https://crud-user-cards-df.netlify.app'} target='_blank' className={work.shadow}>
          <Image
            className={work.img}
            src={'/../public/crud-pc.jpg'}
            width={600}
            height={400}
          />
        </Link>
        <section>
          <h2>CRUD Users</h2>
          <p>This is a web app that allows you to get the first touch with the CRUD Persistent Storage creating some Users with basic information. That means that you can create an user, refresh the page and it won't be deleted. Even if you close the page and re-open it in the same device, the user that you made will still be there. I made all the Front-End and the most difficult challenge was the logic on the local storage function.</p>
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
    </article>
  )
}

export default WorkPage