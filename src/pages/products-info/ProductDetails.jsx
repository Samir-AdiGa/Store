import HomePageLayout from "../../layouts/PageLayout"
import Breadcrumbs from "./components/Breadcrumbs"
import DiscountBanner from "../../components/DiscountBanner";
import ProductDetailsCard from "./components/ProductDetailsCard";
import ProductDetailsTabs from "./components/ProductDetailsTabs";
import RelatedProducts from "./components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div>
      <HomePageLayout>
        <Breadcrumbs />
        <ProductDetailsCard />
        <ProductDetailsTabs />
        <RelatedProducts />
        <DiscountBanner />
      </HomePageLayout>
    </div>
  )
}

export default ProductDetails;
