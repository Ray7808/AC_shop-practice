import InitialData from "../../data/data.json";
import { useState, useEffect } from "react";
function Cart() {
  const [data, setData] = useState(InitialData);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (id, parameter) => {
    const updatedData = data.map((product) => {
      if (product.id === id) {
        if (parameter === "plus") {
          return { ...product, quantity: product.quantity + 1 };
        } else if (parameter === "minus" && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
      }
      return product;
    });
    setData(updatedData);
  };

  useEffect(() => {
    const totalPrice = data.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }, [data]);

  return (
    // <!-- cart -->
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {data.map((product, key) => (
          <div
            className="product-container col col-12"
            data-count={product.quantity}
            data-price={product.price}
            data-id={product.id}
            key={key}
          >
            <img className="img-container" src={product.img} />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img
                    className="product-action minus"
                    src="./icons/minus.svg"
                    onClick={() => handleClick(product.id, "minus")}
                  ></img>

                  <span className="product-count">{product.quantity}</span>
                  <img
                    className="product-action plus"
                    src="./icons/plus.svg"
                    onClick={() => handleClick(product.id, "plus")}
                  ></img>
                </div>
              </div>
              <div className="price">${product.price}</div>
            </div>
          </div>
        ))}
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totalPrice}</div>
      </section>
    </section>
  );
}

export default Cart;
