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
            {/* Navigates to the page of the user with id "12", if the url is not correct */}
            <Route path='*' element={<Navigate replace to='/profile/12' />}/>
        </Routes>
    );
}