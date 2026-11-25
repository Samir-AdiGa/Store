const RegionItem = ({ flag, country, domain }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      {/* صورة علم الدولة */}
      <img
        src={flag}
        alt={country}
        style={{ width: "28px", height: "20px", objectFit: "cover" }}
        className="rounded-1 border"
      />
      {/* تفاصيل الاسم والنطاق */}
      <div className="lh-sm">
        <span className="d-block text-dark fw-normal fs-6">{country}</span>
        <small className="text-muted" style={{ fontSize: "0.8rem" }}>
          {domain}
        </small>
      </div>
    </div>
  );
};

export default RegionItem;