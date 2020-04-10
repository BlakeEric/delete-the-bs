// This will wrap the other components and hold the application state to pass down to
// other components.
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="pageInner">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
