import React, { Component, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APIheader, API_URL } from '../../service/httpService'
import { NotificationManager} from 'react-notifications';

const RagistorForm = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigation = useNavigate()

    const UserRagistor = () =>{
        if(email !== "" && password !== ""){
        fetch(`${API_URL}/ragistor`, APIheader('POST',{
            email: email,
            password: password
            })).then(response => response.json())
        .then(result => navigation('/'))
        .catch(error => console.log('error', error));
        }else{
            NotificationManager.error('Please Enter your UserName/Password', 'Error', 5000, () => {alert('callback');})
        }
    }

    return (
      <div className='card w-50'>
        <div className='card-body'>
            <h1 className='text-center'>Ragistor</h1>
            <label>UserName:</label>
            <input type="text" className='form-control' onChange={(e) =>{setEmail(e.target.value)}} />
            <label>password:</label>
            <input type="password" className='form-control mb-5' onChange={(e) =>{setPassword(e.target.value)}} />
            <Link to="/" className='text-center'>User Login</Link>
            <button className='btn btn-primary m-auto d-block' onClick={() =>{UserRagistor()}}>Ragistor</button>
        </div>
      </div>
    )
}


export default RagistorForm