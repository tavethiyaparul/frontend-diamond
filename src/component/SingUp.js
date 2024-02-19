import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button, Container, Card } from "react-bootstrap"
import { makeApiCall } from "../common/MakeApicall"
import allCountry from "../common/country.json"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import { errorContainer, formAttr } from "../common/commonfunc"

const SignUp = () => {
    const navigate = useNavigate()

    const submitFormData = async (data) => {
        await makeApiCall("post", "/user/register", data, "raw")
            .then((res) => {
                toast.success("Form submitted successfully")
                navigate("/")
            })
            .catch((error) => {
                console.log("error", error)
            })
    }

    return (
        <Container className="d-flex justify-content-center align-items-center border rounded vh-100 p-2">
            <Card style={{ width: "30rem" }} className=" shadow-lg bg-body rounded gap-2">
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>

                    <Formik
                        enableReinitialize
                        initialValues={{
                            phoneNo: "",
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            countryCode: "",
                            country: "",
                        }}
                        validationSchema={Yup.object({
                            phoneNo: Yup.number().required("Phone No is required"),
                            firstName: Yup.string().required("First Name is required"),
                            lastName: Yup.string().required("Last Name required"),
                            email: Yup.string().required("Email is required"),
                            password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
                            countryCode: Yup.string().required("Country Code is required"),
                            country: Yup.string().required("Country is required"),
                        })}
                        onSubmit={(formData, { resetForm }) => {
                            submitFormData(formData, resetForm)
                        }}
                    >
                        {(runform) => (
                            <Form className="p-5 " onSubmit={runform.handleSubmit}>
                                {/* First Name input */}
                                <Form.Group controlId="formBasicFirstName" className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" name="firstName" {...formAttr(runform, "firstName")} />
                                    {errorContainer(runform, "firstName")}
                                </Form.Group>

                                {/* Last Name input */}
                                <Form.Group controlId="formBasicLastName" className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" name="lastName" {...formAttr(runform, "lastName")} />
                                    {errorContainer(runform, "lastName")}
                                </Form.Group>

                                {/* Email input */}
                                <Form.Group controlId="formBasicEmail" className="mb-3"> 
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" {...formAttr(runform, "email")} />
                                    {errorContainer(runform, "email")}
                                </Form.Group>

                                {/* Phone input */}

                                <Form.Group controlId="formBasicPhone" className="mb-3">
                                    <Form.Label>Phone No</Form.Label>
                                    <div className="d-flex gap-2">
                                        <Form.Control as="select" className="mr-2 w-25" name="countryCode" {...formAttr(runform, "countryCode")}>
                                            {allCountry.map((country, index) => (
                                                <option key={index} value={country.dial_code}>
                                                   {country.dial_code}   {country.name}
                                                </option>
                                            ))}
                                        </Form.Control>
                                        {/* {errorContainer(runform, "countryCode")} */}
                                        <Form.Control type="tel" placeholder="Enter phone" name="phoneNo" {...formAttr(runform, "phoneNo")} />
                                    </div>
                                    {errorContainer(runform, "phoneNo")}
                                </Form.Group>

                                {/* Password input */}
                                <Form.Group controlId="formBasicPassword" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" {...formAttr(runform, "password")} />
                                    {errorContainer(runform, "password")}
                                </Form.Group>

                                {/* Terms and Conditions checkbox */}
                                {/* <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                    <Form.Check type="checkbox" label="I agree to the terms and conditions" name="terms" />
                                </Form.Group> */}

                                {/* Submit button */}
                                <Button  type="submit" className="mt-3 background-primary btn">
                                    Register
                                </Button>

                                {/* Already have an account link */}
                                <div className="text-center mt-3">
                                    <p>
                                        Already have an account? <a href="/login">Login</a>
                                    </p>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SignUp
