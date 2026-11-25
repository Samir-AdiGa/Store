import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ExtraServiceCard";

// استيراد أيقونات react-icons/fi (أو أي مكتبة أخرى)
import { FiSearch, FiBox, FiSend, FiShield } from "react-icons/fi";

// استيراد الصور الخاصة بك
import HubsImg from "../../../assets/images/Banner-1.svg";
import CustomizeImg from "../../../assets/images/Banner-2.svg";
import ShippingImg from "../../../assets/images/Banner-3.svg";
import MonitoringImg from "../../../assets/images/Banner-4.svg";

const ExtraServices = () => {
  // مصفوفة الخدمات
  const services = [
    {
      id: 1,
      title: "Source from Industry Hubs",
      image: HubsImg,
      icon: FiSearch,
    },
    {
      id: 2,
      title: "Customize Your Products",
      image: CustomizeImg,
      icon: FiBox,
    },
    {
      id: 3,
      title: "Fast, reliable shipping by ocean or air",
      image: ShippingImg,
      icon: FiSend,
    },
    {
      id: 4,
      title: "Product monitoring and inspection",
      image: MonitoringImg,
      icon: FiShield,
    },
  ];

  return (
    <Container className="my-4 p-0">
      {/* عنوان القسم */}
      <h3 className="fw-bold fs-4 mb-3 text-dark">Our extra services</h3>

      {/* شبكة الكروت (4 كروت) */}
      <Row className="g-3 row-cols-1 row-cols-sm-2 row-cols-lg-4">
        {services.map((service) => (
          <Col key={service.id}>
            <ServiceCard
              title={service.title}
              image={service.image}
              icon={service.icon}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExtraServices;