import Subscribe from '../models/Subscribe.js';


export const createSubscribe = async (req,res) =>{
 
    const newSubscribe = new Subscribe(req.body);
    
    try{
      const saveSubscribe = await newSubscribe.save();
      res.status(200).json({success:true , message:'abonnez-vous avec succès',
      data:saveSubscribe});
    }catch(err){
      res.status(500).json({success:false,message:'Échec de la création , réessayez'});
    }
}

export const getSubscriber = async (req,res)=>{
   const id = req.params.id;

   try{
     const subscriber = await Subscribe.findById(id);
     res.status(200).json({success:true,message:'réussi',data:subscriber})
   }catch(err){
     res.status(404).json({success:false,message:'Abonné introuvable'});
   }

}

export const getAllSubucribers = async (req,res)=>{
    
    try{
      const subscribers = await Subscribe.find();
      res.status(200).json({success: true, message:'réussi',data:subscribers}); 
    }catch(err){
      res.status(404).json({success: false, message:'list vide'});
    }
}