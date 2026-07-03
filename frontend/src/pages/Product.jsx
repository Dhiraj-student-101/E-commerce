import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from "../components/RelatedProducts"

const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState(productData?.sizes?.[0] || '');
    const [activeTab, setActiveTab] = useState('description');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                src={item}
                                key={index}
                                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                                alt=""
                            />
                        ))}
                    </div>

                    <div className='w-full sm:w-[80%]'>
                        <img src={image} className='w-full h-auto' alt="" />
                    </div>
                </div>

                <div className='flex-1'>

                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_dull_icon} alt="" className='w-3.5' />
                        <p className='pl-2'>(122)</p>
                    </div>

                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

                    <div className='flex flex-col gap-4 my-8'>
                        <p className='font-medium'>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
<button
    onClick={() => {
        addToCart(productData._id, size);
        navigate('/cart');
    }}
    className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
>
    ADD TO CART
</button>

                    <hr className='mt-8 sm:w-4/5' />

                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>

                </div>
            </div>

            <div className='mt-20'>
                <div className='flex'>
                    <p onClick={() => setActiveTab('description')} className={`border px-5 py-3 text-sm cursor-pointer ${activeTab === 'description' ? 'font-bold' : 'font-normal'}`}>Description</p>
                    <p onClick={() => setActiveTab('reviews')} className={`border px-5 py-3 text-sm cursor-pointer ${activeTab === 'reviews' ? 'font-bold' : 'font-normal'}`}>Reviews (122)</p>
                </div>

                <div className='border px-6 py-6 text-sm text-gray-500'>
                    {activeTab === 'description' ? (
                        <div className='flex flex-col gap-4'>
                            <p>{productData.description}</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-3'>
                                <img src={assets.star_icon} className='w-3.5' alt="" />
                                <img src={assets.star_icon} className='w-3.5' alt="" />
                                <img src={assets.star_icon} className='w-3.5' alt="" />
                                <img src={assets.star_icon} className='w-3.5' alt="" />
                                <img src={assets.star_dull_icon} className='w-3.5' alt="" />
                                <p className='text-gray-700 font-medium'>4.0 out of 5</p>
                            </div>
                            <p>Great product! Very comfortable and stylish. Highly recommended.</p>
                            <p>Good quality fabric, fits perfectly. Will buy again!</p>
                        </div>
                    )}
                </div>
            </div>

            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

        </div>
    ) : <div className='opacity-0'></div>
}

export default Product