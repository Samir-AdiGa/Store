import { useState } from "react";
import { Container, Row, Col, Nav, Table } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

// قم باستيراد صور المنتجات المقترحة هنا أو استبدلها بمسارات الصور لديك
import Shirt1 from "../../../assets/images/Shirt 1.png";
import Shirt2 from "../../../assets/images/Shirt 2.png";
import Shirt3 from "../../../assets/images/Shirt 3.png";
import Shirt4 from "../../../assets/images/Shirt 4.png";
import Shirt5 from "../../../assets/images/Shirt 5.png";

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  // بيانات المنتجات المقترحة (You may like)
  const relatedProducts = [
    { id: 1, title: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", image: Shirt1 },
    { id: 2, title: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", image: Shirt2 },
    { id: 3, title: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", image: Shirt3 },
    { id: 4, title: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", image: Shirt4 },
    { id: 5, title: "New Summer Men's castrol T-Shirts", price: "$7.00 - $99.50", image: Shirt5 },
  ];

  return (
    <Container className="my-4">
      {/* ستايل مخصص للتبويبات والتجاوب */}
      <style>{`
        .custom-tabs .nav-link {
          color: #8b96a5;
          font-weight: 500;
          border: none;
          border-bottom: 2px solid transparent;
          padding-bottom: 10px;
          cursor: pointer;
        }
        .custom-tabs .nav-link.active {
          color: #e94560 !important;
          background: transparent !important;
          border-bottom: 2px solid #e94560 !important;
        }
        .custom-tabs .nav-link:hover {
          color: #e94560;
        }
        .specs-table td {
          padding: 8px 12px;
          color: #505050;
          font-size: 14px;
        }
        .specs-table td:first-child {
          color: #8b96a5;
          width: 30%;
          background-color: #f7f9fa;
        }
      `}</style>

      <Row>
        {/* 1. قسم التبويبات والمحتوى الأيسر */}
        <Col lg={9} className="mb-4 mb-lg-0">
          <div className="bg-white p-4 rounded border shadow-sm">
            {/* أزرار التبويب (Tabs Navigation) */}
            <Nav
              variant="tabs"
              className="custom-tabs border-bottom mb-4 gap-4"
              activeKey={activeTab}
              onSelect={(selectedKey) => setActiveTab(selectedKey)}
            >
              <Nav.Item>
                <Nav.Link eventKey="description">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reviews">Reviews</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="shipping">Shipping</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seller">About seller</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* محتوى التبويبات المتغير (Tab Content) */}
            {activeTab === "description" && (
              <div>
                <p className="text-secondary lh-base mb-4" style={{ fontSize: "14px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                {/* جدول المواصفات */}
                <Table bordered responsive className="specs-table mb-4 w-75">
                  <tbody>
                    <tr>
                      <td>Model</td>
                      <td>#8786867</td>
                    </tr>
                    <tr>
                      <td>Style</td>
                      <td>Classic style</td>
                    </tr>
                    <tr>
                      <td>Certificate</td>
                      <td>ISO-898921212</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>34mm x 450mm x 19mm</td>
                    </tr>
                    <tr>
                      <td>Memory</td>
                      <td>36GB RAM</td>
                    </tr>
                  </tbody>
                </Table>

                {/* قائمة الميزات */}
                <div className="d-flex flex-column gap-2 text-secondary" style={{ fontSize: "14px" }}>
                  <div className="d-flex align-items-center gap-2">
                    <FaCheck className="text-secondary" size={12} /> Some great feature name here
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaCheck className="text-secondary" size={12} /> Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaCheck className="text-secondary" size={12} /> Duis aute irure dolor in reprehenderit
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaCheck className="text-secondary" size={12} /> Some great feature name here
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="py-3 text-secondary">
                <h6 className="fw-bold text-dark mb-3">Customer Reviews (32)</h6>
                <p style={{ fontSize: "14px" }}>
                  ⭐⭐⭐⭐⭐ <strong>Great Quality!</strong> - "The cotton material is super soft and high quality. Exactly as described!"
                </p>
                <p style={{ fontSize: "14px" }}>
                  ⭐⭐⭐⭐☆ <strong>Fast Shipping</strong> - "Arrived in 3 days. Very satisfied with the seller's service."
                </p>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="py-3 text-secondary" style={{ fontSize: "14px" }}>
                <h6 className="fw-bold text-dark mb-3">Shipping & Delivery Info</h6>
                <p>• <strong>Free Shipping:</strong> On orders over $100.</p>
                <p>• <strong>Delivery Time:</strong> 3 - 5 business days worldwide.</p>
                <p>• <strong>Returns:</strong> 30-day money-back guarantee.</p>
              </div>
            )}

            {activeTab === "seller" && (
              <div className="py-3 text-secondary" style={{ fontSize: "14px" }}>
                <h6 className="fw-bold text-dark mb-2">Guanjoi Trading LLC</h6>
                <p>Verified supplier based in Berlin, Germany. Specializing in high-end apparel and electronics since 2018.</p>
              </div>
            )}
          </div>
        </Col>

        {/* 2. بطاقة المنتجات المقترحة (You may like) */}
        <Col lg={3}>
          <div className="bg-white p-3 rounded border shadow-sm">
            <h6 className="fw-bold mb-3 text-dark">You may like</h6>
            <div className="d-flex flex-column gap-3">
              {relatedProducts.map((product) => (
                <div key={product.id} className="d-flex align-items-center gap-3 cursor-pointer">
                  <div
                    className="border rounded p-1 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "65px", height: "65px" }}
                  >
                    <img src={product.image} alt={product.title} className="img-fluid mh-100" />
                  </div>
                  <div>
                    <div
                      className="fw-medium text-dark lh-sm mb-1"
                      style={{
                        fontSize: "13px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {product.title}
                    </div>
                    <div className="text-muted" style={{ fontSize: "12px" }}>
                      {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsTabs;