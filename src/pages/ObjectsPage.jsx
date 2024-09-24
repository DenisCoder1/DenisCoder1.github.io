import Header from '../components/Header.jsx'

import './PagesStyles.css'
import { Link } from 'react-router-dom'

import { SquareArrowLeft } from 'lucide-react';

export default function ObjectsPage() {
    return (
      <>
      
        <Header />
        <Link to="/" className='link_back'>
            <SquareArrowLeft className='arrow_svg'/>
            <h2>На главную</h2>
        </Link>
        <div className='pages-div'>
          <h1 className='objects__title'>Объекты</h1>
          <div className='objects'>
              
              <div className='objects__image'>
                  <Link to='/objects/townhouse'> <img src='object__1.png'/> </Link>
                  <h2>3-х этажный таунхаус бизнес-класса</h2>
                  <p>ул. Нижненольная, 13</p>
              </div>
              <div className='objects__image'>
                  <Link to='objects/townhouse'> <img src='object__1.png'/> </Link>
                  <h2>3-х этажный таунхаус бизнес-класса</h2>
                  <p>ул. Нижненольная, 13A</p>
              </div>
          </div>
        </div>
    </>
    )
  }