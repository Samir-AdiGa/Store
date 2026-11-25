import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

// استيراد الصور الخاصة بك
import Shirt1 from "../../../assets/images/Shirt 1.png";
import Shirt2 from "../../../assets/images/Shirt 2.png";
import Shirt3 from "../../../assets/images/Shirt 3.png";

// 1. مكون التحكم بالكمية (+ / -) المطابق للتصميم
const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div
      className="d-inline-flex align-items-center border rounded bg-white overflow-hidden"
      style={{ borderColor: "#DEE2E6" }}
    >
      <button
        type="button"
        onClick={onDecrease}
        className="btn btn-sm border-0 px-3 py-1 text-secondary fw-bold"
        style={{ backgroundColor: "transparent" }}
      >
        −
      </button>
      <span
        className="px-3 py-1 fw-semibold text-dark border-start border-end d-flex align-items-center justify-content-center"
        style={{ minWidth: "40px", borderColor: "#DEE2E6", fontSize: "14px" }}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="btn btn-sm border-0 px-3 py-1 text-secondary fw-bold"
        style={{ backgroundColor: "transparent" }}
      >
        +
      </button>
    </div>
  );
};

// 2. المكون الرئيسي للسلة
const CartSection = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 78.99,
      quantity: 9,
      image: Shirt1,
    },
    {
      id: 2,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best factory LLC",
      price: 39.0,
      quantity: 3,
      image: Shirt2,
    },
    {
      id: 3,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 170.5,
      quantity: 1,
      image: Shirt3,
    },
  ]);

  // دالة زيادة الكمية
  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // دالة نقصان الكمية
  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // دالة حذف عنصر
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // دالة مسح جميع العناصر
  const handleRemoveAll = () => {
    setCartItems([]);
  };

  // حساب الإجماليات
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = cartItems.length > 0 ? 60.0 : 0.0;
  const tax = cartItems.length > 0 ? 14.0 : 0.0;
  const total = subtotal > 0 ? subtotal - discount + tax : 0;

  return (
    <Container className="my-4">
      <h5 className="fw-bold mb-3 text-dark">My cart ({cartItems.length})</h5>

      <Row className="g-3">
        {/* قسم قائمة المنتجات (الجهة اليسرى) */}
        <Col lg={8}>
          <div className="bg-white p-3 rounded border shadow-sm">
            {cartItems.length === 0 ? (
              <div className="text-center py-5 text-muted">
                Your cart is empty.
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="d-flex gap-3 py-3">
                    {/* صورة المنتج */}
                    <div
                      className="border rounded p-2 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#F7F9FA",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid mh-100 object-fit-contain"
                      />
                    </div>

                    {/* تفاصيل المنتج */}
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <h6
                          className="fw-medium text-dark mb-0 me-2"
                          style={{ fontSize: "15px" }}
                        >
                          {item.title}
                        </h6>
                        <span className="fw-bold text-dark fs-6">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <div
                        className="text-muted small mb-2"
                        style={{ fontSize: "13px" }}
                      >
                        Size: {item.size}, Color: {item.color}, Material:{" "}
                        {item.material}
                        <br />
                        Seller: {item.seller}
                      </div>

                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-2">
                        {/* أزرار الحذف والحفظ */}
                        <div className="d-flex gap-2">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            className="btn-light text-danger border-light-subtle bg-white px-2 py-1"
                            style={{ fontSize: "12px" }}
                            onClick={() => handleRemove(item.id)}
                          >
                            Remove
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            className="btn-light text-danger border-light-subtle bg-white px-2 py-1"
                            style={{ fontSize: "12px" }}
                          >
                            Save for later
                          </Button>
                        </div>

                        {/* التحكم بالكمية المطور (+ / -) */}
                        <QuantitySelector
                          quantity={item.quantity}
                          onIncrease={() => handleIncrease(item.id)}
                          onDecrease={() => handleDecrease(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <hr className="my-0 text-black-50 opacity-10" />}
                </div>
              ))
            )}

            {/* الأزرار التحتية (Back to shop & Remove all) */}
            <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-2">
              <Button
                style={{ backgroundColor: "#e94560", borderColor: "#e94560" }}
                className="d-flex align-items-center gap-2 btn-sm px-3 py-2 fw-medium"
              >
                <FaArrowLeft size={12} /> Back to shop
              </Button>
              {cartItems.length > 0 && (
                <Button
                  variant="outline-danger"
                  className="btn-sm px-3 py-2 fw-medium bg-white"
                  onClick={handleRemoveAll}
                >
                  Remove all
                </Button>
              )}
            </div>
          </div>
        </Col>

        {/* قسم الملخص والخصم (الجهة اليمنى) */}
        <Col lg={4}>
          {/* كارت الكوبون */}
          <div className="bg-white p-3 rounded border shadow-sm mb-3">
            <Form.Label className="text-secondary small mb-2">
              Have a coupon?
            </Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Add coupon"
                className="rounded-end-0 text-muted"
                style={{ fontSize: "14px" }}
              />
              <Button
                variant="outline-danger"
                className="rounded-start-0 border-start-0 text-danger bg-white fw-medium px-3"
                style={{ borderColor: "#dee2e6", fontSize: "14px" }}
              >
                Apply
              </Button>
            </div>
          </div>

          {/* كارت المجموع والإنهاء */}
          <div className="bg-white p-3 rounded border shadow-sm">
            <div className="d-flex justify-content-between mb-2 text-secondary small">
              <span>Subtotal:</span>
              <span className="fw-medium text-dark">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="d-flex justify-content-between mb-2 text-secondary small">
              <span>Discount:</span>
              <span className="text-danger">
                - ${discount.toFixed(2)}
              </span>
            </div>
            <div className="d-flex justify-content-between mb-3 text-secondary small">
              <span>Tax:</span>
              <span className="text-success">
                + ${tax.toFixed(2)}
              </span>
            </div>

            <hr className="my-2" />

            <div className="d-flex justify-content-between align-items-center my-3">
              <span className="fw-bold text-dark">Total:</span>
              <span className="fw-bold fs-5 text-dark">
                ${total.toFixed(2)}
              </span>
            </div>

            <Button
              variant="success"
              className="w-100 py-2 fw-bold mb-3 border-0"
              style={{ backgroundColor: "#00B517" }}
            >
              Checkout
            </Button>

            {/* أيقونات الدفع */}
            <div className="d-flex justify-content-center gap-2 opacity-75">
              <span className="badge bg-light text-dark border">
                American Express
              </span>
              <span className="badge bg-light text-dark border">
                MasterCard
              </span>
              <span className="badge bg-light text-dark border">PayPal</span>
              <span className="badge bg-light text-dark border">VISA</span>
              <span className="badge bg-light text-dark border">Apple Pay</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartSection;