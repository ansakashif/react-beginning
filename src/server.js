var express = require ('express');
var app = express();

const HEROES =[
    {id:1,name:"Sudivya"},
    {id:18,name:"Sudya"},
    {id:15,name:"Sivya"},
    {id:158,name:"vya"},
        
];
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers" ,"Origin,X-Reaquested-With");
    next();

});

app.get('api/heroes',function(req,res){
    res.json(HEROES);
});
app.listen(8081, function() {
    console.log('Server ready');
});