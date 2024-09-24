import { useLocation } from 'react-router-dom';

import './Header.css'
import { Menu } from 'lucide-react';

import { Link } from "react-router-dom"

function Header() {
  const { pathname } = useLocation();
  
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <a href="/"> <img src="../public/logo.png" className='nav__rsp-logo'/> </a>

          <div className='regular__links'>
            <Link to="/objects" className={"/objects" === pathname ? "nav_link-active" : "nav_link"}>Объекты</Link>
            <Link to="/about" className={"/about" === pathname ? "nav_link-active" : "nav_link"}>О компании</Link>
            <a href="/contacts" className={"/contacts" === pathname ? "nav_link-active" : "nav_link"}>Контакты и связь</a>
          </div>

          <Link to="/" className='nav__phone-number'>+7 (952) 581-08-17</Link>
          
          <div className='menu_burger-btn'>
            <Link to='/menu' ><Menu size={64} className='burger_menu' /></Link>
          </div>
          
          </nav>
        
        
      </header>
    </>
  )
}

export default Header
