import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload file in cloudinary
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",// auto, image, raw, video, raw_video
        });
        //file has been uploaded successfully
        console.log(`file has been uploaded successfully ${result.url}`);
        return result;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove file from local storage as the uploaded operation failed
        return null;
    }
}



export { uploadOnCloudinary }
