import './Objects.css'
import { Link } from 'react-router-dom';

import Townhouse from '../pages/Townhouse.jsx';

function Objects() {
    return (
    <>
    <h1 className='objects__title'>Объекты</h1>
        <div className='objects'>
            
            <div className='objects__image'>
                <Link to="/objects/townhouse"><img src='object__1.png'/></Link>
                <h2>3-х этажный таунхаус бизнес-класса</h2>
                <p>ул. Нижненольная, 13A</p>
            </div>
            <div className='objects__image'>
                <Link to="/objects/townhouse"><img src='object__1.png'/></Link>
                <h2>3-х этажный таунхаус бизнес-класса</h2>
                <p>ул. Нижненольная, 13A</p>
            </div>
        </div>
    </>
    )
}

export default Objects