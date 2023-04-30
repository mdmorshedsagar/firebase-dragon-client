import { Col, Container, Row } from "react-bootstrap";
import Header from "../Pages/Shared/header/header";
import RightNav from "../Pages/Shared/RightNav/RightNav";

import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
    <Header></Header>
      <Container>
        <Row>
          
          <Col lg={9}>
      <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayout;
