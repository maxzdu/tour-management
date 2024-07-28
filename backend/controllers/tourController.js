import Tour from '../models/Tour.js';

// create new tour 

export const createTour = async(req,res) =>{
    const newTour = new Tour(req.body);
    try{
        const savedTour = await newTour.save();

        res.status(200).json({success:true,message:'Créé avec succès',
         data:savedTour})
    }catch(err){
        res.status(500).json({success:false,message:'Échec de la création , réessayez'});
    }
}

// update tour
export const updateTour = async(req,res) =>{
    const id = req.params.id;

    try{
      const updatedTour = await Tour.findByIdAndUpdate(id,{
        $set: req.body
      },{new:true});

      res.status(200).json({
        success :true,
        message: "Mise à jour réussie",
        data: updatedTour,
      });

    }catch(err){
      res.status(500).json({
        success:false ,
        message: "Échec de mise à jour",
      });
    }
};

// delete tour
export const deleteTour = async(req,res) =>{
    const id = req.params.id;

    try{
      await Tour.findByIdAndDelete(id);

      res.status(200).json({
        success :true,
        message: "Supprimé avec succès",
      });

    }catch(err){
      res.status(500).json({
        success:false ,
        message: "impossible de supprimer",
      });
    }
};

// getSingle tour
export const getSingleTour = async(req,res) =>{
    const id = req.params.id;

    try{
      const tour = await Tour.findById(id).populate("reviews");

      res.status(200).json({
        success :true,
        message: "Trouvé avec succès",
        data: tour,
      });

    }catch(err){
      res.status(404).json({
        success:false ,
        message: "Voyage introuvable",
      });
    }
};

// getAll tours
export const getAllTour = async(req,res) =>{
    // for pagination 
    const page = parseInt(req.query.page);
    try{
      const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8).
      limit(8);

      res.status(200).json({success:true,
        count: tours.length,
        message:"Réussie",
        data: tours
    })
    }catch(err){
      res.status(404).json({success:false,
        message: "liste vide"
    })
    }
};

// get tour by search 

export const getTourBySearch = async(req,res) =>{

    const city = RegExp(req.query.city,'i');
    const tourStart =new Date(String(req.query.tourStart));
    const tourEnd =new Date(String(req.query.tourEnd));
    const maxGroupSize = parseInt(req.query.maxGroupSize);
 
    try{
      // gte means greater than equal 
      const tours = await Tour.find({city,
      maxGroupSize:{$gte:maxGroupSize}
     }).populate("reviews");
     
     const timeFilteredTours = tours.map((tour)=>{
      if(tour.tourStart <= tourStart && tour.tourEnd >= tourEnd) return tour;
     }) 

     
    
     res.status(200).json({
        success: true,
        message: "Réussie",
        data:timeFilteredTours
     })
    }catch(err){
        res.status(404).json({
            success:'false',
            message:"pas trouvé",
        });
    }

}

// get featured tour
export const getFeaturedTour = async(req,res) =>{
  
    try{
      const tours = await Tour.find({featured:true})
      .populate("reviews")
      .limit(8);

      res.status(200).json({success:true,
        message:"Réussie",
        data: tours
    })
    }catch(err){
      res.status(404).json({success:false,
        message: "liste vide"
    })
    }
};

// get tour counts 

export const getTourCount = async(req,res) => {
    try{
      const totalCount = await Tour.estimatedDocumentCount();
      res.status(200).json({success:true , data:totalCount});
    }catch(err){
       res.status(500).json({success:false, message:"n'a pas réussi à récupérer"});
    }
}