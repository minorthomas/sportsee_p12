import React, { useEffect, useState } from 'react';
import { AverageGraph } from './AverageGraph';
import { SessionsGraph } from './SessionsGraph';
import { PerformanceGraph } from './PerformanceGraph';
import { ScoreGraph } from './ScoreGraph';
import { LateralInfo } from './UserInfoCard/LateralInfo';
import { FormattedKeyData } from '../../../data/api/dataFormatter';
import { UserInfo } from '../../../data/api/callApi';
import { useNavigate } from 'react-router-dom';

export function Graphics({ userId }) {
    const { userData, isLoading, error } = UserInfo(userId);
    const [formattedData, setFormattedData] = useState(null);
    const navigate = useNavigate();

    /**Calls the formatting function to format the data retrieved via the id as a parameter
     * and update the data when the state user Data changes
     */
    useEffect(() => {
        if (!userData && !isLoading) {
            return navigate('/profile/12');
        } else {
            const format = FormattedKeyData(userData);
            setFormattedData(format);
        }
    }, [isLoading, userData, navigate]);

    if (isLoading) {
        return;
    }

    if (error) {
        return <p>Une erreur est survenue...</p>;
    }

    return (
        <main className='dashboard_content_data'>
            <div className='dashboard_content_data_graph'>
                <AverageGraph userId={userId} />
                <div className='dashboard_content_data_graph_other'>
                    <SessionsGraph userId={userId} />
                    <PerformanceGraph userId={userId} />
                    <ScoreGraph userId={userId} />
                </div>
            </div>
            <ul className='dashboard_content_data_info'>
                {formattedData &&
                    formattedData.map((element, index) => {
                        return (
                            <LateralInfo
                                key={`${element.type}-${index}`}
                                color={element.color}
                                type={element.type}
                                icon={element.icon}
                                value={element.value}
                                unit={element.unit}
                            />
                        );
                    })}
            </ul>
        </main>
    );
}
