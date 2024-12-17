import { asynHancler } from "../utils/asycHandler.js";

const registerUser = asynHancler(async (req, res) => {
    return res.status(200).json({
        message: "ok"
    })
})

export { registerUser }
