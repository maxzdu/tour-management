import express from 'express';
import {verifyUser} from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';

const bookingRoute = express.Router();

bookingRoute.post('/', createBooking); 
bookingRoute.get('/:id', verifyUser ,getBooking);
bookingRoute.get('/', verifyUser ,getAllBooking);

export default bookingRoute;

