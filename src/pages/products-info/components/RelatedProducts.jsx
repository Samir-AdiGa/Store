import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

// استيراد الصور الخاصة بك
import WalletImg from "../../../assets/images/Wallet G.svg";
import WatchImg from "../../../assets/images/Watch.svg";
import HeadphoneImg from "../../../assets/images/Headphone G.svg";
import ShortsImg from "../../../assets/images/Shirt 4.png";
import KettleImg from "../../../assets/images/Shirt 5.png";
import OrganizerImg from "../../../assets/images/Shirt 6.png";

const RelatedProducts = ({ title = "Related products", products }) => {
  // بيانات افتراضية في حال لم يتم تمرير props من الأب
  const defaultProducts = [
    { id: 1, title: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: WalletImg },
    { id: 2, title: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: WatchImg },
    { id: 3, title: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: HeadphoneImg },
    { id: 4, title: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: ShortsImg },
    { id: 5, title: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: KettleImg },
    { id: 6, title: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: OrganizerImg },
  ];

  const productList = products || defaultProducts;

  return (
    <Container className="my-4">
      <div className="bg-white p-3 rounded border shadow-sm">
        {/* عنوان القسم */}
        <h5 className="fw-bold mb-3 text-dark fs-6">{title}</h5>

        {/* شبكة المنتجات (تتوزع تلقائياً إلى 6 أعمدة على الشاشات الكبيرة) */}
        <Row className="g-3">
          {productList.map((item) => (
            <Col key={item.id} lg={2} md={4} sm={6} xs={6}>
              <ProductCard 
                image={item.image} 
                title={item.title} 
                price={item.price} 
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default RelatedProducts;