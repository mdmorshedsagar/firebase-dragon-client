import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/Providers';
const Login = () => {
  const {createLogin} = useContext(AuthContext);
  const navigate= useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || '/category/0';
  const handleLogin =(event)=>{
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password);
    createLogin(email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate(form, {replace: true})
      from.reset()
      console.log(user)
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }
    return (
        <Container>
              <Form onSubmit={handleLogin} className='w-50 mx-auto mt-5 bg-light py-5 px-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger px-5 mb-3" type="submit">
        Login
      </Button>
      <p>If you new,please <strong><Link to='/register'>Register</Link></strong> </p>
    </Form>
        </Container>
    );
};

export default Login;