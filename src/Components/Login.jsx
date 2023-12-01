import React from 'react'
import { useState } from 'react';
import firebase from './Database/FireBaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const submit = async(e) =>{
        e.preventDefault()
        setIsLoading(true);
        
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            var user = userCredential.user;
            console.log('Usuario:', user);
            setIsLoading(false);
            navigate('/home')
          })
          .catch((error) => {
            // Error en el inicio de sesión
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error:', errorCode, errorMessage);
            alert(errorMessage);
            setIsLoading(false);
            navigate('/')
          });
        
    }
  return (
    <>
        <div className="container" style={{}}>&nbsp;
            <div className="container position-absolute top-50 start-50 translate-middle bg-light rounded-3 p-5 shadow " style={{minWidth:300, maxWidth:450}}>
            <form action="">
            <legend className='text-center'>Login</legend>
                <div className="mb-3">
                    <input type="email" className='form-control' aria-describedby="emailHelp" placeholder='ejemplo@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {/* <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electronico con alguien mas.</div> */}
                </div>
                <div className="mb-3">
                    <input type="password" className='form-control' placeholder='*********' autoComplete='on' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='btn btn-primary me-2' onClick={submit} disabled={isLoading} >Login</button>
                {isLoading ? (
                    <div className="spinner-border text-primary spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ): " "}

                <div className='form-text'>No tienes cuenta? <a href="/register">Registrarse</a></div>
            </form>
            </div>
        </div>
    </>
  )
}

export default Login