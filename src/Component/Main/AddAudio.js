import React, { Component, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { APIheader, API_URL } from '../../service/httpService'
import { NotificationManager} from 'react-notifications';

const AddAudio = () => {
    const [audio,setAudio] = useState("")
    const [audioName,setName] = useState("")
    const [image,setImg] = useState("")
    const [Decscription,setDecscriptio] = useState("")
    const navigation = useNavigate()
    const location = useLocation()
    console.log(location?.state?.Data?._id)
    useEffect(()=>{
        if(location?.state?.Data?._id){
            setAudio(location?.state?.Data?.audio)
            setName(location?.state?.Data?.name)
            setImg(location?.state?.Data?.image)
            setDecscriptio(location?.state?.Data?.Decscription)
        }
    },[])

    const UpdateAudio = () =>{
        if(audio !== "" && audioName !== "" && image !== "" && Decscription !== "" ){
        fetch(`${API_URL}/audioUpdate`, APIheader('PATCH',{
            audio: audio,
            name: audioName,
            image: image,
            Decscription: Decscription,
            id: location?.state?.Data?._id
            }))
        .then(response => response.text())
        .then(result => navigation('/dashboard'))
        .catch(error => console.log('error', error));
        }else{
            NotificationManager.error('Please Enter your Audio Detail', 'Error', 5000, () => {alert('callback');})
        }
    }


    const NewAudio = () =>{
        if(audio !== "" && audioName !== "" && image !== "" && Decscription !== "" ){
            fetch(`${API_URL}/uploadAudio`, APIheader('POST',{
                audio: audio,
              name: audioName,
              image: image,
              Decscription: Decscription
                }))
              .then(response => response.text())
              .then(result => navigation('/dashboard'))
              .catch(error => console.log('error', error));
        }else{
            NotificationManager.error('Please Enter your Audio Detail', 'Error', 5000, () => {alert('callback');})
        }
        
    }

    const setImgFile = (e) =>{
        const file = e.target.files[0]
        const url = URL.createObjectURL(file);
        setImg(url)
    }

    const setAudioFile = (e) =>{
        const file = e.target.files[0]
        const url = URL.createObjectURL(file);
        setAudio(url)
    }

    return (
        <div className='card w-50'>
        <div className='card-body'>
            <h1 className='text-center'>Add Audio</h1>
            <label>Audio:</label>
            <input type="file" className='form-control'  onChange={(e) =>{setAudioFile(e)}} />
            <label>Name:</label>
            <input type="text" className='form-control mb-5' value={audioName} onChange={(e) =>{setName(e.target.value)}} />
            <label>Image:</label>
            <input type="file" className='form-control mb-5' onChange={(e) =>{setImgFile(e)}} />
            <label>Decscription:</label>
            <input type="text" className='form-control mb-5' value={Decscription} onChange={(e) =>{setDecscriptio(e.target.value)}} />
            <button className='btn btn-primary m-auto d-block' onClick={location?.state?.Data?._id ? () =>{UpdateAudio()}:() =>{NewAudio()}}>Submit</button>
        </div>
      </div>
    )
}


export default AddAudio