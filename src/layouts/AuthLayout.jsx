import { Row, Col } from "react-bootstrap";
import Logo from "../assets/images/LOGO.svg";
import BgImg from "../assets/images/BG-img.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="container-fluid p-0 vh-100 overflow-hidden">
      <Row className="g-0 h-100">
        {/* القسم الأيسر الثابت (50% من العرض) */}
        <Col
          lg={6}
          className="d-none d-lg-flex flex-column justify-content-center align-items-center text-white text-center p-5 position-relative h-100"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 10, 10, 0.65), rgba(30, 10, 10, 0.65)), url(${BgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ maxWidth: "420px" }}>
            <img
              src={Logo}
              alt="Borcelle Logo"
              className="mb-4"
              style={{ width: "210px" }}
            />
            <h2 className="fw-semibold mb-3 fs-1">Let’s get started</h2>
            <p className="fs-6 lh-lg text-white-50 m-0">
              Where opportunities meet simplicity! <br />
              Whether you’re here to fill out your cart <br />
              or to check irresistible offers.
            </p>
          </div>
        </Col>

        {/* القسم الأيمن القابل للتغيير (50% من العرض) */}
        <Col
          xs={12}
          lg={6}
          className="d-flex justify-content-center align-items-center bg-body p-4 p-sm-5 h-100 overflow-y-auto"
        >
          <div style={{ width: "100%", maxWidth: "400px" }}>{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;