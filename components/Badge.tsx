
import React from 'react';

interface BadgeProps {
  type: 'bestSeller' | 'bestValue' | 'topRated' | 'maxDiscount';
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  const config = {
    bestSeller: {
      text: '🔥 Mais vendida da semana',
      classes: 'bg-red-100 text-red-700 border-red-200'
    },
    bestValue: {
      text: '💰 Melhor custo-benefício',
      classes: 'bg-green-100 text-green-700 border-green-200'
    },
    topRated: {
      text: '⭐ Mais bem avaliada',
      classes: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    },
    maxDiscount: {
      text: '📉 Maior Desconto',
      classes: 'bg-purple-100 text-purple-700 border-purple-200'
    }
  };

  const { text, classes } = config[type];

  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${classes} inline-block mb-2`}>
      {text}
    </span>
  );
};

export default Badge;
