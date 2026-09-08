// // import 'dotenv/config'
// // import express from 'express'
// // import cors from 'cors'
// // import connectDB from './config/mongodb.js'
// // import connectCloudinary from './config/cloudinary.js'
// // import userRouter from './routes/userRoute.js'
// // import productRouter from './routes/productRoute.js'
// // import cartRouter from './routes/cartRoute.js'
// // import orderRouter from './routes/orderRoute.js'

// // const app = express()
// // const port = process.env.PORT || 4000
// // console.log("MONGODB_URI =", process.env.MONGODB_URI);
// // connectDB()
// // connectCloudinary()

// // app.use(express.json())
// // app.use(cors())

// // app.use('/api/user', userRouter)
// // app.use('/api/product', productRouter)
// // app.use('/api/cart', cartRouter)
// // app.use('/api/order', orderRouter)

// // app.get('/', (req, res) => {
// //     res.send('API Working')
// // })

// // app.listen(port, () => {
// //     console.log('Server started on PORT: ' + port)

// // })

// import 'dotenv/config'

// import express from 'express'
// import cors from 'cors'
// import connectDB from './Config/mongodb.js'
// import connectCloudinary from './Config/cloudinary.js'
// import userRouter from './routes/userRoute.js'
// import productRouter from './routes/productRoute.js'
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from './routes/orderRoute.js'

// const app = express()
// const port = process.env.PORT || 4000
// console.log("MONGODB_URI =", process.env.MONGODB_URI);

// connectDB()
// connectCloudinary()
// app.use(express.json())
// app.use(cors())

// app.use('/api/user', userRouter)
// app.use('/api/product', productRouter)
// app.use('/api/cart', cartRouter)
// app.use('/api/order', orderRouter)

// app.get('/', (req, res) => {
//     res.send('API Working')
// })

// app.listen(port, () => {
//     console.log('Server started on PORT: ' + port)
// })

// export default app


import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './Config/mongodb.js'
import connectCloudinary from './Config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const port = process.env.PORT || 4000

// Initialize Cloudinary
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())

// Middleware to ensure DB is connected before handling any API request
app.use(async (req, res, next) => {
    try {
        await connectDB()
        next()
    } catch (error) {
        res.status(500).json({ success: false, message: "Database connection failed" })
    }
})

// API Routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send('API Working')
})

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log('Server started on PORT: ' + port)
    })
}

export default app