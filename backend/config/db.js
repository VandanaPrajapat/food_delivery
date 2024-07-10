import  mongoose from "mongoose";
export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://vandanaprajapati2401:Zbkosix8ZloV1xTD@cluster0.vqpeyoh.mongodb.net/food-delivery-project').then(()=>console.log("Database connect"));
}

//mongodb+srv://Vandana:vandana_123@cluster0.ooe1u4r.mongodb.net
//mongodb+srv://Vandana:<password>@cluster0.ooe1u4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//user name: vandanaprajapati2401
// password: Zbkosix8ZloV1xTD
// connection link: mongodb+srv://vandanaprajapati2401:Zbkosix8ZloV1xTD@cluster0.vqpeyoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0