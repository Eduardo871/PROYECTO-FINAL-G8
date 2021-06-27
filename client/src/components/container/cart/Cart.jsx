import React, { useState } from 'react'
import { getGuestCart, removeFromGuestCart } from '../../../redux/action/cart'




export const Cart = () => {

  const carrito = getGuestCart()
  const [cart, setCart] = useState(carrito)

  const deleteItem = (item) => {
    removeFromGuestCart(item)
    setCart(getGuestCart())
  }

  return (
    <div class="bg-gray-200 h-full md:h-screen">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">

          {
            cart.items.map(item => {
              return <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                <div class="flex justify-between px-4 items-center">
                  <div class="text-lg font-semibold">
                    <p>{item.name}</p>
                    <p class="text-gray-400 text-base"> {item.price} </p>
                  </div>
                  <div class="text-lg font-semibold transform rotate-45">
                    <button class="focus:outline-none bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-full inline-flex items-center "
                      onClick={() => deleteItem(item)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            })
          }

        </div>
        <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          {/* <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4"> */}
          {/* <!-- classic add --> */}
          {/* <div class="flex justify-between border-b-2 mb-2">
              <div class="text-lg py-2">
                <p>Total amount</p>
              </div>
              <div class="text-lg py-2">
                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button class="focus:outline-none bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  </button>
                  <p> 0 </p>
                  <button class="focus:outline-none bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div> */}
          {/* <!-- End classic add --> */}


          {/* <!-- Total Item --> */}
          {/* <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p>Total Item</p>
                <p class="text-5xl">0</p>
              </div>
            </div> */}
          {/* <!-- End Total Item --> */}

          {/* </div> */}
          <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
            {/* <!-- Total Price --> */}
            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p>Total Price</p>
                <p class="text-5xl">${cart.totalAmount}</p>
              </div>
            </div>
            {/* <!-- End Total PRice --> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;