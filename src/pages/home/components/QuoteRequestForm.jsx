import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FormBanner from "../../../assets/images/Form-Banner.svg";

const QuoteRequestForm = () => {
  return (
    <Container className="my-4 p-0">
      {/* الحاوية الرئيسية مع صورة الخلفية والتدرج الوردي */}
      <div
        className="rounded-3 p-4 p-md-5 text-white overflow-hidden"
        style={{
          background: `url(${FormBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row className="align-items-center g-4">
          
          {/* العمود الأيسر: النصوص التعريفية */}
          <Col lg={6} md={5}>
            <h2 className="fw-bold mb-3 fs-1" style={{ maxWidth: "420px", lineHeight: "1.2" }}>
              An easy way to send requests to all suppliers
            </h2>
            <p className="opacity-75 mb-0 fs-6" style={{ maxWidth: "390px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
            </p>
          </Col>

          {/* العمود الأيمن: نموذج طلب السعر */}
          <Col lg={6} md={7}>
            <div className="bg-white rounded-3 p-4 text-dark shadow-sm ms-auto" style={{ maxWidth: "490px" }}>
              <h5 className="fw-bold mb-3 fs-5">Send quote to suppliers</h5>
              
              <Form>
                {/* حقل اسم المنتج */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="What item you need?"
                    className="py-2"
                  />
                </Form.Group>

                {/* حقل التفاصيل */}
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type more details"
                    style={{ resize: "none" }}
                  />
                </Form.Group>

                {/* حقل الكمية ووحدة القياس */}
                <Row className="g-2 mb-3">
                  <Col sm={7} xs={7}>
                    <Form.Control
                      type="text"
                      placeholder="Quantity"
                      className="py-2"
                    />
                  </Col>
                  <Col sm={5} xs={5}>
                    <Form.Select className="py-2">
                      <option>Pcs</option>
                      <option>Liters</option>
                      <option>Kg</option>
                    </Form.Select>
                  </Col>
                </Row>

                {/* زر الإرسال */}
                <Button variant="danger" className="px-4 py-2 bg-pink border-0 fw-medium">
                  Send inquiry
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </div>
    </Container>
  );
};

export default QuoteRequestForm;
