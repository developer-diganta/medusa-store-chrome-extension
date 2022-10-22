import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { signin_data_home } from '../../utils/data'
import Account from '../Account/Account'
import Order from '../Orders/Order'

function Home(props) {
    const navigate = useNavigate()
    const [cart, updateCart] = React.useState([])
    const [customer, updateCustomer] = React.useState({})
    const [showMain, updateShowMain] = React.useState(true)
    const [showOptions, updateShowOptions] = React.useState("");
    useEffect(() => {
        props.medusa.auth.getSession()
            .then(({ customer }) => {
                updateCustomer(customer)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const logout = () => {
        props.medusa.auth.getSession()
            .then(({ customer }) => {
            fetch('http://localhost:9000/store/auth', {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `connect.sid=${customer.sid}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    navigate('/index.html')
                }
            );
        });
    }

    const getCart = () => {
        props.medusa.customers.listOrders()
            .then(({ orders }) => {
                updateCart(orders)
                updateShowMain(false)
                updateShowOptions("cart")
                
            })
            .catch((err) => {
                console.log(err)
            })
        
    }

    const showAccount = () => {
        updateShowMain(false)
        updateShowOptions("account")
    }
            

    return (
    <>         
    <div className={`w-full flex flex-col items-center justify-center mt-4`}>
        <div className='w-9/12'>              
            <div className='flex justify-center'>
                <img src={signin_data_home.store_img} alt='store logo' height={100} width={100} />
            </div>
            <div className='flex justify-center'>
                <h1 className='text-3xl font-bold font-header'>{signin_data_home.store_name}</h1>
            </div>
        </div>
                <div className={`${showMain ? 'visible' : 'hidden'} w-full flex flex-col items-center justify-center mt-2`}>  
            <div className='text-lg'>{signin_data_home.store_welcome_message} {customer.first_name} {customer.last_name}</div>
            <div className='grid gap-2 grid-cols-2 text-md'>
                <div className='col-span-1'>                      
                    <button type="button" onClick={getCart} class="w-full flex justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        My Orders
                    </button>
                </div>
                <div className='col-span-1'>                      
                    <button type="button" onClick={showAccount} class="w-full flex justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Edit Account
                    </button>
                </div>
            </div>
                <button onClick={logout} class=" mb-2 mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Log Out
                </button>      
        </div>
    </div>
            <div className={`${!showMain && showOptions==="cart" ? 'visible' : 'hidden'}`}>
                <Order medusa={props.medusa} orders={cart} curr={ customer.currency_code } />
                <div>

                </div>    
            </div>
            <div className={`${!showMain && showOptions === "account" ? "visible" : "hidden"}`}>
                <Account medusa={props.medusa} customer={customer} />
            </div>
    </>
  )
}

export default Home