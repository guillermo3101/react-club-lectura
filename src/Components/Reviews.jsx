import React from 'react'
import Persons from './Persons/Persons'
import Persons2 from './Persons/Persons2'


const Reviews = () => {
  return (
    <>
        <div className="container  rounded-3 text-center bg-light text-primary-emphasis p-2 mb-1" data-bs-theme="">
            <h1>
            MIRA LOS LIBROS CON MEJOR RESEÑA
            </h1>
            
        </div>

        <div className="card mb-2">
            <div className="card-body">
                <div className="row d-flex">
                    <div className="col-lg-9">
                            <Persons />
                        
                    </div>
                    <div className="col-lg-3  text-center">
                    <img src="src\assets\clubLectura\Libro1.jpg" className='img-fluid rounded-end' id='libros' alt="Habitos Atomicos"/>
                    </div>
                </div>

            </div> 
        </div>

        <div className="card mb-2">
            <div className="card-body">
                <div className="row d-flex">
                    <div className="col-md-9">
                            <Persons2 />
                        
                    </div>
                    <div className="col-md-3  text-center">
                    <img src="src\assets\clubLectura\Libro2.jpg" className='img-fluid rounded-end' id='libros' alt="Habitos Atomicos"/>
                    </div>
                </div>

            </div> 
        </div>
        
    
    
    
    </>
  )
}

export default Reviews