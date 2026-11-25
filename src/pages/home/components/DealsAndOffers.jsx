import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import DealsCard from "./DealsCard";

const DealsAndOffers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // الرابط الأساسي للـ API
  const API_URL = "https://training.tamkeen-dev.com/tamkeenstore/public/api/product";

  useEffect(() => {
    // جلب المنتجات من الـ API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // الـ API يرجع المصفوفة داخل data.data[cite: 2]
        if (data && data.data) {
          // جلب أول 4 أو 5 منتجات فقط
          setProducts(data.data.slice(0, 5));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-4 p-0">
      <div className="bg-white border rounded-3">
        <Row className="g-0 align-items-stretch">
          {/* العمود الأول: الموقت والخصومات */}
          <Col lg={3} md={4} className="p-4 border-end">
            <h5 className="fw-bold mb-1">Deals and offers</h5>
            <p className="text-muted mb-3 fs-6">Hygiene equipments</p>

            <div className="d-flex gap-2 text-center">
              <div className="bg-dark text-white p-2 rounded-3 flex-fill">
                <div className="fw-bold fs-6">04</div>
                <small className="text-white-50" style={{ fontSize: "0.7rem" }}>
                  Days
                </small>
              </div>
              <div className="bg-dark text-white p-2 rounded-3 flex-fill">
                <div className="fw-bold fs-6">13</div>
                <small className="text-white-50" style={{ fontSize: "0.7rem" }}>
                  Hour
                </small>
              </div>
              <div className="bg-dark text-white p-2 rounded-3 flex-fill">
                <div className="fw-bold fs-6">34</div>
                <small className="text-white-50" style={{ fontSize: "0.7rem" }}>
                  Min
                </small>
              </div>
              <div className="bg-dark text-white p-2 rounded-3 flex-fill">
                <div className="fw-bold fs-6">56</div>
                <small className="text-white-50" style={{ fontSize: "0.7rem" }}>
                  Sec
                </small>
              </div>
            </div>
          </Col>

          {/* العمود الثاني: كروت المنتجات من الـ API */}
          <Col lg={9} md={8}>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center h-100 p-5">
                <Spinner animation="border" variant="danger" />
              </div>
            ) : (
              <Row className="g-0 row-cols-2 row-cols-sm-3 row-cols-md-5 h-100">
                {products.map((item) => (
                  <Col key={item.id}>
                    <DealsCard
                      image={item.image}
                      title={item.name}
                      discount={item.discount ? `-${item.discount}%` : "-25%"}
                      price={item.price}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DealsAndOffers;