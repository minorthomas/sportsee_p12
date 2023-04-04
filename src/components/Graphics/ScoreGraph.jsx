import React from 'react';
import { RadialBar, RadialBarChart } from 'recharts';
import { USER_MAIN_DATA } from '../../data/__mocks__/mockedData';

export function ScoreGraph() {
    const data = USER_MAIN_DATA[0];

    const score = [
        {
            fill: '#FF0000',
            value: data.todayScore
                ? data.todayScore * 100
                : data.score * 100,
        },
        {
            fill: 'transparent',
            value: 100,
        },
    ];

    return (
        <div className='dashboard_content_data_graph_other_score'>
            <h2>Score</h2>
            <RadialBarChart
                barSize={10}
                data={score}
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
                <RadialBar dataKey='value' />
            </RadialBarChart>
            <p>
                <span>
                    {score[0].value}%<br />
                </span>
                de votre objectif
            </p>
        </div>
    );
}
