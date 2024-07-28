import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

  {
    firstname: {
      type: String,
      required: true,
    },
    lastname:{
      type: String ,
      required: true
    },
    birthday:{
      type: Date,
    },   
    gender:{
      type: String
    },
    phone:{
     type: String,
    },
    persontype:{
      type:String
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
