import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import currency_symbols from '../../utils/currency'
import formatAddress from '../../utils/formatAddress'
function OrderItems(props) {
  console.log(props)
  const [showReturn, updateShowReturn] = React.useState(false)
  useEffect(() => {
    if (showReturn) {
      setTimeout(() => {
        updateShowReturn(false)
      }
        , 5000)
    }
  }, [showReturn])
  const returnProduct = (item) => {

    props.medusa.returns.create({
    order_id:item.order_id,
    items: [
      {
        item_id:item.id,
        quantity: item.quantity
      }
    ]
  })
  .then(( returned ) => {
    updateShowReturn(true)
  })
    .catch((err) => {
      console.log(err)
    });
  }
  return (
    <div className='flex h-screen w-full flex-col items-center font-header'>
      {/* display this page in center of page */}
      <div className={`${showReturn ? 'flex' : 'hidden'} h-screen w-screen flex items-center justify-center absolute`}>
        <div className='bg-orange-700'>
          Return Request Placed! Go to your account on the website to track your return.
        </div>
      </div>
      {props.items.map((item) => (
        <div className='rounded-b-md border-slate-700 border-2 p-4 w-10/12'>
          <div className='font-header text-center flex items-middle justify-center '>
            <div>
              <p>{item.title}</p>
              <img src={item.thumbnail} className=" mx-auto" height="100" width="80" alt={item.title} />
              <p>{item.description}</p>
              <p>Qty: {item.quantity}</p>
              <p>Date: {new Date(props.items[0]?.created_at).toLocaleDateString()}</p>
              <p>Price(1N): {currency_symbols[props.details.currency.toUpperCase()]}{(item.unit_price/100).toFixed(2)}</p>
              <button onClick={() => returnProduct(item)} type="button" class="w-full flex justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">Return</button>
            </div>
          </div>
        </div>
      ))}
      <div className='w-10/12 mt-4 text-lg flex justify-center items-center mx-auto'>
        {props.details.shipping ? `
          Shipping To 🚚: ${formatAddress(props.details.shipping)}
        `: ''}
      </div>
      <Link to="/index.html">
        <button type="button" class="w-full flex justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
          ⬅ Back
        </button>
      </Link>
    </div>
  )
}

export default OrderItems