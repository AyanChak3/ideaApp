/**
 * Write the logic to create the controllers for the idea resources
 */
const ideas = require("../models/ideas.model")
let id = 3 //initial count of the id
/**
 * Create the controller for fetching all the ideas
 *
 * GET 127.0.0.1:8080/ideaApp/api/v1/ideas
 * it should return list of all the ideas
 */

exports.getAllIdeas = (req,res)=>{ //function name is getAllIdeas and exports.getAllIdeas means it is available eveerywhere
    //Logic to fetch all the Ideas
    //1) Read all the ideas from the idea model file
    //2) Return all those ideas
    res.status(200).send(ideas);//status(200) - 200 is HTTP status code. It means found and it will then send all the ideas.
}

/**
 * Controller which fetches idea based on the id
 */
exports.getIdeaBasedOnId = (req,res)=>{
    //First read the idea from the request path param
    //Using id, check if the id is present or not
    //If present,return the id
    idea_id = req.params.id;
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }else{
        res.status(404).send({
            message : "Idea with the given idea_id is not found"
        })
    }
    //If preset return the id
}

/**
 * Controller to create a new idea
 */
exports.createIdea = (req,res)=>{
    //Read the request body then add the new object provided in the ideas object
    //id should not be passed by the customer, it should be auto incremented
    idea_object = req.body
    id++
    idea_object["id"] = id //setiing the id in the newly creeated idea object
    ideas[id] = idea_object //adding the object with new id 4 and then id will be incremented automatically everytime we add a new object
    
    //Then return the response
    res.status(201).send(idea_object)
}

/**
 * Controller to update an existing idea
 */
exports.updateIdea = (req,res)=>{
    //Read the idea_id
    idea_id = req.params.id
    
    //Check if that idea_id is present
    //Read the new idea body and replace it
    //Return the updated idea
    if(ideas[idea_id]){
        idea_obj = req.body
        ideas[idea_id] = idea_obj
        res.status(200).send(idea_obj)
    }else{
        return res.status(404).send({
            message : "Idea id you want to update doesn't exist"
        })
    }
}

exports.deleteIdea = (req,res)=>{
    //Fetch the idea and see if it's present
    //Delete if it is present
    idea_id = req.params.id
    
    if(ideas[idea_id]){
        delete ideas[idea_id]
        res.status(200).send({
            message : "Your idea has been successfully been deleted"
        })
    }else{
        return res.status(404).send({
            message : "Idea id you wanted to delete is not present"
        })
    }

}
