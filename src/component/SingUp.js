import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button ,Container,Card} from 'react-bootstrap';


const SingUp = () => {
  return (
 <>
  <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '400px' }} className='rounded border border-1 bg-body-tertiary bg-opacity-75'>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>

          <Form>
            {/* Name input */}
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

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

            {/* Confirm Password input */}
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            {/* Terms and Conditions checkbox */}
            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="I agree to the terms and conditions" />
            </Form.Group>

            {/* Submit button */}
            <Button variant="primary" type="submit" block>
              Register
            </Button>

            {/* Already have an account link */}
            <div className="text-center mt-3">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
 </>
  );
};

export default SingUp;
