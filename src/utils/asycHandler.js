
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err))// next(err) is a function that calls the next middleware in the stack with the error as an
    }
}



const test = (fn) => {
    (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err))
    }
}
export { asyncHandler }

const asynHancler = (fun) => async ({ req, res, next }) => {
    try {
        await fun(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            meassge: error.meassge
        })
    }
}
//const asynHancler = () => { }
// { }
//const asynHancler = (fun) => { () => { } } // pass func to other func , remove {} , now if its async then add asycn
//Higer order function who can accept all type of paramters 

/*
const asynHancler = (fun) => async ({ req, res, next }) => {

    try {
        await fun(req, res, next )
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            meassge: error.meassge
        })
    }
}
*/