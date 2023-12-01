import React, { useState } from 'react'
import firebase from './Database/FireBaseConfig';
import { useNavigate } from 'react-router-dom';
import Rout from './Rout';

const Signup = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    

    const submit = async(e) =>{
        e.preventDefault()
        setIsLoading(true);

        setTimeout(() => {
            navigate('/');
          }, 5000);

        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
            // El usuario fue creado exitosamente
            const user = userCredential.user;
            console.log("Usuario creado: ", user.uid);
            setIsLoading(false);
            navigate('/')
          })
          .catch((error) => {
            // Hubo un error al crear el usuario
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear usuario: ", errorCode, errorMessage);
            setIsLoading(false);
            navigate('/register')
          });
            
        
    }
  return (
    <>
        <div className="container" style={{}}>&nbsp;
            <div className="container position-absolute top-50 start-50 translate-middle bg-light rounded-3 p-5 shadow " style={{minWidth:300, maxWidth:450}}>
            <form action="">
            <legend className='text-center'>Registro</legend>
                <div className="row g-3 mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Apellidos" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3">
                    <input type="email" className='form-control' aria-describedby="emailHelp" placeholder='ejemplo@gmail.com'  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electronico con alguien mas.</div>
                </div>
                <div className="mb-3">
                    <input type="password" className='form-control' placeholder='********' autoComplete='on' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className='btn btn-primary me-2' onClick={submit} disabled={isLoading}>Register 
                </button>
                {isLoading ? (
                    <div className="spinner-border text-primary spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ): " "}
               
                <div className='form-text'>Tienes cuenta? <a href="/">Login</a></div>
            </form>
            </div>
        </div>
        

    </>
  )
}

export default Signup