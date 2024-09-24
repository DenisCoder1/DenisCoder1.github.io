import './Contacts.css'
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { Link } from 'react-router-dom';

import telegram_logo from './../../public/telegram_logo.svg'
import whatsapp_logo from './../../public/whatsapp_logo.svg'

import { Phone, MapPin } from 'lucide-react';

export default function Contacts() {
    return (
        <>
            <h1 className='contacts__title'>Контакты и связь</h1>
            
            <div className='contacts'>
                <div className='contacts__info'>
                    <div className='contacts__phone'>
                        <Phone className='svg'/>
                        <h2>+7 (952) 581-08-17</h2>
                        <h2>+7 (856) 342-90-02</h2>

                        <div className='contacts-wrapper'>
                            <div className='contacts__icon'>
                                <a href=''> <img src={telegram_logo} alt='Telegram' /> </a>
                            </div>

                            <div className='contacts__icon'>
                                <a href=''> <img src={whatsapp_logo} alt='WhatsApp' /> </a>
                            </div>
                        </div>

                            <YMaps className='map-container'
                                query={{
                                    load: "Map,control.ZoomControl,control.FullscreenControl,",
                                }}
                            >
                                <Map className='map' defaultState={{ center: [47.219067, 39.701349], zoom: 18, controls: ["zoomControl", "fullscreenControl"] }}  />  
                            </YMaps>                 
                        
                    </div>

                    

                    <div className='contacts__office-adress'>
                        <MapPin className='svg'/>
                        <p><b>Адрес офиса:</b><br />Ростов-на-Дону, ул. Садовая, дом 21</p>
                    </div>

                </div>

            </div>

        </>
    )
}