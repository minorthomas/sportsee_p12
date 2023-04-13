import React, { useEffect, useState } from 'react';
import { RadialBar, RadialBarChart } from 'recharts';
import { FormattedUserScore } from '../../../data/api/dataFormatter';
import { UserInfo } from '../../../data/api/callApi';

/**
 * Used to display a graph using api score data
 * 
 * @param Number - userId 
 * @return Jsx code
 */
export function ScoreGraph({ userId }) {
    const { userData, isLoading, error } = UserInfo(userId);
    const [formattedData, setFormattedData] = useState(null);

    /**Calls the formatting function to format the data retrieved via the id as a parameter
    * and update the data when the state user Data changes
    */
    useEffect(() => {
        const format = FormattedUserScore(userData);
        setFormattedData(format)
    }, [isLoading, userData])

    if(isLoading) {
        return
    }

    if(error) {
        return <p>Une erreur est survenue...</p>
    }

    return (
        <div className='dashboard_content_data_graph_other_score'>
            <h2>Score</h2>
            <RadialBarChart
                barSize={10}
                data={formattedData}
                endAngle={450}
                height={220}
                width={220}
                innerRadius='100%'
                startAngle={90}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <RadialBar dataKey='value' cornerRadius='100%' />
            </RadialBarChart>
            <p>
                <span>
                    {formattedData[0].value}%<br />
                </span>
                de votre objectif
            </p>
        </div>
    );
}
