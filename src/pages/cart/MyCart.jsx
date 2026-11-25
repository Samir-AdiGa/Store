import HomePageLayout from "../../layouts/PageLayout"
import DiscountBanner from "../../components/DiscountBanner"
import QuantitySelector from "./components/QuantitySelector"
import ServiceFeatures from "./components/ServiceFeatures"
import SavedForLater from "./components/SavedForLater"

const MyCart = () => {
  return (
    <HomePageLayout hide={true}>
      <QuantitySelector />
      <ServiceFeatures />
      <SavedForLater />
      <DiscountBanner />
    </HomePageLayout>
  )
}

export default MyCart;