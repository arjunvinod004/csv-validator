import React from 'react'
import Csv from './Csv'
import Table from 'react-bootstrap/Table';
import { FaPencilAlt,FaTrash,FaArrowDown } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { CSVLink } from 'react-csv'
import { Link, useNavigate } from 'react-router-dom';

const headers=[
{
label:"Name",key:"name"
},
{
  label:"Phoneno", key:"phoneno"
},
{
label:"Address", key:"address"
}
]
const csvLink = {
filename:"file.csv",
headers:headers,
data:Csv
}


function Home() {
const handleEdit=(id,name,value,address)=>{
localStorage.setItem("ID",id);
localStorage.setItem("NAME",name);
localStorage.setItem("PHONENO",value);
localStorage.setItem("ADDRESS",address)
}


  //delete
  const History= useNavigate();
  const handleDelete=(id)=>{
    alert(`Are You Sure You Want To Delete`)
    console.log(Csv.map((item)=>item.id).indexOf(id)); // index of array
    let index=Csv.map((item)=>item.id).indexOf(id)
    console.log(index);
    Csv.splice(index,1)// remove last item of array
    console.log(Csv);
    History('/')
}
return(
    <div>
      <h1 className='text-center mt-5'>CSV Validator</h1>
       <Table striped bordered hover  style={{margin:'60px',border:'2px solid'}}>
      <thead>
        <tr>
          <th> id</th>
          <th>user name</th>
          <th>phone number</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
     {
     Csv && Csv.length>0 ?
    Csv.map((item)=>(
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.value}</td>
      <td>{item.address}</td>
      <td>
        <Link to={'/edit'}>
        <Button className='btn btn-primary' onClick={()=>handleEdit(item.id,item.name,item.phoneno,item.address)}><FaPencilAlt/></Button> 
        </Link>
         <Button  onClick={()=>handleDelete(item.id)}  className='btn btn-danger'><FaTrash/></Button> <Button className='btn btn-success'><CSVLink {...csvLink}>D</CSVLink>  <FaArrowDown/></Button>
       </td>
    </tr>
    ))
   :"no data"
     }
      </tbody>
    </Table>
    </div>
    
  );
}

export default Home
