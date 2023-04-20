import PropTypes from 'prop-types';
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

LateralInfo.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.node,
    value: PropTypes.number,
    unit: PropTypes.string,
};
