import React from 'react';
import { Form, Button ,Container,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  // https://www.diyamimpex.com/  https://www.argodiam.com/
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <Card style={{ width: '400px'}}>
      <Card.Body>
        <h2 className="text-center mb-4">Login</h2>

        <Form>
          {/* Email input */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          {/* Password input */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {/* Remember me checkbox */}
          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          {/* Submit button */}
          <Button variant="primary" type="submit" block>
            Login
          </Button>

          {/* Forgot password link */}
          <div className="text-center mt-3">
            <a href="#!">Forgot password?</a>
          </div>

          {/* Register link */}
          <div className="text-center mt-3">
            <p>
              Don't have an account? 
              <Link to="/signup" className="nav-link">
              Register
              </Link>
            </p>
          </div>
        </Form>
      </Card.Body>
    </Card>
  </Container>
  );
};

export default Login;
