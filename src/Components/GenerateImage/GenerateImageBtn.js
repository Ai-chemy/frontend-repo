import React from 'react'
import "./GenerateImageBtn.css";
import { useNavigate } from "react-router-dom";

const GenerateImageBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="gen-img-wrapper">
      <button className="gen-img-btn" onClick={() => (navigate("/generate"))}>
        Generate Image Here!
      </button>
    </div>
  )
}

export default GenerateImageBtn;