import React from "react";
import Welcome from "../Components/welcome/Welcome";
import CardList from "../Components/Card/CardList";
import Offers from "../Components/offers/Offers";
import NewCollections from "../Components/new-coolection/NewCollections";
import Subscribe from "../Components/Subscribe/Subscribe";

const Shop = () => {
  return (
    <>
      <Welcome />
      <CardList title='popular in woman'/>
      <Offers />
      <NewCollections />
      <Subscribe />
    </>
  );
};

export default Shop;
