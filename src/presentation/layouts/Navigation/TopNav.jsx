import React from 'react';
import { Logo } from '../../components/Logo';
import './navigation.scss';
import { Link } from 'react-router-dom';

export function TopNav() {
    return (
        <nav className='top_nav'>
            <ul>
                <li className='logo'>
                    <Link to='/profile/12'>
                        <Logo/>
                    </Link>
                </li>
                <li>
                    <Link to='/profile/12'>
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