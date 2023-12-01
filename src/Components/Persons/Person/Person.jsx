import React from 'react'

const Person = (props) => {
  return (
        <div className='card m-1' style={{width:"45%"}}>
            <div className="card-body ">
                <div className="clearfix">
                    <img src={props.img} className='col-md-6 float-md-end mb-3 ms-md-3' style={{width:80}}/>
                    <p className='card-text fst-italic'>{props.text}</p>
                </div>
                {/* <img src={props.img} className='img-thumbnail rounded-5 border-0'/>
                <p className='card-text'>{props.text}</p> */}

            </div>
        </div>
    
  )
}

export default Person