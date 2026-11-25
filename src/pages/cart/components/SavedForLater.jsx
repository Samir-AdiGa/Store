import { Container, Row, Col } from "react-bootstrap";
import SavedProductCard from "./SavedProductCard";

// استيراد الصور (قم بتعديل المسارات حسب ملفاتك)
import TabletImg from "../../../assets/images/Shirt 1.png";
import PhoneImg from "../../../assets/images/Shirt 2.png";
import WatchImg from "../../../assets/images/Shirt 3.png";
import LaptopImg from "../../../assets/images/Shirt 4.png";

const SavedForLater = ({ items }) => {
  // بيانات افتراضية
  const defaultItems = [
    {
      id: 1,
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
      image: TabletImg,
    },
    {
      id: 2,
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
      image: PhoneImg,
    },
    {
      id: 3,
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
      image: WatchImg,
    },
    {
      id: 4,
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
      image: LaptopImg,
    },
  ];

  const productsList = items || defaultItems;

  const handleMoveToCart = (productId) => {
    console.log(`Product ${productId} moved to cart`);
  };

  return (
    <Container className="my-4">
      <div className="bg-white p-4 rounded border shadow-sm">
        <h5 className="fw-bold mb-4 text-dark fs-6">Saved for later</h5>

        <Row className="g-3">
          {productsList.map((product) => (
            <Col key={product.id} lg={3} md={6} sm={6} xs={12}>
              <SavedProductCard
                image={product.image}
                price={product.price}
                title={product.title}
                onMoveToCart={() => handleMoveToCart(product.id)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default SavedForLater;