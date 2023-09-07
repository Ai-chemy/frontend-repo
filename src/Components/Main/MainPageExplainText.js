import React from "react";
import { forwardRef } from 'react';

const MainPageExplainText = (props, ref) => {
    const goDown=  () => {
        console.log("clicked")
        ref.current.scrollIntoView({behavior: 'smooth'})   
    }

    return(
        <div className='ExplainBox'>
            <div className='ExplainText' onClick={goDown}>What is this website?</div>
        </div>
    )
}

export default forwardRef(MainPageExplainText);