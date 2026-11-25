import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { FiMail } from "react-icons/fi";

const Subscribe = () => {
  return (
    <div className="w-100 py-5 bg-body-tertiary" >
      <Container className="text-center">
        
        <h4 className="fw-bold fs-4 text-dark mb-2">
          Subscribe on our newsletter
        </h4>
        <p className="text-muted fs-6 mb-4">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        <div className="d-flex justify-content-center">
          <Form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex gap-2"
            style={{ maxWidth: "380px", width: "100%" }}
          >
            <InputGroup>
              <InputGroup.Text className="bg-white border-end-0 text-muted pe-1">
                <FiMail size={18} />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Email"
                className="border-start-0 ps-1 shadow-none"
              />
            </InputGroup>

            <Button
              type="submit"
              className="px-4 border-0 fw-medium text-nowrap"
              style={{ backgroundColor: "#e94560" }}
            >
              Subscribe
            </Button>
          </Form>
        </div>

      </Container>
    </div>
  );
};

export default Subscribe;