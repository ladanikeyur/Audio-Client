import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { APIheader, API_URL } from '../../service/httpService'

const Dashboard = () => {
    const navigation = useNavigate()
    const [audio,setAudio] = useState([])

    useEffect(()=>{
        getAudio()
    },[])

    const getAudio = () =>{
        var raw = "";
        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
          };  
          fetch(`${API_URL}/allAudio`, requestOptions)
            .then(response => response.json())
            .then(result => setAudio(result))
            .catch(error => console.log('error', error));
    }

    const audioDelete = (id) =>{
        fetch(`${API_URL}/audiodelete`, APIheader('DELETE',{
            id: id
            }))
          .then(response => response.text())
          .then(result => {navigation("/dashboard");getAudio()})
          .catch(error => console.log('error', error));
    }

    return (
      <div className='container'>
        <button className='btn btn-success' onClick={()=>{navigation('/audioUpload')}}>Upload Audio</button>
        <div className='row'>
            {
                audio.map((val,index) =>{
                    return(
                    <div className='col-sm-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img className='Audioimage' src={val.image} />
                                <h1 className='text-center'>{val.name}</h1>
                                <p>{val.Decscription}</p>
                                <div className='btn-group w-100'>
                                    <button className='btn btn-success' onClick={()=>{navigation('/audioPlayer',{state:{Data:val}})}}>Play</button>
                                    <button className='btn btn-primary' onClick={()=>{navigation('/audioUpload',{state:{Data:val}})}}>Edit</button>
                                    <button className='btn btn-danger'  onClick={()=>{audioDelete(val._id)}}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            
        </div>
      </div>
    )
}


export default Dashboard