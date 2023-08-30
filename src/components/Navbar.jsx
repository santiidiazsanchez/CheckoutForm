import React from 'react'
import { BootstrapIcon } from './Typography'
import Link from 'next/link'

function Navbar({ toggleTheme, theme }) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div className="container">

                <a className="navbar-brand d-flex gap-2" href="#">
                    <div className='text-primary'>
                        <BootstrapIcon
                            name={'app-indicator'}
                        />
                    </div>
                    Store
                </a>

                <button className="navbar-toggler ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-4 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                New Arrivals
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Sale
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <a onClick={toggleTheme} className="btn btn-primary">
                        {theme == 'dark' ? (
                            <i className="bi bi-sun"></i> /* Icono de sol en modo oscuro */
                        ) : (
                            <i className="bi bi-moon"></i> /* Icono de luna en modo claro */
                        )}
                    </a>

                </div>

            </div>
        </nav>
    )
}

export default Navbar