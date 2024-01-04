import React from "react";
import all_product from "../Assets/all_product";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Products/Breadcrum";
import ProductDetail from "../Components/Products/ProductDetail";
import ProductDescription from "../Components/Products/ProductDescription";
import CardList from "../Components/Card/CardList";
const Products = () => {
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === +productId);
  return (
    <>
      <Breadcrum product={product} />
      <ProductDetail product={product} />
      <ProductDescription/>
      <CardList title="Related Products" />
    </>
  );
};

export default Products;
