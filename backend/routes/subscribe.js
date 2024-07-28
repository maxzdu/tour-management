import express from 'express';
import {createSubscribe,getSubscriber,getAllSubucribers} from '../controllers/SubscribeController.js';

const subscribeRoute = express.Router();

subscribeRoute.post('/',createSubscribe);
subscribeRoute.get('/:id',getSubscriber);
subscribeRoute.get('/',getAllSubucribers);

export default subscribeRoute;
