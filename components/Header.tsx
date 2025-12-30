
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block bg-orange-100 text-shopee-orange text-xs font-extrabold px-3 py-1 rounded-full mb-4 animate-pulse">
          ATUALIZADO HOJE: {new Date().toLocaleDateString('pt-BR')}
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tighter uppercase italic">
          Smart TVs Shopee: <span className="text-shopee-orange text-nowrap">Ofertas de Hoje</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto font-semibold">
          Preços atualizados, descontos reais e os modelos mais vendidos da semana.
        </p>
      </div>
    </header>
  );
};

export default Header;
