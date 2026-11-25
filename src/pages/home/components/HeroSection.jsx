import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FaUserCircle } from "react-icons/fa";
import BannerBg from "../../../assets/images/Hero-Banner.svg";
import "../../../App.css";
import { NavLink } from "react-router";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // التحقق من حالة تسجيل الدخول من localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <Container className="my-4 p-0">
      <div className="hero-card-container p-3 bg-white border rounded-3">
        <Row className="g-3">
          {/* العمود الأول: التصنيفات */}
          <Col lg={3} md={4}>
            <ListGroup variant="flush" className="category-list">
              {categories.map((cat, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  className={activeIndex === index ? "active-category" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {cat}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* العمود الثاني: البانر الرئيسي */}
          <Col lg={6} md={8}>
            <div
              className="main-banner p-4 rounded-3 text-dark d-flex flex-column justify-content-center"
              style={{ backgroundImage: `url(${BannerBg})` }}
            >
              <h5 className="fw-normal mb-1">Latest trending</h5>
              <h2 className="fw-bold mb-4">Electronic items</h2>
              <div>
                <Button
                  variant="light"
                  className="px-4 py-2 fw-medium shadow-sm border-0"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </Col>

          {/* العمود الثالث: البطاقات الجانبية */}
          <Col lg={3} md={12}>
            <div className="d-flex flex-column gap-3 h-100">
              {/* التبديل بين بطاقة تسجيل الدخول ورسالة الترحيب */}
              <div className="user-card p-3 rounded-3 bg-primary-subtle">
                {isLoggedIn ? (
                  // واجهة المستخدم المسجّل
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <FaUserCircle
                        size={40}
                        className="text-pink"
                      />
                      <div className="lh-sm">
                        <span className="fw-bold fs-6">Welcome back!</span> <br />
                        <small className="text-muted">Good to see you again</small>
                      </div>
                    </div>
                    <NavLink to={"/profile"}>
                      <Button
                        variant="primary"
                        className="w-100 border-0 bg-pink fw-medium"
                      >
                        My Profile
                      </Button>
                    </NavLink>
                  </div>
                ) : (
                  // واجهة المستخدم غير المسجّل
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <FaUserCircle
                        size={40}
                        className="text-secondary opacity-50"
                      />
                      <div className="lh-sm">
                        Hi, user <br />
                        <small className="text-muted">let's get started</small>
                      </div>
                    </div>
                    <NavLink to={"register"}>
                      <Button
                        variant="primary"
                        className="w-100 mb-2 border-0 bg-pink"
                      >
                        Join now
                      </Button>
                    </NavLink>
                    <NavLink to={"login"}>
                      <Button
                        variant="light"
                        className="w-100 text-pink border-0 fw-medium"
                      >
                        Log in
                      </Button>
                    </NavLink>
                  </div>
                )}
              </div>

              <div className="promo-card bg-orange p-3 rounded-3 text-white">
                <p className="m-0 fs-6">
                  Get US $10 off with a new supplier
                </p>
              </div>

              <div className="promo-card bg-soft-pink p-3 rounded-3 text-white">
                <p className="m-0 fs-6">
                  Send quotes with supplier preferences
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HeroSection;