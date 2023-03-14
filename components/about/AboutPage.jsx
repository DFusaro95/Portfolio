import React from 'react'
import { BsGithub, BsTelegram, BsLinkedin, BsMailbox2 } from 'react-icons/bs'

const AboutPage = () => {
  return (
    <article>
      <h2>Who am I?</h2>
      <p>Greetings! My name is Diego Fusaro, I'm 27 years old and I'm a Web Front-End Developer 💻, I'm a graduated student from Academlo's Bootcamp and I'm excited to get my first job in tech industry.. I love to resolve problems, it makes me a better developer and agilize my logic 🔧🔩, I'm very comfortable working in teams because, from my point of view, it's the best way to resolve things in a fast and efficient way and I'm versatile to new technologies too, so if I have to learn something to work in some project, I'm pleasant!! It would be so cool if you could get me a chance to show you my skills and get my first job by the hand of your company! So if you want, don't doubt and contact me! 📩</p>
      <div><BsGithub /></div>
      <div><BsTelegram /></div>
      <div><BsLinkedin /></div>
      <div><BsMailbox2 /></div>
    </article>
  )
}

export default AboutPage