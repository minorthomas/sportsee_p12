import React, { useEffect, useState } from 'react';
import { AverageGraph } from './AverageGraph';
import { SessionsGraph } from './SessionsGraph';
import { PerformanceGraph } from './PerformanceGraph';
import { ScoreGraph } from './ScoreGraph';
import { LateralInfo } from './UserInfoCard/LateralInfo';
import { FormattedKeyData } from '../../../data/api/dataFormatter';
import { UserInfo } from '../../../data/api/callApi';

/**
 * Used to display all charts and keyData located to the right of the app
 * 
 * @param Number - userId 
 * @return Jsx code
 */
export function Graphics({ userId }) {
    const { userData, isLoading, error } = UserInfo(userId);
    const [formattedData, setFormattedData] = useState(null);

    useEffect(() => {
        const format = FormattedKeyData(userData);
        setFormattedData(format);
    }, [isLoading, userData]);

    if (isLoading) {
        return;
    }

    if (error) {
        return <p>Une erreur est survenue...</p>;
    }

    return (
        <main className='dashboard_content_data'>
            <div className='dashboard_content_data_graph'>
                <AverageGraph userId={userId}/>
                <div className='dashboard_content_data_graph_other'>
                    <SessionsGraph userId={userId}/>
                    <PerformanceGraph userId={userId}/>
                    <ScoreGraph userId={userId}/>
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
