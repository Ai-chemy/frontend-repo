import React from 'react'
import './ShowImage.css';
import { useNavigate } from "react-router-dom";

const ShowImageBtn = () => {
    const navigate = useNavigate();
    const goShowImages = () => {
        navigate("/show");
    }
    return (
        <i className='ShowImageBtn' onClick={goShowImages}>My Images</i>
    )
}
export default ShowImageBtn;