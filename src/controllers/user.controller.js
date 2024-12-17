import { asynHancler } from "../utils/asycHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js"


const registerUser = asynHancler(async (req, res) => {
    const { username, fullName, email, password } = req.body
    console.log(`username`, username)

    if (fullName === "") {
        throw new ApiError(400, "Full name is required")
    }
    if ([username, fullName, email, password].some((filed) => filed?.trim() === "")) {
        throw new ApiError(400, "All  field are  required")
    }
    //$or used as operator to find multiple field 
    const existingUser = await User.findOne({ $or: [{ username }, { email }] })

    if (existingUser) {
        throw new ApiError(409, "User already exist with userEmail & userName")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "avatar file is required")
    }

    //upload 
    const avatar = await uploadOnCloudinary(avatarLocalPath);

    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, "avatar file is required")
    }

    //update on DB 

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Register Successfullly")
    )
})

export { registerUser }
