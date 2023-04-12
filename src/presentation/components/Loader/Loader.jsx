import React from 'react';
import './loader.scss';

/**
 * Used to display a loader when loading data
 * 
 * @return Jsx code
 */
export function Loader() {
    return (
        <div className='loader'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
