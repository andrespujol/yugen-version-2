import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import './NavBar.css'
import { RiMenu4Fill } from 'react-icons/ri';

export const NavBar = () => {

  return (
    <div className='flex justify-between'>
        <div className="divLogo w-2/5">
            <Link className="btn btn-ghost normal-case text-xl" to={'/'}><img src={logo} alt={'logo'} /></Link>
        </div>
        <div className="navbar bg-base-100 w-4/5 flex justify-end">
            <div className="desktop-menu ">

                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/'} className="linkMenu">Home</Link></li>
                    <li><Link to={'/'} className="linkMenu">¿Quiénes somos?</Link></li>
                    <li><Link to={'/'} className="linkMenu">Porqué elegirnos</Link></li>
                    <li tabIndex="0">
                        <Link to={'/'} className="linkMenu">
                            Productos
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                            </svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                            <li><Link to={'/'} className="linkMenu">Velas</Link></li>
                            <li><Link to={'/'} className="linkMenu">Jabones</Link></li>
                            <li><Link to={'/'} className="linkMenu">Difusores</Link></li>
                            <li><Link to={'/'} className="linkMenu">Sahumerios</Link></li>
                            <li><Link to={'/'} className="linkMenu">Box</Link></li>
                        </ul>
                    </li>
                    <li><Link to={'/'} className="linkMenu">Contáctanos</Link></li>
                </ul>
            </div>
            <div className="mobile-menu w-full flex justify-end">
                <div className="collapse w-4/5 ">
                    <input type="checkbox"  /> 
                    <div className="collapse-title text-xl font-medium flex justify-end">
                    <RiMenu4Fill className='menuHamburguesa' />
                    </div>
                    <div className="collapse-content"> 
                        <ul className="menu bg-base-100 w-56 rounded-box relative top-5 ">
                            <li className="hover-bordered"><Link to={'/'} className='pl-0 linkMenu'>¿Quiénes somos?</Link></li>
                            <li className="hover-bordered"><Link to={'/'} className='pl-0 linkMenu'>Porqué elegirnos</Link></li>
                            <li className="hover-bordered"><Link to={'/'} className='pl-0 linkMenu'>Velas</Link></li>
                            <li className="hover-bordered"><Link to={'/'} className='pl-0 linkMenu'>Jabones</Link></li>
                            <li className="hover-bordered"><Link to={'/'} className='pl-0 linkMenu'>Difusores</Link></li>
                            <li className="hover-bordered"><Link to={'/'} className='pl-0 linkMenu'>Sahumerios</Link></li>
                            <li className="hover-bordered"><Link to={'/'} className='pl-0 linkMenu'>Box</Link></li>
                            <li className="hover-bordered"><Link to={'/'} className='pl-0 linkMenu'>Contáctanos</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
