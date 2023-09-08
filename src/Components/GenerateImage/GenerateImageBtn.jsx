import React from 'react'
import "./GenerateImageBtn.css";
import { useNavigate } from "react-router-dom";

const GenerateImageBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="gen-img-wrapper">
      <i className="gen-img-btn" onClick={() => (navigate("/generate"))}>
        Generate Image Here!
      </i>
    </div>
  )
}

export default GenerateImageBtn;