import { Button } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

const CartButton = ({ onClick }) => {
  return (
    <Button
      variant="white"
      onClick={onClick}
      className="btn-sm border text-danger fw-medium d-flex align-items-center gap-2 shadow-sm px-3 py-1 bg-white"
      style={{ borderColor: "#dee2e6", color: "#e94560" }}
    >
      <FiShoppingCart size={16} style={{ color: "#e94560" }} />
      <span style={{ color: "#e94560", fontSize: "13px" }}>Move to cart</span>
    </Button>
  );
};

export default CartButton;