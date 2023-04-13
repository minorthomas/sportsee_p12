import React, { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';
import { FormattedUserPerformance } from '../../../data/api/dataFormatter';
import { UserPerformance } from '../../../data/api/callApi';

/**
 * Used to display a graph using api performance data
 *
 * @param Number - userId
 * @return Jsx code
 */
export function PerformanceGraph({ userId }) {
    const { userData, isLoading, error } = UserPerformance(userId);
    const [formattedData, setFormattedData] = useState(null);

    /**Calls the formatting function to format the data retrieved via the id as a parameter
     * and update the data when the state user Data changes
     */
    useEffect(() => {
        const format = FormattedUserPerformance(userData);
        setFormattedData(format);
    }, [isLoading, userData]);

    if (isLoading) {
        return;
    }

    if (error) {
        return <p>Une erreur est survenue...</p>;
    }

    return (
        <div className='dashboard_content_data_graph_other_performance'>
            <RadarChart
                width={220}
                height={220}
                outerRadius='70%'
                data={formattedData}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey='kind'
                    stroke='#FFF'
                    tickLine={false}
                    dy={2}
                    tickSize={6}
                    tick={{
                        fontSize: '55%',
                        fontWeight: 500,
                    }}
                />
                <Radar
                    dataKey='value'
                    stroke='transparent'
                    fill='#E60000'
                    fillOpacity={0.7}
                />
            </RadarChart>
        </div>
    );
}
