import React from 'react'
import Header from '../components/header'
import img from '../assets/img.jpg'

const MainPage = () => {
  return (
    <div>
        <Header/>
        <h1>ლუარსაბ თათქარიძე</h1>
        <img src={img} alt="luarsab" />
    </div>
  )
}

export default MainPage