import express from 'express';
import userRoutes from './user.routes'
import productsRoutes from './products.routes'
import cartRoutes from './cart.routes'
import wishlistRoutes from './wishlist.routes'
import addressRoutes from './address.routes'
import couponsRoutes from './coupons.routes'
import reviewsRoutes from './reviews.routes'
import ordersRoutes from './orders.routes'

const router = express.Router();

// Montaje de todas las rutas
router.use('/api/users', userRoutes)
router.use('/api/products', productsRoutes)
router.use('/api/cart', cartRoutes)
router.use('/api/wishlist', wishlistRoutes)
router.use('/api/address', addressRoutes)
router.use('/api/coupons', couponsRoutes)
router.use('/api/reviews', reviewsRoutes)
router.use('/api/orders', ordersRoutes)

export default router;