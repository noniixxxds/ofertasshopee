
import React, { useMemo } from 'react';
import { TV_PRODUCTS } from './constants';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Apply highlight logic to all products
  const productsWithHighlights = useMemo(() => {
    if (TV_PRODUCTS.length === 0) return [];
    
    const sortedBySales = [...TV_PRODUCTS].sort((a, b) => b.sales - a.sales);
    const sortedByRating = [...TV_PRODUCTS].sort((a, b) => b.rating - a.rating);
    const sortedByValue = [...TV_PRODUCTS].sort((a, b) => (b.rating / b.price) - (a.rating / a.price));
    
    return TV_PRODUCTS.map(p => ({
      ...p,
      isBestSeller: p.id === sortedBySales[0].id || (sortedBySales.length > 1 && p.id === sortedBySales[1].id),
      isTopRated: p.id === sortedByRating[0].id,
      isBestValue: p.id === sortedByValue[0].id || (sortedByValue.length > 1 && p.id === sortedByValue[1].id),
    }));
  }, []);

  const maxDiscountId = useMemo(() => {
    if (productsWithHighlights.length === 0) return null;
    return [...productsWithHighlights].sort((a, b) => b.discount - a.discount)[0].id;
  }, [productsWithHighlights]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
            🔥 Ofertas Selecionadas de Smart TVs
          </h2>
          <span className="text-xs md:text-sm font-bold text-shopee-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            {productsWithHighlights.length} Modelos em Destaque
          </span>
        </div>

        {productsWithHighlights.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsWithHighlights.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isMaxDiscount={product.id === maxDiscountId}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium text-lg">Carregando ofertas...</p>
          </div>
        )}

        {/* Persuasive Middle Section */}
        <section className="mt-16 bg-shopee-orange rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase italic tracking-tighter">
              Aproveite os Cupons de Hoje! 🎟️
            </h3>
            <p className="text-orange-50 mb-8 font-medium text-lg leading-relaxed">
              Milhares de pessoas estão comprando Smart TVs na Shopee agora mesmo. Garanta seu modelo antes que o preço suba ou o estoque acabe.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-5 py-3 rounded-2xl backdrop-blur-md border border-white/30">
                <span className="text-2xl font-black">4.9/5</span>
                <span className="text-[10px] uppercase font-bold leading-tight">Satisfação<br/>Garantida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-5 py-3 rounded-2xl backdrop-blur-md border border-white/30">
                <span className="text-2xl font-black">100%</span>
                <span className="text-[10px] uppercase font-bold leading-tight">Produto<br/>Original</span>
              </div>
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
