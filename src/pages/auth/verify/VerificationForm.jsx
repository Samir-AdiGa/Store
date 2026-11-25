import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

const VerificationForm = ({ phoneNumber = "0923423414" }) => {
  const navigate = useNavigate();

  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(55);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (error) setError("");
    if (value.length > 1) value = value.slice(-1);
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 4) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(55);
      setError("");
      setSuccessMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join("");

    if (fullCode === "11111") {
      setError("");
      // 1. إظهار رسالة النجاح
      setSuccessMessage("تم التحقق بنجاح! جاري التوجيه إلى الصفحة الرئيسية...");

      // 2. حفظ حالة تسجيل الدخول
      localStorage.setItem("isLoggedIn", "true");

      // 3. التوجيه بعد ثانية واحدة لرؤية الرسالة
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } else {
      setError("رمز التحقق غير صحيح، يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <div>
      <h3 className="fw-bold text-body mb-2">Verification</h3>
      <p className="text-body-secondary small mb-4">
        Enter the code we send to : {phoneNumber}
      </p>

      {/* رسالة الخطأ */}
      {error && (
        <Alert variant="danger" className="py-2 small text-center">
          {error}
        </Alert>
      )}

      {/* رسالة النجاح */}
      {successMessage && (
        <Alert variant="success" className="py-2 small text-center">
          {successMessage}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between gap-1 gap-sm-2 mb-4">
          {code.map((digit, index) => (
            <Form.Control
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="text-center fw-bold fs-5 shadow-none rounded-3 custom-code-input p-0"
              style={{
                width: "52px",
                height: "56px",
                borderColor: digit ? "#f83b62" : "var(--bs-border-color)",
                backgroundColor: "var(--bs-body-bg)",
              }}
            />
          ))}
        </div>

        <div className="text-center mb-4">
          <p className="text-body-secondary small mb-1">
            Didn’t receive code ?{" "}
            <span className="text-danger fw-semibold">
              00:{timer < 10 ? `0${timer}` : timer}
            </span>
          </p>
          <button
            type="button"
            onClick={handleResend}
            disabled={timer > 0}
            className={`btn btn-link p-0 text-decoration-none small fw-medium ${
              timer > 0 ? "text-secondary opacity-50" : "text-danger"
            }`}
          >
            Resend Code
          </button>
        </div>

        <Button
          type="submit"
          className="w-100 border-0 fw-medium rounded-3 custom-login-btn mb-4"
          style={{
            height: "48px",
            backgroundColor: "#f83b62",
            color: "#ffffff",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Verify
        </Button>

        <div className="d-flex align-items-center mb-4">
          <div className="flex-grow-1 border-bottom"></div>
          <span className="px-3 text-body-tertiary small">OR</span>
          <div className="flex-grow-1 border-bottom"></div>
        </div>

        <Button
          type="button"
          onClick={() => navigate(-1)}
          variant="outline-danger"
          className="w-100 fw-medium rounded-3 custom-outline-btn"
          style={{
            height: "48px",
            borderColor: "#f83b62",
            color: "#f83b62",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Go back
        </Button>
      </Form>
    </div>
  );
};

export default VerificationForm;