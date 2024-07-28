import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//user regitration 
export const register = async(req,res)=>{
    // hashing password 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);

    try{
      const newUser = new User({
        firstname: req.body.firstname ,
        lastname: req.body.lastname,
        birthday : req.body.birthday,
        gender : req.body.gender,
        phone : req.body.phone,
        persontype: req.body.persontype,
        email: req.body.email,
        password: hash,
        photo:req.body.photo,
      })

      await newUser.save();
      res.status(200).json({success:true, message:'Créé avec succès'});
    }catch(err){
       res.status(500).json({success:false,message:"Échec de la création , réessayez"});
    }

};

// user login

export const login = async(req,res) => {
    const email = req.body.email;

    try{
      const user = await User.findOne({email});
      //if user doesn't exist 
      if(!user){
        return res.status(404).json({success:false,message:'Utilisateur non trouvé'});
      }

      //if user is existt then check the password or compare the password
      const checkCorrectPassword = await bcrypt.compare(req.body.password,user.password);

      //if password is incorrect 
      if(!checkCorrectPassword){
        return res.status(401).json({success:false,message:'email ou mot de passe incorrect'});     
     }
     const {password,role, ...rest} = user._doc;

     //create jwt token
     const token = jwt.sign(
        {id:user._id,role:user.role},
        process.env.JWT_SECRET_KEY ,
        {expiresIn:"15d"}
     );

     // set token in the browser cookies and send the response to the client
     res.cookie('accessToken',token,{
        httpOnly: true,
        expires: token.expiresIn
     }).status(200)
     .json({
         token,
         data :{...rest},
         role
      })

    }catch(err){
       res.status(500).json({success:false,message:'Échec de la connexion'});
    }
};