import React from 'react'
import './style.css'

const Home = () => {
    return (
        <div style={{display:'flex',justifyContent:'center', alignItems: 'center', height: '98vh'}}>
            
           <div > <input  className="Username" type="text" placeholder="Username"/></div>
           <div> <input className="Username" type="text" placeholder="Password"/></div>
            <div><button className="Username" >Submit</button></div>

            
        </div>
    )
}
 //
export default Home

