import { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";

const ShowCaseDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://training.tamkeen-dev.com/tamkeenstore/public/api/product";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          // جلب 8 منتجات مثلاً لملء شبكة الـ Showcase
          setProducts(data.data.slice(5 , 13));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching showcase products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 p-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  return (
    <Row className="g-0 row-cols-2 row-cols-md-4 border-start h-100">
      {products.map((product) => (
        <Col
          key={product.id}
          className="border-bottom border-end p-3 d-flex flex-column justify-content-between"
        >
          <div>
            <h6 className="fw-semibold text-dark mb-1 text-truncate">
              {product.name}
            </h6>
            <p className="text-muted small m-0">
              From USD {product.price}
            </p>
          </div>
          <div className="text-end mt-2">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ShowCaseDetails;