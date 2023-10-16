import { Router } from 'express';
import productRouter from './products.js'
import cartRouter from './carts.js'

const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.use('/api/products', productRouter)
router.use('/api/carts', cartRouter)

export default router;