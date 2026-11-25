import CartButton from "../../../components/CartButton";

const SavedProductCard = ({ image, price, title, onMoveToCart }) => {
  return (
    <div className="d-flex flex-column h-100">
      {/* حاوية الصورة بخلفية رمادية */}
      <div
        className="rounded p-3 mb-3 d-flex align-items-center justify-content-center"
        style={{ height: "200px", backgroundColor: "#EEEEEE" }}
      >
        <img
          src={image}
          alt={title}
          className="img-fluid mh-100 object-fit-contain"
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="d-flex flex-column flex-grow-1">
        <h6 className="fw-bold text-dark mb-1" style={{ fontSize: "16px" }}>
          {price}
        </h6>
        <p
          className="text-secondary mb-3 lh-sm"
          style={{
            fontSize: "14px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            height: "36px",
          }}
        >
          {title}
        </p>

        {/* زر النقل إلى السلة */}
        <div className="mt-auto">
          <CartButton onClick={onMoveToCart} />
        </div>
      </div>
    </div>
  );
};

export default SavedProductCard;