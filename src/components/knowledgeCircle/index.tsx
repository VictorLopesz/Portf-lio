'use client'
import React from 'react';

import { useSpring, animated } from 'react-spring';

const KnowledgeCircle = ({ level }:any) => {
  const circleRadius = 50;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = ((100 - level) / 100) * circumference;

  const colorSpring = useSpring({
    from: { strokeDashoffset: circumference, stroke: '#3498db' },
    to: async (next) => {
      await next({ strokeDashoffset: 0 });
      await next({ stroke: '#3498db80' }); // Adicionando transparência
    },
    reset: true,
  });

  return (
    <div className="relative">
      <svg width={circleRadius * 2} height={circleRadius * 2} className="knowledge-circle">
        <circle
          cx={circleRadius}
          cy={circleRadius}
          r={circleRadius - strokeWidth / 2}
          fill="none"
          stroke="#ddd"
          strokeWidth={strokeWidth}
        />

        <animated.circle
          cx={circleRadius}
          cy={circleRadius}
          r={circleRadius - strokeWidth / 2}
          fill="none"
          stroke={colorSpring.stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={colorSpring.strokeDashoffset}
        />
      </svg>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-gray-700">
        {level}%
      </div>
    </div>
  );
};

export default KnowledgeCircle;
