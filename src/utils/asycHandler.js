const asynHancler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err))
    }
}



export { asynHancler }


//const asynHancler = () => { }
//const asynHancler = (func) => { }
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