import React from 'react';
import './ProductDetail.css';

function ProductDetail({ match }) {
  // Use o parâmetro de rota 'match' para obter o ID do produto
  const productId = match.params.id;

  // Consulte os detalhes do produto com base no ID

  return (
    <div className="product-detail">
      {/* Exibir detalhes do produto aqui */}
    </div>
  );
}

export default ProductDetail;
