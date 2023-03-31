import React from 'react';
import { Logo } from '../../Components/Logo';
import './navigation.scss';

export function TopNav() {
    return (
        <nav className='top_nav'>
            <ul>
                <li>
                    <Logo/>
                </li>
                <li>
                    Accueil
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