const ProductId = ({ params }: { params: { productId: string } }) => {
  return <div>Products detail {params.productId}</div>;
};

export default ProductId;
