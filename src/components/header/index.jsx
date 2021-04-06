import React, {useState} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logoSpotify.svg'
import listLink from './components/NavbarLi'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const handleshowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <img className="header__logo-image" src={logo} alt="" />
          </div>
          <nav className="navbar">
            <ul className="navbar__ul">
              {listLink.map((item) => (
                <li className="navbar__li" key={item.id}>
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="header__bars"
            onClick={handleshowMenu}
            onMouseDown={() => {}}
            tabIndex="0"
            type="button"
          >
            <FaBars />
          </button>
        </div>
      </div>
      <div
        className={
          showMenu ? 'navbar__mobile show--menu' : 'navbar__mobile off--menu'
        }
      >
        <nav>
          <ul className="navbar__mobile-ul">
            {showMenu && (
              <>
                {listLink.map((item) => (
                  <li className="navbar__mobile-li" key={item.id}>
                    <Link to={`/${item.link}`} className="navbar__mobile-link">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
        <div className="navbar__mobile-logo">
          <img className="header__logo-image" src={logo} alt="" />
        </div>
      </div>
    </header>
  )
}
export default Header
