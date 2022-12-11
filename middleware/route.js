const routeErr = (req, res, next) => {
    res.send("404 page not find");
    res.end();
} 

module.exports = routeErr