import React from 'react';
import { TopNav } from '../layouts/Navigation/TopNav';
import { VerticalNav } from '../layouts/Navigation/VerticalNav';
import './home.scss';
import { DashboardHeader } from '../components/DashHeader';
import { DashboardGraph } from '../components/DashGraph';

export function Home() {
    return (
        <>
            <TopNav/>
            <div className='dashboard'>
                <VerticalNav/>
                <section className='dashboard_content'>
                    <DashboardHeader/>
                    <DashboardGraph/>
                </section>
            </div>
        </>
    );
}
