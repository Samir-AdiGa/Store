const DealsCard = ({ image, title, discount }) => {
  return (
    <div className="text-center p-3 h-100 border-start d-flex flex-column align-items-center justify-content-between">
      <div className="my-auto">
        <img src={image} alt={title} style={{ maxHeight: "130px", objectFit: "contain" }} className="img-fluid" />
      </div>
      <div className="mt-2">
        <h6 className="mb-2 fs-6 text-dark fw-normal">{title}</h6>
        <span className="badge rounded-pill bg-danger-subtle text-danger px-3 py-2 fw-bold">
          {discount}
        </span>
      </div>
    </div>
  );
};

export default DealsCard;