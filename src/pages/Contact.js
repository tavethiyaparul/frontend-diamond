import React, { useState } from "react"
import { toast } from 'react-toastify'
import { makeApiCall } from "../common/MakeApicall";

const Contact = () => {
   
    const [input, setInput] = useState({
        name: '',
        message: '',
        email: '',
      });

      const inputEvent = (event) => {
        const { name, value } = event.target;
        setInput({
          ...input,
          [name]: value,
        });
    }

    const addContact = async()=>{
        console.log("----",input)
        await makeApiCall('post', '/diamond/contact', input, 'raw')
        .then((res) => {
          toast.success("Form submitted successfully")
        })
        .catch((error) => {
            console.log('error', error)
            toast.success("Invalid value")
        })
    }
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contact Us</h1>
                    <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row py-5">
                    {/* <form className="col-md-9 m-auto" > */}
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label >Name</label>
                                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" onChange={inputEvent} />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label >Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" onChange={inputEvent}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label >Message</label>
                            <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8" onChange={inputEvent}></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button  className="btn btn-success btn-lg px-3" onClick={()=>addContact()}>
                                    Let’s Talk
                                </button>
                            </div>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </>
    )
}

export default Contact
