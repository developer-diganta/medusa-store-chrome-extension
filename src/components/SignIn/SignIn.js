import React, { useEffect } from 'react'
import { unsigned_welcome_page } from '../../utils/data.js'
import { useNavigate } from 'react-router-dom'

function SignIn(props) {
    const navigate = useNavigate();
    useEffect(() => {
        props.medusa.auth.getSession()
        .then(({ customer }) => {
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.medusa.auth.authenticate({
            email: e.target.email.value,
            password: e.target.password.value
        })
        .then(({ customer }) => {
                if(customer) {
                    navigate("/home");
                }
        });
    }

    return (
        <div className='w-screen flex flex-col items-center justify-center mt-4'>
            <div className='w-9/12'>
                <div className='flex justify-center'>
                    <img src={unsigned_welcome_page.store_img} alt='store logo' height={100} width={100} />
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-3xl font-bold font-header'>{unsigned_welcome_page.store_name}</h1>
                </div>
                <div className='flex justify-center text-justify'>
                    <p className='text-sm'>{unsigned_welcome_page.store_description}</p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-md'>{unsigned_welcome_page.store_welcome_message} Please SignIn to your { unsigned_welcome_page.store_name } account</p>
                </div>
            </div>
        <div class="w-9/12 flex items-center justify-center mt-3">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
            </label>
            <input autoComplete='off' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="john@example.com" />
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex w-full justify-center items-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
            </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default SignIn