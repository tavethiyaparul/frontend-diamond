import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeApiCall } from '../common/MakeApicall';
import { toast } from 'react-toastify'
import axios from "axios"

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  // https://www.diyamimpex.com/  https://www.argodiam.com/

  const login = async () => {
    const data = {
      fieldsName: { email: email },
      password: password
    }

  // const log= await axios.post("http://localhost:8000/api/user/login",data,{
  //     withCredentials: true
  //   })

    // console.log("logine",log)

    await makeApiCall('post', '/user/login', data, 'raw')
      .then((res) => {
        console.log("res",res)
         navigate("/")
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 p-2 bg-ligh">
      <Card style={{ width: '25rem' }} >
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>

          <Form>
            {/* Email input */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            {/* Password input */}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            {/* Remember me checkbox */}
            {/* <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group> */}

            {/* Submit button */}
            <Button variant="primary" type="button" block onClick={() => {
              if (!email && !password) {
               toast.error("plz Enter password and email or phone No")
              } else {
                login()
              }
            }
            }>
              Login
            </Button>

            {/* Forgot password link */}
            {/* <div className="text-center mt-3">
            <a href="#!">Forgot password?</a>
          </div> */}

            {/* Register link */}
            <div className="text-center mt-3">
              <p>
                Don't have an account?
                <a href="/signup">Register</a>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
