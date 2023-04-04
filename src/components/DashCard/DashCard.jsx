import React from 'react';
import './dashcard.scss';

export function DashCard({ type, color, icon, value, unit }) {
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
