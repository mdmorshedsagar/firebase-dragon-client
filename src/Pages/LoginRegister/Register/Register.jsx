import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/Providers";
const Register = () => {
  const { createRegister } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const photo = from.image.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, photo, email, password);
    createRegister(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        from.reset();
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleAccept =(e) =>{
    setAccept(e.target.checked)
  }
  return (
    <Container>
      <Form
        onSubmit={handleRegister}
        className="w-50 mx-auto mt-5 bg-light py-5 px-3 "
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image url</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder="Enter photo url"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccept}
            type="checkbox"
            name="checkbox"
            label={<>accept <Link to='/accept'>terms and conditions</Link></> }
          />
        </Form.Group>
        <Button variant="danger px-5 mb-3" type="submit" disabled={!accept} >
          Register
        </Button>
        <p>
          If you new,please{" "}
          <strong>
            <Link to="/login">Login</Link>
          </strong>{" "}
        </p>
      </Form>
    </Container>
  );
};

export default Register;
