import React from 'react';
import './userinfocard.scss';

/**
 * Used to display the keyData located to the right of the app
 * 
 * @param String - type
 * @param String - color
 * @param Svg - icon
 * @param String - value
 * @param String - unit
 * @return Jsx code
 */
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
