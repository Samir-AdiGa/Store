import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Row, Col, Button, Container, Spinner } from "react-bootstrap";
import {
  FaStar,
  FaCheck,
  FaCommentDots,
  FaShoppingBag,
  FaShieldAlt,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const ProductDetailsCard = () => {
  const { id } = useParams(); // قراءة id المنتج من رابط الصفحة

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      // جلب تفاصيل المنتج حسب الـ id الخاص به
      fetch(`https://training.tamkeen-dev.com/tamkeenstore/public/api/product/show?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          const item = data.data || data;
          setProduct(item);
          setSelectedImg(item.image || "");
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching product details:", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h4>Product not found</h4>
      </Container>
    );
  }

  // إعداد مصفوفة الصور (إما الصورة الرئيسية أو صور إضافية إذا توفرت)
  const images = product.images && product.images.length > 0 
    ? product.images.map(img => img.url || img) 
    : [product.image];

  return (
    <Container className="py-3">
      <Row>
        <Col>
          <div className="bg-white p-3 rounded border shadow-sm">
            <Row>
              {/* قسم الصور مع خاصية الزوم */}
              <Col lg={4} md={5}>
                <div
                  className="border rounded p-2 mb-3 text-center d-flex align-items-center justify-content-center overflow-hidden"
                  style={{ height: "350px" }}
                >
                  {selectedImg && (
                    <InnerImageZoom
                      src={selectedImg}
                      zoomSrc={selectedImg}
                      zoomType="hover"
                      zoomScale={1.5}
                      className="mh-100 img-fluid"
                      imgAttributes={{
                        style: { maxHeight: "330px", objectFit: "contain" },
                      }}
                    />
                  )}
                </div>

                {/* الصور المصغرة */}
                <div className="d-flex gap-2 justify-content-start overflow-auto">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImg(img)}
                      className={`border rounded p-1 cursor-pointer d-flex align-items-center justify-content-center ${
                        selectedImg === img
                          ? "border-primary border-2"
                          : "border-light-subtle"
                      }`}
                      style={{
                        width: "50px",
                        height: "50px",
                        cursor: "pointer",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={img}
                        alt="thumb"
                        className="img-fluid mh-100 object-fit-contain"
                      />
                    </div>
                  ))}
                </div>
              </Col>

              {/* 2. تفاصيل المنتج الديناميكية */}
              <Col lg={5} md={7}>
                <div className="text-success small mb-1 d-flex align-items-center gap-1">
                  <FaCheck size={12} /> In stock
                </div>

                {/* اسم المنتج */}
                <h5 className="fw-bold mb-2 text-dark">{product.name}</h5>

                <div className="d-flex align-items-center gap-2 mb-3 text-secondary small">
                  <div className="d-flex align-items-center text-warning">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-black-50 opacity-25" />
                    <span className="ms-1 fw-bold text-warning">
                      {product.rating || 4.5}
                    </span>
                  </div>
                  <span>•</span>
                  <div className="d-flex align-items-center gap-1">
                    <FaCommentDots /> {product.reviews_count || 0} reviews
                  </div>
                  <span>•</span>
                  <div className="d-flex align-items-center gap-1">
                    <FaShoppingBag /> {product.sold_count || 120} sold
                  </div>
                </div>

                {/* السعر */}
                <div
                  className="p-3 mb-3 rounded d-flex gap-4"
                  style={{ backgroundColor: "#FFF0E5" }}
                >
                  <div>
                    <div className="fw-bold fs-5 text-danger">
                      ${Number(product.price).toFixed(2)}
                    </div>
                    <div className="text-muted small">Standard price</div>
                  </div>
                </div>

                {/* المواصفات والوصف */}
                <div className="small">
                  <Row className="py-2 border-bottom">
                    <Col xs={4} className="text-muted">Description:</Col>
                    <Col xs={8} className="text-dark">
                      {product.description || "No description provided."}
                    </Col>
                  </Row>
                  <Row className="py-2 border-bottom">
                    <Col xs={4} className="text-muted">Category:</Col>
                    <Col xs={8} className="text-dark">
                      {product.category?.name || "General"}
                    </Col>
                  </Row>
                  <Row className="py-2 border-bottom">
                    <Col xs={4} className="text-muted">SKU:</Col>
                    <Col xs={8} className="text-dark">
                      {product.sku || "N/A"}
                    </Col>
                  </Row>
                </div>
              </Col>

              {/* 3. بطاقة المورد */}
              <Col lg={3} className="mt-3 mt-lg-0">
                <div className="border rounded p-3 mb-3">
                  <div className="d-flex align-items-center gap-3 mb-3 border-bottom pb-3">
                    <div
                      className="rounded d-flex align-items-center justify-content-center fw-bold fs-4 text-info"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#C7F6C7",
                      }}
                    >
                      R
                    </div>
                    <div>
                      <div className="text-muted small">Supplier</div>
                      <div className="fw-semibold text-dark small">
                        Guanjoi Trading LLC
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2 text-secondary small mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <span>🇩🇪</span> Germany, Berlin
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <FaShieldAlt className="text-secondary" /> Verified Seller
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <FaGlobe className="text-secondary" /> Worldwide shipping
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2">
                    <Button
                      style={{
                        backgroundColor: "#e94560",
                        borderColor: "#e94560",
                      }}
                      className="w-100 btn-sm fw-medium"
                    >
                      Send inquiry
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="w-100 btn-sm fw-medium text-danger bg-white"
                      style={{ borderColor: "#dee2e6" }}
                    >
                      Seller's profile
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    variant="link"
                    className="text-danger text-decoration-none small d-inline-flex align-items-center gap-1"
                  >
                    <FaHeart /> Save for later
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsCard;