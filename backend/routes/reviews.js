import express from 'express';
import { createReview } from '../controllers/reviewController.js';
import {verifyUser} from '../utils/verifyToken.js';

const reviewRoute = express.Router();

reviewRoute.post('/:tourId', createReview); 

export default reviewRoute;

