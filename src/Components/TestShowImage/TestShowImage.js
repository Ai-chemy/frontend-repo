import React, { useState } from "react";
import {useEffect} from "react";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMDQ5NDA2LCJpYXQiOjE2OTEwNDg3NjYsImp0aSI6IjI5YWU4ZDliNzJhNzRiNDU4MzA3Y2MyMmQzZTkxMDVmIiwidXNlcl9pZCI6MX0.Ic4P8FNLp8dpi9TTkwseo0fkubaiCxlI9qj5_xWx2NU"
/*const getImg = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/getimg/', 
    {method:"POST", headers:{"Authorization":{token}}})
    .then((res) => {console.log(res)})
}*/

const getImgAddress = await fetch("http://127.0.0.1:8000/api/getimg/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token,
            }
        }).then(res => res.json())
        .then(res => {
            return res
        })


async function fetchImg(url){ 
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin":"http://localhost:3000/test/",
            "Content-type": "application/json",
            "Authorization": "brandi.token",
        }
    })
    return response
}

const TestShowImage = () => {
    const [testImg, setTestImg] = useState();
    let imgUrl = ""
    //이미지 주소가져오기

    useEffect(() =>{
        let Images = getImgAddress
        const listItems = Images['address'].map((image, idx) => {  
            imgUrl = Object.values(image)[0]
        });

        //주소에서 이미지 가져오기
        fetchImg(imgUrl)
        //console.log(fetchImg(imgUrl))
        //setTestImg(fetchImg(imgUrl))

    });

    return(
        <div>
            <div>This is test page</div>
            <img src={testImg}></img>
        </div>
    )
}

export default TestShowImage;