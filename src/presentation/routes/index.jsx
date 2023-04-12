import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Profile } from '../pages/Profile/Profile';

/**
 * Used to manage the different routes of the app
 * 
 * @return router
 */
export function Router() {
    return (
        <Routes>
            <Route path='/profile/:id' element={<Profile/>}/>
            <Route path='*' element={<Navigate replace to='/profile/12' />}/>
        </Routes>
    );
}