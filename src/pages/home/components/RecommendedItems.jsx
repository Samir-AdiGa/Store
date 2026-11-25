import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import RecoProductCard from "./RecoProductCard";

const RecommendedItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // رابط الـ API
  const API_URL = "https://training.tamkeen-dev.com/tamkeenstore/public/api/product";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          // جلب 10 منتجات للعرض في الشبكة
          setProducts(data.data.slice(0, 10));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recommended products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-4 p-0">
      {/* عنوان القسم */}
      <h3 className="fw-bold fs-4 mb-3 text-dark">Recommended items</h3>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center p-5">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        /* شبكة الكروت (5 كروت في السطر للشاشات الكبيرة) */
        <Row className="g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
          {products.map((product) => (
            <Col key={product.id}>
              <RecoProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default RecommendedItems;