import { Container, Row, Col } from "react-bootstrap";
import RegionItem from "./RegionItem";

// استيراد أيقونات الأعلام الخاصة بك
import UAE from "../../../assets/icons/UAE.svg";
import Australia from "../../../assets/icons/Australia.svg";
import USA from "../../../assets/icons/USA.svg";
import Russia from "../../../assets/icons/Russia.svg";
import Italy from "../../../assets/icons/Italy.svg";
import Denmark from "../../../assets/icons/Denmark.svg";
import France from "../../../assets/icons/France.svg";
import China from "../../../assets/icons/China.svg";
import UK from "../../../assets/icons/UK.svg";

const RegionsList = () => {
  // مصفوفة المناطق والموردين
  const regionsList = [
    { id: 1, country: "Arabic Emirates", domain: "shopname.ae", flag: UAE },
    { id: 2, country: "Australia", domain: "shopname.ae", flag: Australia },
    { id: 3, country: "United States", domain: "shopname.ae", flag: USA },
    { id: 4, country: "Russia", domain: "shopname.ru", flag: Russia },
    { id: 5, country: "Italy", domain: "shopname.it", flag: Italy },
    { id: 6, country: "Denmark", domain: "denmark.com.dk", flag: Denmark },
    { id: 7, country: "France", domain: "shopname.com.fr", flag: France },
    { id: 8, country: "Arabic Emirates", domain: "shopname.ae", flag: UAE },
    { id: 9, country: "China", domain: "shopname.ae", flag: China },
    { id: 10, country: "Great Britain", domain: "shopname.co.uk", flag: UK },
  ];

  return (
    <Container className="my-4 p-0">
      {/* عنوان القسم */}
      <h3 className="fw-bold fs-4 mb-3 text-dark">Suppliers by region</h3>

      {/* شبكة توزيع العناصر (5 أعمدة في الشاشات الكبيرة) */}
      <Row className="g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {regionsList.map((region) => (
          <Col key={region.id}>
            <RegionItem
              flag={region.flag}
              country={region.country}
              domain={region.domain}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RegionsList;