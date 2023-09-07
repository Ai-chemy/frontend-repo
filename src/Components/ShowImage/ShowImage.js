import React from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const ShowImage = () => {
  const { tokens } = useContext(AuthContext);

  //사용자의 ID에 해당하는 이미지 주소들 가져오기
  const getImgAddress = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/getimgaddress/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + tokens.access,
      },
    })

    const data = await response.json()
    return data
  }

  //이미지 주소에서 이미지 데이터 가져오기
  const getImgData = async (imgAddress) => {
    const response = await fetch("http://127.0.0.1:8000/api/getimgdata/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + tokens.access,
      },
      body: JSON.stringify({
        "url": imgAddress
      })
    })
    const data = await response.blob()
    return data
  }

  //사용자의 이미지 주소들을 순회하며 이미지 태그 생성
  useEffect(() => {
    getImgAddress().then(imageAddresses => {
      //사용자 이미지 주소 순회
      for (let index = 0; index < imageAddresses['address'].length; index++) {
        //현재 보고있는 사용자의 이미지 주소 = currentImgAddress
        const currentImgAddress = Object.values(imageAddresses['address'][index])[0]
        //이미지 데이터 가져와서 이미지 태그 생성
        getImgData(currentImgAddress).then(imageData => {
          const imageUrl = URL.createObjectURL(imageData)
          const imgTag = document.createElement('img')
          //태그 속성추가
          imgTag.setAttribute('src', imageUrl)
          imgTag.setAttribute('className', "TestImage")
          //Container 자식으로 append
          try{
            document.getElementById("imgContainer").appendChild(imgTag)
          }
          catch(error){
            console.log("image loading failed")
          }
        })
      }
    })
  }, [])

  return (
    <div>
      <div id="imgContainer" className="ImageContainer"></div>
    </div>
  );
};

export default ShowImage;
