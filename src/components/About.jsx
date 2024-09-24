import './About.css'

import { CheckCheck, Key, BrickWall, CalendarClock, Smile } from 'lucide-react';


function About() {
    return (
    <>
    <div className='about'>
        <h1 className='about__title'>О компании</h1>
            <div className='about_p'>
                <p className='about__text'>Компания РостовСтройПодряд существует с 2007 года. За все время мы успели построить более 100 объектов, а также выполнить ремонт 300+ объектов. В основном мы занимаемся постройкой и отделкой частных домов, ремонтом квартир и частных домов.</p>
            </div>

        <div className='about__advantages'>
            <div className='container'>
                <div className='container_content'>
                    <Key className='key_svg'/>
                    <div className='container-text'>Объект под ключ</div>
                </div>
            </div>

            <div className='container'>
                <div className='container_content'>
                    <CheckCheck className='check_svg'/> 
                    <div className='container-text'>3 года гарантии</div>
                </div>
            </div>

            <div className='container'>
                <div className='container_content'>
                    <BrickWall className='brick_svg' />
                    <div className='container-text'>Качественные материалы</div>
                </div>
            </div>

            <div className='container'>
                <div className='container_content'>
                    <CalendarClock className='calendar_svg' />
                    <div className='container-text'>Всегда точно в срок</div>    
                </div>
            </div>

            <div className='container'>
                <div className='container_content'>
                    <Smile className='smile_svg'/>
                    <div className='container-text'>Команда профессионалов</div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default About