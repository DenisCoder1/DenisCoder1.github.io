import './Townhouse.css';
import { House, Menu } from 'lucide-react';
import '../components/Header.css'

import { Link, useLocation } from 'react-router-dom';

const Townhouse = () => {
  const { pathname } = useLocation();

  return (
    <>
    <header className="header">
        <nav className="header__navbar">
          <a href="/"><img src="../../public/logo.png" className='nav__rsp-logo'/></a>

          <div className='regular__links'>
            <Link to="/objects" className={"/objects" === pathname ? "nav_link-active" : "nav_link"}>Объекты</Link>
            <Link to="/about" className={"/about" === pathname ? "nav_link-active" : "nav_link"}>О компании</Link>
            <a href="/contacts" className={"/contacts" === pathname ? "nav_link-active" : "nav_link"}>Контакты и связь</a>
          </div>

          <Link to="/contacts" className='nav__phone-number'>+7 (952) 581-08-17</Link>
          
          <div className='menu_burger-btn'>
            <Link to='/menu' ><Menu size={64} className='burger_menu' /></Link>
          </div>
          
          </nav>
        
        
      </header>

      <div className='townhouse'>
      <div className='intro'>
          <div className="info_part">
              <House className='house_svg' />
              <h1>3-х этажный<br/> таунхаус <br/>бизнес-класса</h1>
              <p>ул. Нижненольная, 13</p>
          </div>

          <div className="img_part">
              <img src='../../public/object__2.png'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Townhouse;