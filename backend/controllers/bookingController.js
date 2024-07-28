import Booking from '../models/Booking.js';

// create new booking 
export const createBooking = async(req,res) =>{
    const newBooking = new Booking(req.body);
   try{
    const savedBooking = await newBooking.save();
    res.status(200).json({success:true,message:'Votre visite est réservée',
     data: savedBooking});

   }catch(err){
     res.status(500).json({success:false,message:'Erreur interne du serveur'});
   }  

}

//get a single booking
export const getBooking = async(req,res) => {
    const id = req.params.id;
    try{
        const book = await Booking.findById(id);
        
        res.status(200).json({
          success: true,
          message: "réussi",
          data:book  
        })
    }catch(err){
       res.status(404).json({success:true, message: "pas trouvé"});
    }
};

//get all booking
export const getAllBooking = async(req,res) => {
   
    try{
        const books = await Booking.find();
        
        res.status(200).json({
          success: true,
          message: "réussi",
          data:books  
        })
    }catch(err){
       res.status(404).json({success:true, message: "Erreur interne du serveur"});
    }
};