import React from 'react'
import OrderItems from '../OrderItems/OrderItems';

function Order(props) {
    const [individualOrder, updateIndividualOrder] = React.useState([])
    const [otherDetails, updateOtherDetails] = React.useState({})
    const handleClick = (e) => {
        updateIndividualOrder([...e.items])
        const details = {
            currency: e.currency_code,
            shipping: e.shipping_address,
            total: e.total,
        }
        updateOtherDetails(details)
    }
  return (
    <>
          <div className={`${individualOrder.length?'hidden':'visible'} flex flex-col justify-center items-center`}>
              <h1 className='text-2xl font-bold font-header'>Your Orders</h1>
                  <div className='justify-center items-center grid gap-2 grid-cols-2'>
                  {props.orders.map((order) =>
                        <div className='col-span-2'>                      
                            <button onClick={() => handleClick(order)} type="button" class="w-full flex justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                </svg>
                                {order.id.substring(0,11)}...
                            </button>
                        </div>
                    )}
                  </div>
            </div>
        <div className={`${individualOrder.length?'visible':'hidden'}`}>
              <OrderItems medusa={props.medusa} items={individualOrder} details={otherDetails} />
        </div>
    </>
  )
}

export default Order