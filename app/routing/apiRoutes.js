

//  ROUTING

module.exports = function (app) {
    // this section handles the GET requests

    app.get("/api/classes", function(req, res) {
        res.json(classArray);
        console.log(classArray);

    });
    app.post("/api/classes", function(req,res){
        console.log("routing test post, apiRoutes.js");
    })
}