import { Container, Row, Col } from "react-bootstrap";
import { FaLock, FaCommentAlt, FaTruck } from "react-icons/fa";

const ServiceFeatures = () => {
  const features = [
    {
      id: 1,
      icon: <FaLock className="text-secondary" size={18} />,
      title: "Secure payment",
      subtitle: "Have you ever finally just",
    },
    {
      id: 2,
      icon: <FaCommentAlt className="text-secondary" size={18} />,
      title: "Customer support",
      subtitle: "Have you ever finally just",
    },
    {
      id: 3,
      icon: <FaTruck className="text-secondary" size={18} />,
      title: "Free delivery",
      subtitle: "Have you ever finally just",
    },
  ];

  return (
    <Container className="my-4">
      <Row>
        {features.map((item) => (
          <Col key={item.id} lg={3} md={4} sm={12}>
            <div className="d-flex align-items-center gap-3">
              {/* الدائرة الرمادية المحيطة بالأيقونة */}
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#E0E6ED",
                }}
              >
                {item.icon}
              </div>

              {/* النصوص */}
              <div>
                <h6 className="fw-semibold text-dark mb-0 fs-6">
                  {item.title}
                </h6>
                <span className="text-muted small">
                  {item.subtitle}
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceFeatures;