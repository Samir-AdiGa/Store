import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import Logo from "../assets/icons/Logo.svg";
import AppStoreBtn from "../assets/icons/App-Store.svg";
import GooglePlayBtn from "../assets/icons/Google-Play.svg";
import USAFlag from "../assets/icons/USA.svg";
import UAEFlag from "../assets/icons/UAE.svg";

const Footer = () => {
  return (
    <footer className="bg-body text-body-secondary border-top">
      <div className="py-5">
        <Container>
          <Row className="g-4">
            
            <Col lg={3} md={6}>
              <div className="mb-3">
                <NavLink to="/">
                  <img src={Logo} alt="Brand Logo" style={{ height: "42px" }} />
                </NavLink>
              </div>
              <p className="text-body-secondary small mb-3" style={{ maxWidth: "260px" }}>
                Best information about the company gies here but now lorem ipsum is
              </p>

              <div className="d-flex gap-2">
                {[
                  { icon: FaFacebook, path: "#" },
                  { icon: FaXTwitter, path: "#" },
                  { icon: FaLinkedin, path: "#" },
                  { icon: FaInstagram, path: "#" },
                  { icon: FaYoutube, path: "#" },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <NavLink
                      key={index}
                      to={social.path}
                      className="rounded-circle bg-body-secondary text-body-secondary d-flex align-items-center justify-content-center text-decoration-none border"
                      style={{ width: "32px", height: "32px", fontSize: "14px" }}
                    >
                      <IconComponent />
                    </NavLink>
                  );
                })}
              </div>
            </Col>

            <Col lg={2} md={3} sm={6} className="col-6">
              <h6 className="fw-bold text-body mb-3">About</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
                <li><NavLink to="/about" className="text-body-secondary text-decoration-none">About Us</NavLink></li>
                <li><NavLink to="/stores" className="text-body-secondary text-decoration-none">Find store</NavLink></li>
                <li><NavLink to="/categories" className="text-body-secondary text-decoration-none">Categories</NavLink></li>
                <li><NavLink to="/blogs" className="text-body-secondary text-decoration-none">Blogs</NavLink></li>
              </ul>
            </Col>

            <Col lg={2} md={3} sm={6} className="col-6">
              <h6 className="fw-bold text-body mb-3">Partnership</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
                <li><NavLink to="/about" className="text-body-secondary text-decoration-none">About Us</NavLink></li>
                <li><NavLink to="/stores" className="text-body-secondary text-decoration-none">Find store</NavLink></li>
                <li><NavLink to="/categories" className="text-body-secondary text-decoration-none">Categories</NavLink></li>
                <li><NavLink to="/blogs" className="text-body-secondary text-decoration-none">Blogs</NavLink></li>
              </ul>
            </Col>

            <Col lg={2} md={3} sm={6} className="col-6">
              <h6 className="fw-bold text-body mb-3">Information</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
                <li><NavLink to="/help" className="text-body-secondary text-decoration-none">Help Center</NavLink></li>
                <li><NavLink to="/refund" className="text-body-secondary text-decoration-none">Money Refund</NavLink></li>
                <li><NavLink to="/shipping" className="text-body-secondary text-decoration-none">Shipping</NavLink></li>
                <li><NavLink to="/contact" className="text-body-secondary text-decoration-none">Contact us</NavLink></li>
              </ul>
            </Col>

            <Col lg={1} md={3} sm={6} className="col-6">
              <h6 className="fw-bold text-body mb-3">For users</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
                <li><NavLink to="/login" className="text-body-secondary text-decoration-none">Login</NavLink></li>
                <li><NavLink to="/register" className="text-body-secondary text-decoration-none">Register</NavLink></li>
                <li><NavLink to="/settings" className="text-body-secondary text-decoration-none">Settings</NavLink></li>
                <li><NavLink to="/orders" className="text-body-secondary text-decoration-none">My Orders</NavLink></li>
              </ul>
            </Col>

            <Col lg={2} md={4}>
              <h6 className="fw-bold text-body mb-3">Get app</h6>
              <div className="d-flex flex-column gap-2">
                <NavLink to="#">
                  <img src={AppStoreBtn} alt="App Store" style={{ height: "40px" }} />
                </NavLink>
                <NavLink to="#">
                  <img src={GooglePlayBtn} alt="Google Play" style={{ height: "40px" }} />
                </NavLink>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <div className="py-3 bg-body-tertiary border-top">
        <Container className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          
          <span className="text-body-secondary small">
            © {new Date().getFullYear()} Ecommerce.
          </span>

          <Dropdown drop="up">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-language"
              className="text-body-secondary text-decoration-none p-0 d-flex align-items-center gap-2 border-0 shadow-none small"
            >
              <img src={USAFlag} alt="USA Flag" style={{ width: "20px", height: "14px" }} />
              English
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">
                <img src={USAFlag} alt="English" className="me-2" style={{ width: "18px" }} />
                English
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <img src={UAEFlag} alt="Arabic" className="me-2" style={{ width: "18px" }} />
                Arabic
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Container>
      </div>
    </footer>
  );
};

export default Footer;