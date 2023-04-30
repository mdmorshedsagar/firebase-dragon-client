import { Col, Container, Row } from "react-bootstrap";
import Header from "../Pages/Shared/header/header";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";
import Navigationbar from "../Pages/Shared/Navigationbar/Navigationbar";

const Main = () => {
  return (
    <div>
    <Header></Header>
    <Navigationbar></Navigationbar>
      <Container>
        <Row>
          <Col lg={3}>
           <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
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

export default Main;
