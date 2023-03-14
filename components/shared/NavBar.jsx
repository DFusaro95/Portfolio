import Link from 'next/link'
import React, { useState } from 'react'
import { BsGearWideConnected } from 'react-icons/bs'
import navbar from '../../styles/components/navbar.module.scss'

const NavBar = () => {
  const [isShown, setIsShown] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const toggleShown = () => {
    setIsShown(!isShown)
    setIsClicked(!isClicked)
  }

  return (
    <header className={navbar.header}>
      <div className={navbar.container}>
      <button className={navbar.toggle} onClick={toggleShown}>
        <BsGearWideConnected
          className={isClicked ? navbar.toggleClickTrue : navbar.toggleClickFalse}
        />
      </button>
      <div className={`${navbar.linksContainer} ${isShown ? navbar.show : navbar.hide}`}>
        <ul className={navbar.links}>
          <Link href={'/'} onClick={toggleShown}>Home</Link>
          <Link href={'/contact'} onClick={toggleShown}>Contact</Link>
          <Link href={'/work'} onClick={toggleShown}>Work</Link>
          <Link href={'/about'} onClick={toggleShown}>About</Link>
        </ul>
      </div>
      </div>
    </header>
  )
}

export default NavBar