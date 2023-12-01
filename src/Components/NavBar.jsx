import React from 'react'

const NavBar = () => {
    const links=[
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'Libroteca',
        },
        {
            id: 1,
            link: 'Conocenos',
        },
        {
            id: 1,
            link: 'Foro',
        },
    ]
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="../src\assets\clubLectura\logo1.png" alt="Logo" width="50" height="50" className="d-inline-block rounded-5 thumnail"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">Libroteca</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">Conocenos</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">Foro</a>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <a className="btn btn-primary" href="/">
                            Logout
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    
    </>
  )
}

export default NavBar