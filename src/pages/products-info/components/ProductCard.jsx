const ProductCard = ({ image, title, price }) => {
  return (
    <div className="d-flex flex-column h-100">
      {/* حاوية الصورة بخلفية رمادية فاتحة */}
      <div 
        className="rounded p-3 mb-2 d-flex align-items-center justify-content-center bg-light"
        style={{ height: "160px", backgroundColor: "#EEEEEE" }}
      >
        <img 
          src={image} 
          alt={title} 
          className="img-fluid mh-100 object-fit-contain" 
        />
      </div>

      {/* تفاصيل المنتج */}
      <div>
        <h6 
          className="fw-normal text-secondary mb-1 lh-sm" 
          style={{ 
            fontSize: "14px", 
            display: "-webkit-box", 
            WebkitLineClamp: 2, 
            WebkitBoxOrient: "vertical", 
            overflow: "hidden" 
          }}
        >
          {title}
        </h6>
        <span className="text-muted" style={{ fontSize: "13px" }}>
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;