const error =((error, req, res, next) => {
    if(error) {
        res.send("Something went with the server");
    } else {
        next() 
    }
})

module.exports = error;