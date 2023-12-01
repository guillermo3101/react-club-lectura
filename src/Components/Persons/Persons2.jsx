import React, {useState} from 'react'
import Person from './Person/Person';

const Persons2 = () => {

    const [resenas, setResenas] = useState([
        {
            id:1,
            libro:2,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825031.png',
            text:"La información es poder y esta mujer nos da un poder increíble. Además, explica todo de una manera tan sencilla que es súper fácil seguir la lectura. "
        },
        {
            id:2,
            libro:2,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825108.png',
            text:"Desde la primer vez que escuché la voz de esta mujer me transmitió muchas cosas. Una de ellas fue paz!"
        },
        {
            id:3,
            libro:2,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825072.png',
            text:"Me gusto mucho el libro, es de fácil lectura a pesar de que ocupa terminos más técnicos, sin embargo continúe la lectura y de nuevo se volvió muy fácil de leer."
        },
        {
            id:4,
            libro:2,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825082.png',
            text:'Un libro que no puedes leer solo una vez, Tienes que tener un lapiz y papel para anotar cada maravilla y guía que este ensayo nos plasma.',
        },
        {
            id:5,
            libro:2,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825066.png',
            text:'Wao buena redacción y un punto bastante importante llegar al lector con profundidad yo le doy un 10 excelente.'
        },
        {
            id:6,
            libro:2,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825027.png',
            text:'Fantástico libro para entender las emociones, los pensamientos, qué nos pasa a nivel fisiológico cuando tenemos estrés, ansiedad, depresión.'
        },
    ]);
  return (
    <>
        <div className="row">
        {resenas.map(resenas =>{
            return <Person
            key={resenas.id} 
            text={resenas.text} 
            img={resenas.img} 
            />
        })}
        </div>
    </>
    
  )
}

export default Persons2