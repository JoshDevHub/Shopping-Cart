import Header from "./components/Header";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}
