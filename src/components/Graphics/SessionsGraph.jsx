import React from 'react';
import { Line, LineChart, Tooltip, XAxis } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../../data/__mocks__/mockedData';

export function SessionsGraph() {
    const data = USER_AVERAGE_SESSIONS[0].sessions;

    return (
        <div className='dashboard_content_data_graph_other_sessions'>
            <h2>Durée moyenne des sessions</h2>
            <LineChart
                width={220}
                height={220}
                data={data}
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
