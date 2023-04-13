import React from 'react';
import { TopNav } from '../../layouts/Navigation/TopNav';
import { VerticalNav } from '../../layouts/Navigation/VerticalNav';
import './profile.scss';
import { Header } from '../../components/Header';
import { Graphics } from '../../components/Graphics/index';
import { useParams } from 'react-router-dom';

/**
 * Used to display the profile page and the components it contains
 * 
 * @return Jsx code
 */
export function Profile() {
    //Retrieve the "id" parameter in the url, allowing to retrieve the data of the correct user
    const { id } = useParams();

    return (
        <>
            <TopNav />
            <div className='dashboard'>
                <VerticalNav />
                <section className='dashboard_content'>
                    <Header userId={id}/>
                    <Graphics userId={id}/>
                </section>
            </div>
        </>
    );
}
