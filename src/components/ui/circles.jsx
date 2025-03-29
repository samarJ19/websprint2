import React from 'react';

const CommunityStats = () => {
    const stats = [
        {
            value: '400+',
            description: 'Active members in the community',
            color: '#4285F4', // Blue color
            top: '60px',
            left: '120px'
        },
        {
            value: '20+',
            description: 'Events hosted in community',
            color: '#34A853', // Green color
            top: '250px',
            left: '350px'
        },
        {
            value: '60+',
            description: 'Swags distributed in community',
            color: '#EA4335', // Red color
            top: '500px',
            left: '250px'
        }
    ];

    return (
        <div className="relative h-screen w-full">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="absolute rounded-full flex flex-col items-center justify-center text-white text-center p-3"
                    style={{
                        backgroundColor: stat.color,
                        width: '120px',
                        height: '120px',
                        top: stat.top,
                        left: stat.left
                    }}
                >
                    <div className="text-4xl font-bold">{stat.value}</div>
                    <div className="text-xs mt-1 px-1">{stat.description}</div>
                </div>
            ))}
        </div>
    );
};

export default CommunityStats;