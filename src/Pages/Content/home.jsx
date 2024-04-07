import React,{useEffect, useState} from 'react'
import './assets/home.css'
function home() {
    const [allProduct, setAllProduct]= useState({})

  return (
    < div className='box-container'>
            <div className='box'>
                <div className='box-content'>
                    <h1>Product</h1>
                    <p>100</p>
                </div>
            </div>
            <div className='box'>
                <div className='box-content'>
                    <h1>Product</h1>
                    <p>100</p>
                </div>
            </div>
            <div className='box'>
                <div className='box-content'>
                    <h1>Product</h1>
                    <p>100</p>
                </div>
            </div>
            <div className='box'>
                <div className='box-content'>
                    <h1>Product</h1>
                    <p>100</p>
                </div>
            </div>
    </div>
  )
}

export default home