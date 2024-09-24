import { X } from 'lucide-react';
import './ErrorPage.css'

export default function ErrorPage() {
    return (
        <>
            <X size={182} className='x_svg'/>
            <h1>Такой страницы не существует, или у Вас нет доступа</h1>
        </>
    )
}