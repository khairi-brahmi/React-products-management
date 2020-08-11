import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Home = ({ addToCart, cartProps }) => {
  const { products } = cartProps;
  const [data] = useState(products);

  return (
    <div className="container">
      <div className="products">
        {data.map(({ name, price, id }) => {
          return (
            <div className="image" key={id}>
              <h3>{name}</h3>
              <p>description</p>
              <div className="content">
                <h3 className="price">Prix: {price} $</h3>
                <button onClick={() => addToCart(id)} className="addCart">
                  Ajouter au Panier
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartReducer }) => ({
  cartProps: cartReducer
});

export default connect(mapStateToProps, { addToCart })(Home);
