import Header from '../components/Header.jsx'

import { Link } from "react-router-dom"

import { useLocation, useNavigate } from 'react-router-dom';

import './Menu.css'
import { X } from 'lucide-react';

function Menu() {
    const { pathname } = useLocation();

    return (
        <>
        <header className="header">
            <nav className="header__navbar">
            <a href="/"> <img src="logo.png" className='nav__rsp-logo'/> </a>
            
            <div className='menu_burger-btn'>
                <Link to={-1}><X size={64} className='burger_menu' /></Link>
            </div>
            
            </nav>
        </header>

            <div className='menu'>
                <div className='links'>
                    <Link to="/" className={"/" === pathname ? "nav_link-active" : "nav_link"}>Главная</Link>
                    <Link to="/objects" className={"/objects" === pathname ? "nav_link-active" : "nav_link"}>Объекты</Link>
                    <Link to="/about" className={"/about" === pathname ? "nav_link-active" : "nav_link"}>О компании</Link>
                    <Link to="/contacts" className={"/contacts" === pathname ? "nav_link-active" : "nav_link"}>Контакты и связь</Link>
                </div>
            </div>
        </>
    )
}

export default Menu