import React from 'react'

const CardItem = ({item}) => {
    const { name, budget_name, card_type, expiry, limit, status,spent:{value,currency}, available_to_spend:{val,curr}} = item;
  return (
    <div className="flex ">

    <div className="bg-white rounded-lg shadow-md p-6 mb-4  " >
         <div className="flex items-center justify-between mb-4">
          <div className="bio">
           <div className="text-2xl font-bold">{name}</div>
           <span className='text-xl font-semibold'>Memberfive</span>
           <span className='text-xl font-semibold'>.Budget</span>
             
          </div>
           <div className="text-sm font-semibold capitalize">{card_type}</div>
         </div>
           <div className="text-gray-500 mb-2">
           <span className="font-bold">Budget Name:</span> {budget_name}
         </div> 
       <div className="middelBio flex justify-around">
        <div className="amount">
          <div className="amount">AMOUNT</div>
          <div className="amount">300 SGD</div>
        </div>
        <div className="Frequency">
          <div className="Frequency">FREQUENCY</div>
          <div className="Frequency">MONTHLY</div>
        </div>
        <div className="amount">
          <div className="amount">EXPIRY</div>
          <div className="amount">{expiry}</div>
        </div>
       </div>
                
              <div className="spent flex justify-between">
           <span className='font-bold text-lg'>Spent</span>
           <div className='flex'>
           <div className="text-xl ">{value}</div>
           <div className="text-xl">{currency}</div>
           </div>
           </div>       
           {/* available section */}
          <div className="available flex justify-between">

           <span className='font-bold text-lg '>Available</span>
           <div className="flex">
         <div className="available text-xl">{val}</div>
         <div className="available text-xl">{curr}</div>
           </div>
          </div>
          <span className="font-bold">Limit:</span> {limit}
  
        <div className="text-gray-500 mb-2">
          <span className="font-bold">Status:</span> {status}
        </div>
             </div>
      </div>
  )
}

export default CardItem

