import { Button, Container } from "react-bootstrap";
import logo from "../../../../public/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";



const Header = () => {
 
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <h4>Journalism Without Fear or Favour</h4>
                <p className="fs-3">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex bg-light p-2">
            <Button variant="danger">Danger</Button>
            <Marquee className="text-danger">
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
            </div>
          
        </Container>
    );
};

export default Header;