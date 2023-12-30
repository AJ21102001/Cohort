const express = require('express');
const app = express();

var users = [{
    firstName : "Ankit",
    kidneys : [{
        healthy: false
    },{
        healthy: true
    }]
}];

app.use(express.json());

//req, res --> request and response

//Query Parameter
app.get("/", function(req, res){
    const ankitKidneys = users[0].kidneys;
    const numofKidneys = ankitKidneys.length;
    let numofHealthyKidneys = 0;
    for(let i = 0 ; i < numofKidneys ; i++){
        if(ankitKidneys[i]["healthy"] == true){
            numofHealthyKidneys++;
        }
    }
    const numofUnHealthyKidneys = numofKidneys - numofHealthyKidneys;
    const firstNameOfPatient = users[0].firstName;
    res.json({
        firstNameOfPatient,
        numofKidneys,
        numofHealthyKidneys,
        numofUnHealthyKidneys,
    });
});

//In Body Post
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });
    res.json({
        msg: "Done!"
    });
});

app.put("/", function(req, res){
    for(let i = 0 ; i < users[0].kidneys.length ; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Restart!!"
    });
});

app.delete("/", function(req, res){
    if(isThereAtleastOneBadKidney()){
        const newKidneys = [];
        for(let i = 0 ; i < users[0].kidneys.length ; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push(users[0].kidneys[i].healthy);
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Deleted!!"
        });
    }else{
        res.status(411).json({
            msg: "No Bad Kidney to Delete"
        });
    }
});

function isThereAtleastOneBadKidney(){
    let isThereAtleastOneBadKidney = false;
    for(let i = 0 ; i < users[0].kidneys.length ; i++){
        if(users[0].kidneys.healthy == false){
            isThereAtleastOneBadKidney = true;
        }
    }
    return isThereAtleastOneBadKidney;
}

app.listen(3000);



