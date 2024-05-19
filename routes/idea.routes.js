const idea_controller = require("../controllers/idea.controllers")
/**
 * Route for
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 */

module.exports = (app)=>{ //app is used to connect app to the route
     app.get("/ideaApp/api/v1/ideas",idea_controller.getAllIdeas) //when anyone hits this URI, it will be handed to the controller 
    //whenever anyone hits this URI, idea_controller.getAllIdeas will be return for this URI
    
    //GET  127.0.0.1:8000/ideaApp/api/v1/ideas/5
    app.get("/ideaApp/api/v1/ideas/:id",idea_controller.getIdeaBasedOnId)
    
    //POST  127.0.0.1:8000/ideaApp/api/v1/ideas
    app.post("/ideaApp/api/v1/ideas",idea_controller.createIdea)
    
    //PUT 127.0.0.1:8000/ideaApp/api/v1/ideas
    app.put("/ideaApp/api/v1/ideas/:id",idea_controller.updateIdea)
    
    //DELETE 127.0.0.1:8000/ideaApp/api/v1/ideas
    app.delete("/ideaApp/api/v1/ideas/:id",idea_controller.deleteIdea)
}   


