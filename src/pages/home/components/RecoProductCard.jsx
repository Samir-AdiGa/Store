import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router"; // 1. استيراد useNavigate

const RecoProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate(); // 2. تهيئة الدالة للتنقل

  const {
    id,
    image = "",
    name = "",
    price = 0,
    old_price = null,
    rating = 4.5,
    description = "",
  } = product || {};

  const numericPrice = Number(price) || 0;
  const numericOldPrice = old_price ? Number(old_price) : null;

  // 3. دالة الانتقال لصفحة التفاصيل
  const handleViewDetails = () => {
    if (id) {
      navigate(`/product-details/${id}`);
    }
  };

  return (
    <div className="bg-body p-3 rounded border mb-3 shadow-sm position-relative h-100">
      <div className="d-flex flex-column gap-2 align-items-center h-100 justify-content-between">
        
        {/* زر المفضلة (Heart) */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="btn btn-outline-secondary border-light-subtle bg-body position-absolute top-0 end-0 m-2 p-1 d-flex align-items-center justify-content-center rounded-circle"
          style={{ width: "32px", height: "32px", zIndex: 1 }}
        >
          {isFavorite ? (
            <FaHeart className="text-danger" size={14} />
          ) : (
            <FaRegHeart className="text-danger" size={14} />
          )}
        </button>

        {/* صورة المنتج - قابلة للضغط للتنقل */}
        <div
          className="d-flex align-items-center justify-content-center p-2 w-100"
          style={{ height: "150px", cursor: "pointer" }}
          onClick={handleViewDetails}
        >
          <img
            src={image}
            alt={name}
            className="img-fluid mh-100 object-fit-contain"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="w-100 d-flex flex-column flex-grow-1 justify-content-between">
          <div>
            {/* السعر والسعر القديم */}
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="fw-bold text-body fs-6">
                ${numericPrice.toFixed(2)}
              </span>
              {numericOldPrice && (
                <span className="text-body-secondary text-decoration-line-through extra-small">
                  ${numericOldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* عنوان المنتج - قابل للضغط للتنقل */}
            <h6
              className="fw-medium text-body mb-2 fs-6 text-truncate"
              style={{ cursor: "pointer" }}
              onClick={handleViewDetails}
            >
              {name}
            </h6>

            {/* التقييم */}
            <div className="d-flex align-items-center text-warning gap-1 mb-2 small">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={12}
                  className={
                    index < Math.floor(rating)
                      ? "text-warning"
                      : "text-black-50 opacity-25"
                  }
                />
              ))}
              <span className="ms-1 fw-medium text-secondary small">
                {rating}
              </span>
            </div>

            {/* الوصف */}
            <p
              className="text-body-secondary small mb-2"
              style={{
                fontSize: "0.85rem",
                maxHeight: "38px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              {description || "No description available for this item."}
            </p>
          </div>

          {/* 4. زر View details مفعل للتنقل */}
          <Button
            variant="link"
            onClick={handleViewDetails}
            className="p-0 text-decoration-none fw-medium small text-start mt-2"
            style={{ color: "#0d6efd" }}
          >
            View details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecoProductCard;