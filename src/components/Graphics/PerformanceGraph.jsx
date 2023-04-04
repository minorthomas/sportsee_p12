import React from 'react';
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
} from 'recharts';
import { USER_PERFORMANCE } from '../../data/__mocks__/mockedData';

export function PerformanceGraph() {
    const data = USER_PERFORMANCE;

    function normalize() {
        return data[0].data.map((element) => {
            return {
                value: element.value,
                kind: data[0].kind[element.kind],
            };
        });
    }

    return (
        <div className='dashboard_content_data_graph_other_performance'>
                <RadarChart
                    width={220}
                    height={220}
                    outerRadius='70%'
                    data={normalize()}
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
