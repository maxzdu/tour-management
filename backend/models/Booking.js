import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String
    },
    tourName:{
      type:String,
      required: true
    },
    fullName: {
      type: String,
      required : true
    },
    guestSize:{
        type:Number,
        required:true
    },
    bookStart:{
        type:Date,
        required:true
    },
    bookEnd:{
       type: Date ,
       required :true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
