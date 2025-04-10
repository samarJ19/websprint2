import React from 'react';
import { CircleCount } from './circleCount';

const CommunityStats = () => {
    const stats = [
        {
            value: 400,
            description: 'Active members in the community',
            color: '#4285F4', // Blue color
            top: '210px',
            left: '140px',
            basecolor:'blue'
        },
        {
            value: 20,
            description: 'Events hosted in community',
            color: '#34A853', // Green color
            top: '340px',
            left: '300px',
            basecolor:'green'
        },
        {
            value: 60,
            description: 'Swags distributed in community',
            color: '#EA4335', // Red color
            top: '500px',
            left: '150px',
            basecolor:'red'
        }
    ];

    return (
        <div className="relative pt-2 h-screen w-full">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`absolute transition-transform duration-300 ease hover:scale-120 hover:shadow-[${stat.color}]-500/50 rounded-full flex flex-col items-center justify-center text-white text-center p-3`}
                    style={{
                        backgroundColor: stat.color,
                        width: '140px',
                        height: '140px',
                        top: stat.top,
                        left: stat.left
                    }}
                >
                    <div className='flex justify-center content-center'><CircleCount  value={stat.value}/> <span className="text-4xl font-bold ml-0.5">{" +"}</span></div>
                    <div className="text-xs mt-1 px-1">{stat.description}</div>
                </div>
            ))}
        </div>
    );
};

export default CommunityStats;