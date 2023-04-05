import Layout from "./Layout";

export default function Root({ cart, addToCart }) {
  const handleAdd = () => {
    const newItem = "test";
    addToCart(newItem);
  }

  return (
    <Layout>
      <>
        <h1>Welcome to my Coffee Shop</h1>
        <p>Cart Count is {cart.length} </p>
        <button type="button" onClick={handleAdd}>Add To Cart</button>
      </>
    </Layout>
  )
}
