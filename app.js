 var express = require("express"); 
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

//ASSIGMENT

// app.get("/", function(req, res){
//     res.send("Hi ther, welcome to my assignment");
// });

// app.get("/speak/:animal", function(req, res){
//     var sounds = {
//         pig: "oink",
//         cow: "Moo",
//         dog: "Woof Woof!!",
//         cat: "Meow",
//         fish: "Issh"
//     }
//     var animal = req.params.animal.toLowerCase();
//     var sound = sounds[animal];
//     // var sound = "";
//     // if (animal === "pig"){
//     //     sound = "oink";
//     // } else if(animal === "cow"){
//     //     sound = "moo";
//     // }
//     res.send("The " + animal  + " says '" + sound + "'"); 
// });

// app.get("/repeat/:message/:times", function(req, res){
//     var message = req.params.message;
//     var times = Number(req.params.times);
//     var result = "";

//     for(var i = 0; i < times; i++){
//         result += message + " ";
//     }
//     res.send(result);
    
// });

// app.get("*", function(req, res){
//     res.send("Sorry, page not found... What are you doing with your life?");
// });


// // "/" => "Hi there!"
// app.get("/", function(req, res){
//     res.send("Hi There!");
// });
// // "/bye" => "Goodbye"
// app.get("/bye", function(req, res){
//     res.send("Goobye!!!");
// });

// //"/dog" => "Meow"
// app.get("/dog", function(req, res){
//     res.send("Meow");
// });

// app.get("/r/:subredditName", function(req, res){
//     var subreddit = req.params.subredditName;
//     res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBRREDDIT!!");
// });

// app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
//     res.send("WELCOME TO THE COMMENT PAGE");
// });

// app.get("*", function(req, res){
//     res.send("YOU ARE A STAR !!!");
// });

//Tell Express to listen for request(start server)

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server has started!!");
// });


//WORKING WITH EJS------------> 1:17

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fall/:thing", function(req, res){
var thing = req.params.thing;
res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "post 1", author: "Susy"},
        {title: "My pet", author: "Charlie"},
        {title: "Can you believe ", author: "COlt"},
    ];
    res.render("posts", {posts: posts});
});
 
app.listen(3000, ()=>{console.log("running")});