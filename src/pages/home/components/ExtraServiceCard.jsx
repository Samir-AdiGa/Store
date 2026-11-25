import { Card } from "react-bootstrap";

const ServiceCard = ({ image, title, icon: Icon }) => {
  return (
    <Card className="h-100 border rounded-3 bg-white overflow-hidden shadow-sm position-relative">
      {/* قسم الصورة العلوي */}
      <div style={{ height: "130px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* الأيقونة الدائرية المتموضعة بين الصورة والنص */}
      <div
        className="position-absolute bg-primary-subtle text-dark rounded-circle d-flex align-items-center justify-content-center border border-2 border-white"
        style={{
          width: "48px",
          height: "48px",
          top: "106px",
          right: "20px",
          zIndex: 2,
          backgroundColor: "#D8E5FE", // اللون الأزرق الفاتح للأيقونة
        }}
      >
        <Icon size={20} className="text-dark" />
      </div>

      {/* محتوى الكارت (العنوان) */}
      <Card.Body className="p-3 pt-4">
        <Card.Title
          className="fw-medium text-dark fs-6 mb-0 pe-4"
          style={{ lineHeight: "1.4" }}
        >
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;