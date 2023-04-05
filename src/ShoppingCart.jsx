import Layout from "./Layout";

export default function ShoppingCart({ cart }) {
  return (
    <Layout>
      <>
        <h1 className="text-2xl">Hello from Shopping Cart</h1>
        <p>Cart Count is {cart.length} </p>
      </>
    </Layout>
  )
}
