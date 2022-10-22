import React from 'react'
import { Link } from 'react-router-dom'

function Account(props) {
  const [customer, setCustomer] = React.useState({});
  const [newData, setNewData] = React.useState({});
  React.useEffect(() => {
        props.medusa.customers.retrieve()
.then(({ customer }) => {
    setCustomer(customer);
});
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.medusa.customers.update(newData)
      .then(({ customer }) => {
        setCustomer(customer);
        document.getElementsByTagName('input').map(x=>x.value='');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='font-header flex flex-col items-center justify-center'>
      <h1>Account</h1>
      <div className="input">
        First Name: <span  id="ft_name_dis">{customer?.first_name}</span>
        <input id="ft_name" type="text" defaultValue={customer?.first_name} style={{display:"none"}} onChange={
          (e) => {
            setNewData({...newData, first_name: e.target.value})
          }
        }  />
        <button type="button" onClick={(e) => {
          if (e.target.innerHTML === "🗙") {
            document.getElementById("ft_name").style.display="none";
            document.getElementById("ft_name_dis").style.display="inline";
            e.target.innerHTML = "✏️";
          } else {            
          document.getElementById("ft_name").style.display = "inline";
          document.getElementById("ft_name_dis").style.display = "none"
          e.target.innerHTML = "🗙"
          }
        }
        } class=" flex justify-center text-gray-900 bg-[blue-300] hover:bg-[blue-300]/90 focus:ring-4 focus:outline-none focus:ring-[blue-300]/50 font-medium rounded-lg text-sm p-1 pl-2 pr-2 text-center inline-flex items-center dark:focus:ring-[blue-300]/50">
          ✏️
        </button>
      </div>
      <p classNamwe="input">Last Name:
        <span id="lt_name_dis">{customer?.last_name}</span>
        <input id="lt_name" type="text" defaultValue={customer?.last_name} style={{display:"none"}} onChange={
          (e) => {
            setNewData({...newData, last_name: e.target.value})
          }
        }  />
        <button type="button" onClick={(e) => {
          if (e.target.innerHTML === "🗙") {
            document.getElementById("lt_name").style.display="none";
            document.getElementById("lt_name_dis").style.display="inline";
            e.target.innerHTML = "✏️";
          } else {            
          document.getElementById("lt_name").style.display = "inline";
          document.getElementById("lt_name_dis").style.display = "none"
          e.target.innerHTML = "🗙"
          }
        }
        } class=" flex justify-center text-gray-900 bg-[blue-300] hover:bg-[blue-300]/90 focus:ring-4 focus:outline-none focus:ring-[blue-300]/50 font-medium rounded-lg text-sm p-1 pl-2 pr-2 text-center inline-flex items-center dark:focus:ring-[blue-300]/50">
          ✏️
        </button>
      </p>
      <p classNamwe="input">email:
        <span id="email_dis">{customer?.email}</span>
        <input id="email" type="text" defaultValue={customer?.email} style={{display:"none"}} onChange={
          (e) => {
            setNewData({...newData, email: e.target.value})
          }
        }  />
        <button type="button" onClick={(e) => {
          if (e.target.innerHTML === "🗙") {
            document.getElementById("email").style.display="none";
            document.getElementById("email_dis").style.display="inline";
            e.target.innerHTML = "✏️";
          } else {            
          document.getElementById("email").style.display = "inline";
          document.getElementById("email_dis").style.display = "none"
          e.target.innerHTML = "🗙"
          }
        }
        } class=" flex justify-center text-gray-900 bg-[blue-300] hover:bg-[blue-300]/90 focus:ring-4 focus:outline-none focus:ring-[blue-300]/50 font-medium rounded-lg text-sm p-1 pl-2 pr-2 text-center inline-flex items-center dark:focus:ring-[blue-300]/50">
          ✏️
        </button>
      </p>
      <p className="input">
        phone: <span id='ph_dis'>{customer?.phone}</span>
        <input id="ph" type="text" defaultValue={customer?.phone} style={{display:"none"}} onChange={
          (e) => {
            setNewData({...newData, phone: e.target.value})
          }
        }  />
        <button type="button" onClick={(e) => {
          if (e.target.innerHTML === "🗙") {
            document.getElementById("ph").style.display="none";
            document.getElementById("ph_dis").style.display="inline";
            e.target.innerHTML = "✏️";
          } else {            
          document.getElementById("ph").style.display = "inline";
          document.getElementById("ph_dis").style.display = "none"
          e.target.innerHTML = "🗙"
          }
        }
        } class=" flex justify-center text-gray-900 bg-[blue-300] hover:bg-[blue-300]/90 focus:ring-4 focus:outline-none focus:ring-[blue-300]/50 font-medium rounded-lg text-sm p-1 pl-2 pr-2 text-center inline-flex items-center dark:focus:ring-[blue-300]/50">
          ✏️
        </button>
      </p>
      <div>
        <details>
          <summary>Billing Address:</summary>
          <p>Company: <span>{customer?.billing_address?.company}</span></p>
          <p>First Name: <span>{customer?.billing_address?.first_name}</span></p>
          <p>Last Name: <span>{customer?.billing_address?.last_name}</span></p>
          <p>Address 1: <span>{customer?.billing_address?.address_1}</span></p>
          <p>Address 2: <span>{customer?.billing_address?.address_2}</span></p>
          <p>City: <span>{customer?.billing_address?.city}</span></p>
          <p>Country Code: <span>{customer?.billing_address?.country_code}</span></p>
          <p>Province: <span>{customer?.billing_address?.province}</span></p>
          <p>Postal Code: <span>{customer?.billing_address?.postal_code}</span></p>
          <p>Phone: <span>{customer?.billing_address?.phone}</span></p>
        </details>
      </div>
      <div>
        <details>
          <summary>Shipping Address:</summary>
          <p>Company: <span>{customer?.shipping_address?.company}</span></p>
          <p>First Name: <span>{customer?.shipping_address?.first_name}</span></p>
          <p>Last Name: <span>{customer?.shipping_address?.last_name}</span></p>
          <p>Address 1: <span>{customer?.shipping_address?.address_1}</span></p>
          <p>Address 2: <span>{customer?.shipping_address?.address_2}</span></p>
          <p>City: <span>{customer?.shipping_address?.city}</span></p>
          <p>Country Code: <span>{customer?.shipping_address?.country_code}</span></p>
          <p>Province: <span>{customer?.shipping_address?.province}</span></p>
          <p>Postal Code: <span>{customer?.shipping_address?.postal_code}</span></p>
          <p>Phone: <span>{customer?.shipping_address?.phone}</span></p>
        </details>
      </div>

      <div>
        <button type="button" onClick={handleSubmit} class="w-full flex justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
            Submit
        </button>
      <Link to="/index.html">
        <button type="button" class="w-full flex justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
          ⬅ Back
        </button>
      </Link>
      </div>
    </div>
    
  )
}

export default Account