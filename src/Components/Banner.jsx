import React from 'react'

const Banner = () => {
  return (
    <>
        <div className="card text-center mb-4">
            <img src="..\src\assets\clubLectura\clubLectura.jpg" className="card-img-top" alt="banner club de lectura"/>
            <div className="card-header">
                Informacion de interes:
            </div>
            <div className="card-body">
                <h5 className="card-title">ÚLTIMOS DÍAS DE CALICOMIX EN LA BIBLIOTECA DEPARTAMENTAL</h5>
                <p className='card-text'>En su trigésima edición, el colectivo de artistas de Calicomix ha enriquecido la comunidad con más de 100 ilustraciones que abordan diversas temáticas, como la fisionomía, el pacifismo y la historia.</p>
            </div>
        </div>
        
            
    </>
    
  )
}

export default Banner