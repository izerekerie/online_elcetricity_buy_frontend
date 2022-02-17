
import close from '../assets/close.svg'
import Modal from 'react-modal'
import React,{useState,useRef,useEffect,useCallback} from 'react'
import {  toast } from 'react-toastify';
import Axios from 'axios'
function Homepage() {
const  [FormData,setFormData]=useState(
    {
        meterId:'',
        amount:0,
    }
)

const  [MeterData,setMeterData]=useState(
    {
        meterId:'',
        token:'',
        days:0,
    }
)


const handleSubmit1 = (e) => {
    e.preventDefault()
    console.log(FormData)
    setIsModelOpen1(false)
    toast.success(' You have 10 days remaining !');

}
   
const handleSubmit2 = (e) => {
    e.preventDefault()
    console.log(FormData)
    setIsModelOpen1(false)
    toast.success(' You have 10 days remaining !');

}
const[IsModalOpen1,setIsModelOpen1] =useState(false)
const[IsModalOpen2,setIsModelOpen2] =useState(false)
  return (
      <div id='main'>

<h1 className='text-blue-600 text-center p-8  text-2xl'>Welcome to Smart Electricity</h1>

    <div className='text-lg text-blue-400 flex justify-center p-12 '>
        
        
        <div className='bg-blue-600 h-auto w-1/3'>
        <div className=' my-4 w-full flex justify-center'>
           <button  className=' bg-white text-blue-600 w-11/12 p-2 rounded ' onClick={()=>{setIsModelOpen1(true)}} >Buy Token</button>         
           </div>
           <div className=' my-4 w-full flex justify-center'>
           <button  className=' bg-white text-blue-600 w-11/12 p-2  rounded  disabled:opacity-20' onClick={()=>{setIsModelOpen2(true)}}>Check Days Remaining</button>         
           </div>
        </div>
    
    </div>

    <Modal ariaHideApp={false} id='form1' className="  bg-black shadow-lg flex justify-center h-screen  bg-opacity-60 p-12"  isOpen={IsModalOpen1}>
    <div className="w-full md:w-1/3 p-4 grid grid-cols-1  bg-white">
            <div className="flex justify-end">
            <img className="h-4 w-4" src={close} onClick={()=>{setIsModelOpen1(false)}}  alt="close"/>
            </div>

            <h1 className=' text-center text-xl  font-semibold  text-blue-600'>Buy Token</h1>
           <input type="text"  value={FormData.meterId}  onChange={(e) => setFormData({...FormData, meterId: e.target.value})}className=' border  rounded  h-12 p-2  ' placeholder='Enter  meter Id' />
          <p className='hidden text-red-600 font-sm font-bold p-1"'>Meter number should be 6 characters</p>
         
           <input type="number"  value={FormData.amount} onChange={(e) => setFormData({...FormData, amount: e.target.value})} className=' border  rounded  h-12 p-2 ' placeholder='Enter  amount money' />
           <p className=' hidden text-red-600 font-bold p-1"'>Amount number should be greater than 100 and less than 18500 </p>

           
           <button type='submit' className='active:bg-blue-400  bg-blue-600 text-white h-12 p-2  rounded  disabled:opacity-50' onClick={handleSubmit1}>Send</button>         
           
           {/* <div className=' my-4 w-full p-4'>
             <p>Current Token :<span className='text-blue-600 pl-2 text-lg font-bold'>{CurrentMeter.token}</span></p>
             <p>Remaining Days:<span className='text-blue-600 pl-2 text-lg font-bold'>{CurrentMeter.days} Days</span></p>
           </div> */}
            </div>
        </Modal>
        <Modal ariaHideApp={false} id='form2'  className=" bg-black shadow-lg flex justify-center h-screen  bg-opacity-60 p-12"  isOpen={IsModalOpen2}>
    <div className="w-full md:w-1/3 p-4 grid grid-cols-1  bg-white">
            <div className="flex justify-end">
            <img className="h-4 w-4" src={close} onClick={()=>{setIsModelOpen2(false)}}  alt="close"/>
            </div>

            <h1 className=' text-center text-xl  font-semibold  text-blue-600'>Check Days Left</h1>
           <input type="text" name="meterId"  value={MeterData.meterId}  onChange={(e) => setFormData({...MeterData.meterId, meterId: e.target.value})}className=' border  rounded  h-12 p-2  ' placeholder='Enter meter Id' />
           <p className='hidden text-red-600 font-sm font-bold p-1"'>Meter number should be 6 characters</p>
         
           <input type="number" name="token"  value={MeterData.token} onChange={(e) => setFormData({...MeterData.token, token: e.target.value})} className=' border  rounded  h-12 p-2 ' placeholder='Enter  token money' />
           <p className=' hidden text-red-600 font-bold p-1"'>Token number should be 8 didgits </p>
           
           <button type='submit' className='active:bg-blue-400 bg-blue-600 text-white h-12 p-2  rounded' onClick={handleSubmit2}>Check</button>         
           
           <div className=' my-4 w-full p-4'>
            
             <p>Remaining Days:
                 <span className=' hidden text-blue-600 pl-2 text-lg font-bold'>100 Days</span>
                 <span className=' hidden text-blue-600 pl-2 text-lg font-bold'>0 Days</span></p>
           </div>
            </div>
        </Modal>
    </div>
  )
}

export default Homepage