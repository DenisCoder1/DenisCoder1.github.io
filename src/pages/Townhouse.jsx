import './Townhouse.css';
import { House } from 'lucide-react';

const Townhouse = () => {
  return (
    <>
      <div className='townhouse'>
      <div className='intro'>
          <div className="info_part">
              <House className='house_svg' />
              <h1>3-х этажный<br/> таунхаус <br/>бизнес-класса</h1>
              <p>ул. Нижненольная, 13</p>
          </div>

          <div className="img_part">
              <img src='object__2.png'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Townhouse;