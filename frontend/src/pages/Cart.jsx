import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, getCartAmount, delivery_fee, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    return (
        <div className='border-t pt-14'>

            <div className='text-2xl mb-3'>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>

            <div>
                {cartData.map((item, index) => {
                    const productData = products.find((product) => product._id === item._id);
                    return (
                        <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>

                            <div className='flex items-start gap-6'>
                                <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                                <div>
                                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                    <div className='flex items-center gap-5 mt-2'>
                                        <p>{currency}{productData.price}</p>
                                        {item.size && <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)} className='w-6 h-6 border flex items-center justify-center cursor-pointer text-lg'>-</button>
                                <input
                                    className='border w-10 sm:w-16 px-1 sm:px-2 py-1 text-center'
                                    type="number"
                                    min={1}
                                    value={item.quantity}
                                    readOnly
                                />
                                <button onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)} className='w-6 h-6 border flex items-center justify-center cursor-pointer text-lg'>+</button>
                            </div>

                            <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="delete" />

                        </div>
                    )
                })}
            </div>

            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <div className='text-2xl'>
                        <Title text1={'CART'} text2={'TOTALS'} />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 text-sm'>
                        <div className='flex justify-between'>
                            <p>Subtotal</p>
                            <p>{currency}{getCartAmount()}.00</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p>Shipping Fee</p>
                            <p>{currency}{delivery_fee}.00</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='font-bold'>Total</p>
                            <p className='font-bold'>{currency}{getCartAmount() + delivery_fee}.00</p>
                        </div>
                    </div>

                    <div className='w-full text-end'>
                        <button
                            onClick={() => navigate('/placeorder')}
                            className='bg-black text-white text-sm my-8 px-8 py-3'
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cart