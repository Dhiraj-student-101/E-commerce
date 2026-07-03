import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

    const [list, setList] = useState([])

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')

            if (response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const removeProduct = async (id) => {
        try {

            const response = await axios.delete(
                backendUrl + '/api/product/remove',
                {
                    headers: { token },
                    data: { id }
                }
            )

            if (response.data.success) {
                toast.success(response.data.message)
                fetchList()
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <div className="w-full">

            <p className="mb-4 text-lg font-medium">
                All Products List
            </p>

            {/* Header */}
            <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-4 py-3 bg-gray-100 border-b border-gray-300 font-semibold">

                <p>Image</p>
                <p>Name</p>
                <p>Category</p>
                <p>Price</p>
                <p className="text-center">Action</p>

            </div>

            {/* Products */}

            {
                list.map((item, index) => (

                    <div
                        key={index}
                        className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition"
                    >

                        <img
                            src={item.image[0]}
                            alt=""
                            className="w-14 h-14 object-cover"
                        />

                        <p>{item.name}</p>

                        <p>{item.category}</p>

                        <p>{currency}{item.price}</p>

                        <button
                            onClick={() => removeProduct(item._id)}
                            className="text-red-500 text-xl font-bold hover:text-red-700"
                        >
                            ×
                        </button>

                    </div>

                ))
            }

        </div>
    )
}

export default List