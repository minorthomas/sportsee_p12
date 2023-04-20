import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis } from 'recharts';
import { FormattedUserSessions } from '../../../data/api/dataFormatter';
import { UserSessions } from '../../../data/api/callApi';

export function SessionsGraph({ userId }) {
    const { userData, isLoading, error } = UserSessions(userId)
    const [formattedData, setFormattedData] = useState(null)

    /**Calls the formatting function to format the data retrieved via the id as a parameter
    * and update the data when the state user Data changes
    */
    useEffect(() => {
        const format = FormattedUserSessions(userData)
        setFormattedData(format);
    }, [isLoading, userData])

    if (isLoading) {
        return
    }

    if(error) {
        return <p>Une erreur est survenue...</p>
    }

    return (
        <div className='dashboard_content_data_graph_other_sessions'>
            <h2>Durée moyenne des sessions</h2>
            <LineChart
                width={220}
                height={220}
                data={formattedData}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis
                    dataKey='day'
                    tickLine={false}
                    stroke='#FFF'
                    strokeWidth={1}
                />
                <Tooltip
                    itemStyle={{
                        color: 'black',
                        fontSize: 10,
                        fontWeight: 500,
                    }}
                    formatter={(value, name, unit) => [value, unit]}
                    labelStyle={{ display: 'none' }}
                    contentStyle={{
                        width: '40px',
                        height: '25px',
                        border: 'none',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    cursor={{
                        stroke: 'black',
                        strokeOpacity: 0.2,
                        strokeWidth: 40,
                    }}
                    offset={20}
                />
                <Line
                    type='monotone'
                    dataKey='sessionLength'
                    stroke='#FFF'
                    dot={false}
                    unit={'min'}
                />
            </LineChart>
        </div>
    );
}
