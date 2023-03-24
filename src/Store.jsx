import { Link } from "react-router-dom";

function Store() {
  return (
    <div className="App">
      <p className="text-red-500">Hello World</p>
      <Link to="cart">Cart</Link>
    </div>
  )
}

export default Store;
