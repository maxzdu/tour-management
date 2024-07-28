import User from '../models/User.js';

// create new user 

export const createUser = async(req,res) =>{
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();

        res.status(200).json({success:true,message:'Créé avec succès',
         data:savedUser})
    }catch(err){
        res.status(500).json({success:false,message:'Échec de la création , réessayez'});
    }
}

// update user
export const updateUser = async(req,res) =>{
    const id = req.params.id;

    try{
      const updatedUser = await User.findByIdAndUpdate(id,{
        $set: req.body
      },{new:true});

      res.status(200).json({
        success :true,
        message: "Mise à jour réussie",
        data: updatedUser,
      });

    }catch(err){
      res.status(500).json({
        success:false ,
        message: "Échec de mise à jour",
      });
    }
};

// delete user
export const deleteUser = async(req,res) =>{
    const id = req.params.id;

    try{
      await User.findByIdAndDelete(id);

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

// getSingle user
export const getSingleUser = async(req,res) =>{
    const id = req.params.id;

    try{
      const user = await User.findById(id);

      res.status(200).json({
        success :true,
        message: "Trouvé avec succès",
        data: user,
      });

    }catch(err){
      res.status(404).json({
        success:false ,
        message: "Utilisateur non trouvé",
      });
    }
};

// getAll users
export const getAllUser = async(req,res) =>{
   
    try{
      const users = await User.find({});

      res.status(200).json({success:true,
        message:"Réussie",
        data: users
    })
    }catch(err){
      res.status(404).json({success:false,
        message: "liste vide"
    })
    }
};

