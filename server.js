import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import prodctRoutes from './routes/productRoutes.js'
import { connectDb } from './config/config.js'
const PORT = 8000;
connectDb();
app.use(bodyParser.json());
app.use('/api', prodctRoutes)
app.listen(PORT, (c) => {
    console.log('Server is listening at port: ', PORT)
});