import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});

const uploadOnCloudinary = async ( filePath ) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        if ( fs.existsSync(filePath) ) {
            fs.unlinkSync(filePath);
        }
        return result.url;
    } catch ( error ) {
        console.error("Error uploading to Cloudinary:", error);
        if ( fs.existsSync(filePath) ) {
            fs.unlinkSync(filePath);
        }
    }
};    

const deleteFromCloudinary = async ( filePath ) => {
    try { 
        const result = await cloudinary.uploader.destroy(filePath);
        return result;
    } catch ( error ) {
        console.log("can not delete from cloudinary",error,error.message);
    }
};

return { uploadOnCloudinary , deleteFromCloudinary };
