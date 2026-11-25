const ShowCaseBanner = ({ title, price, image }) => {
  return (
    <div className="p-3 border-end border-bottom h-100 d-flex justify-content-between align-items-start bg-white">
      {/* الجزء الأيسر: النصوص */}
      <div>
        <h6 className="mb-1 fw-normal text-dark fs-6">{title}</h6>
        <small className="text-muted d-block" style={{ fontSize: "0.8rem" }}>
          From
        </small>
        <small className="text-muted" style={{ fontSize: "0.8rem" }}>
          {price}
        </small>
      </div>

      {/* الجزء الأيمن: الصورة */}
      <div className="ms-2 flex-shrink-0" style={{ width: "80px", height: "80px" }}>
        <img
          src={image}
          alt={title}
          className="img-fluid h-100 w-100"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default ShowCaseBanner;