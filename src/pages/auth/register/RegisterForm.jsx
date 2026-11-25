import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { FiUser, FiMail, FiPhoneCall, FiCamera } from "react-icons/fi";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Data:", formData);
  };

  return (
    <div>
      <h3 className="fw-bold text-body mb-2">Fill your information</h3>
      <p className="text-body-secondary small mb-4">Enter your details</p>

      <Form onSubmit={handleSubmit}>
        

        {/* حقل الاسم Name */}
        <Form.Group className="mb-3 position-relative" controlId="registerName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Name..."
            value={formData.name}
            onChange={handleChange}
            className="py-2 pe-5 shadow-none border-light-subtle rounded-3"
            style={{ height: "48px", backgroundColor: "var(--bs-body-bg)" }}
          />
          <FiUser
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-danger opacity-75"
            size={18}
          />
        </Form.Group>

        {/* حقل البريد الإلكتروني Email */}
        <Form.Group className="mb-3 position-relative" controlId="registerEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="py-2 pe-5 shadow-none border-light-subtle rounded-3"
            style={{ height: "48px", backgroundColor: "var(--bs-body-bg)" }}
          />
          <FiMail
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-danger opacity-75"
            size={18}
          />
        </Form.Group>

        {/* حقل الهاتف Phone */}
        <Form.Group className="mb-4 position-relative" controlId="registerPhone">
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Add number"
            value={formData.phone}
            onChange={handleChange}
            className="py-2 pe-5 shadow-none border-light-subtle rounded-3"
            style={{ height: "48px", backgroundColor: "var(--bs-body-bg)" }}
          />
          <FiPhoneCall
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-danger opacity-75"
            size={18}
          />
        </Form.Group>

        {/* زر الحفظ Save */}
        <Button
          type="submit"
          className="w-100 border-0 fw-medium rounded-3 custom-login-btn"
          style={{
            height: "48px",
            backgroundColor: "#f83b62",
            color: "#ffffff",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;