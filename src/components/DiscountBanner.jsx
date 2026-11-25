import { Container, Button } from "react-bootstrap";

const DiscountBanner = () => {
  return (
    <Container className="my-4">
      <style>{`
        .discount-banner {
          background: linear-gradient(110deg, #d84568 60%, #982b48 60.1%);
          border-radius: 8px;
        }

        .shop-now-btn {
          background-color: #ff9017;
          border: none;
          color: #ffffff;
          font-weight: 500;
          padding: 8px 18px;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .shop-now-btn:hover {
          background-color: #e07e0e;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          color: #ffffff;
        }
      `}</style>

      <div className="discount-banner p-4 text-white d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <h5 className="fw-bold mb-1">Super discount on more than 100 USD</h5>
          <p className="mb-0 text-white-50 small">
            Have you ever finally just write dummy info
          </p>
        </div>

        <div>
          <Button className="shop-now-btn">
            Shop now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default DiscountBanner;