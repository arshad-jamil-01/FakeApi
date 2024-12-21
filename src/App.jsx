import axios from 'axios';
import React, { useState } from 'react'

const App = () => {

 const [getData, setGetData] = useState([]);
 const [cart, setCart] = useState([]); 

 const clickHnadler =async ()=>{
  const response = await axios.get("https://fakestoreapi.com/products")
  setGetData(response.data)
 
  // console.log(response.data)
 };

 const addToCart = (idx) => {
  const copyarr = [...cart, getData[idx]];
  setCart(copyarr)
  console.log("click hop gya")
};

const deleteHandler=(index)=>{
  const copyarr = [...cart]
  copyarr.splice(index,1)
  setCart(copyarr)
};


 const truncate = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + " ...";
  }
  return text;
};

  return (
    <div className='w-full min-h-screen flex bg-gray-200'>
      <div className='w-[70%] min-h-screen bg-gray-300 p-4'>
        <button 
        onClick={clickHnadler}
        className='bg-blue-500 px-[39%] py-2 rounded text-white active:scale-95'>
        GetData
        </button>
       {/* callingdata */}
       <div className='mt-4 flex shrink-0 flex-wrap  '>
      {getData.map((elem,idx)=>{
        return <div  className='   p-2'>
        <div className='w-80 h-[98%] bg-white rounded flex flex-col p-4'>
       <div className="img w-full h-80  rounded ">
      <img className='w-[100%]  h-[100%]  object-center  transition-transform duration-300 ease-in-out hover:scale-105 ' src={elem.image} alt="" /> 
       </div>
          <h1 className='font-semibold mt-4'>{elem.title}</h1>
          {/* <h1 className='border-2 mt-1 p-1 font-normal '>{elem.category}</h1> */}
          <p className='text-gray-500 text-sm mt-1'>{truncate(elem.description, 15)}</p>
          <p className='mt-1'>⭐{elem.rating.rate} . <span className='text-blue-500'>{elem.rating.count} ratings</span></p>
          <h1 className=' text-xl font-bold mt-1'>${elem.price}</h1>
          <button 
          onClick={()=>{
            addToCart(idx)
          }}
          className='bg-blue-500 text-white rounded py-2 mt-4 active:scale-95 font-semibold'>Add to Cart</button>
        </div>
        </div>
      })}
      </div>

      </div>

     

{/* store div */}
      <div className='storediv w-[38%] bg-gray-400 p-5 py-14'>
       {cart.map((elem,index)=>{
        return <div className='bg-white w-full rounded p-2  flex  gap-4 mt-4 '>
       <div className='w-60 h-40 object-cover '>
       <img className='w-[100%] h-[100%]  object-top'  src={elem.image} alt="" />
       </div>
       <div>
       <h1 className='font-semibold'>{elem.title}</h1>
       {/* <h1 className='border-2 mt-1 p-1 font-normal '>{elem.category}</h1> */}
       <p className='text-gray-500 text-sm mt-1'>{truncate(elem.description, 8)}</p>
          <p className='mt-1'>⭐{elem.rating.rate} . <span className='text-blue-500'>{elem.rating.count} ratings</span></p>
          <h1 className=' text-xl font-bold mt-1'>${elem.price}</h1>
       </div>

    {/* delete */}
    <div  className= ' w-[5%]  text-3xl font-light mt-[-10px]'>
          <button onClick={()=>{
            deleteHandler(index)
          }} className=' '>×</button>
         </div>

        </div>
       })}
      
      </div>
    </div>
  )
}

export default App