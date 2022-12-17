const errorHandler = (error,req,res,next) => {
    res.status(500).send({
    code:500,
    route:req.path,
    message: `Server Error 500: ${error}`
    })
}

module.exports = errorHandler;