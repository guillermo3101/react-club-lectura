import React, {useState} from 'react'
import Person from './Person/Person';

const Persons = () => {
    const [resenas, setResenas] = useState([
        {
            id:1,
            libro:1,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825015.png',
            text:"Es un increible libro de autoayuda. Nunca me ha gustado este tipo de libros porque siento que inflan las soluciones a los problemas, y es más lo que pretenden vender que lo que realmente se logra siguiendo indicaciones."
        },
        {
            id:2,
            libro:1,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825112.png',
            text:"Una lectura fundamental para dar los primeros pasos hacia un cambio en nuestro estilo de vida"
        },
        {
            id:3,
            libro:1,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825038.png',
            text:"A lo largo de mi vida había escuchado a multiples personas decir, «Dime un libro que te haya cambiado la vida» y la verdad que nunca había entendido la oración ya que no entendía como un libro podía cambiar una vida.            "
        },
        {
            id:4,
            libro:1,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825082.png',
            text:'Sin duda alguna un libro que cambió mi perspectiva de las acciones que realizo en mi vida cotidiana, te cambia el concepto de la simple palabra "hábito".',
        },
        {
            id:5,
            libro:1,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825044.png',
            text:'Impresionante. Imprescindible. Este libro a cambiado mi vida, literalmente. He leído muchos libros sobre hábitos pero este es IMPRESIONANTE.'
        },
        {
            id:6,
            libro:1,
            img:'https://cdn-icons-png.flaticon.com/128/4825/4825027.png',
            text:'Me está ayudando tanto que me da miedo de todo lo que uno puede progresar con este grandioso libro'
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

export default Persons