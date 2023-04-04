import React from 'react';
import { USER_ACTIVITY } from '../../data/__mocks__/mockedData';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

export function AverageGraph() {
    const data = USER_ACTIVITY[0].sessions;

    function normalize() {
        return data.map((element, index) => {
            return {
                index: index,
                ...element
            }
        })
    }

    return (
        <div className='dashboard_content_data_graph_average'>
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width='100%' height={250}>
                <BarChart
                    data={normalize()}
                    margin={{
                        top: 15,
                        right: 15,
                        left: 23,
                        bottom: 15,
                    }}
                    barCategoryGap={10}
                    barGap={5}
                    barSize={7}
                >
                    <CartesianGrid strokeDasharray='2 2' vertical={false} />
                    <XAxis dataKey='index' tickLine={false} tickMargin={15} />
                    <YAxis
                        dataKey='calories'
                        tickLine={false}
                        axisLine={false}
                        tickMargin={20}
                        orientation='right'
                    />
                    <Tooltip
                        itemStyle={{
                            color: 'white',
                            fontSize: 10,
                            fontWeight: 500,
                        }}
                        // to display the unit and its value
                        formatter={(value, name, unit) => [value, unit]}
                        // to style the label container Tooltip
                        labelStyle={{ display: 'none' }}
                        contentStyle={{
                            backgroundColor: '#E60000',
                            width: '48px',
                            height: '63px',
                            border: 'none',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        offset={20}
                    />
                    <Legend
                        verticalAlign='top'
                        align='right'
                        iconType='circle'
                        iconSize={8}
                        wrapperStyle={{ paddingBottom: '50px' }}
                    />
                    <Bar
                        dataKey='kilogram'
                        fill='#282D30'
                        radius={[20, 20, 0, 0]}
                        name='Poids (kg)'
                        unit={'kg'}
                    />
                    <Bar
                        dataKey='calories'
                        fill='#E60000'
                        radius={[10, 10, 0, 0]}
                        name='Calories brûlées (kCal)'
                        unit={'kCal'}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
