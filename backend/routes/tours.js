import express, { Router } from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const tourRoute = express.Router();

// create new tour
tourRoute.post("/",createTour);

// update tour
tourRoute.put("/:id",verifyAdmin,updateTour);

//delete tour
tourRoute.delete("/:id",verifyAdmin,deleteTour);

//get single tour 
tourRoute.get("/:id",getSingleTour);

//get all tours
tourRoute.get("/",getAllTour);

// get tour bySearch 
tourRoute.get("/search/getTourBySearch",getTourBySearch);

// get Featured tours
tourRoute.get("/search/getFeaturedTours",getFeaturedTour);

//get Tour count 
tourRoute.get("/search/getTourCount",getTourCount);

export default tourRoute;