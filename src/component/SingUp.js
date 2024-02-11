import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { makeApiCall } from '../common/MakeApicall';
import allCountry from '../common/country.json';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    phoneNo: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    countryCode: '',
    country: '',
  });

  const [errors, setErrors] = useState({
    phoneNo: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    countryCode: '',
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });

    // Basic validation
    switch (name) {
      case 'phoneNo':
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNo: value.length === 0 ? 'Phone number is required' : '',
        }));
        break;
      case 'firstName':
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: value.length === 0 ? 'First name is required' : '',
        }));
        break;
      case 'lastName':
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: value.length === 0 ? 'Last name is required' : '',
        }));
        break;
      case 'email':
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: value.length === 0 ? 'Email is required' : '',
        }));
        break;
      case 'password':
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: value.length < 6 ? 'Password must be at least 6 characters' : '',
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission here, e.g., send data to server
    console.log(input);
    // Validate form fields before submitting
    const formIsValid = Object.values(errors).every((error) => error === '');
    const inputValid = Object.values(input).every((error) => error === '');
    console.log("formIsValid",formIsValid,inputValid,formIsValid )
    if ((formIsValid )) {
      register()
      console.log('Form submitted successfully');
    
    } else {
      toast.error("Plz, Enter valide value")
      console.log('Form contains errors. Please fix them before submitting.');
    }
  };


  const register = async () => {
  console.log("input----",input)

    await makeApiCall('post', '/user/register', input, 'raw')
      .then((res) => {
        toast.success("Form submitted successfully")
        navigate("/")
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '25rem' }} className='rounded border border-1 bg-body-tertiary bg-opacity-75'>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>

          <Form onSubmit={handleSubmit}>
            {/* First Name input */}
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" name="firstName" onChange={inputEvent} />
              <Form.Text className="text-danger">{errors.firstName}</Form.Text>
            </Form.Group>

            {/* Last Name input */}
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" name="lastName" onChange={inputEvent} />
              <Form.Text className="text-danger">{errors.lastName}</Form.Text>
            </Form.Group>

            {/* Email input */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={inputEvent} />
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            </Form.Group>

            {/* Phone input */}
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone No</Form.Label>
              <div className="d-flex">
                <Form.Control as="select" className="mr-2" name="countryCode" onChange={inputEvent}>
                  {allCountry.map((country, index) => (
                    <option key={index} value={country.dial_code}>{country.name} ({country.dial_code})</option>
                  ))}
                </Form.Control>
                <Form.Control type="tel" placeholder="Enter phone" name="phoneNo" onChange={inputEvent} />
              </div>
              <Form.Text className="text-danger">{errors.phoneNo}</Form.Text>
            </Form.Group>

            {/* Password input */}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={inputEvent} />
              <Form.Text className="text-danger">{errors.password}</Form.Text>
            </Form.Group>

            {/* Terms and Conditions checkbox */}
            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="I agree to the terms and conditions" name="terms" onChange={inputEvent} />
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
  );
};

export default SignUp;
