import { Breadcrumb } from 'react-bootstrap';

const Breadcrumbs = () => {
  return (
    <div className="py-2">
      <div className="container">
        <Breadcrumb className="mb-0 custom-breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Clothings</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Men's wear</Breadcrumb.Item>
          <Breadcrumb.Item active>Summer clothing</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;