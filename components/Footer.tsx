
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20 pt-16 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Por que confiar?</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Analisamos diariamente o volume de vendas e avaliações reais dos usuários na Shopee para trazer apenas o que há de melhor.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Compra Segura</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Links diretos para a Shopee
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Garantia Shopee aplicada
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Pagamento 100% protegido
              </li>
            </ul>
          </div>
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-lg font-bold">Atenção! ⚠️</h4>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-300 text-sm">
                Os preços e a disponibilidade dos produtos podem sofrer alterações a qualquer momento sem aviso prévio. O estoque é limitado devido à alta demanda. Recomendamos finalizar a compra caso encontre o modelo ideal.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Comparador de Smart TVs Shopee. Este site utiliza links de afiliados. Ao comprar através deles, podemos receber uma comissão sem custo adicional para você.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
