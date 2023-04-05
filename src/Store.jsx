import Layout from "./Layout";

function Store({ cart }) {
  return (
    <Layout>
      <>
        <p className="text-red-500">Hello World</p>
        <p>Cart Count is {cart.length} </p>
      </>
    </Layout>
  )
}

export default Store;
