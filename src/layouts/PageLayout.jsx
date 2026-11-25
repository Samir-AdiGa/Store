import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import TopBar from "../components/TopBar"

const PageLayout = ({ children, hide = false }) => {
  return (
    <div>
      <TopBar hideSearch={hide} />
      {!hide && <NavBar />}
      <div>
        {children}  
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout;