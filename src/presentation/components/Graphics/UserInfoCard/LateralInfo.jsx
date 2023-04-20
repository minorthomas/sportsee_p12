import React from 'react';
import './userinfocard.scss';

export function LateralInfo({ type, color, icon, value, unit }) {
    return (
        <li className={`card card-${color}`}>
            <div>{icon}</div>

            <div>
                <p>
                    {value}
                    {unit}
                </p>
                <p>{type}</p>
            </div>
        </li>
    );
}
