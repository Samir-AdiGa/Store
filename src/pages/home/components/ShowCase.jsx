import { Col, Container, Row, Button } from "react-bootstrap";
import ShowCaseDetails from "./ShowCaseDetails";
import MainBanner from "../../../assets/images/Main-Banner-1.svg";

const ShowCase = () => {
  return (
    <Container className="my-4 p-0">
      <div className="bg-white border rounded-3 overflow-hidden">
        <Row className="g-0">
          
          {/* العمود الأيسر: البانر */}
          <Col lg={3} md={4}>
            <div
              className="p-4 h-100 d-flex flex-column justify-content-between text-dark"
              style={{
                backgroundImage: `url(${MainBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "260px",
              }}
            >
              <div>
                <h4 className="fw-bold fs-4 mb-3" style={{ maxWidth: "150px" }}>
                  Home and outdoor
                </h4>
              </div>
              <div>
                <Button
                  variant="light"
                  className="px-3 py-2 fw-medium shadow-sm border-0"
                >
                  Source now
                </Button>
              </div>
            </div>
          </Col>

          {/* العمود الأيمن: شبكة المنتجات قادمة من الـ API */}
          <Col lg={9} md={8}>
            <ShowCaseDetails />
          </Col>

        </Row>
      </div>
    </Container>
  );
};

export default ShowCase;