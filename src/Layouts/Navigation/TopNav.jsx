import React from 'react';
import { Logo } from '../../components/Logo';
import './navigation.scss';
import { Link } from 'react-router-dom';

export function TopNav() {
    return (
        <nav className='top_nav'>
            <ul>
                <li className='logo'>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Accueil
                    </Link>
                </li>
                <li>
                    Profil
                </li>
                <li>
                    Réglage
                </li>
                <li>
                    Communauté
                </li>
            </ul>
        </nav>
    );
}