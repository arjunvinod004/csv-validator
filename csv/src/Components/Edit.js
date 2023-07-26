import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap';
import Csv from './Csv';
import { useNavigate } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
function Edit() {


  const [id,setId]=useState('');
  const[name,setName]=useState('');
  const[phoneno,setPhoneno]=useState("");
   const [address,setAddress]=useState('');

   
   const [value, setValue] = useState();

   if (value && isValidPhoneNumber(value.toString())) {
     console.log("Phone Number Valid");
   } else {
     console.log("Invalid");
   }

  useEffect(()=>{
  setId(localStorage.getItem("ID"));
  setName(localStorage.getItem("NAME"));
  setPhoneno (localStorage.getItem("PHONENO"));
  setAddress(localStorage.getItem("ADDRESS",));
  },[])
  console.log(id);
  console.log(name);
  // value of array of csv
  var index=Csv.map((item)=>item.id).indexOf(id)
  console.log(index);
  //
  let history =useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault()
    console.log(e);// event
    let csvv=Csv[index]
    console.log(csvv); //data
    //update
    csvv.name=name
    csvv.value=value
   console.log(csvv);

    history('/')
  }
  
  

  return (
    <>
    <Row>
    <Col>
              <Form className='border border-4 p-5'>
      <Form.Group className="mb-3" > 
        <h3 className='text-center'>Update your Details</h3>
        <Form.Label>Name</Form.Label>
        <Form.Control  type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName( e.target.value)}  required  />
       <span>must have a-A character</span>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>phone no</Form.Label>
        {/* <Form.Control   type="number"  placeholder="Enter your phone no" value={phoneno}  onChange={(e)=>setPhoneno(e.target.value)} required 
       
        /> */}
        <PhoneInput
       placeholder="Enter phone number"
       value={value}
       onChange={setValue}
     />
        <span>must have indian phone number(+91) {phoneno}</span>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your Designation" value={address} onChange={(e)=>setAddress(e.target.value)} required />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId='formBasicCheckBox' >
        <Form.Check type="checkbox" label="I agree" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
             </Col>
              </Row>
    </>
  )
}

export default Edit
