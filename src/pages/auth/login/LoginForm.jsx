import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ALLOWED_PHONE = "0955655102"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // 1. التحقق المحلي من صحة الرقم المكتوب
    if (phone.trim() !== ALLOWED_PHONE) {
      setError("رقم الهاتف غير مسموح به. يرجى إدخال الرقم الصحيح.");
      return;
    }

    setLoading(true);

    fetch("https://training.tamkeen-dev.com/tamkeenstore/public/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error occurred");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setLoading(false);
        // 3. التوجيه إلى صفحة التحقق ونقل الرقم مع حالة الصفحات
        navigate("/verify", { state: { phone } });
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
        setError(err);
      });
  };

  return (
    <div>
      <h3 className="fw-bold text-body mb-2">Welcome!</h3>
      <p className="text-body-secondary small mb-4">Please Log in to continue</p>

      {/* رسالة التنبيه بالخطأ في حال عدم تطابق الرقم أو فشل الـ API */}
      {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4 position-relative" controlId="phoneInput">
          <Form.Control
            type="tel"
            placeholder="Add number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="py-2 pe-5 shadow-none border-light-subtle rounded-3"
            style={{ height: "48px", backgroundColor: "var(--bs-body-bg)" }}
            required
          />
          <FiPhoneCall
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-danger opacity-75"
            size={18}
          />
        </Form.Group>

        <Button
          type="submit"
          disabled={loading}
          className="w-100 border-0 fw-medium rounded-3 custom-login-btn"
          style={{
            height: "48px",
            backgroundColor: "#f83b62",
            color: "#ffffff",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {loading ? <Spinner animation="border" size="sm" /> : "Log in"}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;