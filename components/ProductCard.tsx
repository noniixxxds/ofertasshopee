
import React from 'react';
import { Product } from '../types';
import Badge from './Badge';

interface ProductCardProps {
  product: Product;
  isMaxDiscount: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isMaxDiscount }) => {
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-0.5 mb-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      {/* Badge Section */}
      <div className="px-4 pt-4 min-h-[40px]">
        {product.isBestSeller && <Badge type="bestSeller" />}
        {product.isBestValue && <Badge type="bestValue" />}
        {product.isTopRated && <Badge type="topRated" />}
        {isMaxDiscount && <Badge type="maxDiscount" />}
      </div>

      {/* Image Section */}
      <div className="relative pt-[75%] bg-gray-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-4"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
          -{product.discount}% OFF
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex-grow">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px] mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-2">
          {renderStars(product.rating)}
          <span className="text-[10px] text-gray-400 font-medium">
            {product.sales}+ vendidos
          </span>
        </div>

        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <span className="bg-gray-100 px-1.5 py-0.5 rounded">{product.screenSize}" Polegadas</span>
            <span className="bg-gray-100 px-1.5 py-0.5 rounded">{product.os}</span>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-xs text-gray-400 line-through">
            {formatPrice(product.oldPrice)}
          </p>
          <p className="text-2xl font-extrabold text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-4 pt-0">
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#ee4d2d] hover:bg-[#d73211] text-white font-bold py-3 rounded-lg transition-colors shadow-sm active:scale-[0.98] transform"
        >
          👉 Ver oferta na Shopee
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
